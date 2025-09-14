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
          :opt="navigation"
          @home="handleScroll"
          @experience="handleScroll"
          @contact="handleScroll"
        />
      </section>
      <section
        ref="content"
        class="content no-scroll"
      >
        <Home
          v-show="navigation === 'HOME'"
          ref="home"
        />
        <Experience
          v-show="navigation === 'EXPERIENCE'"
          ref="experience"
        />
      </section>
    </div>
    <MediaLinks
      :options="mediaLinks"
    />
  </div>
</template>

<script lang="ts" setup>
import Home from '../components/Home/index.vue'
import Experience from '../components/Experience/index.vue'
import Navigation from '../components/Navigation/index.vue'
import common from '../common.json'
import MediaLinks from '../components/MediaLinks/index.vue'
import FlowingRibbons from '../components/FlowingRibbons/index.vue'
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const content = ref<HTMLElement | null>(null)
const home = ref<InstanceType<typeof Home> | null>(null)
const experience = ref<InstanceType<typeof Experience> | null>(null)
const flowingRibbons = ref<InstanceType<typeof FlowingRibbons> | null>(null)
const isDarkMode = ref(true)
const navigation = ref('HOME')


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

const handleScroll = (scrollTo: string | Event) => {
  if (typeof scrollTo === 'string') {
    animateToSection(scrollTo)
  }
}

const animateToSection = (section: string) => {
  const currentSection = content.value?.querySelector(`[v-show="${navigation.value === 'HOME'}"]`) || 
                        content.value?.querySelector(`[v-show="${navigation.value === 'EXPERIENCE'}"]`)
  
  if (currentSection) {
    gsap.to(currentSection, {
      duration: 0.5,
      opacity: 0,
      ease: "power2.out",
      onComplete: () => {
        navigation.value = section.toUpperCase()
        const newSection = section === 'home' ? home.value?.$el : experience.value?.$el
        if (newSection) {
          if (section === 'experience') {
            gsap.fromTo(newSection, 
              { opacity: 0, x: 100 },
              { duration: 0.6, opacity: 1, x: 0, ease: "power2.out" }
            )
          } else {
            gsap.fromTo(newSection, 
              { opacity: 0, y: 50 },
              { duration: 0.5, opacity: 1, y: 0, ease: "power2.out" }
            )
          }
        }
      }
    })
  } else {
    navigation.value = section.toUpperCase()
    const newSection = section === 'home' ? home.value?.$el : experience.value?.$el
    if (newSection) {
      if (section === 'experience') {
        gsap.fromTo(newSection, 
          { opacity: 0, x: 100 },
          { duration: 0.6, opacity: 1, x: 0, ease: "power2.out" }
        )
      } else {
        gsap.fromTo(newSection, 
          { opacity: 0, y: 50 },
          { duration: 0.5, opacity: 1, y: 0, ease: "power2.out" }
        )
      }
    }
  }
}

onMounted(() => {
  navigation.value = 'HOME'
  if (home.value?.$el) {
    gsap.fromTo(home.value.$el, 
      { opacity: 0, y: 50 },
      { duration: 1, opacity: 1, y: 0, ease: "power2.out", delay: 0.5 }
    )
  }
  
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


<style src="../Page/index.css" scoped>
</style>