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
        '4xl': '2560px',
        '5xl': '3200px',
        '6xl': '3840px'
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
        ink: "#0f172a",
        // Editorial brand tokens (WhyWeExist / FutureVision / BusinessUniverse)
        navy: {
          DEFAULT: "#0A2342",
          950: "#04101f",
          900: "#071a32",
          800: "#0A2342",
          700: "#123154",
          600: "#1b4374"
        },
        emerald: {
          DEFAULT: "#0F7B5F",
          400: "#2fc79b",
          500: "#16a079",
          600: "#0F7B5F",
          700: "#0b5e49"
        },
        cloud: "#f6f8f7",
        paper: "#ffffff",
        mist: "#eef2f1"
      },
      letterSpacing: {
        luxe: "0.28em"
      },
      fontFamily: {
        // Single typeface site-wide: every token resolves to Inter so
        // font-sans / font-display / font-serif all render the same.
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 1px 2px 0 rgb(15 23 42 / 0.04), 0 1px 3px 0 rgb(15 23 42 / 0.06)",
        "card-hover":
          "0 10px 25px -5px rgb(15 23 42 / 0.08), 0 8px 10px -6px rgb(15 23 42 / 0.04)",
        focus: "0 0 0 3px rgb(201 165 87 / 0.25)",
        glow: "0 0 60px -12px rgba(15,123,95,0.35)",
        "glow-sm": "0 0 30px -8px rgba(15,123,95,0.4)",
        lift: "0 30px 80px -24px rgba(10,35,66,0.22)"
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 60%, rgba(255,255,255,1) 100%)",
        "forest-gradient":
          "linear-gradient(135deg, #08213C 0%, #051829 100%)",
        "eloma-grad": "linear-gradient(120deg, #0A2342 0%, #0b5e49 60%, #0F7B5F 100%)",
        "eloma-radial":
          "radial-gradient(circle at 50% 30%, rgba(15,123,95,0.10), transparent 60%)",
        "eloma-mesh":
          "radial-gradient(60% 50% at 20% 20%, rgba(15,123,95,0.10), transparent 60%), radial-gradient(50% 50% at 85% 30%, rgba(10,35,66,0.08), transparent 60%)"
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)"
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "slow-zoom": "slowZoom 18s ease-in-out infinite alternate",
        "marquee-left": "marqueeLeft var(--marquee-duration, 40s) linear infinite",
        "marquee-right": "marqueeRight var(--marquee-duration, 40s) linear infinite",
        "spin-slow": "spin 22s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "scroll-cue": "scroll-cue 1.8s ease-in-out infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite"
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
        },
        "scroll-cue": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { transform: "translateY(14px)", opacity: "0" }
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" }
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
