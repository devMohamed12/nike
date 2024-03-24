/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },

      colors: {
        primary: "rgb(5,59,80)",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
        "main-gradient":
          "linear-gradient(141deg, rgba(5,59,80,1) 9%, rgba(23,107,135,1) 59%, rgba(100,200,204,1) 89%);",
        "red-gradient":
          "linear-gradient(141deg, rgba(144,12,63,1) 1%, rgba(249,76,16,1) 48%, rgba(248,222,34,1) 100%)",
        "red-gradient-hover":
          "linear-gradient(141deg,  rgba(248,222,34,1) 10%, rgba(249,76,16,1) 70%, rgba(144,12,63,1) 100%)",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
