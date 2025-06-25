/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        droppy: {
          light: '#3ddad7',
          dark: '#23bdb8',
          text: '#ffffff',
        },
      },
      boxShadow: {
        droppy: '0 10px 20px rgba(61, 218, 215, 0.3)',
        droppyDark: '0 10px 20px rgba(35, 189, 184, 0.3)',
      },
    },
  },
  plugins: [],
}
