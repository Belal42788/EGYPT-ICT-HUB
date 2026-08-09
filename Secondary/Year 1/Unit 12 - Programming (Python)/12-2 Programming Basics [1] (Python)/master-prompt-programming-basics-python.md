# MASTER PROMPT — Interactive Explainer: Programming Basics [1] (Python)

Build a single self-contained interactive HTML teaching site (one file, all CSS/JS/SVG/logo base64 embedded) for the lesson **"Programming Basics [1] (Python): Variables and Sequential Structure"** — Lesson 12-2 in the ICT English textbook, pages 159–162.

The teacher presents from this site in class (laptop + projector), students aged 12–17. Bengali/Dutch of the visual theme is the established "CS Interactive Explainer" dark animated theme.

## Non-negotiable requirements — embed ALL of these

### Design system (dark animated theme)
- Single self-contained HTML file; `dir="rtl"` on `<html>`; Arabic font Cairo via Google Fonts (weights 400/600/700/900).
- Mandatory CSS variables:
  ```css
  :root { --primary:#193cff; --accent:#00d4aa; --bg:#0a0e27; --card:#111638; --card-hover:#1a2050; --text:#fff; --dim:#8892b0; --success:#00ff88; --danger:#ff4757; --warn:#ffd700; }
  ```
- Body background `var(--bg)` (dark navy — NO light/white background), animated radial-gradient overlay (two soft radials, primary at 30% 50%, accent at 70% 80%, slow 20s ease-in-out position loop) as `position:fixed` backdrop + 30 floating 4px dots (`var(--primary)`, opacity .3, 15s linear upward loop, staggered delays, `pointer-events:none`).
- Cards: `var(--card)` bg, `1px solid rgba(255,255,255,.05)` border, radius 24px (large) / 16px (small), hover = `var(--card-hover)` + translateY(-5px) + `border-color: rgba(25,60,255,.3)`. Diagram containers get a 3px top gradient bar (`linear-gradient(90deg, var(--primary), var(--accent))`).
- Sticky top nav: fixed, `rgba(10,14,39,0.95)` + `backdrop-filter: blur(20px)`, `border-bottom: 1px solid rgba(25,60,255,.3)`, starts hidden, appears after 100px scroll. Links = pill-shaped (`border-radius:25px`, color `var(--dim)`, hover/active `var(--text)` + `background: rgba(25,60,255,.2)` + `border-color: var(--primary)`). The nav link bar scrolls horizontally, NEVER wraps: `overflow-x:auto`, hidden scrollbars (`scrollbar-width:none; ::-webkit-scrollbar{display:none}`), `flex-wrap:nowrap`, each link `flex-shrink:0`.
- Typography: body `var(--dim)`, headings `var(--text)` font-weight 900, hero title `clamp(36px,8vw,80px)` with a gradient-text span (`linear-gradient(135deg, var(--primary), var(--accent))`).

### Motion (mandatory — the site must feel alive, not a static page)
1. **Landing hero** (full first viewport): small pill badge, big title whose key term is highlighted with the gradient-text span, one-line subtitle, and a "start" button scrolling to the first section. Every hero element enters with a staggered fade-up on page load (opacity 0→1 + translateY(40px→0), ~0.8s ease-out, each element delayed ~0.2s after the previous). Add 2–3 large soft blurred circles floating gently in the hero background (slow up/down ~6s loop, different delays), low opacity, decorative, never on top of text.
2. **Scroll-triggered reveal on every piece of content — NOT once per section**: wrap section header, each concept card, each example box, each diagram, each recap box in its own reveal element (class e.g. `section-inner`). Base: `opacity:0; transform: translateY(30px); transition: all .6s cubic-bezier(.4,0,.2,1)`. Revealed (`visible`): `opacity:1; transform:translateY(0)`. Use one `IntersectionObserver` (threshold ~0.05) + `checkVisibility()` fallback. Break body text into small revealing chunks (paragraph → diagram → next paragraph).
3. Small looped decorative animations, purposefully: glowing section-number badges (box-shadow pulse, 3s loop), and a few genuinely "live" elements pulsing/blinking. Do NOT emoji-decorate body text.

### Section accent colors (per-section CSS variables)
`--s1:#06B6D4; --s2:#F59E0B; --s3:#8B5CF6; --s4:#10B981; --s5:#EC4899; --s6:#EF4444;` used on section number badges, top borders, icons, tab underlines. Section number badges: `width:50px; height:50px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:18px; color:var(--bg);` with a gradient background using the section accent.

