/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      lightGrayishBlue: "hsl(240, 75%, 98%)",
      brightBlue: "hsl(224, 93%, 58%)",
      lightBrightBlue: "hsla(224, 93%, 58%,.7)",
      desaturatedBlue: "hsl(238, 22%, 44%)",
      lightGray: "hsl(0, 0%, 75%)",
      cyan: "hsl(170, 45%, 43%)",
      lightCyan: "hsla(170, 45%, 43%,0.7)",
      white: "#fff",
      veryDarkBlue: "hsl(243, 87%, 12%)",
      black: "#000",
    },
    fontFamily: {
      heading: ["Raleway", "sans-serif"],
    },
    backgroundImage: {
      "mobile-curve": "url('/images/bg-curve-mobile.svg')",
      "desktop-curve": "url('/images/bg-curve-desktop.svg')",
    },
  },
  plugins: [],
};
