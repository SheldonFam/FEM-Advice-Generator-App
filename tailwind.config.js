/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#202733",
        darkGrayishBlue: "#313A48",
        lightCyan: "#CEE3E9",
        neonGreen: "#53FFAA",
        grayishBlue: "#4F5D74",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        shadow: "0 0px 30px 0px rgba(0, 0, 0, 25%)",
      },
      fontSize: {
        quote: [
          "28px",
          {
            lineHeight: "-0.3px",
          },
        ],
        quoteS: [
          "24px",
          {
            lineHeight: "-0.2px",
          },
        ],
        heading: [
          "13px",
          {
            lineHeight: "4.09px",
          },
        ],
        headingS: [
          "11px",
          {
            lineHeight: "3.46px",
          },
        ],
      },
    },
  },
  plugins: [],
};
