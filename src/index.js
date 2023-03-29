const plugin = require('tailwindcss/plugin');
const base = require('../dist/output');

module.exports = plugin(function({ addUtilities, addBase, addComponents }) {
  console.log('[INIT] Le don vert')
  addUtilities(base);
  console.log('[INIT] Le don vert (done)');
});