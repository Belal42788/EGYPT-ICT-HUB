
## 1-5 email lab phone layout + decoder compact (2026-11-28)
- Bilal: labs unreadable on phone (scaled 1280x720 canvas shrinks to ~0.3). Real phone layout instead, desktop canvas unchanged.
- JS (1-5 Email.html): fit() and the shared resize handler add/remove `.gm-phone` under 720px and skip transform/height; `@` decoder tile gets `.wb3-at`.
- CSS (page file): @media(max-width:719px) — canvas static/auto-height; sign-in card full-width; top bar wraps with full-width search row; 44px icon buttons; sidebar becomes horizontal chip strip (compose first); list stacked below; compose dock in-flow full-width; menu/quick-settings span the window; decoder: tiles content-sized (`flex:0 1 auto`), `@` a bare separator (no card), panel padding 22px->14px.
- Verified 320/390 phone + 1366 desktop; desktop canvas pixel-identical. Preview only, not published.
