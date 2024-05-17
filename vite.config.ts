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
    formatting: 'minify'
  }
})
