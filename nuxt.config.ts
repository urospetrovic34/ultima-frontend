export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt", "@vueuse/nuxt"],
  imports: {
    dirs: ["stores"],
  },
  app: {
    head: {
      title: "Ultima",
      link: [{ rel: "icon", type: "image/x-icon", href: "favicon.ico" }],
    },
  },
});
