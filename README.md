# Egypt ICT Hub

Interactive ICT lessons for Egyptian prep and secondary students, built on the official Ministry book and explained simply in Arabic and English.

**Live site:** https://belal42788.github.io/EGYPT-ICT-HUB/

دروس ICT تفاعلية لطلبة الإعدادي والثانوي، على كتاب الوزارة، بشرح بسيط وتدريبات وأسئلة — بالعربي والإنجليزي.

## What it is

A free study site for the Egyptian ICT curriculum. Each lesson follows the Ministry book: the book's own wording first, then the same idea in simple words, an interactive activity, and a quiz with instant feedback. Every page switches between Arabic and English, and the choice is remembered in the browser.

## What's on the site

- **Home** — `index.html`
- **Preparatory (إعدادي)** — Years 1, 2 and 3 — `preparatory.html`
- **Secondary (ثانوي)** — Year 1 `secondary.html`, Year 2 `secondary-year2.html`

96 lesson pages so far: 62 in Secondary Year 1, 7 in Secondary Year 2, and 27 across the three preparatory years.

## Inside a lesson

- The book text, then the same idea in simple words
- An interactive activity or lab where the lesson allows it
- A quiz with instant feedback
- Arabic / English toggle on every page
- On stage pages: search across lessons, "seen" ticks and a continue-where-you-stopped bar, saved in the browser only

## Structure

```
EGYPT-ICT-HUB/
├── index.html                  home
├── 404.html
├── sitemap.xml
├── preparatory.html            prep stage
├── preparatory-year1-term1.html
├── preparatory-year2-term1.html
├── preparatory-year3-term1.html
├── secondary.html              secondary stage, Year 1
├── secondary-year2.html
├── assets/                     shared CSS, JS, images, screenshots
├── Preparatory/Year 1..3/      prep lessons
├── Secondary/Year 1..2/        secondary lessons (+ src/ = source text and prompts)
├── _books/                     reference textbook PDFs, not linked from the site
├── _dev/                       design experiments and test pages, not part of the site
├── _docs/                      review and audit reports
├── tools/                      small Python helpers
├── scripts/                    lesson build helpers
├── DESIGN.md                   design rules
└── README.md
```

## How it's built

Plain HTML, CSS and JavaScript, no build step. Styles are shared: `assets/css/site.css` for the site look, `assets/css/nav.css` with `assets/js/nav.js` for the one header used everywhere, and `assets/css/lesson.css` for lessons. GitHub Pages publishes the site on every push to `main`.

To look at it locally, run this in the project folder and open http://localhost:8000:

```
python -m http.server 8000
```

## Content notes

- Lesson text follows the Ministry book; the extra explanation is kept separate from the book's wording.
- This is an educational resource, not an official Ministry of Education channel.
- Content is still growing, so lesson wording and activities may change.

## License

Not specified yet.
