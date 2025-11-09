/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22d3ee",
        secondary: "#ec4899",
        accent: "#a855f7",
        dark: "#111827",
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          "0%": { textShadow: "0 0 10px #22d3ee" },
          "100%": { textShadow: "0 0 20px #22d3ee, 0 0 30px #22d3ee" },
        },
      },
    },
  },
  plugins: [],
}