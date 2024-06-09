<template>
  <span :class="[`icon-${icon}`]" />
</template>
<script lang="ts" setup>
// #region Props
interface Props {
  icon: string
}

withDefaults(defineProps<Props>(), {
  icon: ''
})
// #endregion
</script>
<style scoped>
@font-face {
  font-family: 'icomoon';
  src:  url('/src/assets/styles/icomoon.eot?ygslnn');
  src:  url('/src/assets/styles/icomoon.eot?ygslnn#iefix') format('embedded-opentype'),
    url('/src/assets/styles/icomoon.ttf?ygslnn') format('truetype'),
    url('/src/assets/styles/icomoon.woff?ygslnn') format('woff'),
    url('/src/assets/styles/icomoon.svg?ygslnn#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-moon-stroke:before {
  content: "\e900";
}
.icon-sun:before {
  content: "\e9d4";
}
.icon-github:before {
  content: "\eab0";
}
.icon-linkedin:before {
  content: "\eac9";
}

</style>