/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6C28D9",
          dark: "#5620AE",
          light: "#F3EDFC",
          tint: "#EFE7FB",
        },
        ink: {
          DEFAULT: "#181121",
          soft: "#5B5468",
          faint: "#948DA0",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F3F1FA",
          line: "#ECE7F3",
        },
        success: "#1B8A5A",
        successTint: "#E7F6EF",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "18px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(24,17,33,0.04), 0 8px 24px -12px rgba(24,17,33,0.12)",
      },
    },
  },
  plugins: [],
};
