<template>
  <nav>
    <ul>
      <li
        v-for="(option, i) in options"
        :key="i"
        :class="{ active: activeOpt === option }"
        @click="handleNav(option)"
      >
        {{ option }}
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Props {
  options: string[] | undefined
}

withDefaults(defineProps<Props>(), {
  options: undefined
})

const emit = defineEmits<{
  [index: string]: [string]
}>()

const activeOpt = ref('HOME')

const handleNav = (option: string) => {
  activeOpt.value = option
  emit(option.toLocaleLowerCase(), option.toLocaleLowerCase())
}
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

li {
  position: relative;
  transition: transform 0.2s ease-in-out;
  font-family: 'Montserrat Variable';
  cursor: pointer;

  &::before {
    content: '';
    left: 0;
    top: 35%;
    z-index: -1;
    position: absolute;
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    background-color: var(--nav-circle);
    transform: scaleX(0);
  }

  &:hover, &.active {
    color: var(--border-color);
    font-style: italic;
    transform: translateX(5%);
    
    &::before {
      left: -5%;
      transform: scaleX(1);
    }
  }
}
</style>