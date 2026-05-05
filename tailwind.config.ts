import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        navy: "rgb(var(--color-navy) / <alpha-value>)",
        steel: "rgb(var(--color-steel) / <alpha-value>)",
        teal: "rgb(var(--color-teal) / <alpha-value>)",
        "teal-hover": "rgb(var(--color-teal-hover) / <alpha-value>)",
        amber: "rgb(var(--color-amber) / <alpha-value>)",
        "amber-hover": "rgb(var(--color-amber-hover) / <alpha-value>)",
        cloud: "rgb(var(--color-cloud) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)"
      },
      boxShadow: {
        soft: "0 18px 60px rgb(var(--color-navy) / 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
