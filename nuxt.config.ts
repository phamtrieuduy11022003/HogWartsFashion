// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['nuxt-swiper', '@nuxt/image', '@vueuse/nuxt','nuxt-icon', '@nuxt/ui',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
          'storeToRefs',
          'createPinia'
        ],
      },
    ],
  ],
  app: {
    head: {
     
    }
  },
  imports: {
    dirs: [
      'composables/**',
      'stores/**',
    ]
  },
  ui: {
    icons: 'all',
  },
  runtimeConfig: {
    
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
 
 
})
