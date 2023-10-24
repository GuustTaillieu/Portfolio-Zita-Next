import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#181818",
        light: "#eeeeee",
        primary: "#88e6e8",
        primaryDark: "#2b7a78",
      },
      fontFamily: {
        default: ["Antonia", "serif"],
        secondary: ["Clarika", "sans-serif"],
      },
      fontSize: {
        nav: "1.4rem",
      },
      width: {
        container: "90rem",
      },
      screens: {
        header: "802px",
      },
    },
  },
  plugins: [],
};
export default config;
