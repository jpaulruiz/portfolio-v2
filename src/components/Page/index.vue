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
    <Home />
    <About />
  </div>
</template>

<script lang="ts" setup>
import Navbar from '../Navbar/index.vue'
import Home from '../Home/index.vue'
import About from '../About/index.vue'
import { ref, onMounted, onUnmounted, provide } from 'vue'

const isDarkMode = ref(false)
provide('isDarkMode', isDarkMode)
const x = ref(0)
const y = ref(0)

const update = (event: MouseEvent) => {
  x.value = event.pageX
  y.value = event.pageY
}

onMounted(() => window.addEventListener('mousemove', update))
onUnmounted(() => window.removeEventListener('mousemove', update))
</script>


<style scoped>
.main-container {
  position: relative;
  overflow: hidden;

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
}
</style>