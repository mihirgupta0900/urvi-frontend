module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgc: "#121212",
        primary: "#ff2e63",
        secondary: "#08d9d6",
        offwhite: "	#fffff4",
      },
      fontFamily: {
        body: ["Poppins", " sans-serif"],
        logo: ["Great Vibes", "cursive"],
      },
      fontSize: {
        "7xl": "5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["gatsby-plugin-postcss"],
};
