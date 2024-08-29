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
        mainFont: "Bebas Neue",
      },
      boxShadow: {
        lighter:
          "0px 0px 70px #fff6e9a8 , 0px 0 90px #fff6e9a8 ,0px 0px 110px #fff6e9a8,0px 0px 140px #fff6e9a8,0px 0px 160px #fff6e9a8,0px 0px 80px #fff6e9a8",
      },
      colors: {
        main: "#bfa888",
        lightGray: "#e1e1e1",
        grayDesc: "rgb(55 65 81 / 1)",
        destructive: {
          DEFAULT: "#ff0000",
          foreground: "#F5FAFF",
        },
      },
      backgroundColor: {
        main: "#bfa888",
        light: "#f5f5f5",
      },

      keyframes: {
        "smooth-show": {
          "0%": {
            opacity: "0",
            transform: "translateY(-50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
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
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slide-in": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-out": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        "bouncing-left-right": {
          "0%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(-10px)" },
        },
        smoothAlternate: {
          "0%": {
            transform: "translate(0,0)",
          },
          "100%": {
            transform: "translate(30px,0)",
          },
        },
        infiniteSlideLTR: {
          to: {
            transform: "translate(calc(-50% - 25px))",
          },
        },
        infiniteSlideRTL: {
          to: {
            transform: "translate(calc(50% - 25px))",
          },
        },
        fadeDown: {
          "0%": {
            transform: "translateY(-50px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "smooth-show": "smooth-show 0.9s ease-in-out 1 forwards",
        "infinite-spin": "infinite-spin 18s linear infinite forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-in": "slide-in 0.2s ease-out",
        "slide-out": "slide-out 0.1s ease-in",
        "bouncing-left-right":
          "bouncing-left-right 2s linear infinite alternate",
        smoothScale: "smoothScale 25s linear infinite alternate",
        smoothAlternate: "smoothAlternate 4s linear infinite alternate",
        infiniteSlideLTR: "infiniteSlideLTR 30s linear infinite",
        infiniteSlideRTL: "infiniteSlideRTL 30s linear infinite",
        fadeDown: "fadeDown 0.5s linear forwards",
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
