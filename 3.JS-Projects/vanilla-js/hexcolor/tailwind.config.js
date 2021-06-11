module.exports = {
  // purge: { enabled: true, content: ["./dist/**/*.html"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",

            top: "-6rem",
          },
          "50%": {
            opacity: "1",

            top: "0",
          },
          "100%": {
            opacity: "1",

            top: "-6rem",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down .75s ease-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
