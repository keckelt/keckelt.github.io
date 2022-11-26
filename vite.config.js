// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        bookmarks: resolve(__dirname, 'bookmarks.html'),
        jumanji: resolve(__dirname, 'jumanji.html')
      }
    }
  }
})
