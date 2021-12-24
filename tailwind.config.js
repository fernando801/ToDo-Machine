const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans': ['Poppins', 'sans-serif', ...defaultTheme.fontFamily.sans],
      'serif': ['serif', 'Georgia', ...defaultTheme.fontFamily.serif],
      'mono': ['monospace', 'SFMono-Regular', ...defaultTheme.fontFamily.mono],
    },
    extend: {},
  },
  plugins: [],
}
