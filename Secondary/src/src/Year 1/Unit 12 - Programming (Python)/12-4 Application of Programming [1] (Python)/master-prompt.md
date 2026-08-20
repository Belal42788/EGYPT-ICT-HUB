# Master Prompt — interactive lesson site

> **Lesson**: Application of Programming [1] (Python) (`12-4`)
> **Source**: `ICT_En_Sec1_T1.pdf`, printed pages 168–171 (book numbering)
> **Output filename**: `application-of-programming-1-python.html`
> **Style reference**: the outline-file `12-2 Programming Basics [1] (Python).html` in this course
> folder — mimic its structure and look.

---

## Global Style & Technical Contract (applies to EVERY section)

Build a SINGLE self-contained HTML file (all CSS/JS/SVG/base64 logos inside it). Only external
network reference: Google Fonts Cairo link. Reference implementation to imitate: the existing file
`12-2 Programming Basics [1] (Python).html` in the same course folder — reuse its visual language.

### 1. Theme — exact CSS variables
```
:root{--primary:#193cff;--accent:#00d4aa;--bg:#0a0e27;--card:#111827;--card-hover:#1a2050;
--text:#fff;--dim:#8892b0;--success:#00ff88;--danger:#ff4757;--warn:#ffd700;
--s1:#06B6D4;--s2:#F59E0B;--s3:#8B5CF6;--s4:#10B981;--s5:#EC4899;--s6:#EF4444;}
```
- Body background `var(--bg)` (navy). NO white/light backgrounds.
- Animated fixed radial-gradient overlay (primary at 30% 50%, accent at 70% 80%, 18s `bgDrift` loop)
  + 28 floating 4px particles (primary, `floatUp` 14s, staggered).
- Cards `background:var(--card); border:1px solid rgba(255,255,255,.05); border-radius:24px;`
  hover = `--card-hover` + translateY(-5px) + border rgba(25,60,255,.3). Diagram containers have a
  3px top gradient bar (primary → accent).
- Per-section accent colors `--s1..--s6` on number badges, top borders, card borders, icons.

### 2. Layout & motion
- `html dir="rtl" lang="ar"`, font Cairo 400/600/700/900.
- Sticky nav: pill links in ONE row (`overflow-x:auto`; hidden scrollbars; every link flex-shrink:0;
  never wraps). Slides down from above after 100px scroll; links smooth-scroll to sections.
- Hero: pill badge, big title (key term in a gradient span), one-line subtitle, a scroll CTA,
  staggered fade-up entrance, 2 floating blurred circles, embrace.
- Every piece of content is its own `.section-inner` reveal: `opacity:0; transform:translateY(30px);
  transition:all .6s cubic-bezier(.4,0,.2,1)` → `.visible` via one IntersectionObserver (threshold
~.05; scroll fallback). `.section-inner + .section-inner{margin-top:28px}`.
- `.section-number` 50px circle, gradient background, font-weight 900.
- Left/right arrows step through steps/sections; every simulation has a replay/reset.
- A legend under technical diagrams.

### 3. Language
- Microcopy (buttons, nav, hints): Modern Standard Arabic. Body text: Egyptian Arabic.
- English terms in `<span dir="ltr">`; terms that begin a heading/list item/table cell get prefix
  "الـ ". No tooltips for terms.

### 4. Interaction pattern set (pick the natural one per core section)
- Editable code playground (structure in §7) for Python/web lessons.
- Cart/checkout (product grid → cart +/- → receipt) for pricing/shopping.
- Teachable-Machine (3 class cards → train progress → test probability bars + results) for AI.
- Parking/counter (4 bulbs ✓ entry/exit ✓ IO diagram Inputs→Processing→Outputs) for systems.
- Step-by-step reveal (التالي/السابق + counter), bar-chart reveal. Others: agent's choice.

### 5. SVG — absolute rules
- NEVER `<text>` inside `<svg>` — real labels are HTML overlaid (or foreignObject). Run a search for
  the literal `<text` after the site is built (only false positives allowed).
- One fixed arrow icon; flip with `transform:scaleX(-1)`.
- Coordinates on a multiples-of-10 grid; every wire/node endpoint defined once from a single
  {x,y} map; wires generated programmatically; verify no orphan endpoint.
