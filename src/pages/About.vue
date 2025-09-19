<template>
  <HomeComponent ref="home" />
</template>

<script lang="ts" setup>
import HomeComponent from '../components/Home/index.vue'
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { useSeoMeta, useHead } from '@unhead/vue'

useSeoMeta({
  title: 'About - John Paul Ruiz | Full Stack Engineer',
  description: 'Learn about John Paul Ruiz, a passionate Full Stack Engineer with expertise in Vue.js, React.js, TypeScript, Java, Scala, PHP, and modern web development technologies.',
  ogTitle: 'About John Paul Ruiz - Full Stack Engineer',
  ogDescription: 'Learn about John Paul Ruiz, a passionate Full Stack Engineer with expertise in Vue.js, React.js, TypeScript, Java, Scala, PHP, and modern web development technologies.',
  ogUrl: 'https://www.johnpaulruiz.com/'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.johnpaulruiz.com/'
    }
  ]
})

const home = ref<InstanceType<typeof HomeComponent> | null>(null)

onMounted(() => {
  if (home.value?.$el) {
    gsap.fromTo(home.value.$el,
      { opacity: 0, x: 100 },
      { duration: 1, opacity: 1, x: 0, ease: "power2.out", delay: 0.5 }
    )
  }
})
</script>