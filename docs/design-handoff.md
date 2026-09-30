# eckelt.info — design handoff

Background, decisions and open work from the redesign sessions (September 2026), so work can continue in Claude Code. Read this before changing the design.

Design canvas with all mockups (rounds 1–5): https://claude.ai/artifact/EBCThrFDvDfAcWjqo2L5eM
Colour study ("Resolution in Colour"): https://claude.ai/artifact/AakzoQPgoekHWQfhDUggYb

## Update, 30 September 2026 (overrides older notes below)

- **Hero figure:** the home page uses **"1 · Embedding ↔ tissue"** (round 7, board MetEmbed), in `src/components/EmbeddingFigure.astro`. The linked-cohorts figure (`ResolutionFigure.astro`) is kept for the tour's cohort chapter.
- **Light theme:** warm white with a slate accent, from "Refined — warm white, black type, slate surname" (R1 in the colour study). This replaces the green. The dark theme stays as designed ("night mood").
- **Surname:** "Eckelt" is set in the accent colour on the home page and in the subpage header.
- **Subpages** take more from R1: the concert timeline sits in the slanted band.
- **Home** stays the minimal round 5 business card (board 16).
- **Hosting:** still the `gh-pages` branch (Pages source unchanged), built by the workflow on push and nightly.
- **Releases:** date tags `YYYY.MM.DD`. `2025.01.29` is the old site.
- **Account:** all work on this repo goes through the private `keckelt` GitHub account, never the work account.

---

## 1. Who the site is for

**Owner:** Klaus Eckelt.

