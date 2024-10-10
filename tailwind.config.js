/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        //will change to our own when we have better colors
        primary: "#FFFFFF", // White
        secondary: "#673BB7", // Purple Color
        accent: "#1A73E8", //  blue color
        neutral: "#F8F9FA", // Custom neutral gray
        background: "#F0EBF8", // Custom background color
        text: "#202124", // Custom text color
        textLight: "#5F6368", // light grey text color
      },
    },
  },
  plugins: [],
};
