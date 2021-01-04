module.exports = {
  // purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  purge: [],

  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        gray: {
          mute: "#797B8C",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
