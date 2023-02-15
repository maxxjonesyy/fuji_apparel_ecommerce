/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGrey: "#f3f4f6",
        grey: "#d1d5db",
      },
    },
  },
  plugins: [],
};
