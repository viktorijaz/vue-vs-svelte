// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Nuxt3 App',
      meta: [{ name: 'description', content: 'Nuxt3 Sample App' }],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
      ],
    },
  },
})
