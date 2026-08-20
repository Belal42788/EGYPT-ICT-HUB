#!/usr/bin/env python3
"""
Extract English educational content from EGYPT-ICT-HUB lesson HTML files.

Rules (per user request):
- Extract ONLY data-en attribute values (and English text nodes when no data-en).
- Ignore all Arabic content.
- Ignore UI: nav, header/hero, footer, buttons, inputs, language switcher, etc.
- Do NOT translate, rewrite, or modify anything.
- Do NOT modify existing files; only CREATE extracted_en.md per lesson folder.

Output: <lesson-folder>/extracted_en.md
Markdown:
  # Lesson Title
  ## Section Name
  ### Explanation / content (in document order)
  ### Glossary (term list)
  ### Questions (Q/A blocks)

Pure standard library (html.parser). No external deps.
"""
import os
import re
import sys
from html.parser import HTMLParser

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------
AR_RE = re.compile(
    r'[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]'
)


def has_arabic(s):
    return bool(AR_RE.search(s or ''))


def clean_en(v):
    """Take the English side of a data-en value (strip trailing Arabic)."""
    if not v:
        return ''
    v = v.strip()
    for sep in (' \u2014 ', ' | ', ' \u2013 '):
        if sep in v:
            left, right = v.split(sep, 1)
            if has_arabic(right):
                v = left.strip()
    return v.strip()


def node_classes(node):
    c = node.attrs.get('class', '')
    return set(c.split()) if c else set()


def node_id(node):
    return node.attrs.get('id', '')


# Tags / classes that are pure UI chrome -> skip entirely
SKIP_TAGS = {'script', 'style', 'nav', 'header', 'footer', 'button',
             'input', 'svg', 'img', 'br', 'meta', 'link'}
SKIP_CLASS = {
    # Pure UI chrome only - NOT content containers.
    'top-nav', 'nav-links', 'nav-logo', 'hero', 'hero-blob', 'hero-title',
    'hero-subtitle', 'hero-btn', 'footer', 'footer-logo', 'lang-toggle',
    'section-number', 'mini-btn', 'gl-filter', 'glossary-search',
    'stage-pill', 'pyramid', 'pyramid-svg', 'demo-panel', 'bg-animation',
    'particle', 'q-num', 'rq-key', 'mcq-letter', 'mcq-num', 'mg-tag',
    'fb-correct', 'fb-wrong', 'quiz-feedback', 'rq-fb', 'gradient-text',
    'def-icon', 'nav-logo',
}


# ---------------------------------------------------------------------------
# Minimal DOM
# ---------------------------------------------------------------------------
class Node:
    def __init__(self, tag, attrs):
        self.tag = tag.lower()
        self.attrs = dict((k.lower(), v) for k, v in attrs)
        self.children = []          # mixed Node and str (text)
        self.parent = None

    def get(self, k, default=None):
        return self.attrs.get(k, default)

    def all_text(self):
        parts = []
        if isinstance(self.children, list):
            for c in self.children:
                if isinstance(c, Node):
                    parts.append(c.all_text())
                else:
                    parts.append(str(c))
        return ''.join(parts).strip()

    def subtree_has_data_en(self):
        if 'data-en' in self.attrs:
            return True
        for c in self.children:
            if isinstance(c, Node) and c.subtree_has_data_en():
                return True
        return False

    # ---- descendant search ----
    def find_desc(self, pred, exclude_self=False):
        if not exclude_self and pred(self):
            return self
        for c in self.children:
            if isinstance(c, Node):
                r = c.find_desc(pred)
                if r:
                    return r
        return None

    def find_all_desc(self, pred):
        out = []
        if pred(self):
            out.append(self)
        for c in self.children:
            if isinstance(c, Node):
                out.extend(c.find_all_desc(pred))
        return out


