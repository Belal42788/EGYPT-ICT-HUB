# MASTER PROMPT — CS Interactive Explainer: "1-1 Information and Media"

## Project Overview
Build a **single self-contained HTML file** (`information-and-media.html`) for a CS lesson on "Information and Media" (Data→Information→Knowledge, Information Characteristics, Primary/Secondary Information, Media Types, Media Literacy, plus Book Questions as MCQs). The site is for a teacher (Bilal) to present from laptop+projector to students aged 12–17.

**Language:** Full AR/EN toggle — every piece of text (UI, section content, quiz questions, book MCQs, glossary) must switch between Egyptian Arabic (with English CS terms in backticks) and English. Default: Arabic.

**Glossary:** Add a glossary/terms page accessible from the top navigation.

---

## Non-Negotiable Requirements (embed all as strict requirements)

### 1. Design System (`references/design-system.md`)
- Dark animated theme with exact CSS variables:
```css
:root {
  --primary: #193cff;
  --accent: #00d4aa;
  --bg: #0a0e27;
  --card: #111638;
  --card-hover: #1a2050;
  --text: #fff;
  --dim: #8892b0;
  --success: #00ff88;
  --danger: #ff4757;
  --warn: #ffd700;
}
```
- Per-section accent colors: Cyan `#06B6D4`, Amber `#F59E0B`, Violet `#8B5CF6`, Emerald `#10B981`, Pink `#EC4899`, Red `#EF4444`, Blue `#193cff`
- Animated background: radial gradients + 30 floating particles
- Cairo font (Google Fonts), RTL (`dir="rtl"` on `<html>`)
- Hero landing section with staggered fade-up entrance
- Scroll-triggered reveal on **every content block** (not per-section) via `IntersectionObserver`
- Sticky top nav with horizontal scroll (never wrap), appears after 100px scroll
- Cards: `var(--card)` bg, 1px border, 24px radius, hover lift + border glow
- Code panels MUST be LTR (`dir="ltr"`, `unicode-bidi: isolate`)
- **Runnable code playground** pattern for any runnable code (not applicable here but structure must support it)
- Activity grid layout for simulation+explanation side-by-side
- Dark form controls with `color-scheme: dark`
- Equal-width widget grids (no orphan items)
- Section number badges (50px circle, gradient from section accent)
- **Simulation patterns** to use per section (see Section Specs below)
- **Common mistakes box** at end of every section: `⚠️ أخطاء شائعة` with red border
- **Branding:** Embed `bilal-icon.webp` and `bilal-wordmark.webp` as base64 in header (`.nav-logo` 36px) and footer (`.footer-logo` 40px)
- **Quiz behavior:** hidden by default, click-to-reveal, green/red feedback, skip button
- **Activity behavior:** self-work-then-reveal — single "اعرض كل الإجابات" button reveals all at once (for Book Questions MCQ section)
- **Emoji policy:** ONLY inside interactive simulations as moving props, styled with `.emoji-pulse`, `.emoji-shake`, `.emoji-walk`, `.emoji-float`, `.emoji-glow`. No emojis in text/headings/buttons.
- **Keyboard navigation:** left/right arrows move between steps/sections
- **Staged build:** skeleton → per-section → final review

### 2. SVG Technical Rules (`references/svg-technical-rules.md`)
- **NEVER use native SVG `<text>`** — all labels as HTML overlays or `<foreignObject>`
- One fixed arrow icon, flipped with `transform: scaleX(-1)`
- Fixed coordinate grid (multiples of 10) for all diagrams
- Build wires from data (JS coordinate map), not by hand
- Every interactive element needs stable `data-id`; JS binds on `DOMContentLoaded`
- Mandatory checkpoint after each section (bidi, connections, interactions)
- SVG visual quality: vibrant saturated colors, gradients, highlights, soft shadows, top-left light source, no flat/dull shapes
- Flow connectors = SVG arrows (not emoji), defined once and reused

### 3. Language & Bidi Rules
- Page: `dir="rtl"`, Arabic UI (فصحى), Egyptian Arabic body text
- English CS terms preserved in English, wrapped in `<span dir="ltr">` (or backticks in markdown source)
- **Bidi rule:** prepend "الـ" before any English term starting a line/heading/list-item/table-cell
- No tooltips for terms — explanation in body must suffice

---

## Section Breakdown (6 sections + Glossary)

