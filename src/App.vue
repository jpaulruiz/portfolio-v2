<template>
  <div
    :class="['main-container', { 'dark-mode': isDarkMode }]"
    :style="{
        '--x': `${x}px`,
        '--y': `${y}px`,
        '--cursor-background': isDarkMode ? 
          `radial-gradient(circle closest-side, rgb(43, 41, 41), transparent 80%)`:
          `radial-gradient(circle closest-side, #d49aad, transparent 80%)`
      }">
    <Navbar v-model="isDarkMode"/>
    <Wobble color="#D81E5B" :is-dark-mode="isDarkMode"/>
    <Wobble color="#B8D81E" :is-dark-mode="isDarkMode"/>
    <Wobble color="#1ED89B" :is-dark-mode="isDarkMode"/>
    <Wobble color="#3E1ED8" :is-dark-mode="isDarkMode"/>
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar/index.vue'
import Wobble from './components/Wobble/index.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { useSeoMeta } from '@unhead/vue'

useSeoMeta({
  charset: 'utf-8',
  viewport: {
    width: 'device-width',
    initialScale: 1
  },
  title: 'jpaulruiz',
  description: 'jpmruiz-portfolio-v2'
})

const isDarkMode = ref(true)
const x = ref(0)
const y = ref(0)

const update = (event: MouseEvent) => {
  x.value = event.pageX
  y.value = event.pageY
}

onMounted(() => window.addEventListener('mousemove', update))
onUnmounted(() => window.removeEventListener('mousemove', update))
</script>

<style src="./src/assets/styles/index.css"></style>
<style scoped>
.main-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  &:before {
    --size: 0;
    content: '';
    position: fixed;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background-image: var(--cursor-background);
    transform: translate(-50%, -50%);
    transition: width 0.2s ease, height 0.2s ease;
  }
  &:hover::before {
    --size: 90rem;
  }
}
</style>