import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FDF9EF",
        ivory: "#F7F0E1",
        paper: "#FFFFFC",
        gold: "#B98D57",
        "gold-light": "#D7B482",
        "gold-dark": "#8A6234",
        espresso: "#332215",
        "espresso-soft": "#6B5A47",
        line: "#E6D9BE",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "7px",
      },
    },
  },
  plugins: [],
};
export default config;