- `data-id` on every interactive element; handlers bound inside DOMContentLoaded.
- Checkpoint after EACH section: bidi/labels, wires, buttons; fix before next.
- SVG quality: saturated gradients, soft shadows, consistent top-left light source; flow arrows are
  inline SVG (never emoji arrows).

### 7. Code playground (mandatory when runnable code is present)
- `<textarea class="py-edit" spellcheck="false">` auto-grows (CSS `width:100%;resize:none;
  overflow:hidden;height:auto;min-height:56px;direction:ltr;text-align:left;white-space:pre`).
- Control bar: `▶ Run` + `↺ إعادة`; output `.term` hidden until Run (lines `.out-line` in accent);
  reset ↺ restores `data-src` and re-runs.
- Friendly `.py-err`: type badge + Arabic hint + line + source line; NO traceback. mapping:
  NameError → الاسم غير معرَّف، عرّفه الأول; TypeError → نوع القيمة غير صحيح للعملية;
  ValueError → القيمة غير قابلة للتحويل; ZeroDivisionError → لا تقسم على صفر;
  IndexError → الفهرس خارج حدود النص; AttributeError → الخاصية غير موجودة;
  SyntaxError → غلطة في الصياغة (راجع الأقواس).
- Live inputs: `data-inputs="id1,id2"` and `data-seed="name=fieldId"` on the editor.
- Engine for this lesson (`python`): Python panels use the built-in self-contained mini-interpreter JS (call pyRun).

### 8. Emoji policy
No emojis in prose/headings/buttons/labels. Only inside interactive activity as animated props
(person walks, block arrives, light flashes) with CSS classes `.emoji-pulse`, `.emoji-shake`,
`.emoji-walk`, `.emoji-float`, `.emoji-glow`. Functional glyphs OK: ✅❌⚠️←→💡.

### 9. Quizzes & activities
- Every section ends with an `.error-box`: «أخطاء شائعة» + bullets specific to that section.
- Short recall quiz: hidden by default; click reveals choices; green/red + short why; skip button.
- Activity-style drills (multi-scenario): show everything first, then ONE «اعرض كل الإجابات»
  button reveals every model answer at once (NOT click-per-question).

### 10. Branding — embed these exact logos as base64:
```
<img class="nav-logo" src="data:image/webp;base64,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" alt="logo" />
CSS: .nav-logo{width:36px;height:36px;border-radius:10px;object-fit:contain;flex-shrink:0}
<img class="footer-logo" src="data:image/webp;base64,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" alt="Bilal" />
CSS: .footer-logo{height:40px;border-radius:8px}
```
Footer also carries one short encouraging Egyptian-Arabic line. Logos have a baked #193cff square:
put them on a small rounded chip so they read as intentional. Class names must match the CSS exactly.

### 11. Staged build & acceptance
1) Skeleton: page shell, nav, hero, footer, empty section frames. 2) Build one section at a time
(diagram + explanation + quiz + `.error-box`), run the §5 checkpoint, move on. 3) Final review:
all nav links; arrow keys; replay resets; RTL/LTR; run the `<text` self-check; logo sizing.
Save the site as `application-of-programming-1-python.html` in this same folder.


---

## Build order + sections of this site (each section = one nav link)

