import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const config = [
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "@next/next/no-img-element": "off"
    }
  },
  {
    ignores: [".next/**", "node_modules/**", "out/**", "next-env.d.ts"]
  }
];

export default config;
