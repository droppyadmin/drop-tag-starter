/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'droppy-light': '#2dd4bf',     // pl. CTA gomb világos
        'droppy-dark': '#0f766e',      // pl. sötét módhoz
        'droppy-text': '#ffffff'       // CTA szöveg, ha kell egyedi
      },
      boxShadow: {
        droppy: '0 4px 14px 0 rgba(45, 212, 191, 0.5)',         // világos
        droppyDark: '0 4px 14px 0 rgba(14, 116, 102, 0.5)'      // sötét módhoz
      }
    }
  },
  plugins: [],
}
