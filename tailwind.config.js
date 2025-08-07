/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bluee: "#3f47f4",
        grayy: "#7f7e86",
        slategray: "#494a52",
        softbluegray: "#7e88b8",
      },
      boxShadow: {
        custom: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
