<template>
  <Page />
</template>

<script setup lang="ts">
import Page from './components/Page/index.vue'
import { useSeoMeta } from '@unhead/vue'

useSeoMeta({
  charset: 'utf-8',
  viewport: {
    width: 'device-width',
    initialScale: 1
  },
  title: 'JP RUIZ',
  description: 'jpmruiz-portfolio-v2'
})
</script>

<style src="./src/assets/styles/index.css"></style>