# eckelt.info

Static site built with [Astro](https://astro.build), deployed to GitHub Pages.

## Run it

```sh
npm install
npm run dev          # http://localhost:4321
npm run build        # fetch concerts (if configured) + build to dist/
```

Needs Node 22.12 or newer.

## Where things live

| What | Where |
| --- | --- |
| Colours, fonts, dark theme | `src/styles/global.css` (CSS variables) |
| Links, tour chapters | `src/data/site.ts` |
| Papers | `src/content/papers/*.md`, one file per paper |
| Concert data | `src/data/concerts.json` (generated) |
| Embedding ↔ tissue figure (hero) | `src/components/EmbeddingFigure.astro` |
| Linked-cohorts figure (for the tour) | `src/components/ResolutionFigure.astro` |
| Favicon (pixel K) | `public/favicon.svg` |
| Concert timeline | `src/components/ConcertTimeline.astro` |
| Old PDFs, CV | `public/papers/`, `public/CV.pdf` (same URLs as the old site) |

Pages: `/` (business card), `/research`, `/live`, `/bookmarks.html`.

## Dark theme

Follows the system setting by default. The ◐ button overrides it and remembers the choice in `localStorage`.

## Concert data from the Google Sheet

1. In the sheet: File → Share → Publish to web. Publish each tab you want (e.g. Concerts, 2024) as CSV and copy the URLs.
2. Locally: create `.env` with `CONCERTS_CSV_URLS=url1,url2`, then `npm run concerts`.
3. On GitHub: add the same value as the repository secret `CONCERTS_CSV_URLS`.

The workflow rebuilds nightly and on every push, so the site follows the sheet within a day. Use "Run workflow" in the Actions tab to refresh immediately.

Column names are matched in `scripts/fetch-concerts.mjs` (`COLUMNS`); adjust them if your headers differ. Known typos are fixed on import via `FIXES`.

The committed `concerts.json` contains the first 99 rows of the sheet as a seed, so the site builds without the secret.

## Deploy

Every push to `main` (plus a nightly run) builds the site and pushes `dist/` to the `gh-pages` branch, which GitHub Pages serves. `public/CNAME` keeps the custom domain eckelt.info.

## Releases

Releases use date tags (`YYYY.MM.DD`; add `.1`, `.2` … for a second release on the same day):

```sh
git tag -a 2026.09.30 -m "Short description"
git push origin 2026.09.30
gh release create 2026.09.30 --verify-tag --generate-notes
```

`2025.01.29` is the last version of the old Vite + Tailwind site.

## Git identity

This is a personal project: commit and push as `keckelt` with the private email, never the work account. The remote uses the `github-private` SSH host alias for that.
