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
          soft: "#e8d7aa",
          dark: "#a8862f"
        },
        forest: {
          DEFAULT: "#0c2f2a",
          dark: "#06201c",
          light: "#1a4a43"
        },
        ink: "#0f172a"
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 1px 2px 0 rgb(15 23 42 / 0.04), 0 1px 3px 0 rgb(15 23 42 / 0.06)",
        "card-hover":
          "0 10px 25px -5px rgb(15 23 42 / 0.08), 0 8px 10px -6px rgb(15 23 42 / 0.04)",
        focus: "0 0 0 3px rgb(201 165 87 / 0.25)"
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 60%, rgba(255,255,255,1) 100%)",
        "forest-gradient":
          "linear-gradient(135deg, #0c2f2a 0%, #06201c 100%)"
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "slow-zoom": "slowZoom 18s ease-in-out infinite alternate"
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" }
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
