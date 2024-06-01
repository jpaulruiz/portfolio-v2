<template>
  <div
    :style="{
      '--bg-color': `${color}`,
      '--mx-type': isDarkMode ? 'luminosity' : 'screen',
      transform: `translate(${coordinates.x}vw, ${coordinates.y}vh) rotate(${degrees}deg)`
    }"
  />
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, inject } from 'vue'
// #region Props
interface Props {
  color: string
}

withDefaults(defineProps<Props>(), {
  color: '#5BD81E'
})
// #endregion

// #region States
interface Coordinates {
  x: number
  y: number
}

const coordinates = reactive<Coordinates>({x: 0, y: 0})
const translate = reactive<Coordinates>({x: 0, y: 0})
const degrees = ref(0)
const isDarkMode = inject('isDarkMode')
// #endregion

// #region Methods
const valueGenerator = () => {
  coordinates.x = -10 + (Math.random() * 100)
  coordinates.y = -40 + (Math.random() * 130)
  degrees.value = Math.random() * 420
} 

const defaultTranslate = () => {
  translate.x = 10 + (Math.random() * 4)
  translate.y = 20 + (Math.random() * 4)
}
// #endregion

// #region Lifecycle
onMounted(() => {
  valueGenerator()
  defaultTranslate()
  setTimeout(() => {
    valueGenerator()
    defaultTranslate()
  }, 500)
  setInterval(() => {
    valueGenerator()
    defaultTranslate()
  }, 10_000)
})
// #endregion
</script>

<style scoped>
div {
  position: absolute;
  width: 35vmax;
  height: 35vmax;
  background: var(--bg-color);
  mix-blend-mode: var(--mx-type);
  font-size: 17vmin;
  border-radius: 50%;
  box-shadow: inset 0 0 .5em .2em #000, 0 0 .15em 0 #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 10s ease-in-out;
  /* animation: wobble 2s linear infinite; */
}

/* @keyframes wobble {
  100% {
    transform: rotate(1turn)
  }
} */
</style>