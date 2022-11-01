const { thonUI, thonUIContent } = require('thon-ui/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['app/**/*.tsx', thonUIContent()],
  jit: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#10B981',
        green: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
      },
      dropShadow: {
        green: '2px 2px 1px #047857',
      },
      backgroundImage: {
        'radial-green':
          'radial-gradient(47.09% 47.09% at 50% 50%, #10B981 0%, rgba(217, 217, 217, 0) 100%)',
        'radial-yellow':
          'radial-gradient(47.09% 47.09% at 50% 50%, #FBBF24 0%, rgba(217, 217, 217, 0) 100%)',
        'radial-blue':
          'radial-gradient(47.09% 47.09% at 50% 50%, #1D4ED8 0%, rgba(217, 217, 217, 0) 100%)',
      },
    },
  },
  plugins: [thonUI()],
};
