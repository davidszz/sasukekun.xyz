/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Open Sans', sans-serif;",
      },
      colors: {
        gray: {
          800: '#1a1a24',
          900: '#13131a',
        },
      },
    },
  },
  plugins: [],
};
