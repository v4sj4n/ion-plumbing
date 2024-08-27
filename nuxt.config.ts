// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    'nuxt-phosphor-icons',
    '@nuxtjs/i18n',
  ],
  app: {
    head: {
      title: 'Ion Plumbing',
      meta: [
        {
          name: 'description',
          content:
            'Provides expert plumbing solutions with top-notch service and reliability.',
        },
      ],
    },
  },
  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en-US',
        language: 'en-US',
        name: 'English',
        file: 'en-US.json',
      },
      {
        code: 'fr-FR',
        language: 'fr-FR',
        name: 'French',
        file: 'fr-FR.json',
      },
      {
        code: 'sq-AL',
        language: 'sq-AL',
        name: 'Albanian',
        file: 'sq-AL.json',
      },
      {
        code: 'el-GR',
        language: 'el-GR',
        name: 'Greek',
        file: 'el-GR.json',
      },
    ],
    defaultLocale: 'el-GR',
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
    }
  },
})
