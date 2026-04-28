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
        navy: "#0B2545",
        steel: "#134074",
        teal: "#128C7E",
        amber: "#F59E0B",
        cloud: "#F4F7FA",
        ink: "#172033"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(11, 37, 69, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
