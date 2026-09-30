import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const page = (path) => resolve(import.meta.dirname, path);

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: page('index.html'),
        live: page('live/index.html'),
        research: page('research/index.html'),
        bookmarks: page('bookmarks.html'),
      },
    },
  },
});
