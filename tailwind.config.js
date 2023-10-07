/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      primary: "#73DF62",
      secondary: "#C4F3D5",
      accent: "#28C361",
      content: "#030401",
      background: "#FFFFFF",
      white: "#ffffff",
    },
    extend: {},
  },
  plugins: [],
};
