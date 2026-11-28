
## 1-5 email lab phone layout + decoder compact (2026-11-28)
- Bilal: labs unreadable on phone (scaled 1280x720 canvas shrinks to ~0.3). Real phone layout instead, desktop canvas unchanged.
- JS (1-5 Email.html): fit() and the shared resize handler add/remove `.gm-phone` under 720px and skip transform/height; `@` decoder tile gets `.wb3-at`.
- CSS (page file): @media(max-width:719px) — canvas static/auto-height; sign-in card full-width; top bar wraps with full-width search row; 44px icon buttons; sidebar becomes horizontal chip strip (compose first); list stacked below; compose dock in-flow full-width; menu/quick-settings span the window; decoder: tiles content-sized (`flex:0 1 auto`), `@` a bare separator (no card), panel padding 22px->14px.
- Verified 320/390 phone + 1366 desktop; desktop canvas pixel-identical. Preview only, not published.

## 1-7 Meet lab phone layout (2026-11-28)
- Same phone rule as 1-5: under 720px the canvas stops scaling (class .ml-phone), desktop unchanged.
- CSS (page file) @media(max-width:719px): lobby/waiting compact; grid 2x2 with min 150px rows and 56px avatars; people/chat panels stack full-width below the grid; controls bar wraps (controls row, side buttons, code last full-width), 48px round buttons, hover tooltips off; present chooser options stack as rows; presenting state: stage + horizontal mini strip + wrapped band.
- Verified 390 phone through all states (lobby, pre-join, waiting, grid, people, chooser, presenting) + 1366 desktop pixel-identical (maxdiff 0). Preview only.
