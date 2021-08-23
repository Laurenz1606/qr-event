module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: "#00CC99",
      purple: "#6600FF",
      "gray-light": "#C4C4C4",
      "gray-dark": "#5C5C5C",
      red: "#DC2626",
      accent: "#10B981",
      white: "#FFFFFF"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
