import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "background-gradient": "rgb(43,74,74)",
        "gradient": "linear-gradient(0deg, rgba(43,74,74,1) 41%, rgba(70,93,79,1) 65%, rgba(167,160,95,1) 100%)",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'background': "url('/assets/images/background.jpg')",
      },
      colors: {
        "charcol": "#58594D",
        "olive-light": "#BFBFAA",
        "olive-dark": "#3C3D34",
        "beige-light": "#E0E0D1",
        "orange": "#FFCC80",
        "white": "#F5F6F6",
        "gray": "#78786D",
      }, animation: {
        'spin-slow': 'spin 1.8s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
