/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'us': '330px',

      'mp': '400px',

      'ss' : '376px',

      'sm': '425px',

      'md': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      'uxl': '1550',
    },
    extend: {
      colors: {
        'redButton': '#F6121C',
        'default' : '#FE9A03',
        'textDefault' : '#F6121C',
        'learning' : '#242730',
        'news' : '#242730'
      }
    },
  },
  plugins: [

  ],
}

