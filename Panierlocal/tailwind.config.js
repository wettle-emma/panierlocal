/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
     colors: {
       darkGreen: "#324e2b",
       midGreen: "#96b18f",
       white: "#fcfcfc",
       black: "#252525",
       grey: "#d0d0d0",
       darkGrey: "#868686",
       lightGreen: "#f8fbf7",
       lightWhite: "#fcfcfc",
       Pop: "#e77852"
      },
      fontSize: {
       sm: "0.625rem",
       base: "0.75rem",
       lg: "0.8125rem",
       xl: "0.875rem",
       x2l: "1rem",
       x3l: "1.25rem",
       x4l: "1.5625rem"
      },
      fontFamily: {
       inter: "Inter",
       montserrat: "Montserrat"
      },
      boxShadow: {
       shadowRecipes: "-2px 2px 10px 0px rgba(0,0,0,0.15)"
      },
      borderRadius: {
       none: "0",
       xs: "0.125rem",
       sm: "0.1875rem",
       default: "0.2874999940395355rem",
       lg: "0.3125rem",
       xl: "0.375rem",
       x2l: "0.4375rem",
       x3l: "0.5rem",
       x4l: "0.5625rem",
       x5l: "0.625rem",
       x6l: "0.9375rem",
       x7l: "1.5625rem",
       x8l: "1.625rem",
       x9l: "1.6875rem",
       x10l: "1.75rem",
       x11l: "2.1875rem",
       x12l: "3.125rem",
       x13l: "3.5345101356506348rem",
       full: "9999px"
      }
     },
  plugins: [],
}