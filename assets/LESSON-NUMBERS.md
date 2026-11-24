# Lesson number tabs

The 96 implemented preparatory, first-secondary and second-secondary lessons load:

- `css/lesson-numbers.css` for tab shape, size, colour and spacing.
- `js/lesson-numbers.js` for headings created by quiz renderers and language changes.

Edit the variables in the shared CSS instead of adding badge styles to individual lessons. Answer options, answer slots, navigation section numbers, data values and counters are separate. Keep them unchanged.

For a new lesson, load both assets in the document head using paths relative to the lesson. Do not inject these tags into HTML strings used by teaching demos. Third-secondary lessons and empty placeholders are not included.

Check Arabic and English at 390px after changing the shared files. Quiz answers, quiz restarts, language switches, ordering controls and ATM examples must still work. For the bilingual ATM steps, language data attributes belong on the inner text span, not the wrapper that owns the number badge.
