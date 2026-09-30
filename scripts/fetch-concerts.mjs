// Pulls the concert Google Sheet (published as CSV) into src/data/concerts.json.
//
// 1. In the sheet: File → Share → Publish to web → pick a tab → CSV. Copy the URL.
// 2. Put one or more URLs (comma-separated) in the CONCERTS_CSV_URLS env var
//    (locally in .env, on GitHub as a repository secret).
// Without the variable, the committed concerts.json is kept as-is.
import { writeFile } from 'node:fs/promises';

const OUT = new URL('../src/data/concerts.json', import.meta.url);
const urls = (process.env.CONCERTS_CSV_URLS ?? '').split(',').map((s) => s.trim()).filter(Boolean);

// Header names in the sheet → fields. Adjust if your column titles differ.
const COLUMNS = {
  band: ['band', 'artist'],
  date: ['date', 'datum'],
  venue: ['venue', 'location'],
  city: ['city', 'stadt'],
  act: ['act', 'type', 'slot', 'role'],
};

// Small fixes for typos in the sheet, applied on import.
const FIXES = { Tabakfrabik: 'Tabakfabrik', 'Heavyy Tiger': 'Heavy Tiger' };
const fix = (s) => FIXES[s] ?? s;

function parseCSV(text) {
  const rows = []; let row = []; let cell = ''; let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (ch === '"') quoted = false;
      else cell += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ',') { row.push(cell); cell = ''; }
    else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && text[i + 1] === '\n') i++;
      row.push(cell); rows.push(row); row = []; cell = '';
    } else cell += ch;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  return rows;
}

function toISO(d) {
  const m = d.trim().match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
  if (m) return `${m[3]}-${m[2].padStart(2, '0')}-${m[1].padStart(2, '0')}`;
  return /^\d{4}-\d{2}-\d{2}$/.test(d.trim()) ? d.trim() : null;
}

if (!urls.length) {
  console.log('[concerts] CONCERTS_CSV_URLS not set — keeping src/data/concerts.json');
  process.exit(0);
}

const nights = new Map();
for (const url of urls) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`[concerts] ${res.status} fetching ${url}`);
  const [header, ...rows] = parseCSV(await res.text());
  const idx = Object.fromEntries(Object.entries(COLUMNS).map(([key, names]) =>
    [key, header.findIndex((h) => names.includes(h.trim().toLowerCase()))]));
  if (idx.band < 0 || idx.date < 0 || idx.venue < 0) {
    throw new Error(`[concerts] Could not find band/date/venue columns in: ${header.join(', ')}`);
  }
  for (const r of rows) {
    const band = fix(r[idx.band]?.trim() ?? '');
    const date = toISO(r[idx.date] ?? '');
    if (!band || !date) continue;
    const venue = fix(r[idx.venue]?.trim() ?? '');
    const key = `${date}|${venue}`;
    if (!nights.has(key)) nights.set(key, { date, venue, city: fix(r[idx.city]?.trim() ?? ''), acts: [] });
    const act = idx.act >= 0 ? r[idx.act].trim().toLowerCase() : '';
    nights.get(key).acts.push({ band, headliner: act !== 'support' });
  }
}

const out = [...nights.values()].sort((a, b) => a.date.localeCompare(b.date));
await writeFile(OUT, JSON.stringify(out, null, 1) + '\n');
console.log(`[concerts] wrote ${out.length} nights`);