### Section 1: DIKW Hierarchy (Data → Information → Knowledge)
- **Accent:** Cyan `#06B6D4` (`--s1`)
- **Learning Objective:** يفهم الهرم كمراحل بتضيف قيمة (Data→Info→Knowledge)
- **Example:** تحليل طبي (أرقام خام → تشخيص → خطة علاج)
- **Common Mistake:** بيظن إن Knowledge مجرد "معلومات أكتر" مش تحليل
- **Interaction:** **Step-by-step reveal (Next/Back)** — 3 steps: Data (raw numbers) → Information (context added) → Knowledge (analysis/pattern). Each step shows animated visual + explanation. Replay button required.
- **Quiz:** 3 questions (1 classification, 1 ordering, 1 "which stage is this?")
- **SVG/Visual:** Animated progression — raw numbers (blinking) → labeled with units/context → pattern emerges with highlight. Use step-by-step pattern from design system.

### Section 2: Information Characteristics (Persistence, Reproducibility, Propagation)
- **Accent:** Amber `#F59E0B` (`--s2`)
- **Learning Objective:** يلاقي سيناريو واقعي يخص كل خاصية (threat model)
- **Example:** أمثلة الكتاب: صورة محذوفة (persistence)، ملف منسوخ (reproducibility)، تويت فيروسي (propagation)
- **Common Mistake:** يخلط بين Persistence و Propagation (كلهم عن "الانتشار/الثبات")
- **Interaction:** **Timeline simulation** — single piece of info (e.g., a photo) moves through time showing all 3 properties: deleted but recovered (persistence), copied perfectly 1000x (reproducibility), spreads globally in seconds (propagation). Animated timeline with scrubber or auto-play. Replay button.
- **Quiz:** 3 questions (one per characteristic)
- **SVG/Visual:** Timeline with three color-coded property tracks, animated particle for the info piece moving through.

### Section 3: Primary vs Secondary Information & Cross-checking
- **Accent:** Violet `#8B5CF6` (`--s3`)
- **Learning Objective:** يفهم إن التصنيف نسبي (نفس المصدر = أولي للصانع، ثانوي للمستهلك)
- **Example:** أمثلة الكتاب: تقرير معمل vs كتاب مدرسي، موقع الإحصاء (أولي للهيئة، ثانوي للطالب)
- **Common Mistake:** يفتكر إن المصادر الرسمية "دايماً" أولية
- **Interaction:** **Cross-checking simulator** — given a claim (e.g., "study shows X"), student picks 3 sources from a list (official site, news, blog, wiki, social media). System shows reliability score and explains why. Custom interaction.
- **Quiz:** 4 questions (classify, perspective flip, cross-check decision, spot unreliable secondary)
- **SVG/Visual:** Source cards with credibility indicators, animated connection lines to claim.

### Section 4: Media Types (Expression, Propagation/Transmission, Recording)
- **Accent:** Emerald `#10B981` (`--s4`)
- **Learning Objective:** يتتبع مسار المعلومة: تعبير → نقل → تسجيل
- **Example:** أمثلة الكتاب + مثال إضافي: رسالة واتساب (نص تعبير → نت نقل → سحابة تسجيل)
- **Common Mistake:** مش بيشوف وسائط التسجيل منفصلة عن النقل (الكتاب بيعمل الاتنين)
- **Interaction:** **Single message journey animator** — step-through: Expression (text/image/audio/video created) → Transmission (sent via TV/radio/internet/phone) → Recording (saved on paper/USB/cloud). Visual flow diagram with animated packet/message moving. Step-by-step reveal pattern.
- **Quiz:** 4 questions (classify 3 media, one multi-role question)
- **SVG/Visual:** Three-column flow diagram with animated message particle, icons for each media type.

### Section 5: Media Literacy
- **Accent:** Pink `#EC4899` (`--s5`)
- **Learning Objective:** يبتدي عادة التوقف قبل المشاركة: المصدر؟ الدليل؟ مصادر تانية؟
- **Example:** تعريف الكتاب + أمثلة واقعية: ادعاء صحي فيروسي vs دراسة محكمة، محتوى ممول vs خبر
- **Common Mistake:** يفتكر إن "شارة توثيق" أو "منصة كبيرة" = مصداقية تلقائية
- **Interaction:** **Credibility checklist** — 5 social media posts displayed. Each gets ✓/✗ on 4 criteria: Source, Date, Evidence, Corroboration. Auto-calculates credibility score (0-100). Bar chart with reveal pattern for final scores.
- **Quiz:** 4 questions (evaluate 3 posts + identify manipulation tactic) — **wait, quiz:wanted is false for this section per answers**. So NO quiz for Section 5. Just the interaction.
- **SVG/Visual:** Post cards with checklist UI, animated score bars.

