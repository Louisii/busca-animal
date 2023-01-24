/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      primary: '#1B7340',
      secundary: '#DC85C0',
      white: '#ffffff',
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}
