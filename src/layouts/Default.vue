<template>
  <div
    :class="['container', { 'dark-mode': isDarkMode }]"
  >
    <FlowingRibbons ref="flowingRibbons" />
    <div
      class="main main-wrapper"
      @mousemove="forwardMouseEvent"
      @mousedown="forwardMouseEvent"
      @mouseup="forwardMouseEvent"
    >
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
          :opt="currentSection"
          @about="navigateTo('/')"
          @experience="navigateTo('/experience')"
          @projects="navigateTo('/projects')"
          @contact="scrollToContact"
        />
      </section>
      <section
        ref="content"
        class="content no-scroll"
      >
        <router-view />
      </section>
    </div>
    <MediaLinks
      :options="mediaLinks"
    />
  </div>
</template>

<script lang="ts" setup>
import Navigation from '../components/Navigation/index.vue'
import common from '../common.json'
import MediaLinks from '../components/MediaLinks/index.vue'
import FlowingRibbons from '../components/FlowingRibbons/index.vue'
import { ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { gsap } from 'gsap'

const router = useRouter()
const route = useRoute()
const content = ref<HTMLElement | null>(null)
const flowingRibbons = ref<InstanceType<typeof FlowingRibbons> | null>(null)
const isDarkMode = ref(true)

const words = common.word_randomizer
const navOptions = common.navigation
const mediaLinks = common.media_links

const word = ref(words[0])
let index = 0

// Get current section based on route
const currentSection = computed(() => {
  switch (route.path) {
    case '/':
      return 'ABOUT'
    case '/experience':
      return 'EXPERIENCE'
    case '/projects':
      return 'PROJECTS'
    default:
      return 'ABOUT'
  }
})

setInterval(() => {
  setTimeout(() => {
    word.value = words[index]
    index = (index + 1) % words.length
  }, 500)
}, 2000)

const forwardMouseEvent = (event: MouseEvent) => {
  const canvas = flowingRibbons.value?.$refs?.canvasRef as HTMLCanvasElement | undefined
  if (!canvas) return

  const canvasEvent = new MouseEvent(event.type, {
    bubbles: event.bubbles,
    cancelable: event.cancelable,
    clientX: event.clientX,
    clientY: event.clientY,
    button: event.button,
    buttons: event.buttons
  })

  canvas.dispatchEvent(canvasEvent)
}

const navigateTo = (path: string) => {
  router.push(path)
}

const scrollToContact = () => {
  // Add contact scrolling logic here if needed
}

onMounted(() => {
  gsap.fromTo('.introduction p',
    { opacity: 0, y: -30 },
    { duration: 1, opacity: 1, y: 0, ease: "power2.out", delay: 0.2 }
  )

  gsap.fromTo('.description p',
    { opacity: 0, y: 20 },
    { duration: 1, opacity: 1, y: 0, ease: "power2.out", stagger: 0.2, delay: 0.4 }
  )

  gsap.fromTo('.navigation',
    { opacity: 0, x: -30 },
    { duration: 1, opacity: 1, x: 0, ease: "power2.out", delay: 0.6 }
  )
})
</script>

<style src="./index.css" scoped>
</style>