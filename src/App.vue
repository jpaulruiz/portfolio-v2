<template>
  <div :class="['main-container', isDarkMode ? 'dark-mode' : '']">
    <Navbar v-model="isDarkMode"/>
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from '@unhead/vue'
import Navbar from './components/Navbar/index.vue'
import { ref } from 'vue'

useSeoMeta({
  charset: 'utf-8',
  viewport: {
    width: 'device-width',
    initialScale: 1
  },
  title: 'jpaulruiz',
})

const isDarkMode = ref(true)

</script>

<style src="./src/assets/styles/index.css">
</style>
