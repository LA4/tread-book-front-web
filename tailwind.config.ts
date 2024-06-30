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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
