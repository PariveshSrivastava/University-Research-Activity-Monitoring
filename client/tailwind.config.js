/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '1/2': '50%',
        '53/200': '26.5%',
        full: '100%',
      },
    },
  },
  plugins: [],
}
