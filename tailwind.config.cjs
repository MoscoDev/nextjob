/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#E6E0FC",
      },
    },
  },
  mode: "jit",
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
  
};
