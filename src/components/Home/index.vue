<template>
  <div
    id="home" 
    class="home-container"
  >
    <h1>ABOUT</h1>
    <p>
      Hi! My name is John Paul Ruiz, but my friends call me <span>Royce</span>. 
      I have been coding since my university days. Since then, it has been part of my life, and I am having fun with it.
      Move along, I have had the opportunity to work with one of the biggest point-of-sale system providers in my country. I have developed several features and designed system flows.
      <br><br>
      Currently, my focus is on web development (Full-Stack Dev).
      I have been developing new interfaces to building APIs catering the needs of customers and clients.
      <br><br>
      BTW, I go to the gym during my leisure time or play DOTA 2.
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
      -webkit-text-stroke: 1px;
      background-clip: text;
      color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(to right, #D81E5B, #D81E5B 10%, #68107a 90%, #68107a);
    }
  }
}

@media screen and (max-width: 834px) {
  .home-container {
    padding: 0;

    h1 {
      font-size: 1.2rem;
      margin-bottom: 2rem;
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