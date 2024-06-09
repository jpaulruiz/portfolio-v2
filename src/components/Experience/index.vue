<template>
  <div
    id="experience" 
    class="experience-container"
  >
    <h1>EXPERIENCE</h1>
    <div 
      v-for="(exp, i) in Experiences"
      :key="i"
    >
      <h4>{{ exp.title }} &#8226; {{ exp.company }}</h4>
      <h5>{{ exp.duration[0] }} &mdash; {{ exp.duration[1] }}</h5>
      <div class="details">
        <p 
          v-for="(desc, j) in exp.details"
          :key="j"
        >
          {{ desc }}
        </p>
      </div>
      <ul>
        <li 
          v-for="(lang, k) in exp.language"
          :key="k"
        >
          {{ lang }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Experiences from '../../experience.json'
</script>

<style scoped>
.experience-container {
  margin-top: 4rem;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  gap: 1rem;

  h5 {
    font-weight: normal;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 2rem;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      transition: all 0.2s ease-in-out;
    }
  }

  .details p {
    margin-bottom: 0.5rem;
    font-size: 13px;
    text-indent: 1rem;
    font-weight: normal;
  }

  ul {
    display: flex;
    gap: 0.5rem;
    font-size: 13px;
    flex-wrap: wrap;

    li {
      color: #D81E5B;
      background: rgba(216, 30, 91, 0.2);
      border-radius: 1rem;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(216, 30, 91, 0.3);
      padding: 0.5rem;
    }
  }
}

@media screen and (max-width: 834px) {
  .experience-container {
    padding: 0;
    gap: 2rem;

    h1 {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      position: sticky;
      top: 0;
      width: calc(100% + 2rem);
      backdrop-filter: blur(2px);
      transform: translateX(-2rem);
      padding: 1rem 0 1rem 2rem;
    }

    & > div {
      padding: 1rem;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
    }

    h1 {
      font-size: 1.2rem;
    }
  }
}

@media screen and (min-width: 835px) {
  .experience-container {
    h1 {
      display: none;
    }
  }
}
</style>