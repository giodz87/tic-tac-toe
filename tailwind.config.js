/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
      boxShadow: {
        skyblue: "0px -8px 0px 0px #118C87 inset",
        yellow: "0px -8px 0px 0px #CC8B13 inset",
        bigGreen: "0px -8px 0px 0px #10212A inset",
        smallGreen: "0px -4px 0px 0px #10212A inset",
        smallGray: "0px -4px 0px 0px #6B8997 inset;",
      },
    },
  },
  plugins: [],
};
