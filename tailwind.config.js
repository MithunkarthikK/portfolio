/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 25px rgba(0, 255, 231, 0.3)", // cyan/blue glow
        'fire-glow': "0 0 25px rgba(255, 115, 0, 0.4)", // fire effect
      },
      colors: {
        background: "#0f0f0f",
        glow: "#00ffe7",
        'glow-purple': "#a855f7",
        'glow-orange': "#ff7300",
      },
      keyframes: {
        glowMove: {
          "0%, 100%": { transform: "translateX(0%) scale(1)" },
          "50%": { transform: "translateX(8%) scale(1.03)" },
        },
        pulseFire: {
          "0%, 100%": { opacity: "0.25", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.04)" },
        },
        glowText: {
          "0%, 100%": {
            textShadow: "0 0 8px #3b82f6, 0 0 16px #3b82f6",
            opacity: "0.8",
          },
          "50%": {
            textShadow: "0 0 12px #60a5fa, 0 0 24px #60a5fa",
            opacity: "1",
          },
        },
      },
      animation: {
        'glow-move': "glowMove 6s ease-in-out infinite",
        'pulse-fire': "pulseFire 4s ease-in-out infinite",
        'glowText': "glowText 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
