/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blackOlive : "rgb(38, 45, 40)",
        cambridgeBlue: "rgb(117, 163, 135)",
        eerieBlack:"rgb(26, 31, 27)",
        lightBlackOlive :"rgb(45, 53, 47)",
        lightGreen:"rgb(160, 254, 186)",
        veryLightGreen :"rgb(45, 53, 47)",
        fernGreen:"rgb(88, 159, 87)",
        hunterGreen:"rgb(58, 120, 64)"

      },
      fontFamily: {
        'quicksand':["Quicksand",'sans-serif'],
        'inter':["Inter",'sans-serif'],
        'roboto':["Roboto Slab",'serif'],
        'barlow':["Barlow",'sans-serif']
    },
    },
  },
  plugins: [],
}