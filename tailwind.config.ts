import type { Config } from "tailwindcss";
var { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)", ...fontFamily.sans],
      serif: ["var(--font-garamond)", ...fontFamily.serif],
      mono: ["var(--font-roboto-mono)", ...fontFamily.serif],
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
export default config;
