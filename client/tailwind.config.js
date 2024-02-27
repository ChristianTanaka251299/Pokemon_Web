/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#2B3278",
        primaryYellow: "#E0B40B",
        blackSoft: "#252525",
        bugGreen: "#729f3f",
        dragonBlue: "#53a4cf",
        fairyPink: "#fdb9e9",
        fireRed: "#fd7d24",
        ghostBlack: "#7b62a3",
        groundBrown:"#ab9842",
        normalGrey:"#d0d0d0",
        psychicPurple: "#f366b9",
        steelGrey: "#9eb7b8",
        darkBlack: "#707070",
        electricYellow: "#eed535",
        fightingRed: "#d56723",
        flyingBlue: "#3dc7ef",
        grassGreen: "#9bcc50",
        iceBlue: "#51c4e7",
        poisonPurple: "#b97fc9",
        rockRed: "#a38c21",
        waterBlue: "#4592c4"
      },
      fontFamily: {
        actor: ["Actor", "sans-serif"],
        helvetica: ["HELVETICA", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
