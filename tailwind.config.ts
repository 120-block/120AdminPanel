import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        app_gray_light: {
          100: "#F7F9FB",
          200: "#D9D9D9",
          300: "#8D8D8F"
        },
      },
    },
  },
  plugins: [],
};
export default config;
