import { paths } from './node.const';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ...paths,
  buildDir: './.nuxt',
  serverDir: './server',
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/google-fonts', '@nuxt/image'],
  googleFonts: {
    families: {
      Roboto: true,
    },
    display: 'swap',
    preload: true,
  },
  css: ['@/assets/css/common.scss'],
  ui: {
    icons: ['mdi'],
  },
  image: {
    dir: 'assets/images',
    ipx: {
      maxAge: 1200,
    },
    domains: ['localhost:3000'],
  },
  runtimeConfig: {
    igdbIdClient: '',
    igdbSecretClient: '',
  },
});
