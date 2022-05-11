const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}
