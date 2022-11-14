/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nunito": ["Nunito", "sans-serif"],
      }
    },
    container: {
      center: true,
      padding: "2rem"
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
  daisyui: {
    darkTheme: "light"
  }
}
