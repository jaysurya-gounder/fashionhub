/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
          'primary' : '#F2F2F4',
          'redLabel' : '#E91E63',
      }
    },
  },
  plugins: [],
}