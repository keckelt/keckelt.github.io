// Hero figure: one tissue shape drawn at two resolutions, split by a diagonal.
// Above the diagonal it is 20 px blocks, below it single cells.
import { svg } from './svg';

const W = 560;
const H = 480;
const PALETTE = ['var(--accent)', 'var(--accent-soft)', 'var(--ink)'];

// Same pseudo-random sequence on every load, so the figure never changes
const rnd = (i: number) => {
  const x = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
};

const inside = (x: number, y: number) => {
  const dx = x - 280;
  const dy = y - 240;
  const a = Math.atan2(dy, dx);
  const r = 200 + 26 * Math.sin(3 * a + 0.6) + 16 * Math.cos(5 * a);
  const d = Math.sqrt(dx * dx * 0.85 + dy * dy * 1.15);
  return d < r && Math.hypot(x - 330, y - 200) >= 46;
};

const above = (x: number, y: number) => x / W + y / H < 1;

export function renderFigure(host: Element) {
  const root = svg('svg', { viewBox: `0 0 ${W} ${H}`, 'aria-hidden': 'true' });

  for (let gx = 0; gx < 28; gx++) {
    for (let gy = 0; gy < 24; gy++) {
      const x = gx * 20 + 10;
      const y = gy * 20 + 10;
      if (inside(x, y) && above(x + 10, y + 10)) {
        root.append(svg('rect', { x: gx * 20 + 1, y: gy * 20 + 1, width: 18, height: 18, fill: 'var(--ink)' }));
      }
    }
  }

  let count = 0;
  for (let i = 0; i < 2600 && count < 900; i++) {
    const x = rnd(i) * 556;
    const y = rnd(i + 5000) * 476;
    if (!inside(x, y) || above(x, y)) continue;
    const t = rnd(i + 9000);
    const fill = t < 0.62 ? PALETTE[0] : t < 0.88 ? PALETTE[1] : PALETTE[2];
    root.append(svg('circle', { cx: (x + 2.5).toFixed(1), cy: (y + 2.5).toFixed(1), r: 2.5, fill }));
    count++;
  }

  root.append(svg('line', { x1: 0, y1: H, x2: W, y2: 0, stroke: 'var(--accent)', 'stroke-width': 1, 'vector-effect': 'non-scaling-stroke' }));
  host.replaceChildren(root);
}
