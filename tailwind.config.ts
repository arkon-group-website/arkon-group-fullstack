import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        arkon: {
          navy: "#061426",
          navy2: "#0B1E36",
          blue: "#1659A8",
          silver: "#D8DEE8",
          silver2: "#9EAABC",
          gold: "#C8A45D",
          gold2: "#F0D48A",
          ink: "#EAF0F7"
        }
      },
      boxShadow: {
        arkon: "0 24px 80px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "command-grid":
          "linear-gradient(rgba(216,222,232,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(216,222,232,0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
