# Secondary textbook review build

Twenty new bilingual topic pages: 7 Year 2 Term 1 and 13 Year 3 topics. No Year 1 page, home page, secondary stage index or deployment configuration is changed. Open `secondary-textbook-preview.html` for a review-only directory. The proposed lesson IDs preserve textbook topic order; Year 3 IDs are site numbering.

## Scope and source handling

Year 2 uses the supplied Arabic and English Term 1 books. No Term 2 content is claimed. Year 3 Unit 1 was supplied only in Arabic; its English is visibly marked as a draft teaching translation. Unit 2 was supplied only in English; Arabic is visibly marked likewise. The Unit 2 contents has 2015–2016 enrichment notes for all three PHP topics despite the 2026–2027 cover; those pages show the discrepancy without asserting current curriculum policy.

Lessons are adapted explanations, not literal transcriptions. Figures and key listings were checked in the supplied PDFs: dictionary homepage, the five-field Terms schema, converter controls/code, AND/OR/NOT symbols and the enrichment contents. Source page ranges are printed textbook pagination and appear on each lesson. The source workbook is not supplied, so its detailed activity procedures are not fabricated.

## Interaction and runtime

Every lesson has a four-step play/pause/replay demonstration, two checked three-part practice tasks, and six questions with explanations, skip and reset. Language changes preserve selections and results. Only language preference persists after reload. Practice data is dummy and memory-only.

Workbenches cover navigation, exact textbook schema with key checks, isolated HTML markup preview, connection outcomes, arithmetic/branch results, dummy insertion, number conversion with trace, gate truth-table predictions and an applied-decision boundary test. PHP gate lists update output after Apply; VB.NET models update on input events. NOT VB starts On with output Off to match the source. Gate signals always flow left-to-right, including on Arabic pages.

These are static browser teaching models, not PHP/MySQL/VB.NET runtimes or installers. Converter practice intentionally limits input to non-negative integers 0–65535. Its From/To controls are a teaching rearrangement, not an exact copy of either source interface. It rejects invalid digits, empty values and overflow rather than partially parsing them.

The editable HTML preview strips active/unapproved markup and all attributes, then displays in an empty-sandbox frame with restrictive CSP. It permits neither scripts, uploads, external resources nor clickable destinations.

VB.NET project excerpts abbreviate event parameter lists with (...), explicitly marked, and are not compilation-ready files. PHP snippets are explanatory excerpts, not a production website. Legacy mysql_* source calls are labeled removed; current corrections cite official PHP/MySQL manuals. POST is not described as encryption. Raw SQL concatenation, unvalidated file uploads, root/blank production credentials and error suppression are not recommended.

## Maintenance

The initial two-page pilot is standalone HTML with its own Unit 1 README. The remaining 18 pages are generated from `scripts/secondary-lessons/lesson-data.json`, `lesson.css`, `lesson.js` and `build.py`. Run `python scripts/secondary-lessons/build.py` from any directory to regenerate them. Output stays standalone to match existing lessons. Do not edit generated pages without updating their source. The review directory is deliberately separate from the live stage index.

## Review map

- Year 2, 1-1: Conceptual Introduction to the Project
- Year 2, 1-2: Planning the Illustrated Computer Terms Dictionary
- Year 2, 2-1: Designing the Website Pages
- Year 2, 2-2: Creating the Database
- Year 2, 3-1: HTML, PHP and Website Design
- Year 2, 3-2: PHP Operators and Conditional Statements
- Year 2, 3-3: The Add_Term.php Page
- Year 3, 1-1: Number Systems
- Year 3, 1-2: Building the Converter with VB.NET
- Year 3, 1-3: Building the Converter with PHP
- Year 3, 2-1: The AND Logic Gate
- Year 3, 2-2: Building an AND-Gate Simulation with VB.NET
- Year 3, 2-3: Building an AND-Gate Simulation with PHP
- Year 3, 2-4: The OR Logic Gate
- Year 3, 2-5: Building an OR-Gate Simulation with VB.NET
- Year 3, 2-6: Building an OR-Gate Simulation with PHP
- Year 3, 2-7: The NOT Logic Gate
- Year 3, 2-8: Building a NOT-Gate Simulation with VB.NET
- Year 3, 2-9: Building a NOT-Gate Simulation with PHP
- Year 3, 2-10: Logic Gates in Everyday Decisions

## Verification

Checked in headless Chrome at 360, 390 and 1440 pixels in Arabic and English. All 20 pages have six explained quiz questions (120 total); the 18 generated pages passed demo controls/autoplay, incomplete/correct/wrong/reset tasks, quiz correct/wrong/skip/reset and state-preserving language tests. The two pilot pages passed the same core flows separately. No page-level JavaScript errors or horizontal overflow in those checks. All AR/EN overview sheets were visually inspected, along with representative workbench, result and quiz states. Keyboard activation, reduced-motion styling, nine converter base pairs, gate truth states, PHP Apply timing, age boundaries and HTML-preview sanitization were checked. Relative lesson/directory links resolve locally. These are local browser checks, not a full assistive-technology or production-server audit.
