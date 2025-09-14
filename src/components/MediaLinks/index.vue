<template>
  <nav>
    <ul>
      <li
        v-for="(option, i) in options"
        :key="i"
        class="media-link"
      >
        <a
          target="_blank"
          :aria-label="option.name"
          :href="option.link"
        >
          <Icon :icon="option.name" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import Icon from '../Icon/index.vue'
import { gsap } from 'gsap'
import { onMounted } from 'vue'

interface MediaLink {
  name: string
  link: string
}

interface Props {
  options: MediaLink[] | undefined
}

withDefaults(defineProps<Props>(), {
  options: undefined
})

onMounted(() => {
  gsap.fromTo('.media-link', 
    { opacity: 0, x: -50 },
    { 
      duration: 0.8, 
      opacity: 1, 
      x: 0, 
      ease: "power2.out", 
      stagger: 0.2, 
      delay: 0.8 
    }
  )
})
</script>

<style scoped>
nav {
  transform: translate(4rem, -1.75rem);
  font-size: 1.5rem;

  ul {
    display: flex;
    gap: 0.5rem;
  }

  .media-link {
    transition: transform 0.2s ease;
  }

  a {
    color: #18181A;
    display: block;
  }
}

a:active, a:hover {
  color: var(--media-link-secondary);
}

@media screen and (max-width: 834px) {
  nav {
    position: absolute;
    bottom: 1.5rem;
    left: 3rem;
    transform: none;
    font-size: 1.2rem;
    margin-top: 0;
  }
}
</style>