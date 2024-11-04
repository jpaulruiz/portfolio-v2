<template>
  <div
    id="home" 
    class="home-container"
  >
    <h1>ABOUT</h1>
    <p>
      Hello there! I am <span>Royce</span>.
      A Full-Stack Engineer with 4 years work experience.
      <br>
      <br>
      I have worked with several Japanese companies, gaining valuable experience in cross-cultural collaboration and enhancing my skills in diverse business environments.
      <br>
      <br>
      My main focus right now is working with various AI-related projects, building on my experience.
    </p>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.home-container {
  padding: 1rem 2rem 0 2rem;

  p {
    font-size: 0.9rem;
    text-align: left;
    line-height: 1.5rem;
    font-weight: normal;

    span {
      color: #D81E5B;
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
}

@media screen and (max-width: 834px) {
  .home-container {
    padding: 0;

    h1 {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      position: sticky;
      top: 0;
      width: calc(100% + 2rem);
      backdrop-filter: blur(2px);
      transform: translateX(-2rem);
      padding: 1rem 0 1rem 2rem;
      color: #D81E5B;
    }
  }
}

@media screen and (min-width: 835px) {
  .home-container {
    h1 {
      display: none;
    }
  }
}
</style>