<template>
  <div
    id="about" 
    class="about-container"
  >
    <div>
    </div>
    <div class="image">
      <div><img src="/src/assets/roycee.png" alt="Me Image"></div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.about-container {
  width: 100vw;
  height: 100vh;
  padding-top: 8.25rem;
  display: flex;
  position: relative;
  justify-content: space-around;

  .image {
    position: relative;
  }

  .image > div {
    overflow: clip;
    position: absolute;
    left: -10vw;
    border-radius: 40px;
  }

  div.image > div:nth-child(2) {
    width: 30vmax;
    height: 60vmin;
    position: absolute;
    left: -15vw;
    top: -5vh;
    border: 1px solid black;
  }

  img {
    width: 30vmax;
    height: 60vmin;
    object-fit: cover;
    mix-blend-mode: luminosity;
  }
}
</style>