# Egypt ICT Hub

A modern educational resource that helps students in Egyptian schools understand **Information and Communication Technology (ICT)** in a simple, clear, and engaging way.

## About

Egypt ICT Hub is an open educational project built around the ICT curriculum for Egyptian school students — initially the **first-year secondary school** level, with structure reserved for the remaining secondary years and the middle (preparatory) grades. Its goal is to take the standard ICT material and present it in a way that is easier to follow, more visual, and more interesting for young learners — turning everyday lessons into interactive, self-paced learning experiences.

The platform is currently under active development, with content being organized unit-by-unit and lesson-by-lesson.

## Goals

- **Simplify ICT concepts** so students can grasp them without unnecessary jargon.
- **Support learning and revision** with structured, easy-to-follow material.
- **Provide organized content** — a clear unit and lesson structure that mirrors the curriculum.
- **Make learning more interactive and engaging** — go beyond plain text and encourage active learning.
- **Build practical digital skills** students can actually use.

## Target Audience

- Students in Egyptian schools studying ICT.
- Beginners who are new to Information and Communication Technology concepts.
- Teachers and educators who want accessible resources to support their lessons.

## Learning Content

The project intends to cover a broad range of ICT topics in a structured way, including:

- Core ICT concepts
- Practical digital skills
- Hands-on activities
- Exercises and practice problems
- Quizzes and self-testing
- Small projects and applications
- Revision and review materials

Content is organized by units and lessons, making it easy for students to follow the material step by step.

## Content Organization

```
EGYPT-ICT-HUB/
├── Secondary/              # الثانوية (secondary stage)
│   ├── Year 1/             # الصف الأول الثانوي — 62 lessons across 13 units
│   │   ├── Unit 1 - What is Information/
│   │   ├── Unit 2 - Regulations and Rights in the Information Society/
│   │   ├── ... (Units 3-13)
│   │   └── The Book/       # source book PDF (ICT_En_Sec1_T1.pdf)
│   ├── Year 2/             # الصف الثاني الثانوي — coming soon
│   └── Year 3/             # الصف الثالث الثانوي — coming soon
├── Preparatory/            # المرحلة الإعدادية (preparatory stage)
│   ├── Year 1/             # الصف الأول الإعدادي — 19 lesson pages (content coming)
│   ├── Year 2/             # الصف الثاني الإعدادي — coming soon
│   └── Year 3/             # الصف الثالث الإعدادي — coming soon
├── Secondary/src/          # source & generation files (kept separate from rendered HTML)
│   └── Year 1/             # per-lesson: master-prompt*.md, extracted_en.md, *.txt
├── index-redesigns/        # 20 alternative index (portfolio) designs — see below
├── tools/                  # Python helpers for content extraction & application
│   ├── extract_en.py
│   ├── apply_json.py
│   └── list_lessons.py
├── assets/                 # images: logo, hero/teacher photo
├── index.html              # main landing page (primary index)
├── secondary.html          # secondary stage entry
├── preparatory.html        # preparatory stage entry
├── IDEA.md                 # project notes / roadmap
└── README.md
```

**Architecture note:** each lesson is a self-contained HTML file (embedded CSS/JS, Google Fonts "Cairo").
The raw source material (book text `.txt`, extracted English `extracted_en.md`, and `master-prompt*.md`
generation prompts) lives under `Secondary/src/` so the lesson folders stay HTML-only and the source
remains editable separately.

## Features

### Current

- **Unit and lesson organization** — the curriculum is structured into units, each containing individual lessons.
- **Lesson notes** — each lesson includes structured text content extracted alongside its exercises for reference.
- **Interactive lesson pages** — dedicated HTML pages per lesson are being prepared to present the material in a web-based format.

### Planned / Upcoming

- Interactive visual explanations of key ICT concepts.
- Self-assessment quizzes and exercises with feedback.
- Practical, project-style activities that apply the concepts.
- A cohesive visual design and navigation across all lessons.
- Revision materials to help students prepare for exams.

> [Coming Soon] — Additional features and content will be announced as they are built.

## Index Redesign Gallery

