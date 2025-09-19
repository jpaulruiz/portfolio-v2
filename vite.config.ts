/// <reference types="vite-ssg" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    cssMinify: 'lightningcss',
  },
  css: {
    transformer: 'lightningcss',
  },
  plugins: [
    vue()
  ],
  ssgOptions: {
    formatting: 'prettify',
    crittersOptions: {
      reduceInlineStyles: false,
    },
    includedRoutes(paths) {
      return paths.filter(i => i.indexOf('__') === -1)
    }
  }
})
