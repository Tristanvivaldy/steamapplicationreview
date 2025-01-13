/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        lightBrown: "#d8d0c9",
        darkBrown: "#755f4c",
        semiLightBrown: "#A2958A",
        loginBg: "#F9F7F5",
        navBg: "#B6A99E",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
