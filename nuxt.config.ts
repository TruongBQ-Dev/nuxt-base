// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-12-25",

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
    },
  },

  modules: ["@nuxt/eslint", "@pinia/nuxt", "@nuxtjs/i18n"],

  i18n: {
    lazy: true,
    locales: [
      { code: "en", file: "en.json", name: "English" },
      { code: "ja", file: "ja.json", name: "日本語" },
      { code: "vn", file: "vn.json", name: "Tiếng Việt" },
    ],
    debug: false,
    defaultLocale: "ja",
    strategy: "no_prefix",
    skipSettingLocaleOnNavigate: false,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "locale",
      redirectOn: "root",
    },
  },

  app: {
    head: {
      titleTemplate: "%s",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no",
        },
      ],
    },
  },
});
