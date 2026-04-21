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
          600: "#2D5A27", // Mapping primary to 600 for the new style
        },
        secondary: {
          DEFAULT: "#4E3B31", // Earth Brown
          light: "#6D5344",
          900: "#4E3B31", // Mapping secondary to 900 for "Steel-900" feel
        },
        accent: {
          DEFAULT: "#F9A826", // Warm Amber
        },
        surface: "#F9F7F2", // Off-white/Cream
        steel: {
          50: "#F9F7F2", // Using surface color as steel-50
          100: "#E5E7EB",
          200: "#D1D5DB",
          800: "#374151",
          900: "#4E3B31", // Using secondary as steel-900
        }
      },
      fontFamily: {
        sans: ["Geist", "Inter", "sans-serif"],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
};
