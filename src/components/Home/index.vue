<template>
  <div
    id="home" 
    class="home-container"
  >
    <Wobble color="#D81E5B"/>
    <Wobble color="#B8D81E"/>
    <Wobble color="#1ED89B"/>
    <Wobble color="#3E1ED8"/>
    <section>
      <div class="introduction">
        <p>Hi, my name is</p>
        <p>RUIZ</p>
      </div>
      <div class="description">
        <p>Software Engineer.</p>
        <p>Translates designs into reality.</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import Wobble from '../Wobble/index.vue'
</script>

<style scoped>
.home-container {
  width: 100vw;
  height: calc(100vh - 4.125rem);

  section {
    font-size: 2rem;
    position: relative;
    color: var(--text-primary);
    font-weight: bold;
    text-wrap: wrap;
  }

  .introduction {
    transform: translate(15vw, 20vh);
    width: 30vw;

    p + p {
      text-align: right;
      font-size: 8rem;
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
    transform: translate(45vw, 35vh);
    width: 50vw;

    p + p {
      font-size: 3rem;
    }
  }
}

@keyframes textclip {
  100% { 
    background-position: 200%;
  }
}
</style>