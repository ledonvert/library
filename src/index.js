const plugin = require('tailwindcss/plugin');
const base = require('../dist/output');

module.exports = plugin(function({ addUtilities, addBase, addComponents }) {
  addUtilities(base);
});