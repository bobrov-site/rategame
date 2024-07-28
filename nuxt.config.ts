import { paths } from './node.const';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ...paths,
  buildDir: './.nuxt',
  serverDir: './server',
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Roboto: true,
    },
    display: 'swap',
    preload: true,
  },
  css: ['@/assets/css/common.scss'],
});
