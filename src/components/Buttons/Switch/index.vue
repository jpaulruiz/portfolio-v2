<template>
  <div
    class="switch-body"
    @click="toggle">
    <span :class="['switch', { 'switched': value }]">
      <Icon :icon="icon" />
    </span>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Icon from '../../Icon/index.vue'
// #region Props
interface Props {
  value?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  value: false
})
// #endregion

// #region Emits
const emit = defineEmits<{
  toggle: [boolean]
}>()
// #endregion

// #region Methods
const icon = ref('moon-stroke')
const toggle = () => {
  emit('toggle', !props.value)
  icon.value = props.value ? 'moon-stroke' : 'sun'
}
// #endregion

</script>

<style scoped>
.switch-body {
  width: 4.875rem;
  height: 2.625rem;
  box-sizing: border-box;
  background: var(--switch-bg);
  border-radius: 1rem;
  border-radius: 50px;
  position: relative;
}

.switch {
  content: '';
  position: absolute;
  /* left: 2.1875rem; */
  left: 0;
  top: 0;
  background-color: var(--switch-circle);
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  margin-top: 0.1875rem;
  margin-left: 0.25rem; 
  transition: left 0.2s ease, transform 1s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.switched {
  left: 2.1875rem;
  transform: rotate(270deg);
  transition: left 0.2s ease, transform 1s ease;
  color: white;
}
</style>