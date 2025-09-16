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
import { ref, watchEffect } from 'vue'

interface Props {
  options: string[] | undefined
  opt: string
}

const props = withDefaults(defineProps<Props>(), {
  options: undefined,
  opt: 'HOME'
})

const emit = defineEmits<{
  [index: string]: [string]
}>()

const activeOpt = ref(props.opt)

const handleNav = (option: string) => {
  activeOpt.value = option
  emit(option.toLocaleLowerCase(), option.toLocaleLowerCase())
}

watchEffect(() => {
  if (props.opt) {
    activeOpt.value = props.opt
  }
})
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
  font-size: 0.725rem;

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