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
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      // Every colour is a CSS variable from globals.css, so utilities follow
      // the active theme. Tailwind v4 builds opacity modifiers
      // (border-accent/40) with color-mix(), which works on variables.
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bg: "var(--bg)",
        "bg-2": "var(--bg-2)",
        "bg-3": "var(--bg-3)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        "ink-3": "var(--ink-3)",
        rule: "var(--rule)",
        "rule-2": "var(--rule-2)",
        accent: "var(--accent)",
        "accent-deep": "var(--accent-deep)",
        "accent-tint": "var(--accent-tint)",
        "on-accent": "var(--on-accent)",
        // Legacy aliases still referenced by inner pages.
        "accent-2": "var(--accent-2)",
        "accent-hot": "var(--accent-hot)",
        good: "var(--good)",
        bad: "var(--bad)",
        bezel: "var(--bezel)",
      },
      letterSpacing: {
        tightest: "-0.03em",
        "extra-tight": "-0.02em",
      },
      maxWidth: {
        screen: "1200px",
        prose: "42rem",
      },
      // The only shadows in the system: a resting card and a suspended
      // object (phone bezel, app icon). Both carry an offset and a soft blur.
      boxShadow: {
        card: "var(--shadow-card)",
        object: "var(--shadow-object)",
      },
    },
  },
  plugins: [],
};
