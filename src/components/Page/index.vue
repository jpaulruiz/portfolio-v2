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
    <Wobble color="#D81E5B"/>
    <Wobble color="#B8D81E"/>
    <Wobble color="#1ED89B"/>
    <Wobble color="#3E1ED8"/>
    <Home />
    <div 
      class="switch">
      <Switch 
        :value="isDarkMode"
        @toggle="toggle"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Home from '../Home/index.vue'
import Switch from '../Buttons/Switch/index.vue'
import Wobble from '../Wobble/index.vue'
import { ref, onMounted, onUnmounted, provide } from 'vue'

const isDarkMode = ref(true)
provide('isDarkMode', isDarkMode)
const x = ref(0)
const y = ref(0)

const update = (event: MouseEvent) => {
  x.value = event.pageX
  y.value = event.pageY
}

const toggle = (e: boolean) => {
    isDarkMode.value = e
}

onMounted(() => window.addEventListener('mousemove', update))
onUnmounted(() => window.removeEventListener('mousemove', update))
</script>


<style scoped>
.main-container {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;

  &::before {
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

  .switch {
    position: absolute;
    top: 0.4rem;
    right: 2rem;
  }
}
</style>