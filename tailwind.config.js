/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#333333",
      },
      boxShadow: {
        '3xl': '5px 10px 15px 0px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
};
