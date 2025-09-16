<template>
  <ProjectsComponent ref="projects" />
</template>

<script lang="ts" setup>
import ProjectsComponent from '../components/Projects/index.vue'
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

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