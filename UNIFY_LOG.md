
## 1-5 email lab phone layout + decoder compact (2026-11-28)
- Bilal: labs unreadable on phone (scaled 1280x720 canvas shrinks to ~0.3). Real phone layout instead, desktop canvas unchanged.
- JS (1-5 Email.html): fit() and the shared resize handler add/remove `.gm-phone` under 720px and skip transform/height; `@` decoder tile gets `.wb3-at`.
- CSS (page file): @media(max-width:719px) — canvas static/auto-height; sign-in card full-width; top bar wraps with full-width search row; 44px icon buttons; sidebar becomes horizontal chip strip (compose first); list stacked below; compose dock in-flow full-width; menu/quick-settings span the window; decoder: tiles content-sized (`flex:0 1 auto`), `@` a bare separator (no card), panel padding 22px->14px.
- Verified 320/390 phone + 1366 desktop; desktop canvas pixel-identical. Preview only, not published.

## 1-7 Meet lab phone layout (2026-11-28)
- Same phone rule as 1-5: under 720px the canvas stops scaling (class .ml-phone), desktop unchanged.
- CSS (page file) @media(max-width:719px): lobby/waiting compact; grid 2x2 with min 150px rows and 56px avatars; people/chat panels stack full-width below the grid; controls bar wraps (controls row, side buttons, code last full-width), 48px round buttons, hover tooltips off; present chooser options stack as rows; presenting state: stage + horizontal mini strip + wrapped band.
- Verified 390 phone through all states (lobby, pre-join, waiting, grid, people, chooser, presenting) + 1366 desktop pixel-identical (maxdiff 0). Preview only.

## 1-6 Drive lab phone layout (2026-11-28)
- Same phone rule: under 720px the canvas stops scaling (class .dv-phone); desktop unchanged (maxdiff 0).
- CSS (page file) @media(max-width:719px): top bar wraps with full-width search; sidebar becomes a scrollable chip strip (+ New first, folders, storage); file row wraps with a tap-size share button; sync device chips stack full-width; toasts full-width; share dialog fits the screen with 22px radios.
- Verified 390 phone states: initial, upload animation to done, share dialog, editor-role select. 1366 desktop pixel-identical. Preview only.

## 1-8 Database Design (Access) — phone layout (preview/fixes-round2)
- Same phone pattern as 1-5/1-6/1-7: JS fit() toggles `ac-phone` on the canvas under 720px and skips the 1280x720 scale-down; `@media(max-width:719px)` restyles the app chrome.
- Phone: ribbon scrolls horizontally, view buttons + save-status wrap into full-width rows, design grid type cells become 44px tap targets, datasheet grid scrolls horizontally (rows min-width 560px inside an overflow-x:auto grid).
- Desktop unchanged: pixel-identical screenshots (PIL ImageChops bbox None) for empty/design/unsaved states; datasheet diff is only the record rows (walkthrough fix, not CSS).

## 1-10 Your Digital Project — phone pass (preview/fixes-round2)
- Lab (digitalproject) already stacks on phone (no scaled canvas); the one broken piece was the Sheets output table: `.s5-table` had `min-width:470px` + nowrap cells, so on a 312px screen the values column was clipped into horizontal scroll.
- Fix (page CSS only, `@media(max-width:719px)`): `.s5-table{min-width:0}` and cells `white-space:normal;min-width:0;padding:8px` — table now fits (280px at 390w) with both columns visible.
- Verified 320/360/390/430/768/1024: no page overflow, table fits. Desktop 1366 pixel-identical (PIL diff bbox None) for Docs/Sheets/Slides states.

## 1-5 Email lab realism (preview/labs-realistic)
- Rewrote the email lab chrome to mirror real Gmail: desktop web (multicolor envelope logo, search pill with icons, help/gear/apps/avatar, folder list with SVG icons, tabs Primary/Social/Promotions, message rows with checkbox/star/avatar/time, compose dock bottom-corner) and phone app (search pill + avatar, FAB compose, bottom bar Mail/Meet, full-screen compose sheet).
- Compose now closes on symbolic send like real Gmail; delivered row appears in inbox.
- SVG icons replace all emoji chrome. Verified 1366 and 390: no overflow, no console errors.

## 1-7 Meet lab realism (preview/labs-realistic)
- Colored per-person account avatars (Google-style palette) in call grid, filmstrip and people panel.
- Tile mic-off badges now dark like real Meet (red is only for control-bar off states); name labels float with text shadow instead of black pills; subtle tile borders.
- Verified 1366 and 390: no overflow, no console errors.
