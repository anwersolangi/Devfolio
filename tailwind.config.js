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
        // Same variable names as before — `font-sans` and `font-mono` keep
        // working everywhere. We swap the underlying font in layout.js
        // (Hanken Grotesk → --font-inter, Geist Mono → --font-mono).
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        // NEW — italic serif accents used in V1 hero & CTA
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
      },
      colors: {
        // Preserve your existing tokens
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
        // V1 palette — added without colliding with anything above
        bg: "#0d0c0b",
        "bg-2": "#161514",
        "bg-3": "#1f1d1b",
        ink: "#f4efe7",
        "ink-2": "rgba(244, 239, 231, 0.62)",
        "ink-3": "rgba(244, 239, 231, 0.38)",
        rule: "rgba(244, 239, 231, 0.10)",
        accent: "#ff6a3d",
        "accent-2": "#ffb27a",
        good: "#7af0a8",
      },
      letterSpacing: {
        tightest: "-0.045em",
        "extra-tight": "-0.035em",
      },
      maxWidth: {
        screen: "1440px",
      },
      animation: {
        // ALL your existing animations — preserved
        gradient: "gradient 6s ease infinite",
        "gradient-fast": "gradient 3s ease infinite",
        cursor: "cursor 1s step-end infinite",
        sparkle: "sparkle 1.5s ease-in-out infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        typing: "typing 2s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        float: "float 5s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s infinite",
        // New: marquee for the hero tech ticker
        marquee: "marquee 60s linear infinite",
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: 0.6 },
          "50%": { opacity: 1 },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
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
  plugins: [],
};
