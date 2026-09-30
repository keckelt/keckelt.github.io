// Main links: the professional profiles, right under the intro on the home page
export const primary = [
  { label: 'CV', href: '/CV.pdf', external: false }, // Same URL as the old site
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/klaus-eckelt', external: true },
  { label: 'Google Scholar', href: 'https://scholar.google.de/citations?user=_wMz-ewAAAAJ', external: true },
];

// Secondary links: the sections of the site
export const sections = [
  { label: 'Research', href: '/research' }, // Papers and the tour through them
  { label: 'Making', href: '/making' },     // Side projects
  { label: 'Live', href: '/live' },         // Concert log
];

// Profiles shown in the footer of every subpage
export const social = primary.filter((l) => l.external);

// Code lives with the side projects only (/making), not in the footer
export const github = 'https://github.com/keckelt/';

// Side projects on /making, newest first. Add new ones here.
export const projects = [
  {
    title: 'CoralDuck',
    text: 'Cohort comparison, serverless: DuckDB in the browser.',
    href: 'https://coralduck.eckelt.info',
    links: [],
  },
  {
    title: 'WordFest',
    text: 'Word clouds that read like a festival line-up: words stay in reading direction instead of being rotated.',
    href: 'https://github.com/keckelt/wordfest',
    links: [
      { label: 'GitHub', href: 'https://github.com/keckelt/wordfest' },
      { label: 'npm', href: 'https://www.npmjs.com/package/wordfest' },
    ],
  },
];

export const email = 'klaus@eckelt.info';

// The research tour, from organs to cells. `bar` is the scale-bar width in px.
export const tour = [
  { title: 'Organs', meta: 'Vascular printing, BSc 2017', scale: 'CM', bar: 44 },
  { title: 'Tables', meta: 'MSc 2018, TourDino 2019', scale: 'ROWS', bar: 36 },
  { title: 'Cohorts', meta: 'Coral 2021, Kokiri 2022', scale: 'PATIENTS', bar: 28 },
  { title: 'Structure', meta: 'Embeddings 2022, Marjorie 2023', scale: 'POINTS', bar: 20 },
  { title: 'Process', meta: 'Loops 2024', scale: 'STEPS', bar: 12 },
  { title: 'Cells in space', meta: 'datavisyn, now', scale: 'MICRONS', bar: 4 },
];
