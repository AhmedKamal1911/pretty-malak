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
      boxShadow: {
        lighter:
          "0px 0px 70px #fff6e9a8 , 0px 0 90px #fff6e9a8 ,0px 0px 110px #fff6e9a8,0px 0px 140px #fff6e9a8,0px 0px 160px #fff6e9a8,0px 0px 80px #fff6e9a8",
      },
      colors: {
        main: "#38bdf8",
      },
      backgroundColor: {
        main: "#38bdf8",
        lightCyan: "#dfdfdf",
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
        "fillOut-to-left": {
          "0%": {
            width: "100%",
          },
          "100%": {
            left: "-100%",
            width: "0px",
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
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
            display: "none",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        fadeOutUp: {
          "0%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-20px)",
            display: "none",
          },
        },
        smoothScale: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50% ": {
            transform: "scale(1.1)",
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
        "fillOut-to-left": "fillOut-to-left 0.5s ease-in-out 1 forwards",
        "background-change": "background-change 0.7s ease-in-out 1 forwards",
        "smooth-show": "smooth-show 0.9s ease-in-out 1 forwards",
        fadeInUp: "fadeInUp 0.4s ease-out 1 forwards",
        fadeOutUp: "fadeOutUp 0.4s ease-out 1 forwards",
        smoothScale: "smoothScale 18s linear infinite alternate",
      },
    },
  },
  plugins: [],
};
