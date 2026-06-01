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
      screens: {
        '3xl': '1920px',
        '4xl': '2560px'
      },
      colors: {
        gold: {
          DEFAULT: "#3CB98C",
          soft: "#5ec9a3",
          dark: "#2a8a6b"
        },
        forest: {
          DEFAULT: "#08213C",
          dark: "#051829",
          light: "#0d3a5e"
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
          "linear-gradient(135deg, #08213C 0%, #051829 100%)"
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "slow-zoom": "slowZoom 18s ease-in-out infinite alternate",
        "marquee-left": "marqueeLeft var(--marquee-duration, 40s) linear infinite",
        "marquee-right": "marqueeRight var(--marquee-duration, 40s) linear infinite",
        "spin-slow": "spin 22s linear infinite",
        "float": "float 6s ease-in-out infinite"
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" }
        },
        marqueeLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" }
        },
        marqueeRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