- Engineering manager at datavisyn. Before that he was a product owner there for a year, and a software engineer for a year before that.
- Designs, builds and maintains several visual analytics apps in aevidence, for pharma R&D, across bioinformatics and cheminformatics.
- His passion is single-cell and spatial analysis; the resolution of that data amazes him.
- PhD in visual data science at JKU Linz, finishing end of September 2026. He no longer works at the university.
- Background arc: medical informatics with a medical-visualization focus (BSc: 3D-printing aortas / vascular printing), then information visualization and visual analytics (MSc, PhD).
- Side projects: CoralDuck (https://coralduck.eckelt.info), a serverless, DuckDB-in-the-browser rebuild of Coral for cohort comparison. He wants to start with art and music, especially electronic music production.
- Music is his passion. He tracks every concert he attends in a Google Sheet and visualizes it: https://observablehq.com/@keckelt/concerts

**Primary audience:** industry peers and recruiters. The site should still not feel business-like; the "Industry" variant (round 4, board 11) was rejected as too business-oriented.

**What the site must hold:**

- A business-card landing page.
- The academic work, which mostly stays as it is.
- A scrollytelling tour through the research that also shapes his industry work.
- Side projects: code now, art and music later.
- The concert log.

## 2. Design direction (settled)

**Inspirations he gave:**

- Jeffrey Zeldman's talk on deliberate use of white space. His own vis tools are very dense, and the site should be the opposite.
- Unibody 8 (Adobe Fonts), a pixel font that "speaks to his inner nerd".
- Geist, which he used in a recent web app.
- Diagonal layouts, as in "Create diagonal layouts like it's 2020" on CSS-Tricks.

**Settled concept: the diagonal figure, "Linked cohorts."** It evolved over several rounds:

- It started as "Resolution": one shape at two resolutions, with coarse pixels above the diagonal and fine dots below.
- The shape is now **tissue with regions** (round 6, board D): an irregular section with rim, middle and core.
- The metaphor is now **linked cohorts** (round 7, board 7), combining "embedding ↔ tissue" and "cohort A ↔ B", the two metaphors he liked most.

How it works:

- Every cell appears twice: as a dot in a UMAP-style embedding above the diagonal, and at its position in the tissue below.
- Cell types are mixed differently in the rim, middle and core.
- **Cohort A** (accent colour) is picked in the tissue: a dashed circle around one spatial patch. Its cells scatter across all clusters in the embedding.
- **Cohort B** (ink colour) is picked in the embedding: a dashed outline around one cluster. Its cells spread across the tissue, mostly the core.
- Other cells are drawn in `--faint`.
- Captions: "Embedding · Two cohorts, two spaces · Tissue".

The homepage shows the **static "both" state** (`src/components/ResolutionFigure.astro`, generated at build time). The **interactive version** (switch between both, A only and B only, with composition bars for each cohort) is planned as the cohort chapter of the tour; the prototype is board 7 on the canvas.

**Favicon:** a pixel "K" monogram (`public/favicon.svg`, 10×10 grid, switches colour with the system theme).

**Other ideas explored but not chosen for the hero:** circle, UMAP-only, aortic arch (could open the tour's "Organs" chapter), single cell, sound wave (could suit /live), and the metaphors raw ↔ analysed, code ↔ picture (ASCII), dense ↔ quiet and day ↔ night. He said other pages don't need a figure.

**Landing page:** the "Quiet" variant (round 4, board 15 / round 5, board 16) is his favourite. It works like a business card: name, one sentence, the figure and one row of links, with everything else on subpages.

**Themes:**

- Light is the default.
- Dark (board 14/17, "night mood") is the dark theme. It nods to his synthwave/darksynth taste, e.g. Perturbator.

**What he liked:**

- Liner Notes (round 1): the white space.
- The Night Drive diagonals, but only the diagonals.
- The Pixel Slope header: the name huge in Silkscreen, on two lines.
- Resolution: the best concept.
- Quiet: his favourite.
- The Personal variant's "making things" section and music timeline.

**What he rejected, so don't bring these back:**

- Tracklist and Night Drive as full concepts.
- The Cohorts interactive as a homepage.
- Slant, the rest of Pixel Slope, and Cumulative.
- Too much business tone.
- The academic variant's rigid publication table sitting above the angled band.
- On the Live page: black squares per night (felt weird), and detailed top-artist or top-venue lists (too much detail).
- Big hero treatment on subpages. The Live page first looked like a landing page; subpages need a small header.

## 3. Design tokens

Everything lives in `src/styles/global.css` as CSS variables.

| Token | Light | Dark |
| --- | --- | --- |
| `--bg` | #F6F5F0 (warm white) | #0E0E12 |
| `--ink` | #141416 | #ECEAF1 |
| `--muted` | #4F5552 | #9C98AB |
| `--accent` | #4E6A5E (slate) | #3DE0B0 (mint) |
| `--band` (diagonal band) | #EAEDE6 | #17171E |
| `--rule` | #DEDDD6 | #2A2A33 |
| `--faint` (cells outside a cohort) | #D2D2CC | #34343D |
| `--cell-1/2/3` | #4E6A5E / #A9C4B6 / #141416 | #3DE0B0 / #1F7A62 / #ECEAF1 |

**Type:**

- **Silkscreen** stands in for Unibody 8, and he likes it. It's used for the name (uppercase, 104 px on desktop, two lines), page titles (64 px), small labels, captions and axis ticks.
- **Geist** is the body face: 300 weight for large intro text, 500 for titles.
- **Geist Mono** is used for small meta lines.
- Unibody 8 remains an option via an Adobe Fonts web kit; check the license first.

**Layout:**

- Generous white space, with gutters of about 120 px on desktop.
- A 12-column grid, left-aligned.
- Diagonal bands are done with `clip-path` (`.band` class, `--slant`).
- Thin rules only where they structure content.
- One accent colour per page.

## 4. Site structure

| Route | Content | Board |
| --- | --- | --- |
| `/` | Business card: name, sentence, figure, links (Tour, Research, Making, Live, CV) | 16, 17, 18 (phone) |
| `/research` | Small header; diagonal tour band; papers grouped by year in two loose columns (no table rules); teaching | 20 |
| `/live` | Small header; concert timeline; Making things (CoralDuck, first artwork, first track) | 19 |
| `/tour` | **Not built yet.** The scrollytelling centrepiece | — |
| CV / work | **Not built yet.** Currently links to `/cv.pdf` | — |

**The tour arc ("zooming in"):** spatial → abstract → spatial again. Each chapter has a scale bar.

1. Organs: vascular printing, BSc 2017 (cm)
2. Tables: MSc 2018, TourDino 2019 (rows)
3. Cohorts: Coral 2021, Kokiri 2022 (patients)
4. Structure: embeddings 2022, Marjorie 2023 (points)
5. Process: Loops 2024 (steps)
6. Cells in space: datavisyn, now (microns)

**Tour idea from round 1, not yet built:** use the concert data as a running example to explain Coral and Kokiri. Treat groups of concerts (by year, say) as cohorts, then colour them by a feature and ask what separates them. A prototype exists as board 4 "Cohorts" (step 1: concerts; step 2: cohorts; step 3: characterize). He rejected it as a homepage, not necessarily as a tour chapter; ask before using it.

**Papers** (`src/content/papers/`):

- Loops, Iguanodon, Marjorie (IEEE TVCG 2024)
- Embedding structure (TVCG 2023)
- Kokiri (VIS BioAI Workshop 2022, PDF at `/papers/2022_kokiri.pdf`)
- Coral (Bioinformatics 2021)
- TourDino (EuroVA 2019)

The old site (eckelt.info) also lists posters, theses and talks. Keep the old `/papers/...pdf` URLs working.

**Teaching:**

- JKU Linz (2018–2023): Visual Analytics, Information Visualization, Computer Graphics, Explainable AI.
- Imperial College Business School (2019–2021): Visualisation in the Business Analytics MSc.

## 5. Concert data

- **Source:** a Google Sheet (https://docs.google.com/spreadsheets/d/1t8yUN7srGyxqWzXTJfoeZOGyyF8iK6DNl-qqL-8mWUI). Tabs seen: Concerts, 2024, Bands, Festivals.
- **Columns in the main tab:** band, date (DD.MM.YYYY), venue, city, price, act (Headliner / Support / Special Guest).
- **Seed data:** only the first 99 rows of the main tab (2004–2023) were readable. They are the seed in `src/data/concerts.json`: 61 nights, 99 acts, 77 bands, 17 venues. The 2024 tab and festivals are not included yet.
- **Known quirks:**
  - One Scorpions row has Burg Clam in "Vienna"; all other Burg Clam rows say Klam.
  - "Tabakfrabik" should be Tabakfabrik.
  - "Heavyy Tiger" should be Heavy Tiger.
  - The two typos are fixed on import (`FIXES` in `scripts/fetch-concerts.mjs`); the Scorpions city is not.
- **Live page visualization (approved direction):** a light, airy timeline with real dates on the x-axis. Each night is a small column of dots, one dot per act: filled for headliner, ring for support. Hovering shows date, venue and bands. There is one stats line and no ranking lists.

## 6. Tech decisions

- **Framework:** Astro 7 as a static site with no JS by default. The figure and timeline are generated as SVG at build time.
- **Fonts:** self-hosted via `@fontsource-variable/geist`, `@fontsource-variable/geist-mono` and `@fontsource/silkscreen`.
- **Theme:** `prefers-color-scheme`, with a ◐ toggle that is stored in `localStorage` and applied before first paint by an inline script.
- **Hosting:** GitHub Pages via Actions (`.github/workflows/deploy.yml`), triggered by push, nightly cron and a manual run. `public/CNAME` = eckelt.info. He also hosts CoralDuck on GitHub Pages.
- **Concert pipeline:** published-to-web CSV URLs go in the `CONCERTS_CSV_URLS` secret. `npm run build` fetches them before building; without the secret, the committed JSON is used.
- **Tour tech (planned):** Scrollama or `IntersectionObserver` for steps; D3 or Observable Plot for visuals. He knows both, plus DuckDB.
- **Quality floor:** responsive to phone, visible focus, reduced motion respected, contrast OK in both themes.

## 7. Status and next steps

**Done:** the starter repo, with `/`, `/research`, `/live`, tokens, dark theme, the linked-cohorts figure, K favicon, timeline, concert fetch script and deploy workflow. It builds, but has not yet been visually checked in a browser.

**Next, roughly in order:**

1. Run locally and check spacing and fonts against boards 16–20; fix differences.
2. Copy `/papers` from the old site; add `public/cv.pdf`; add PDF or DOI links to the papers; add redirects for old URLs.
3. Publish the sheet tabs as CSV and add the secret. Include the 2024 tab and decide how festivals appear.
4. Build `/tour`, the scrollytelling "zooming in" arc (section 4). Use the interactive linked-cohorts figure for the cohort chapter. Ask Klaus which other chapters get interactive visuals.
5. Decide on a CV/work page: a simple page, not business-heavy.
6. Add an OG image, 404 page and privacy-friendly stats (the old site used counter.dev).
7. Optionally replace the generated figure with a real spatial dataset (true cell positions, types and UMAP coordinates).
8. Later, fill the art and music slots on `/live#making`.

**Working with Klaus:** show options side by side, then let him cherry-pick. He gives clear likes and dislikes. Keep it minimal and airy; when in doubt, remove detail.
