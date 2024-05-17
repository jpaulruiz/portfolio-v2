/// <reference types="vite-ssg" />
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.BASE_URL,
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
  }
})
