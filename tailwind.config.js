/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        logoFont: "Audiowide",
        signature: "Playwrite CO",
      },
      boxShadow: {
        lighter:
          "0px 0px 70px #fff6e9a8 , 0px 0 90px #fff6e9a8 ,0px 0px 110px #fff6e9a8,0px 0px 140px #fff6e9a8,0px 0px 160px #fff6e9a8,0px 0px 80px #fff6e9a8",
      },
      colors: {
        main: "#bfa888",
        lightGray: "#e1e1e1",
      },
      backgroundColor: {
        main: "#38bdf8",
        light: "white",
      },

      keyframes: {
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

        smoothScale: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50% ": {
            transform: "scale(1.1)",
          },
        },
      },
      animation: {
        "smooth-show": "smooth-show 0.9s ease-in-out 1 forwards",
        smoothScale: "smoothScale 18s linear infinite alternate",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".counter-increment::before": {
          "counter-increment": "feature-counter",
        },
      });
    },
  ],
};
