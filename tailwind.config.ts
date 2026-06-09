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
          DEFAULT: "#0F172A",
          900: "#0F172A",
          800: "#1E293B",
          700: "#334155",
        },
        gold: {
          DEFAULT: "#F59E0B",
          500: "#F59E0B",
          400: "#FBBF24",
          600: "#D97706",
        },
        // Semantic tokens
        bg: "#0F172A",
        surface: "#1E293B",
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
