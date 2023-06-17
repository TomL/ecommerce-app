/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone: "375px",
      tablet: "1024px",
      desktop: "1110px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      verydarkblue: "hsl(220 13% 13%)",
      darkgrayishblue: "hsl(219 9% 45%)", // #69707D
      grayishblue: "hsl(220 14% 75%)",
      lightgrayishblue: "hsl(223 64% 98%)",
      lightgray: "hsl(219 35% 92%)",
      orange: "hsl(26 100% 55%)",
      paleorange: "hsl(25, 100%, 94%)",
      white: "hsl(0 0% 100%)",
      black: "hsl(0 0% 0%)",
      blacktransparent: "hsl(0 0% 0% / 75%)",
    },
    extend: {
      backgroundImage: {
        "icon-close": "url('/images/icon-close.svg')",
      },
      boxShadow: {
        "cart-shadow": "0px 20px 50px -20px rgba(29, 32, 38, 0.503143)",
        "orange-button-shadow": "0px 20px 50px -20px #FF7E1B;",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
