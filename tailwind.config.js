/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'redButton': '#F6121C',
        'default' : '#FE9A03',
      }
    },
  },
  plugins: [],
}