class DOMBuilder(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node('#root', [])
        self.stack = [self.root]

    def handle_starttag(self, tag, attrs):
        n = Node(tag, attrs)
        n.parent = self.stack[-1]
        self.stack[-1].children.append(n)
        self.stack.append(n)

    def handle_startendtag(self, tag, attrs):
        n = Node(tag, attrs)
        n.parent = self.stack[-1]
        self.stack[-1].children.append(n)

    def handle_endtag(self, tag):
        # pop until matching tag
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag.lower():
                del self.stack[i:]
                return

    def handle_data(self, data):
        self.stack[-1].children.append(data)


# ---------------------------------------------------------------------------
# Quiz parsing
# ---------------------------------------------------------------------------
def is_option(node):
    cl = node_classes(node)
    return bool(cl & {'quiz-opt', 'mcq-opt', 'rq-opt'})


def is_quiz_q(node):
    cl = node_classes(node)
    if 'quiz-q' in cl or 'mcq-q' in cl:
        return True
    # recall question container: class 'rq' exactly (not rq-q/rq-opts/...)
    if 'rq' in cl and not (cl & {'rq-q', 'rq-opts', 'rq-opt', 'rq-fb'}):
        return True
    return False


def parse_quiz(node):
    cl = node_classes(node)
    opts = []
    # options
    for o in node.find_all_desc(is_option):
        ocl = node_classes(o)
        letter = o.get('data-opt') or o.get('data-key') or ''
        if 'rq-opt' in ocl:
            body = o.find_desc(lambda n: 'rq-body' in node_classes(n))
            text = body.get('data-en') if body else ''
            ok = o.get('data-ok') == '1'
        else:
            text = o.get('data-en')
            if not text:
                span = o.find_desc(lambda n: n.get('data-en'))
                text = span.get('data-en') if span else ''
            ok = False
        opts.append((letter, clean_en(text), ok))

    # question text: first data-en that is NOT an option
    q_el = node.find_desc(
        lambda n: n.get('data-en') and not is_option(n)
    )
    qtext = clean_en(q_el.get('data-en')) if q_el else ''

    # answer
    answer = node.get('data-answer') or ''
    if not answer:
        for o in node.find_all_desc(is_option):
            if o.get('data-ok') == '1':
                answer = o.get('data-key') or ''
                break

    # explanation
    expl = ''
    fb = node.find_desc(lambda n: 'fb-correct' in node_classes(n))
    if fb and fb.get('data-en'):
        expl = clean_en(fb.get('data-en'))
    else:
        mcqe = node.find_desc(lambda n: 'mcq-explanation' in node_classes(n))
        if mcqe and mcqe.get('data-en'):
            expl = clean_en(mcqe.get('data-en'))
    if not expl:
        for o in node.find_all_desc(is_option):
            if o.get('data-ok') == '1' and o.get('data-fb-en'):
                expl = clean_en(o.get('data-fb-en'))
                break

    return {
        'q': qtext,
        'opts': [(l, t) for l, t, _ in opts],
        'answer': answer,
        'expl': expl,
    }


def format_quiz(q):
    if not q['q']:
        return ''
    lines = [f"Q: {q['q']}", "Options:"]
    for letter, text in q['opts']:
        lines.append(f"{letter}. {text}")
    lines.append(f"Correct Answer: {q['answer']}")
    if q['expl']:
        lines.append(f"Explanation: {q['expl']}")
    return '\n'.join(lines)


# ---------------------------------------------------------------------------
# Tree walk -> ordered items
# ---------------------------------------------------------------------------
def should_skip(node):
    if node.tag in SKIP_TAGS:
        return True
    if node_classes(node) & SKIP_CLASS:
        return True
    return False


def walk(node, ctx):
    if should_skip(node):
        return

    cl = node_classes(node)
    nid = node_id(node)

    # Lesson title
    if node.tag == 'title' and node.all_text():
        ctx['title'] = clean_en(node.all_text().split('|')[0])
        return

    # Section heading (h2.section-title)
    if node.tag == 'h2' and 'section-title' in cl and node.get('data-en'):
        name = clean_en(node.get('data-en'))
        ctx['items'].append(('section', name))
        return

    # Glossary entry
    if 'gl-term' in cl:
        h = node.find_desc(lambda n: n.tag == 'h4' and n.get('data-en'))
        p = node.find_desc(lambda n: n.tag == 'p' and n.get('data-en'))
        term = clean_en(h.get('data-en')) if h else ''
        defin = clean_en(p.get('data-en')) if p else ''
        if term or defin:
            ctx['items'].append(('glossary', term, defin))
        return

    # Quiz question container
    if is_quiz_q(node):
        q = parse_quiz(node)
        if q and q['q']:
            ctx['items'].append(('quiz', format_quiz(q)))
        return

    # Plain element carrying data-en
    de = node.get('data-en')
    if de and not is_quiz_q(node) and 'gl-term' not in cl:
        txt = clean_en(de)
        if txt:
            level = node.tag if node.tag in ('h3', 'h4', 'h5', 'h6') else 'p'
            ctx['items'].append(('text', level, txt))
        return  # skip children (already captured)

    # No data-en: fall back to English text nodes for text-carrying tags
    if node.tag in ('p', 'li', 'h3', 'h4', 'h5', 'h6', 'td', 'th', 'span'):
        if not node.subtree_has_data_en():
            t = node.all_text()
            if t and len(re.findall(r'[A-Za-z]', t)) >= 3 and \
               (not has_arabic(t) or len(re.findall(r'[A-Za-z]', t)) > len(re.findall(r'[\u0600-\u06FF]', t))):
                level = node.tag if node.tag in ('h3', 'h4', 'h5', 'h6') else 'p'
                ctx['items'].append(('text', level, t.strip()))

    # Recurse
    for ch in node.children:
        if isinstance(ch, Node):
            walk(ch, ctx)


# ---------------------------------------------------------------------------
# Render
# ---------------------------------------------------------------------------
def render(ctx):
    out = []
    title = ctx.get('title') or 'Lesson'
    out.append(f"# {title}\n")
    cur_section = None
    in_questions = False
    for it in ctx['items']:
        kind = it[0]
        if kind == 'section':
            name = it[1]
            # close any open questions block
            in_questions = False
            out.append(f"\n## {name}\n")
            cur_section = name
        elif kind == 'text':
            _, level, txt = it
            if level == 'p':
                out.append(f"{txt}\n")
            else:
                out.append(f"### {txt}\n")
        elif kind == 'glossary':
            _, term, defin = it
            out.append(f"- **{term}**: {defin}\n")
        elif kind == 'quiz':
            if not in_questions:
                out.append("\n### Questions\n")
                in_questions = True
            out.append(it[1] + "\n")
    return '\n'.join(out).rstrip() + '\n'


# ---------------------------------------------------------------------------
# Driver
# ---------------------------------------------------------------------------
def process_html(path):
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()
    if 'data-en' not in html:
        return None  # nothing to extract
    # Lesson title from <title> (English side before '|')
    m = re.search(r'<title>(.*?)</title>', html, re.I | re.S)
    title = ''
    if m:
        raw = m.group(1).split('|')[0].strip()
        title = clean_en(raw) or raw.strip()
    b = DOMBuilder()
    b.feed(html)
    ctx = {'title': title, 'items': []}
    walk(b.root, ctx)
    if not ctx['items'] and not ctx['title']:
        return None
    return render(ctx)


def main():
    base = r"D:/شغل/EGYPT-ICT-HUB/Secondary"
    count_units = set()
    count_lessons = 0
    generated = []
    for dp, _, files in os.walk(base):
        for fn in files:
            if not fn.endswith('.html'):
                continue
            rel = os.path.relpath(os.path.join(dp, fn), base)
            parts = rel.split(os.sep)
            # lesson html must be: Year/Unit .../Lesson/file.html
            if len(parts) < 4 or 'unit' not in parts[1].lower():
                continue
            full = os.path.join(dp, fn)
            # skip empty/near-empty stubs
            if os.path.getsize(full) < 2000:
                continue
            md = process_html(full)
            if not md:
                continue
            # write extracted_en.md into the parallel src/ tree (keeps lesson dirs html-only)
            src_dir = os.path.join(base, 'src', os.path.relpath(dp, base))
            os.makedirs(src_dir, exist_ok=True)
            out_path = os.path.join(src_dir, 'extracted_en.md')
            with open(out_path, 'w', encoding='utf-8') as f:
                f.write(md)
            count_lessons += 1
            count_units.add(parts[0] + '/' + parts[1])
            generated.append(out_path)

    print(f"Units processed (Year/Unit): {len(count_units)}")
    print(f"Lessons processed: {count_lessons}")
    print("Generated files:")
    for g in generated:
        print("  " + g)


if __name__ == '__main__':
    main()
