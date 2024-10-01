/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tomato: "hsl(4, 100%, 67%)",
        grey800: "hsl(234, 29%, 20%)",
        grey600: " hsl(235, 18%, 26%)",
        grey200: "hsl(231, 7%, 60%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        roboto: "Roboto",
      },
    },
  },
  plugins: [],
};
