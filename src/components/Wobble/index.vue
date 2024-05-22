<template>
  <div
    :style="{
    '--bg-color': `${color}`,
    transform: isDarkMode ? `translate(${translate.x}vw, ${translate.y}vh)` 
      : `translate(${coordinates.x}vw, ${coordinates.y}vh) rotate(${degrees}deg)`,
    transition: isDarkMode ? `transform 1s ease`
      : `transform 10s ease-in-out`
  }">
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, nextTick } from 'vue'
// #region Props
interface Props {
  color: string
  isDarkMode: boolean,
}

withDefaults(defineProps<Props>(), {
  color: '#5BD81E',
  isDarkMode: true
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
  nextTick(() => {
    valueGenerator()
    defaultTranslate()
  })
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
  width: 3.5em;
  height: 3.5em;
  background: var(--bg-color);
  mix-blend-mode: screen;
  font-size: 17vmin;
  box-shadow: inset 0 0 .5em .2em #000, 0 0 .15em 0 #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  /* animation: wobble 2s linear infinite; */
}

/* @keyframes wobble {
  100% {
    transform: rotate(1turn)
  }
} */
</style>