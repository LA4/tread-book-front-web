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
        "gradient": "radial-gradient(circle, rgba(52,64,53,0.4) 0%, rgba(137,140,116,0.2) 100%)",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'background': "url('/assets/images/background.jpg')",
      },
      colors: {
        "charcol": "#132015",
        "olive-light": "#80B388",
        "olive-dark": "#396040",
        "beige-light": "#DFECE1",
        "gold": "#9F8A60",
        "accent": "#60759F",
        "white": "#F5F6F6",
        "gray": "#adb8b2",
      }, animation: {
        'spin-slow': 'spin 1.8s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
