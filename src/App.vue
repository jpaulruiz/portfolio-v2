<template>
  <h1>Hello, world!</h1>
</template>

<script setup lang="ts">
import { useSeoMeta } from '@unhead/vue'

useSeoMeta({
  charset: 'utf-8',
  viewport: {
    width: 'device-width',
    initialScale: 1
  },
  title: 'jpaulruiz',
})
</script>
