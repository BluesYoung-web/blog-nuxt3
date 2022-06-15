/*
 * @Author: zhangyang
 * @Date: 2022-06-15 08:59:22
 * @LastEditTime: 2022-06-15 14:38:53
 * @Description: 
 */
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content',
  ],
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  unocss: {
    preflight: true,
  },
  colorMode: {
    classSuffix: '',
  },
  build: {
    transpile: [
      'naive-ui',
      'vueuc',
      '@css-render/vue3-ssr',
      '@juggle/resize-observer'
    ]
  },
  vite: {
    optimizeDeps: {
      include: ['date-fns-tz/esm/formatInTimeZone']
    }
  }
})
