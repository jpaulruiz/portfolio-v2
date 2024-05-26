<template>
  <div
    id="home" 
    class="home-container"
  >
    <section>
      <div class="introduction">
        <p>JP RUIZ</p>
      </div>
      <div class="description">
        <p>Software Engineer</p>
        <p>Translates <span>{{ word }}</span> <br>into reality.</p>
      </div>
      <Navigation 
        class="navigation"
        :options="navOptions" 
      />
    </section>
    <section>

    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Navigation from '../Navigation/index.vue'

const words = [
  "designs",
  "visions",
  "concepts"
]

const navOptions = [
  "HOME",
  "EXPERIENCE",
  "CONTACT"
]

const word = ref(words[0])
let index = 0

setInterval(() => {
  setTimeout(() => {
    word.value = words[index]
    index = (index + 1) % words.length
  }, 500)
}, 2000)
</script>

<style scoped>
.home-container {
  margin: 2rem;
  padding: 2rem;
  height: calc(100vh - 4rem);
  border: 1px solid var(--border-color);
  box-sizing: border-box;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;

  section {
    font-size: 2rem;
    position: relative;
    color: var(--text-primary);
    font-weight: bold;
  }

  .introduction {
    & > p {
      font-size: 4rem;
      text-wrap: nowrap;
      background-clip: text;
      color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-animation: textclip 2s linear infinite;
      animation: textclip 2s linear infinite;
      background-image: linear-gradient(to left, #6a1b74, #68107a 10%, #ff1361 67%, #f700ff);
      background-size: 200% auto;
    }
  }

  .description {
    p {
      margin-top: 1rem;
    }

    & > p {
      font-size: 1rem;
    }

    p + p {
      font-size: 1rem;
    }
  }

  .navigation {
    transform: translate(10rem, 10rem);
    font-style: italic;
    font-size: 4rem;
    position: absolute;
  }
}

@keyframes textclip {
  100% { 
    background-position: 200%;
  }
}
</style>