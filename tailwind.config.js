/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Bebas Neue", "sans-serif"],
      },
      colors: {
        main: "#38bdf8",
      },
      backgroundColor: {
        main: "#38bdf8",
      },

      keyframes: {
        "fill-to-right": {
          "0%": {
            width: "0px",
          },
          "100%": {
            width: "100%",
          },
        },
        "background-change": {
          "0%": {
            backgroundColor: "",
            color: "black",
          },
          "100%": {
            backgroundColor: "#ededed",
            color: "#38bdf8",
          },
        },
      },
      animation: {
        "fill-to-right": "fill-to-right 0.7s ease-in-out 1 forwards",
        "background-change": "background-change 0.7s ease-in-out 1 forwards",
      },
    },
  },
  plugins: [],
};
