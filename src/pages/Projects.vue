<template>
  <ProjectsComponent ref="projects" />
</template>

<script lang="ts" setup>
import ProjectsComponent from '../components/Projects/index.vue'
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { useSeoMeta, useHead } from '@unhead/vue'

useSeoMeta({
  title: 'Projects - John Paul Ruiz | Full Stack Engineer',
  description: 'Discover John Paul Ruiz\'s portfolio of web development projects. View examples of Vue.js, React.js, TypeScript, and full-stack applications with live demos and source code.',
  ogTitle: 'Web Development Projects - John Paul Ruiz',
  ogDescription: 'Discover John Paul Ruiz\'s portfolio of web development projects. View examples of Vue.js, React.js, TypeScript, and full-stack applications with live demos and source code.',
  ogUrl: 'https://www.johnpaulruiz.com/projects'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.johnpaulruiz.com/projects'
    }
  ]
})

const projects = ref<InstanceType<typeof ProjectsComponent> | null>(null)

onMounted(() => {
  if (projects.value?.$el) {
    gsap.fromTo(projects.value.$el,
      { opacity: 0, x: 100 },
      { duration: 1, opacity: 1, x: 0, ease: "power2.out", delay: 0.5 }
    )
  }
})
</script>