**1. هنتعلم إيه النهارده؟** (intro). 2-4 outcome cards (animated emoji-icon-props inside the cards only), a one-paragraph Egyptian-Arabic opener, a one-line note that the next lessons plug into this. Close with `.error-box` «أخطاء شائعة» about the very first mix-ups. Interaction: none (visual reveal). No quiz here.
**2. مفهوم List** — core concept (book pages 168–171). Lead with the VISUAL (SVG or interactive, never raw `<text>` inside SVG), then a self-contained Egyptian-Arabic paragraph for `List`. Interaction: editable Python playground (auto-grow `py-edit` textarea, ▶ Run, ↺ إعادة, friendly `py-err`) wired `data-inputs`/`data-seed` . Close with `.error-box` «أخطاء شائعة» specific to this term. Hidden-click quiz: 1-2 questions (skip button).
**3. مفهوم Element** — core concept (book pages 168–171). Lead with the VISUAL (SVG or interactive, never raw `<text>` inside SVG), then a self-contained Egyptian-Arabic paragraph for `Element`. Interaction: editable Python playground (auto-grow `py-edit` textarea, ▶ Run, ↺ إعادة, friendly `py-err`) wired `data-inputs`/`data-seed` . Close with `.error-box` «أخطاء شائعة» specific to this term. Hidden-click quiz: 1-2 questions (skip button).
**4. مفهوم Two-dimensional list** — core concept (book pages 168–171). Lead with the VISUAL (SVG or interactive, never raw `<text>` inside SVG), then a self-contained Egyptian-Arabic paragraph for `Two-dimensional list`. Interaction: editable Python playground (auto-grow `py-edit` textarea, ▶ Run, ↺ إعادة, friendly `py-err`) wired `data-inputs`/`data-seed` . Close with `.error-box` «أخطاء شائعة» specific to this term. Hidden-click quiz: 1-2 questions (skip button).
**5. التدريبات** — self-work activity, NOT click-per-question: show every drill, then ONE «اعرض كل الإجابات» button at the end reveals every model answer.
**6. الخلاصة (Recap)** — numbered journey dots summarizing the lesson + a final 3-question quiz (hidden-click, skip available).

---

## Practice / drill block from the book (activity section content)

```
Warm Up
Answer the following questions.
(1)	 For programs A and B below, give the values displayed when each is executed.
A	 a = [57, 16, 29, 44]
print(a[2])
B	 a = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]
print(a[2][1])
(2)	 The following program is designed to find the minimum value among the elements in list “a”. Fill in the
blanks A and B with the appropriate characters or numbers to complete the program.
a = [34, 52, 11, 40, 17]
min = a[0]
for i in range(1,
A
, 1):
if a[i] < min:
min =
B
print(min)
(3)	 Fill in the blanks A to E in the following program with the appropriate characters or numbers to
complete the program so that it displays the “Execution result” as shown.
a = [[‘A’, ‘B’, ‘C’, ‘D’],
[‘E’, ‘F’, ‘G’, ‘H’]]
for i in range(
A
,
B
, 1):
for j in range(
C
,
D
, 1):
print(
E
)
Explanation
(1)	 Note that list index start at 0, not 1. In addition, an element in a two-dimensional list can be represented as
a[i][j], where “i” indicates the row and “j” indicates the column. Therefore, A: 29,   B: 8
(2)	 Set “min” as the variable that stores the minimum value of the list “a” so it is a[0]. Next, examine each
element of list “a” sequentially, and if a[i] is smaller than min, update min to that value.
Therefore, A: 5,   B: a[i]
(3)	 A: 0,   B: 2,   C: 0,   D: 4,   E: a[i][j]
A
B
C
(Omitted)
H
Execution result
170
Answer the following questions.
(1)	 For programs A to C below, give the values displayed when each is executed.
A	 a = [1, 4, 9, 16, 25]
print(a[3])
B	 a = [ ]
a.append(8)
a.append(28)
print(a[1])
C	 a = [[‘A’, ‘B’, ‘C’, ‘D’, ‘E’],
[‘F’, ‘G’, ‘H’, ‘I’, ‘J’],
[‘K’, ‘L’, ‘M’, ‘N’, ‘O’]]
print(a[2][1])
(2)	 The following program finds the total of the elements in list “a”. Fill in the blanks A to C with the appropriate
characters or numbers to complete the program.
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
sum = 0
for i in range(
A
,
B
, 1):
sum = sum +
C
print(sum)
(3)	 The following program finds the maximum value among the elements in list “a”. Fill in the blanks A to C with
the appropriate characters or numbers to complete the program.
a = [7, 22, 11, 34, 17]
max = 0
for i in range(0,
A
, 1):
if a[i]
B
max:
max =
C
print(max)
(4)	 Fill in the blanks A to E in the following program with the appropriate characters or numbers to complete the
program so that it displays the “Execution result” as shown.
a = [[‘A’, ‘B’, ‘C’, ‘D’, ‘E’],
[‘F’, ‘G’, ‘H’, ‘I’,
```

---

## Final instructions
After building, report: the file name, the `<data-id>` ids you created, and which interaction
pattern you picked per section.
