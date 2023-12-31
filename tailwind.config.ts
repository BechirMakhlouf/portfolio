import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mono: ["var(--mono-font)", "system-ui"],
        sans: ["var(--font-geist-sans)"],
      },
      colors: {
        "gunmetal": {
          DEFAULT: "#282c34",
          100: "#08090a",
          200: "#101215",
          300: "#181a1f",
          400: "#202329",
          500: "#282c34",
          600: "#4c5463",
          700: "#717c92",
          800: "#a0a8b6",
          900: "#d0d3db",
        },
        "gunmetal-light": {
          DEFAULT: "#2c313a",
          100: "#090a0c",
          200: "#121417",
          300: "#1a1d23",
          400: "#23272f",
          500: "#2c313a",
          600: "#4f5869",
          700: "#737f96",
          800: "#a2aab9",
          900: "#d0d4dc",
        },
        "paynes-gray": {
          DEFAULT: "#5c6371",
          100: "#121416",
          200: "#25272d",
          300: "#373b43",
          400: "#494f5a",
          500: "#5c6371",
          600: "#788191",
          700: "#9aa0ac",
          800: "#bcc0c8",
          900: "#dddfe3",
        },
        "french-gray": {
          DEFAULT: "#abb2c0",
          100: "#1f2329",
          200: "#3e4553",
          300: "#5d687c",
          400: "#818ca0",
          500: "#abb2c0",
          600: "#bcc1cc",
          700: "#ccd1d9",
          800: "#dde0e6",
          900: "#eef0f2",
        },
        "french-mauve": {
          DEFAULT: "#c775df",
          100: "#2d0d37",
          200: "#5b1a6f",
          300: "#8827a6",
          400: "#b03fd2",
          500: "#c775df",
          600: "#d292e5",
          700: "#ddadec",
          800: "#e8c8f2",
          900: "#f4e4f9",
        },
        "argentinian-blue": {
          DEFAULT: "#5daef2",
          100: "#05253e",
          200: "#0a497d",
          300: "#0f6ebb",
          400: "#2091ed",
          500: "#5daef2",
          600: "#7fc0f5",
          700: "#9fcff7",
          800: "#bfdffa",
          900: "#dfeffc",
        },
        "buff": {
          DEFAULT: "#d29b62",
          100: "#2f1f0e",
          200: "#5f3e1c",
          300: "#8e5d29",
          400: "#be7d37",
          500: "#d29b62",
          600: "#daaf81",
          700: "#e3c3a0",
          800: "#edd7c0",
          900: "#f6ebdf",
        },
        "pistachio": {
          DEFAULT: "#97c475",
          100: "#1d2c13",
          200: "#3b5725",
          300: "#588338",
          400: "#76ae4b",
          500: "#97c475",
          600: "#abcf90",
          700: "#c0dbab",
          800: "#d5e7c7",
          900: "#eaf3e3",
        },
        "moonstone": {
          DEFAULT: "#51b6c3",
          100: "#0e2629",
          200: "#1c4c52",
          300: "#2a727b",
          400: "#3898a4",
          500: "#51b6c3",
          600: "#73c4cf",
          700: "#96d3db",
          800: "#b9e2e7",
          900: "#dcf0f3",
        },
        "crayola-pink": {
          DEFAULT: "#e26b73",
          100: "#370b0e",
          200: "#6f161c",
          300: "#a6212a",
          400: "#d7333e",
          500: "#e26b73",
          600: "#e7888e",
          700: "#eda6aa",
          800: "#f3c3c7",
          900: "#f9e1e3",
        },
      },
    },
  },
  plugins: [],
};
export default config;
