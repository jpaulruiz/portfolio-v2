<template>
  <div
    id="about" 
    class="about-container"
  >
    <div class="content">
      <h2>About Me</h2>
      <hr>
    </div>
    <div class="image">
      <div>
        <img
          src="/src/assets/ruiz.avif"
          alt="Me Image"
        >
      </div>
      <div />
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.about-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex: 1;
  position: relative;
  justify-content: space-around;
  --image-bg: luminosity;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  box-shadow: var(--card-shadow);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  color: var(--text-primary);

  h2 {
    position: relative;
    font-size: 2.5rem;
  }

  .content {
    hr {
      border-style: none;
      border-bottom: 0;
      border-top: 2px solid var(--text-primary);
      width: 40vw;
      margin-top: 12px;
      margin-bottom: 0;
    }
  }

  .image {
    position: relative;

    &:hover {
      --image-bg: normal;
    }

    &:hover > div ~ div {
       transform: translate(-2.5%, -2.5%);
    }

    &:hover > div {
      transform: translate(2.5%, 2.5%);
    }
  }

  div.image > div:nth-child(2) {
    width: 30vmax;
    height: 60vmin;
    position: absolute;
    left: -21vw;
    top: -4vh;
    border: 0.1rem solid #D81E5B;
    transition: transform 0.2s ease-in-out;
  }

  .image > div {
    overflow: clip;
    position: absolute;
    left: -19vw;
    border-radius: 40px;
    transition: transform 0.2s ease-in-out;
  }

  img {
    width: 30vmax;
    height: 60vmin;
    object-fit: cover;
    mix-blend-mode: var(--image-bg);
  }
}
</style>