The main landing page (`index.html`) acts as a portfolio. Alongside it, **20 alternative designs**
live in [`index-redesigns/`](index-redesigns/), each preserving the brand colors
(`--primary:#3b5bff`, `--accent:#00c896`, `--bg:#0a0d1f`) and the bilingual EN/AR translation system.
They were produced as design explorations using different design systems (Stripe, Notion, Swiss, Bauhaus,
Memphis, Neubrutalism, Terminal/Mono, Scrollytelling, Duotone, Neumorphism, Editorial, etc.).

| # | Design | File |
|---|--------|------|
| 01 | Linear Minimal | `index-redesigns/01-linear-minimal.html` |
| 02 | Vercel Precision | `index-redesigns/02-vercel-precision.html` |
| 03 | Superhuman Glow | `index-redesigns/03-superhuman-glow.html` |
| 04 | Split Sticky | `index-redesigns/04-split-sticky.html` |
| 05 | Bento Grid | `index-redesigns/05-bento-grid.html` |
| 06 | Centered Flow | `index-redesigns/06-centered-flow.html` |
| 07 | Stripe Gradient | `index-redesigns/07-stripe-gradient.html` |
| 08 | Notion Doc | `index-redesigns/08-notion-doc.html` |
| 09 | Brutalist Editorial | `index-redesigns/09-brutalist-editorial.html` |
| 10 | Neon Glass | `index-redesigns/10-neon-glass.html` |
| 11 | Swiss | `index-redesigns/11-swiss.html` |
| 12 | Neubrutalism | `index-redesigns/12-neubrutalism.html` |
| 13 | Memphis | `index-redesigns/13-memphis.html` |
| 14 | Bauhaus | `index-redesigns/14-bauhaus.html` |
| 15 | Terminal Mono | `index-redesigns/15-terminal-mono.html` |
| 16 | Scrollytelling | `index-redesigns/16-scrollytelling.html` |
| 17 | Duotone | `index-redesigns/17-duotone.html` |
| 18 | Neumorphism | `index-redesigns/18-neumorphism.html` |
| 19 | Editorial Mag | `index-redesigns/19-editorial-mag.html` |
| 20 | Asymmetric Overlap | `index-redesigns/20-asymmetric-overlap.html` |

A live gallery of all 20 is reachable from the bottom of `index.html` (the "معرض التصاميم / DESIGN GALLERY" section).

## Project Status

**Under development.** The project is being built incrementally: structure and lesson content are being established, and new features will continue to be added over time. Lesson material and the overall platform may change and improve as development continues.

## Future Vision

In the long term, **Egypt ICT Hub** aims to grow into a broader educational hub for ICT in Egyptian schools — a place where students can explore the curriculum freely, reinforce their understanding with interactive practice, and build genuine digital skills. The vision is also to make the resources easily usable by teachers to support their classrooms.

These are aspirational goals; they do not yet exist in the project and will be implemented as the project matures.

## Tools

Helper scripts live in [`tools/`](tools/):

| Script | Purpose |
|--------|---------|
| `extract_en.py` | Extracts the English text (`data-en`) from each lesson HTML into `Secondary/src/.../extracted_en.md`. |
| `apply_json.py` | Applies a JSON translation/override file back into the lesson HTML attributes. |
| `list_lessons.py` | Lists lessons and reports which ones have `data-ar` / `data-en` coverage. |

These are local utilities for maintaining content; the site itself runs as static HTML (no build step).

## Contributing

Contributions are welcome! If you would like to help improve the content, fix issues, or suggest new lesson materials, feel free to get involved in the usual way for open educational projects on GitHub:

- Open an issue to report problems or share ideas.
- Submit a pull request to propose changes or improvements.
- Discuss curriculum and content direction with maintainers before making large changes.

> [Coming Soon] — Contribution guidelines will be added once they are finalized.

## License

License: Not specified yet.

## Disclaimer

This project is built as an **educational resource** for learning and revision. It is not an official channel of the Egyptian Ministry of Education. Curriculum alignment and content accuracy may evolve over time to better reflect the official syllabus, and no guarantee of completeness is made.