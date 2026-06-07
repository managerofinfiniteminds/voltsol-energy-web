import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F172A",
          800: "#1E293B",
          700: "#334155",
        },
        gold: {
          DEFAULT: "#F59E0B",
          500: "#F59E0B",
          400: "#FBBF24",
          600: "#D97706",
        },
      },
    },
  },
  plugins: [],
};
export default config;
