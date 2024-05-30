<template>
  <div
    :class="['container', { 'dark-mode': isDarkMode }]"
    :style="{
      '--x': `${x}px`,
      '--y': `${y}px`,
      '--cursor-background': isDarkMode ? 
        `radial-gradient(circle closest-side, rgb(43, 41, 41), transparent 80%)`:
        `radial-gradient(circle closest-side, #d49aad, transparent 80%)`
    }"
  >
    <Wobble color="#D81E5B" />
    <Wobble color="#B8D81E" />
    <Wobble color="#1ED89B" />
    <Wobble color="#3E1ED8" />
    <div class="switch">
      <Switch 
        :value="isDarkMode"
        @toggle="toggle"
      />
    </div>
    <div class="main">
      <section>
        <div class="introduction">
          <p>JP RUIZ</p>
        </div>
        <div class="description">
          <p>Software Engineer</p>
          <p>Translates <span>{{ word }}</span> <br>into reality.</p>
        </div>
        <Navigation 
          class="navigation"
          :options="navOptions"
          @home="handleNav"
          @experience="handleNav"
          @contact="handleNav"
        />
      </section>
      <section
        ref="content"
        class="content"
      >
        <Home ref="home" />
        <Experience ref="experience" />
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Home from '../Home/index.vue'
import Experience from '../Experience/index.vue'
import Switch from '../Buttons/Switch/index.vue'
import Wobble from '../Wobble/index.vue'
import Navigation from '../Navigation/index.vue'
import common from '../../common.json'
import { ref, onMounted, onUnmounted, provide } from 'vue'

const content = ref<HTMLElement | null>(null)
const home = ref<HTMLElement | null>(null)
const experience = ref<HTMLElement | null>(null)
const isDarkMode = ref(false)
const x = ref(0)
const y = ref(0)

provide('isDarkMode', isDarkMode)

const update = (event: MouseEvent) => {
  x.value = event.pageX
  y.value = event.pageY
}

const toggle = (e: boolean) => {
  isDarkMode.value = e
}

const words = common.word_randomizer
const navOptions = common.navigation

const word = ref(words[0])
let index = 0

setInterval(() => {
  setTimeout(() => {
    word.value = words[index]
    index = (index + 1) % words.length
  }, 500)
}, 2000)

const handleNav = (navigate: string) => {
  handleScroll(navigate)
}

const handleScroll = (scrollTo: string) => {
  // const scroll = content.value
  console.log(scrollTo)
}

onMounted(() => {
  window.addEventListener('mousemove', update)
})
onUnmounted(() => window.removeEventListener('mousemove', update))
</script>


<style scoped>
.container {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: var(--background-primary);

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

.main {
  margin: 2rem;
  padding: 2rem;
  height: calc(100vh - 4rem);
  border: 1px solid var(--border-color);
  box-sizing: border-box;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;

  section {
    font-size: 2rem;
    position: relative;
    color: var(--text-primary);
    font-weight: bold;
  }

  .introduction {
    & > p {
      font-size: 4rem;
      text-wrap: nowrap;
      background-clip: text;
      color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-animation: textclip 2s linear infinite;
      animation: textclip 2s linear infinite;
      background-image: linear-gradient(to left, #6a1b74, #68107a 10%, #ff1361 67%, #f700ff);
      background-size: 200% auto;
    }
  }

  .description {
    p {
      margin-top: 1rem;
    }

    & > p {
      font-size: 1rem;
    }

    p + p {
      font-size: 1rem;
    }
  }

  .navigation {
    transform: translate(5rem, 8rem);
    font-size: 1rem;
    position: absolute;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    
    &::-webkit-scrollbar { /* WebKit */
        width: 0;
        height: 0;
    }
  }
}

@keyframes textclip {
  100% { 
    background-position: 200%;
  }
}
</style>