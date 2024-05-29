<template>
  <nav>
    <ul>
      <li
        v-for="(option, i) in options"
        :key="i"
      >
        {{ option }}
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>

interface Props {
  options: string[] | undefined
}

withDefaults(defineProps<Props>(), {
  options: undefined
})
</script>

<style scoped>
li {
  position: relative;
  transition: all 200ms ease-in-out;
  font-family: 'Montserrat Variable';
  cursor: pointer;

  &:hover {
    color: var(--border-color);
    transform: translateX(5%);
  }
}
</style>