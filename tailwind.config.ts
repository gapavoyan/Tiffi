import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      screens: {
        sm: "600px",
        md: "834px",
        m: "1200px",
        lg: "1416px",
        mij: "1510px",
        xl: "1770px"
      },
      colors: {
        customBlack: "#1B1B1B",
        customGreen: "#168570",
        customWhite: "#FFF"
      },
      fontSize: {
        sm: "14px",
        md: "16px",
        lg: "50px",
        xl: "80px"
      },
      fontFamily: {
        lora: ["Lora", "serif"],
        railway: ["Raleway", "sans-serif"]
      },
      height: {
        "max-content": "max-content"
      },
      scale: {
        "2": "2.5"
      }
    }
  },
  plugins: []
};
export default config;
