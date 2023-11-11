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
    },
  },
  plugins: [],
};
