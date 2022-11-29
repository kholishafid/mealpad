/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#eff0f3",
        headline: "#0d0d0d",
        paragraph: "#2a2a2a",
        highlight: "#ff8906",
        secondary: "#f25f4c",
        tertiary: "#e53170",
        button: "#fec7d7",
      },
      fontFamily: {
        Signika: ["Signika Negative", "Arial"],
      },
    },
  },
  plugins: [],
};
