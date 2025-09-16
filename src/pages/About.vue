<template>
  <HomeComponent ref="home" />
</template>

<script lang="ts" setup>
import HomeComponent from '../components/Home/index.vue'
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

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