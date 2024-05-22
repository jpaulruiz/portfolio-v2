<template>
  <div></div>
</template>

<style scoped>
div {
  position: absolute;
  width: 3.5em;
  height: 3.5em;
  border: 1px solid black;
  border-radius: 90% 95% 85% 105%;
  mix-blend-mode: screen;
  font-size: 20vmin;
  mix-blend-mode: screen;
  filter: hue-rotate(0deg);
  animation: wobble 5s linear infinite;
  box-shadow: inset 0 0 .5em .2em #000, 0 0 .15em 0 #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes wobble {
  100% {
    transform: rotate(1turn);
  }
}
</style>