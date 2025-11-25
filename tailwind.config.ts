import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "aqua-pool": {
          50: "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6", // PRIMARY BRAND COLOR - Light Teal
          600: "#06B6D4", // HOVER COLOR - Cyan Blue
          700: "#0891B2",
          800: "#0E7490",
          900: "#155E75",
        },
      },
    },
  },
  plugins: [],
};
export default config;