### Section 6: Book Questions MCQ (Warm Up + Exercise + Try + Explanation)
- **Accent:** Red `#EF4444` (`--s6`)
- **Learning Objective:** Practice all book questions as MCQs
- **Scope:** All questions from pages 5-7 (Warm Up 1, 2, 3, 4, 5 + Exercise 1, 2 + Try + Explanation) — approximately 20 questions
- **Format:** Standard 4-option MCQ, **activity pattern** — all questions visible at once, student selects answers, NO immediate feedback. Single **"اعرض كل الإجابات"** button at end reveals all correct answers with explanations.
- **Language:** Full AR/EN toggle for questions and explanations
- **Quiz:** 20 questions (wanted=true, count=20) — but using activity pattern, not quiz pattern
- **Common Mistake:** Rushing without reading carefully
- **Interaction:** Activity grid — questions list on left, answer selection on right (or stacked), "اعرض كل الإجابات" button reveals green/red markers + explanations for all.
- **SVG/Visual:** Clean question cards, progress indicator, answer reveal animation.

### Glossary Page (accessible from nav)
- All technical terms from the lesson with concise definitions in both languages
- Terms: `Data`, `Information`, `Knowledge`, `Persistence`, `Reproducibility`, `Propagation`, `Primary Information`, `Secondary Information`, `Cross-checking`, `Media`, `Expression Media`, `Propagation/Transmission Media`, `Recording Media`, `Media Literacy`, `Mass Media`, `Digital Footprint`, `Copyright Infringement`, `Piracy`, `Information Overload`, `Fake News`
- Search/filter capability
- AR/EN toggle applies here too

---

## AR/EN Toggle Implementation
- Global state variable `currentLang = 'ar' | 'en'`
- All text content stored in a translation object or `data-ar`/`data-en` attributes
- Toggle button in top nav (flag icons or "AR/EN" text)
- On toggle: walk DOM and swap text, update `dir` on `<html>` (rtl/ltr), update font if needed
- Egyptian Arabic for AR, standard English for EN (but keep CS terms in English in both)
- **Quiz questions, book MCQs, glossary, common mistakes, all UI** must toggle

---

## File Structure (single HTML)
```
<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
  <meta charset="UTF-8">
  <title>1-1 Information and Media</title>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet">
  <style>...all CSS including design system variables...</style>
</head>
<body>
  <!-- Animated background -->
  <div class="bg-animation"></div>
  
  <!-- Hero Landing -->
  <section class="hero" id="hero">
    <div class="hero-badge">درس 1-1</div>
    <h1>المعلومات والوسائط <span class="gradient-text">Data, Information & Media</span></h1>
    <p class="hero-subtitle">فهم الهرم الأساسي: بيانات → معلومات → معرفة، وخصائص المعلومة الرقمية</p>
    <button class="btn hero-btn" data-action="scroll-to-sections">ابدأ الدرس</button>
  </section>

  <!-- Sticky Nav -->
  <nav class="top-nav" id="topNav">
    <img class="nav-logo" src="data:image/webp;base64,..." alt="Bilal">
    <div class="nav-links" id="navLinks">
      <a href="#s1" data-section="1">01 الهرم الأساسي</a>
      <a href="#s2" data-section="2">02 خصائص المعلومة</a>
      <a href="#s3" data-section="3">03 أولي vs ثانوية</a>
      <a href="#s4" data-section="4">04 أنواع الوسائط</a>
      <a href="#s5" data-section="5">05 الإلمام بالوسائط</a>
      <a href="#s6" data-section="6">06 أسئلة الكتاب</a>
      <a href="#glossary" data-section="glossary">📖 المصطلحات</a>
    </div>
    <button class="lang-toggle" id="langToggle" data-current="ar">AR/EN</button>
  </nav>

  <!-- Sections -->
  <main>
    <section id="s1" class="lesson-section" data-accent="var(--s1)">...</section>
    <section id="s2" class="lesson-section" data-accent="var(--s2)">...</section>
    <section id="s3" class="lesson-section" data-accent="var(--s3)">...</section>
    <section id="s4" class="lesson-section" data-accent="var(--s4)">...</section>
    <section id="s5" class="lesson-section" data-accent="var(--s5)">...</section>
    <section id="s6" class="lesson-section" data-accent="var(--s6)">...</section>
    <section id="glossary" class="lesson-section">...</section>
  </main>

  <!-- Footer -->
  <footer>
    <img class="footer-logo" src="data:image/webp;base64,..." alt="Bilal">
    <p>استمروا في التعلم، المستقبل بانتظاركم! 🚀</p>
  </footer>

  <script>
    // All JS: IntersectionObserver, nav scroll, lang toggle, section interactions, quiz/activity logic, keyboard nav, replay buttons
  </script>
</body>
</html>
```

