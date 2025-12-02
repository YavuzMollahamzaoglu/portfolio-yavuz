/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/app.css"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
