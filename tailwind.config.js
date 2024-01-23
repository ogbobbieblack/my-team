/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,ts,tsx,js}"],
  theme: {
    extend: {
      colors: {
        accent: "#f67d7f",
        primary: "#034e56",
        secondary: "#fff",
      },
    },
  },
  plugins: [],
};

