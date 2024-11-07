/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      colors: {
        customOrange: '#ff5200',
        customOrange2: '#ffa700',
      },
      fontSize: {
        md: '1rem',
      },
    },
  },
  plugins: [],
}