### Language & bidi rules (mandatory)
- Page `dir="rtl"`. UI microcopy = Modern Standard Arabic. Explanation body text = Egyptian Arabic dialect (مصري) with English CS terms kept in English (NOT translated/transliterated). Body text per section is a full, detailed, self-contained explanation.
- **Bidi rule:** prepend "الـ" before any English term that starts a line/heading/list item/table cell. Wrap every English term in `<span dir="ltr">` for correct bidi isolation. Never rely on plain-text bidi resolution.
- No hover/click tooltips for technical terms.

### Emoji policy
No emojis in body text/headings/buttons. Emojis ONLY as image-like props inside interactive simulations (e.g. 📦 sliding into a box variable), styled with keyframe classes (`.emoji-pulse`, `.emoji-shake`, `.emoji-walk`, `.emoji-float`, `.emoji-glow`). Allowed text marks: ✅ ❌ ⚠️ 💡 and directional arrows ← → on nav/step buttons.

### SVG rules (mandatory, non-negotiable)
1. **NEVER use native SVG `<text>` elements** — every label is HTML overlaid on the graphic or inside `<foreignObject>`. Self-check by searching for `<text` (excluding "textarea").
2. One fixed flippable arrow icon (SVG path), flipped with `transform: scaleX(-1)` where needed — never redrawn freehand.
3. Fixed coordinate grid for technical diagrams (multiples of 10), each connection point defined ONCE and reused — no approximate coordinates, no disconnected wires.
4. Every interactive element has a unique stable `data-id`. All JS binds handlers after `DOMContentLoaded`.
5. Diagrams built from vibrant primitives with gradients, highlights, soft shadows, one consistent top-left light source — never dull/flat/gray.
6. Flow/journey connectors must be SVG arrows, never emoji arrows.

### Runnable code playground — MANDATORY (lesson content is runnable Python)
Every code example panel is an editable playground with the structure, CSS, editor wiring, and **Python mini-interpreter embedded verbatim** (see below). Requirements:
- Editable auto-growing `<textarea class="py-edit">` showing ALL lines (no internal scroll, no resize), `dir="ltr"`.
- Control bar: **▶ Run** + **↺ إعادة** + hint. Output terminal `.term` hidden until Run.
- **Friendly error panel** (`.py-err`): error-type badge + Arabic explanation + line number + offending source line. NO raw tracebacks.
- `data-inputs` / `data-seed` support for feeding field values into `input()`.
- Syntax highlight the code: a bundled inline minimal highlighter (LTR code lines as HTML spans with keyword/string/number colors) — no hard CDN dependency.

### Embed verbatim (copy exactly)
- The code-panel CSS, editor wiring JS, and the full Python mini-interpreter JS from `references/code-playground.md`. (The agent has this file; embed the interpreter as `window.pyRun`, wire editors, friendly-error formatting, LTR CSS.)

### Branding
- Embed both logo files from `assets/` (bilal-icon.webp, bilal-wordmark.webp) as base64 `<img>`. Header uses icon with mocked `.nav-logo` class (36px, border-radius 10px, object-fit contain); footer uses colored wordmark with `.footer-logo` class (40px) plus a short encouraging sentence in Egyptian Arabic. The images have a solid `#193cff` background baked in — display them inside a small rounded container/badge rather than raw on the background, and verify CSS class names exactly match.

### Interactivity & quizzes
- Interactive simulation per concept with a **replay button**.
- Keyboard left/right arrow moves between steps/sections (hands-free presenting).
- Quizzes: short recall questions, hidden until clicked, immediate green/red feedback with a short "why wrong" explanation, skip button available.
- Exercise sets: **full scenario up front, single "اعرض كل الإجابات" reveal button** at the end of each set (this is a hands-on Activity pattern, NOT per-question feedback).
- Legend/key box next to technical diagrams.

### Common mistakes box
Every section ends with `<div class="error-box">` containing `⚠️ أخطاء شائعة` + a bullet list of common student mistakes. Style: `border:1px solid rgba(255,71,87,.2); background:rgba(255,71,87,.05); border-radius:12px; padding:16px;`.

