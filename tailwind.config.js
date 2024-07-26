/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {},

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
        "smooth-show": {
          "0%": {
            opacity: "0",
            transform: "translate(-500px,-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(0,0)",
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
        "fill-to-right": "fill-to-right 0.5s ease-in-out 1 forwards",
        "background-change": "background-change 0.7s ease-in-out 1 forwards",
        "smooth-show": "smooth-show 0.9s ease-in-out 1 forwards",
      },
    },
  },
  plugins: [],
};
