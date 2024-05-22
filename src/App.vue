<template>
  <div :class="{ 'dark-mode': isDarkMode }">
    <Navbar v-model="isDarkMode"/>
    <div
      class="main-container"
      :style="{
        '--x': `${x}px`,
        '--y': `${y}px`,
        '--cursor-background': isDarkMode ? 
          `radial-gradient(circle closest-side, rgb(43, 41, 41), transparent 80%)`:
          `radial-gradient(circle closest-side, #d49aad, transparent 80%)`
      }">
      <Wobble />
      <Wobble />
      <Wobble />
      <Wobble />
    </div>
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

const isDarkMode = ref(false)
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
  width: 100vw;
  height: 100vh;
  padding-top: 4.125rem;
  position: relative;

  &:before {
    --size: 0;
    content: '';
    position: absolute;
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

  @media only screen and (max-width: 1090px) {
    overflow: scroll;
  }
}
</style>