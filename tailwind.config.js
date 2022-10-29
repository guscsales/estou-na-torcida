const { thonUI, thonUIContent } = require('thon-ui/plugin');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['app/**/*.tsx', thonUIContent()],
  jit: true,
  theme: {
    extend: {
      colors: {
        primary: colors.green[500],
      },
      dropShadow: {
        green: '2px 2px 1px #047857',
      },
    },
  },
  plugins: [thonUI()],
};
