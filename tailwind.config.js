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
        secondaryDark: '#525252',
        textDark: 'white',
        primaryLight: '#FEF3C7',
        secondaryLight: 'rgb(254 252 232)',
        textLight: '#404040',
        primaryButtonLight: 'rgb(221 214 254)',
        secondaryButtonLight: 'rgb(196 181 253)',
        secondaryButtonDark: 'rgb(79 70 229)',
        primaryButtonDark: 'rgb(99 102 241)',
        thirdButton: 'rgb(94 234 212)'
        // ...
      }
    },

  },
  plugins: [],
}