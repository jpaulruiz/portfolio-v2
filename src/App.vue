<template>
  <h1>Hello, world!</h1>
</template>

<script setup lang="ts">
import { useHead, useSeoMeta } from '@unhead/vue'

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/vite.svg'
    }
  ]
})

useSeoMeta({
  charset: 'utf-8',
  viewport: {
    width: 'device-width',
    initialScale: 1
  },
  title: 'jpaulruiz',
})
</script>
