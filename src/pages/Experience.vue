<template>
  <ExperienceComponent ref="experience" />
</template>

<script lang="ts" setup>
import ExperienceComponent from '../components/Experience/index.vue'
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { useSeoMeta, useHead } from '@unhead/vue'

useSeoMeta({
  title: 'Experience - John Paul Ruiz | Full Stack Engineer',
  description: 'Explore John Paul Ruiz\'s professional experience and career journey as a Full Stack Engineer. View detailed work history, roles, and technical achievements.',
  ogTitle: 'Professional Experience - John Paul Ruiz',
  ogDescription: 'Explore John Paul Ruiz\'s professional experience and career journey as a Full Stack Engineer. View detailed work history, roles, and technical achievements.',
  ogUrl: 'https://www.johnpaulruiz.com/experience'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.johnpaulruiz.com/experience'
    }
  ]
})

const experience = ref<InstanceType<typeof ExperienceComponent> | null>(null)

onMounted(() => {
  if (experience.value?.$el) {
    gsap.fromTo(experience.value.$el,
      { opacity: 0, x: 100 },
      { duration: 1, opacity: 1, x: 0, ease: "power2.out", delay: 0.5 }
    )
  }
})
</script>