---

## Specific Implementation Notes per Section

### Section 1 (DIKW) — Step-by-Step Reveal
```html
<div class="step-container" data-id="dikw-steps">
  <div class="step-card active" data-step="1">
    <div class="step-visual"><svg>...</svg></div>
    <div class="step-content">
      <h3>البيانات (Data)</h3>
      <p>قيم خام: <code>25</code>, <code>60%</code>, <code>1013</code> — بلا سياق</p>
    </div>
  </div>
  <div class="step-card" data-step="2">...</div>
  <div class="step-card" data-step="3">...</div>
  <div class="step-controls">
    <button class="btn" data-action="prev">السابق</button>
    <span class="step-counter">1 / 3</span>
    <button class="btn" data-action="next">التالي</button>
    <button class="mini-btn" data-action="replay">↺ إعادة</button>
  </div>
</div>
```

### Section 2 (Characteristics) — Timeline Simulation
- SVG timeline with 3 parallel tracks (persistence=red, reproducibility=blue, propagation=green)
- Animated dot moves along timeline, triggering property animations at key moments
- Scrubber control + auto-play + replay

### Section 3 (Primary/Secondary) — Cross-checking Simulator
- Claim card at top
- Source cards grid (each with credibility metadata)
- User selects 3 → "تحقق" button → results panel with score + explanation
- Replay button resets selection

### Section 4 (Media Types) — Message Journey
- Three-stage horizontal flow: Expression → Transmission → Recording
- Animated message particle (📩 styled with `.emoji-float`) moves through
- Each stage has media type icons (click to highlight examples)
- Step-by-step with Next/Back + replay

### Section 5 (Media Literacy) — Credibility Checklist
- 5 post cards in grid
- Each post: content, source, date, evidence links, corroboration status
- Checklist UI with 4 criteria, auto-score
- "اكشف التحليل" button → bar chart reveal (design system pattern) showing all 5 scores, max=green, min=red

### Section 6 (Book MCQs) — Activity Pattern
- All ~20 questions rendered in a list
- Each question: stem + 4 radio options
- No feedback on selection
- Bottom: large "اعرض كل الإجابات" button
- On click: all correct answers highlighted green, wrong selections red, explanations appear
- "أعد المحاولة" button to reset
- AR/EN toggle swaps all question text + explanations

### Glossary
- Searchable table/list
- Each term: English term (bold), AR definition, EN definition
- Filter by section
- AR/EN toggle swaps definitions

---

## Logo Base64 Embedding
Convert `assets/bilal-icon.webp` and `assets/bilal-wordmark.webp` to base64 and embed as:
```html
<img class="nav-logo" src="data:image/webp;base64,<ICON_BASE64>" alt="Bilal">
<img class="footer-logo" src="data:image/webp;base64,<WORDMARK_BASE64>" alt="Bilal">
```

---

## Validation Checklist (before considering done)
- [ ] Dark animated theme with exact CSS variables
- [ ] Cairo font, RTL, Arabic UI, Egyptian Arabic body
- [ ] No native SVG `<text>` anywhere
- [ ] All interactive elements have `data-id` and bind on `DOMContentLoaded`
- [ ] At least one simulation pattern used (step-by-step, timeline, cross-checking, message journey, credibility checklist, activity)
- [ ] Full AR/EN toggle working on ALL text (UI, content, quizzes, MCQs, glossary)
- [ ] Base64 logos embedded with correct classes (`.nav-logo` 36px, `.footer-logo` 40px)
- [ ] Staged build order followed
- [ ] Each section has `⚠️ أخطاء شائعة` box
- [ ] Quiz behavior: hidden, click-reveal, green/red, skip
- [ ] Book MCQs: activity pattern (single Show All Answers button)
- [ ] SVG visual quality: vibrant, gradients, top-left light, no flat shapes
- [ ] Emoji animations only in simulations (`.emoji-pulse`, `.emoji-float`, etc.)
- [ ] Keyboard navigation (left/right arrows)
- [ ] Replay buttons on all interactive sections
- [ ] Glossary page accessible from nav
- [ ] Nav horizontal scroll, appears after 100px
- [ ] Hero landing with staggered entrance
- [ ] Scroll reveal on EVERY content block (not per-section)
- [ ] Code panels LTR (if any)

---

## Deliverable
Single file: `information-and-media.html` — self-contained, no external dependencies except Google Fonts (Cairo). All CSS, JS, SVG, base64 logos inside.

**Commit & push** to `D:\شغل\EYouth\cs-live-sessions\` and update `index.html` with link in correct week slot.