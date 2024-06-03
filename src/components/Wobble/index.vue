<template>
  <div
    :class="{ 'transition': toggleTransition }"
    :style="{
      '--bg-color': `${color}`,
      transform: `translate(${coordinates.x}vw, ${coordinates.y}vh) rotate(${degrees}deg)`
    }"
  />
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
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
const degrees = ref(0)
const toggleTransition = ref(false)
// #endregion

// #region Methods
const valueGenerator = () => {
  coordinates.x = -10 + (Math.random() * 100)
  coordinates.y = -40 + (Math.random() * 130)
  degrees.value = Math.random() * 420
}
// #endregion

// #region Lifecycle
onMounted(() => {
  valueGenerator()
  setTimeout(() => {
    if (!toggleTransition.value) {
      toggleTransition.value = !toggleTransition.value
    }
    valueGenerator()
  }, 500)
  setInterval(() => valueGenerator(), 10_000)
})
// #endregion
</script>

<style scoped>
div {
  position: fixed;
  width: 25vmax;
  height: 25vmax;
  background: var(--bg-color);
  mix-blend-mode: screen;
  font-size: 17vmin;
  box-shadow: inset 0 0 .5em .2em #000, 0 0 .15em 0 #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  /* animation: wobble 2s linear infinite; */

  .transition {
    transition: transform 10s ease-in-out;
  }
}

/* @keyframes wobble {
  100% {
    transform: rotate(1turn)
  }
} */
</style>