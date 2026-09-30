import './style.css';
import { renderFigure } from './figure';
import { renderTimeline, renderYearStack, stats } from './live';

const $ = (id: string) => document.getElementById(id);

const figure = $('figure');
if (figure) renderFigure(figure);

const stack = $('year-stack');
if (stack) renderYearStack(stack);

const timeline = $('timeline');
const ticks = $('timeline-ticks');
if (timeline && ticks) renderTimeline(timeline, ticks);

const { nights, acts, bands, venues } = stats();
const statLine = $('stat-line');
if (statLine) statLine.textContent = `${nights} nights · ${acts} acts · ${venues.length} venues`;

const statLineFull = $('stat-line-full');
if (statLineFull) statLineFull.textContent = `${nights} nights · ${acts} acts · ${bands.length} bands · ${venues.length} venues`;

const factLine = $('fact-line');
if (factLine) {
  factLine.textContent = `Most seen: ${bands[0][0]}, ${bands[0][1]} times. Second home: ${venues[0][0]}, ${venues[0][1]} nights.`;
}

console.log('Hello visitor 👋');
