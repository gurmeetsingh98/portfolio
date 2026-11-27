/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#1e3551",
        brandDark: "#16263b",
      },
      boxShadow: {
        soft: "0 20px 50px rgba(15, 23, 42, 0.15)",
      },
    },
  },
  plugins: [],
};
