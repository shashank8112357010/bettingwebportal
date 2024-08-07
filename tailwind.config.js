/** @type {import('tailwindcss').Config} */
module.exports = {
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
      colors: {
        // primaryBlack: "#0B1926",
        // secondaryBlack: "#182736",
        // darkBlack: "#12202E",
        // lightBlack: "#1F3143",
        primaryYellow:"#f9c809",
        buttonBlack: "#2F2F2F",
        primaryGray: "#A4A4A4",
        // primaryGrey: "#8D8D8D",
      },
    },
  },
  plugins: [],
};
