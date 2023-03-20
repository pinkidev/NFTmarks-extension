/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: '#404040',
        secondayDark: '#525252',
        textDark: 'white',
        primaryLight: '#FEF3C7',
        secondayLight: '#FDE68A',
        textLight: '#404040'
        // ...
      }
    },

  },
  plugins: [],
}