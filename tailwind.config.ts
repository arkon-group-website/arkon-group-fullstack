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
          pearl: "#F7F6F2",
          pearl2: "#FBFAF7",
          ivory: "#FFFFFF",
          beige: "#EFE7D6",
          navy: "#0F2B46",
          navy2: "#173B63",
          blue: "#1D5C91",
          muted: "#6B7280",
          line: "#E5DDCF",
          gold: "#C79A3B",
          gold2: "#E3C27A",
          ink: "#0F2B46"
        }
      },
      boxShadow: {
        arkon: "0 20px 60px rgba(15, 43, 70, 0.12)",
        glow: "0 18px 54px rgba(199, 154, 59, 0.24)"
      },
      backgroundImage: {
        "command-grid":
          "linear-gradient(rgba(15,43,70,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(15,43,70,0.055) 1px, transparent 1px)",
        "pearl-radial": "radial-gradient(circle at 12% 12%, rgba(227,194,122,0.24), transparent 28%), radial-gradient(circle at 86% 22%, rgba(29,92,145,0.12), transparent 30%)",
        "navy-gold": "linear-gradient(135deg, #0F2B46 0%, #071827 58%, #173B63 100%)"
      }
    }
  },
  plugins: []
};

export default config;
