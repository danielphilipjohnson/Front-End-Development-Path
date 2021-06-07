const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: { enabled: true, content: ["./dist/**/*.html"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      position: ["before", "after"],
      textColor: ["before", "after"],
      fontWeight: ["before", "after"],
      fontSize: ["before", "after"],
      inset: ["before", "after"],
    },
  },
  plugins: [require("@shimyshack/tailwindcss-pseudo-element-plugin")],
};
