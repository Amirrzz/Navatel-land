// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "fa",
      },
      title: "Navatel",
      charset: "utf-8",
      meta: [],
      link: [],
    },
  },

  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/image", "@nuxtjs/device"],
});
