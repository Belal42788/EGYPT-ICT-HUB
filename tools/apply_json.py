#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""apply_json.py — apply a translations map (EN -> EG Arabic) to a lesson HTML.
Replaces each element's data-ar with the translation of its data-en, and
also rewrites the visible inner text for the simplest elements (tag-only /
text-only nodes) so the page shows the Egyptian translation, not the old Arabic.
"""
import sys, re, json

def build_map(path):
    return json.load(open(path, encoding="utf-8"))

def apply(html_path, tmap):
    html = open(html_path, encoding="utf-8").read()
    # 1) replace data-ar value using its paired data-en
    def repl_ar(m):
        full = m.group(0)
        en_m = re.search(r'data-en="([^"]*)"', full)
        if not en_m:
            return full
        en = en_m.group(1)
        if en in tmap:
            new_ar = tmap[en].replace('\\', '\\\\').replace('"', '&quot;')
            return re.sub(r'data-ar="[^"]*"', f'data-ar="{new_ar}"', full)
        return full
    html = re.sub(r'<[^>]*data-en="[^"]*"[^>]*>', repl_ar, html)
    # 2) rewrite visible text for simple text-only tags
    applied = 0
    def repl_text(m):
        nonlocal applied
        tag, inner = m.group(1), m.group(2)
        # only tag+text, no nested tags, has data-en
        if '<' in inner or '>' in inner:
            return m.group(0)
        en_m = re.search(r'data-en="([^"]*)"', tag)
        if not en_m or en_m.group(1) not in tmap:
            return m.group(0)
        new = tmap[en_m.group(1)]
        applied += 1
        return f'<{tag}>{new}</{m.group(3)}>'
    html = re.sub(r'<(\w+[^>]*data-en="[^"]*"[^>]*)>([^<>]*)</(\w+)>', repl_text, html)
    open(html_path, "w", encoding="utf-8").write(html)
    return applied

if __name__ == "__main__":
    html_path, map_path = sys.argv[1], sys.argv[2]
    tmap = build_map(map_path)
    # count how many unique data-en are covered
    html = open(html_path, encoding="utf-8").read()
    ens = list(dict.fromkeys(re.findall(r'data-en="([^"]*)"', html)))
    covered = sum(1 for e in ens if e in tmap)
    applied = apply(html_path, tmap)
    print(f"applied {covered} entries to {html_path}")
