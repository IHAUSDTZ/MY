/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D5A27", // Forest Green
          dark: "#1E3D1A",
        },
        secondary: {
          DEFAULT: "#4E3B31", // Earth Brown
          light: "#6D5344",
        },
        accent: {
          DEFAULT: "#F9A826", // Warm Amber
        },
        surface: "#F9F7F2", // Off-white/Cream
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
