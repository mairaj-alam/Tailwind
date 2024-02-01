/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color': '#your-color-code',
      },
    },
  },
  plugins: [],
}