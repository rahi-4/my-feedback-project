/** @type {import('tailwindcss').Config} */
const {heroui} = require("@heroui/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Lexend: ["Lexend", "sans-serif"]
        },
        colors: {
          primary: "#1677BD",
          secondary: "#F8FBF8",
          tertiary: "#F8F8F8",
          default: "#232323",
          foreground: "#FFFFFF",
        },
    },
  },
  darkMode:"class",
  plugins: [heroui()],
}

