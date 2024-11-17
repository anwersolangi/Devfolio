/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        gradient: "gradient 6s ease infinite",
        "gradient-fast": "gradient 3s ease infinite",
        cursor: "cursor 1s step-end infinite",
        sparkle: "sparkle 1.5s ease-in-out infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        typing: "typing 2s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
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
      },
      backgroundSize: {
        "300%": "300%",
      },
    },
  },
  plugins: [],
};
