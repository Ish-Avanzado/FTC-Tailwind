/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "san-serif"],
      },
      colors: {
        primaryBlue: "#3e9bd0",
        secondaryYellow: "#fc9827",
        light: "#ffffff",
        dark: "#3a3b36",
        bglightGray: "#f3f4f6",
        hoverYellow: "#d17600",
        hoverBlue: "#225b7a",
      },
    },
  },
  plugins: [],
};
