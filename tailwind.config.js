/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderColor: {
        default: "#4999f8",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tw-elements/dist/plugin")],
};
