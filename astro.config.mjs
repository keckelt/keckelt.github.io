import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://eckelt.info',
  // One .html file per page, so the old /bookmarks.html URL keeps working.
  // GitHub Pages serves /research from research.html.
  build: { format: 'preserve' },
  // Old URLs that should keep working go here, e.g. '/publications': '/research'
  redirects: {},
});
