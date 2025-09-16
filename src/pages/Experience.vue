<template>
  <ExperienceComponent ref="experience" />
</template>

<script lang="ts" setup>
import ExperienceComponent from '../components/Experience/index.vue'
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

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