# Year 1 repair batch 2

Prepared22 November2026. Local review only. No push, merge or publication.

Snapshot: cd084eb. Any later12-1 audit changes are documented separately in YEAR1-TEXTBOOK-AUDIT.md.

## Scope

Three lesson HTML files only, based on main commit1183c14. This batch does not include pending batch1, Unit11 or preparatory work.

| Lesson | Prepared change | Source |
|---|---|---|
|12-1 Algorithm | Seven-symbol activity-diagram key with original English labels, Arabic explanations and drawn symbols. Added the textbook alias for Flowchart. | Arabic168; English155, both checked visually. |
|13-5 Creating Dynamic Web Pages | Fixed the malformed Arabic verb in the background-colour button outcome. No example or interaction changed. | Arabic205–206; English189–190 physical PDF pages. |
|13-11 Block Breaker Summary | Fixed the reflection verb in five translated fields and their initial text. | Arabic215–216; English199–200 physical PDF pages. |

The activity key keeps Start, End, Control, Transition, Conditional branch, Parallel process and Send. Its short Arabic explanations are added teaching help, not claimed as official Arabic labels. English terms stay together in Arabic layout. The key uses two columns on desktop and one on narrow screens.

## Checks completed

-18 browser cases: all three lessons, AR/EN, widths360/390/1440.
- Language initialization and toggle; initial quiz entry; no runtime errors; no page-wide horizontal overflow.
- All seven new symbol labels present, with no measured text clipping.
- Every original English translation field retained, and all original scripts byte-identical.
- All three inline scripts pass the JavaScript syntax check.
- Inspected source-book pixels and the final mobile AR/EN key, desktop key and two Arabic wording screenshots.
- Git whitespace check passes.

These are bounded regression checks, not a completed textbook exercise/code/answer-key audit.

## Still being audited

- The remaining lesson terminology and aliases. Original36 AR/4 EN figures are not current outstanding counts.
- All62 lessons' exercises, answer keys, runnable examples and diagrams.
-12-1's pre-existing flowchart symbol styling and ATM example need closer diagram/role checking. EN155 interchanges rectangle/parallelogram Data/Process labels; AR168 has the conventional pairing. Do not copy the English source error.
-13-5 has a pre-existing stray logo-attribute fragment in its navigation. It is visible in the baseline and was not introduced or changed here.
- Printed English page numbers can differ from physical PDF positions. Audit each citation rather than assuming a global offset. The13-5 exercise headings and footer already disagree about page numbers.

## Review evidence

The review ZIP contains these three HTML files, this note, the18-case test record and selected inspected screenshots. It is a review package, not a published site.
