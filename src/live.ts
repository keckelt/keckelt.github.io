// Concert charts: the small per-year stack on the home page and the full timeline on /live
import { NIGHTS, type Night } from './data/concerts';
import { svg } from './svg';

const FIRST_YEAR = 2004;
const LAST_YEAR = 2023;

const parseDate = ([date]: Night) => {
  const [d, m, y] = date.split('.').map(Number);
  return { d, m, y };
};

const label = (n: Night) => `${n[0]} · ${n[1]} — ${n[2].map(([name]) => name).join(', ')}`;

const countBy = (keys: string[]) => {
  const counts = new Map<string, number>();
  for (const k of keys) counts.set(k, (counts.get(k) ?? 0) + 1);
  return [...counts].sort((a, b) => b[1] - a[1]);
};

export function stats() {
  const acts = NIGHTS.reduce((sum, n) => sum + n[2].length, 0);
  const bands = countBy(NIGHTS.flatMap((n) => n[2].map(([name]) => name)));
  const venues = countBy(NIGHTS.map((n) => n[1]));
  return { nights: NIGHTS.length, acts, bands, venues };
}

// One column per year, one block per night
export function renderYearStack(host: Element) {
  const years = LAST_YEAR - FIRST_YEAR + 1;
  const colW = 26;
  const gap = 4;
  const blockH = 8;
  const W = years * colW + (years - 1) * gap;
  const H = 130;
  const root = svg('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': 'Concerts per year, 2004 to 2023' });

  for (let i = 0; i < years; i++) {
    const nights = NIGHTS.filter((n) => parseDate(n).y === FIRST_YEAR + i);
    nights.forEach((n, j) => {
      root.append(svg('rect', { x: i * (colW + gap), y: H - (j + 1) * (blockH + 2) + 2, width: colW, height: blockH, fill: 'var(--ink)' }, label(n)));
    });
  }
  host.replaceChildren(root);
}

// Timeline of every night; filled dots are headliners, rings are support acts
export function renderTimeline(host: Element, ticksHost: Element) {
  const W = 1040;
  const H = 150;
  const t0 = Date.UTC(FIRST_YEAR, 0, 1);
  const t1 = Date.UTC(LAST_YEAR + 1, 0, 1);
  const toX = (t: number) => ((t - t0) / (t1 - t0)) * (W - 10);
  const root = svg('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': 'Timeline of every concert since 2004' });

  let prevX = -100;
  for (const n of NIGHTS) {
    const { d, m, y } = parseDate(n);
    // Nudge nights that fall close together so their dots do not overlap
    const x = Math.max(toX(Date.UTC(y, m - 1, d)), prevX + 10);
    prevX = x;
    n[2].forEach(([, headliner], i) => {
      const cy = H - (10 + i * 11);
      const dot = headliner
        ? svg('circle', { cx: x + 4, cy, r: 4, fill: 'var(--accent)' }, label(n))
        : svg('circle', { cx: x + 4, cy, r: 3.25, fill: 'var(--paper)', stroke: 'var(--accent)', 'stroke-width': 1.5 }, label(n));
      root.append(dot);
    });
  }
  host.replaceChildren(root);

  const ticks = [2004, 2008, 2012, 2016, 2020, 2024].map((year) => {
    const span = document.createElement('span');
    span.textContent = String(year);
    span.style.left = `${((toX(Date.UTC(year, 0, 1)) + 4) / W) * 100}%`;
    return span;
  });
  ticksHost.replaceChildren(...ticks);
}
