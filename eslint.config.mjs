import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextVitals,
  {
    rules: {
      // Advisory React Compiler rules. The flagged cases are deliberate:
      // random values (UUIDs, passwords) are generated after mount so server
      // and client HTML match, and mount-time reveals read the DOM. Kept
      // visible as warnings rather than blocking the build.
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/purity": "warn",
    },
  },
  {
    ignores: [".next/**", "out/**", "build/**", "node_modules/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
