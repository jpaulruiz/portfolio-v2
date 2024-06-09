<template>
  <nav>
    <ul>
      <li
        v-for="(option, i) in options"
        :key="i"
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
</script>

<style scoped>
nav {
  transform: translate(2rem, 18rem);
  font-size: 2rem;
  position: absolute;

  ul {
    display: flex;
    gap: 0.5rem;
  }

  a {
    color: var(--media-link-primary);
  }
}

a:active, a:hover {
  color: var(--media-link-secondary);
}

@media screen and (max-width: 834px) {
  nav {
    transform: translate(0);
    margin-top: 1rem;
  }
}
</style>