/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: {
          400: "var(--blue-secondary, #60a5fa)",
          500: "var(--blue-primary, #3b82f6)",
          600: "var(--blue-darker, #2563eb)",
        },
        gray: {
          900: "#111827",
          950: "#030712",
        },
      },
      animation: {
        // Preserve existing animations
        gradient: "gradient 6s ease infinite",
        "gradient-fast": "gradient 3s ease infinite",
        cursor: "cursor 1s step-end infinite",
        sparkle: "sparkle 1.5s ease-in-out infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        typing: "typing 2s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",

        // New animations
        float: "float 5s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s infinite",
      },
      keyframes: {
        // Preserve existing keyframes
        gradient: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        cursor: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        sparkle: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.2)", opacity: "0.8" },
        },
        typing: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(150px)" },
          "100%": { transform: "translateX(0)" },
        },

        // New keyframes
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: 0.6 },
          "50%": { opacity: 1 },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      boxShadow: {
        blue: "var(--blue-glow)",
        "blue-sm": "var(--blue-glow-sm)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [
    // Optional plugin for scrollbar styling - uncomment if you want to install it
    require("tailwindcss-scrollbar"),
  ],
};
