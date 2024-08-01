/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(86, 97, 108, 0) 0%, rgba(33, 52, 69, 0.7) 100%)",
      },
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
        main: "#bfa888",
        light: "#f5f5f5",
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
        "infinite-spin": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        smoothAlternate: {
          "0%": {
            transform: "translate(0,0)",
          },
          "100%": {
            transform: "translate(30px,0)",
          },
        },
        infiniteSlide: {
          to: {
            transform: "translate(calc(-50% - 25px))",
          },
        },
      },
      animation: {
        "smooth-show": "smooth-show 0.9s ease-in-out 1 forwards",
        "infinite-spin": "infinite-spin 18s linear infinite forwards",
        smoothScale: "smoothScale 18s linear infinite alternate",
        smoothAlternate: "smoothAlternate 4s linear infinite alternate",
        infiniteSlide: "infiniteSlide 35s linear infinite",
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
