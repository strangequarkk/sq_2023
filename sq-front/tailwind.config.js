/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        default: ["Sintony", "sans"],
        heading: ["Days One", "sans"],
        nav: ["Days One", "sans"],
        fancy: ["Zen Tokyo Zoo", "sans"],
      },
      colors: {
        default: "#D6F8F1",
      },
      backgroundImage: {
        "bubble-trails": "url('/src/assets/bubble-bg.jpg')",
      },
    },
  },
  plugins: [],
};
