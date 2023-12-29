/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#2B3278",
        primaryYellow: "#E0B40B",
        blackSoft: "#252525"
      },
      fontFamily: {
        actor: ["Actor", "sans-serif"]
      }
    },
  },
  plugins: [],
}