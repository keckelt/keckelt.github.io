# eckelt.info

Personal site of Klaus Eckelt. Astro 7 static site, deployed to GitHub Pages.

Read `docs/design-handoff.md` first: it has the background, the settled design, what was rejected, and the next steps. Read `README.md` for commands and setup.

- Design tokens: `src/styles/global.css`. Use the CSS variables; never hard-code colours (dark theme depends on them).
- Keep pages minimal and airy. Subpages use `SubHeader`, never a big hero.
- No client JS unless a page truly needs interaction (the planned `/tour`).
- Keep old `/papers/*.pdf` URLs working.
