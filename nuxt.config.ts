export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      API_KEY: process.env.API_KEY,
      API_URL: process.env.API_URL,
    },
  },
  routeRules: {
    "/shop/**": { swr: 1800 },
    "/fabrics/**": { swr: 3600 },
  },
  css: ["~/assets/css/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    format: ["webp"],
    provider: "storyblok",
    storyblok: {
      baseURL: "https://a.storyblok.com",
    },
  },
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxtjs/eslint-module",
  ],
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
