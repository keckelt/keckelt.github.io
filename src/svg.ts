const NS = 'http://www.w3.org/2000/svg';

// Create an SVG element with attributes, optionally with a hover title
export function svg(tag: string, attrs: Record<string, string | number>, title?: string) {
  const el = document.createElementNS(NS, tag);
  for (const [key, value] of Object.entries(attrs)) el.setAttribute(key, String(value));
  if (title) {
    const t = document.createElementNS(NS, 'title');
    t.textContent = title;
    el.append(t);
  }
  return el;
}
