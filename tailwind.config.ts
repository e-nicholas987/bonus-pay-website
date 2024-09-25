import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00326D",
        grey3: "#626D7D",
        grey2: "#C2C4CF",
        "light-blue": "#F3F8FF",
      },
      fontFamily: {
        lexend: ["var(--font-lexend)"],
      },
    },
    container: {
      center: true,
      padding: "24px",
      screens: {
        "2xl": "1241px",
      },
    },
  },
  plugins: [],
};
export default config;
