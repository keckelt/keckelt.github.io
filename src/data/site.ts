// Main links, shared by the home card and the subpage header.
export const links = [
  { label: 'Tour', href: '/research#tour' },
  { label: 'Research', href: '/research' },
  { label: 'Making', href: '/live#making' },
  { label: 'Live', href: '/live' },
  { label: 'CV', href: '/CV.pdf' }, // Same URL as the old site
];

// Professional profiles, shown prominently in every footer
export const social = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/klaus-eckelt' },
  { label: 'Google Scholar', href: 'https://scholar.google.de/citations?user=_wMz-ewAAAAJ' },
];

// Code lives with the side projects only (/live#making), not in the footer
export const github = 'https://github.com/keckelt/';

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
