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
      primary: "#88e7da",
      secondary: "#d0f5f1",
      accent: "#2acfb9",
      content: "#020808",
      background: "#e6faf7",
      white: "#ffffff",
    },
    extend: {},
  },
  plugins: [],
};
