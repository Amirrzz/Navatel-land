/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        "blue-light": "#1166FB",
        "blue-dark": "#001D7E",
        yellow: "#FEDD5B",
        gray: "#1166FB0D",
      },
    },
  },
  plugins: [],
};
