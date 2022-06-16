/*
 * @Author: zhangyang
 * @Date: 2022-06-15 08:59:22
 * @LastEditTime: 2022-06-16 14:41:24
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
  content: {
    highlight: {
      theme: 'github-light',
      preload: [
        'javascript',
        'typescript',
        'ts',
        'js',
        'json',
        'html',
        'vue',
        'bash',
        'sql',
        'css',
        'scss',
        'yaml',
        'ini',
        'nginx',
        'py',
        'python'
      ]
    }
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
