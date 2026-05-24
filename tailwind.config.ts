import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#c9a557",
          soft: "#e8d7aa"
        },
        forest: {
          DEFAULT: "#0c2f2a",
          dark: "#06201c"
        },
        ink: "#0f172a"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 30px rgba(201, 165, 87, 0.35)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(ellipse at top, rgba(201, 165, 87, 0.18), rgba(255, 255, 255, 0) 60%)",
        "soft-grid":
          "linear-gradient(rgba(12, 47, 42, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(12, 47, 42, 0.06) 1px, transparent 1px)"
      },
      backgroundSize: {
        "soft-grid": "24px 24px"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
