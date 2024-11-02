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
    <div class="switch">
      <Switch 
        :value="isDarkMode"
        @toggle="toggle"
      />
    </div>
    <div class="main-wrapper">
      <Wobble
        v-for="(colorPair, i) in colorPairs" 
        :key="i" 
        :color="isDarkMode ? colorPair.dark : colorPair.light"
      />
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
            :opt="navigation"
            @home="handleScroll"
            @experience="handleScroll"
            @contact="handleScroll"
          />
          <MediaLinks
            :options="mediaLinks"
          />
        </section>
        <section
          ref="content"
          class="content"
          @scroll="handleScroll"
        >
          <Home ref="home" />
          <Experience ref="experience" />
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Home from '../components/Home/index.vue'
import Experience from '../components/Experience/index.vue'
import Switch from '../components/Buttons/Switch/index.vue'
import Wobble from '../components/Wobble/index.vue'
import Navigation from '../components/Navigation/index.vue'
import common from '../common.json'
import MediaLinks from '../components/MediaLinks/index.vue'
import { ref, onMounted, onUnmounted, watchEffect } from 'vue'

const content = ref<HTMLElement | null>(null)
const home = ref<InstanceType<typeof Home> | null>(null)
const experience = ref<InstanceType<typeof Experience> | null>(null)
const isDarkMode = ref(false)
const x = ref(0)
const y = ref(0)
const navigation = ref('HOME')
const scroll = ref(0)

const colorPairs = [
  { dark: 'silver', light: '#D81E5B' },
  { dark: 'darkgrey', light: '#B8D81E' },
  { dark: '#3d3737', light: '#1ED89B' },
  { dark: '#1a1717', light: '#3E1ED8' }
]

const update = (event: MouseEvent) => {
  x.value = event.pageX
  y.value = event.pageY
}

const toggle = (e: boolean) => {
  isDarkMode.value = e
}

const words = common.word_randomizer
const navOptions = common.navigation
const mediaLinks = common.media_links

const word = ref(words[0])
let index = 0

setInterval(() => {
  setTimeout(() => {
    word.value = words[index]
    index = (index + 1) % words.length
  }, 500)
}, 2000)

const handleScroll = (scrollTo: string | Event) => {
  if (!content.value || !home.value || !experience.value) return
  if (typeof scrollTo === 'string') {
    switch (scrollTo) {
      case 'home':
        content.value.scrollTop = 0
        break
      case 'experience':
        content.value.scrollTop = home.value.$el.scrollHeight + (4 * 16) + (2 * 16)
        break
      case 'contact':
        break
      default:
        break
    }
  } else {
    scroll.value = content.value.scrollTop
  }
}

const handleNav = (scrollTo: number) => {
  if (!content.value || !home.value || !experience.value) return
  if (scrollTo <= (home.value.$el.scrollHeight - home.value.$el.scrollHeight/4)) {
    navigation.value = 'HOME'
  } else if (scrollTo >= home.value.$el.scrollHeight &&
    scrollTo <= home.value.$el.scrollHeight + (4 * 16) + (2 * 16) + content.value.scrollHeight) {
    navigation.value = 'EXPERIENCE'
  }
}

watchEffect(() => {
  if (scroll.value) {
    handleNav(scroll.value)
  }
})

onMounted(() => {
  window.addEventListener('mousemove', update)
  handleScroll('home')
})
onUnmounted(() => window.removeEventListener('mousemove', update))
</script>


<style src="../Page/index.css" scoped>
</style>