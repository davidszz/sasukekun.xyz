/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Open Sans', sans-serif;",
      },
      animation: {
        ping: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;',
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
