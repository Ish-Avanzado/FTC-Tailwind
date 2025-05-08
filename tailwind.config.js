/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "san-serif"],
      },
      backgroundImage: {
        blackOverlay:
          "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%)",
      },
      colors: {
        primaryBlue: "#3e9bd0",
        secondaryYellow: "#fc9827",
        lightOrange: "#fdbc65",
        light: "#ffffff",
        dark: "#3a3b36",
        lightGray: "#898986",
        bglightGray: "#f3f4f6",
        hoverYellow: "#d17600",
        hoverBlue: "#225b7a",
      },
    },
  },
  plugins: [],
};
