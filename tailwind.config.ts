import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "var(--cream)",
          dark: "var(--cream-dark)",
        },
        brown: {
          deep: "var(--brown-deep)",
          mid: "var(--brown-mid)",
        },
        terracotta: {
          DEFAULT: "var(--terracotta)",
          hover: "var(--terracotta-hover)",
        },
        sage: {
          DEFAULT: "var(--sage)",
        },
        gold: {
          DEFAULT: "var(--gold)",
        },
        white: {
          soft: "var(--white-soft)",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
