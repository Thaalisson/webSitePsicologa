/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        darkblue1: '#1b2936',
        darkblue2: '#223345',
        darkred1: '#49131d',
        darkred2: '#5f1522',
      },
    },
  },
  plugins: [],
}