### Staged build (build order — must not build whole site in one pass)
1. **Skeleton**: HTML structure + base CSS (nav, layout shell, colors/type, hero) — no section content yet.
2. **Per-section** (build strictly in order, checkpoint after each): intro → print() → variables → arithmetic operators → sequential structure → exercises. For each section after building, verify: no native SVG `<text>`; all bidi/wrap rules; all diagram connection coordinates match; every button wired to working JS. Fix before proceeding.
3. **Final review**: cross-section consistency — nav links all jump, keyboard nav across all sections, replay buttons reset, whole file RTL/bidi correct.

---

## Page structure (Arabic slug filename: `programming-basics-python.html`)

- **Sticky nav**: sections list, horizontal scroll, pill links.
- **Hero (01)**: badge "درس 12-2", title "Programming Basics — بايثون", subtitle, start button.
- **Intro section** ("هنتعلم ايه النهارده — سكشن 01"): what we'll learn today (print, Variables, Arithmetic operators, sequential structure) + WHY Python matters (short Egyptian-Arabic narrative, minimal text), pill list of today's items, each with a small icon.
- **Section 2 — `print()`** (accent cyan): what it does (displays text/value inside parentheses). String quoting rule (single/double quotes, no quotes for numbers). Step-by-step analysis of `print("Hello Khalid")` and `print(2023)`, each as a runnable playground. Notes box: numerical values must NOT be quoted. Error box: common mistakes.
- **Section 3 — Variables** (accent amber): variables = box that stores data (`var(--s2)` box encapsulation, a 🚶/👋 emoji prop sitting in a box drawn in HTML/CSS on top of an SVG). The `city = "Cairo"` example byte-by-byte with note: `=` means "assign the right side to the left side", NOT "equal". Visual: two-step flow (value → slides into box → print gets value from box). Runnable playground. Error box: mistakes (variable before definition, using `==` for assignment, forgetting quotes around text).
- **Section 4 — Arithmetic operators** (accent violet): the operators table — meaning column in Egyptian Arabic: `+` Addition, `-` Subtraction, `*` Multiplication, `/` Division, `//` Quotient (integer division), `%` Remainder, `**` Power. Interactive operator-chip exploration (equal-width grid — 7 chips → `7→4+3` rows), each chip clickable to show an example and its output. Full arithmetic playground reproducing the a=5, b=3 program with 9 print statements and stored output — plus editable input fields (`data-seed`/`data-inputs`) letting a and b values be changed live. The recorded output shows: `8, 2, 15, 1.66666, 1, 2, 125`. Wrap each in `dir=ltr` monospace. Error box: mistakes (using `x == y` for exponents vs multiplication, `/` vs `//`).
- **Section 5 — Sequential structure** (accent emerald): a program runs top-to-bottom, line by line. Visual: a vertical execution-flow animation with the 9-line program, a running line marker + step counter advancing through the 9 print lines, each step fills the line while a bar/line-track shows progress; output collect pops below like a real terminal. Replay requested. Error box: mistakes (an error in the middle stops reading later lines, print output order).
- **Section 6 — Exercises** (accent pink / red): 
  - Original Warm-Up sample problems (p160) exactly as textbook: multiple-choice programs that display "HelloWorld!", "Mr. Suzuki", then compute a=6 print(a+4)…[1] etc with answers [1] 10, [2] 5, [3] 30, [4] 3, [5] 216.
  - Try + Exercise (p161–162) in the same style: multiple-choice + compute answers.
  - Pattern: **full quiz questions fully selected on screen, no per-item lock, all answers hidden**, one **"اعرض كل الإجابات"** button at the end reveals ALL correct answers at once. Answers given ("explanation" text = book's English statements translated to Egyptian Arabic where appropriate, results tables).
- **Closing summary section**: illustrated "journey" line (the قدر of the lesson) with step nodes connected by SVG arrows, recap of today's key points (print, variable, arithmetic, sequence), a short motivational sentence, footer with logo + wordmark.

## Content integrity
All teaching content must come from textbook pages 159–162 exactly (lesson title "Programming Basics [1] (Python): Variables and sequential Structure"), formatted as described. Keep code samples identical (using `print`, variables, all operators, the exercised exercises). All outputs must match the textbook solution key.

## Verification clip before deliver
- File: `programming-basics-python.html` in `D:\شغل\akhnaton\`.
- No `<text>` SVG elements anywhere. Code panels LTR + auto-growing, output only after Run. Friendly error panel wired (no raw tracebacks). Nav links + key frames work. Replay buttons reset. Answer reveal single-button. Cairo font loaded; all variables names as required. bg dark; particles and gradient anim; hero staggered.