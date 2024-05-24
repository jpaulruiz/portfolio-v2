<template>
  <nav>
    <span>
      <a href="#home"><img src="/src/assets/logo.png" alt="Logo Image"></a>
    </span>
    <ul>
      <li><a href="#home">HOME</a></li>
      <li><a href="#about">ABOUT</a></li>
      <li><a href="#contact">CONTACT</a></li>
    </ul>
    <Switch 
      :value="model"
      @toggle="toggle"/>
  </nav>
</template>

<script lang="ts" setup>
import Switch from '../Buttons/Switch/index.vue'

const model = defineModel<boolean>({ default: false })

const toggle = (e: boolean) => {
    model.value = e
}
</script>

<style scoped>
nav {
  background-color: var(--nav-bg);
  width: 100vw;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  height: 4.125rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  padding: 0 10rem;
  z-index: 999;
}

a {
  text-decoration: none;
}

li a {
  position: relative;

  &::after {
    content: '';
    height: 0.5rem;
    left: 0.2rem;
    z-index: -1;
    position: absolute;
    bottom: 0;
    width: 110%;
    background-color: var(--text-logo-primary);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 200ms ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }
}

img {
  width: 3rem;
  height: auto;
}

nav ul {
  display: flex;
  gap: 2rem;
}

li {
  color: var(--text-primary);
  list-style-type: none;
}

li a {
  color: var(--text-primary);
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
}
</style>
