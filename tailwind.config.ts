import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        navy: {
          DEFAULT: "#040D1C", // deepest bg
          900: "#040D1C",
          800: "#071628", // section alt bg
          700: "#0C2040", // card bg
          600: "#0F2D5A", // card border area
          500: "#1D4ED8", // electric blue accent
        },
        gold: {
          DEFAULT: "#F59E0B",
          500: "#F59E0B",
          400: "#FBBF24",
          600: "#D97706",
        },
        amber: {
          DEFAULT: "#F97316", // from logo top-left
          300: "#FCD34D",
          400: "#FB923C",
          500: "#F59E0B",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
          950: "#451A03",
        },
        blue: {
          DEFAULT: "#2563EB", // royal blue
          100: "#DBEAFE",
          300: "#93C5FD", // light blue
          400: "#60A5FA", // sky blue
          500: "#3B82F6",
          700: "#1D4ED8",
          900: "#1E3A8A", // deep navy blue (from logo)
        },
        // Semantic tokens
        bg: "#040D1C",
        surface: "#071628",
        ink: "#F8FAFC",
        muted: "#94A3B8",
        accent: "#F59E0B",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      keyframes: {
        "reveal-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "reveal-down": {
          "0%": { opacity: "0", transform: "translateY(-24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "reveal-left": {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "reveal-right": {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "reveal-up": "reveal-up 0.5s ease-out backwards",
        "reveal-down": "reveal-down 0.5s ease-out backwards",
        "reveal-left": "reveal-left 0.5s ease-out backwards",
        "reveal-right": "reveal-right 0.5s ease-out backwards",
      },
    },
  },
  plugins: [],
};
export default config;
