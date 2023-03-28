/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './preview/index.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('../src')
  ],
}
