export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      API_KEY: process.env.API_KEY,
      API_URL: process.env.API_URL,
    },
  },
  routeRules: {
    "/": { swr: 3600 },
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
    domains: ["https/lxlaycyqekumxskkhfup.supabase.co"],
  },
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
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
