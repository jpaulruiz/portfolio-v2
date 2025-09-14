<template>
  <div
    id="experience" 
    class="experience-container"
  >
    <h1>EXPERIENCE</h1>
    <div 
      v-for="(exp, i) in Experiences"
      :key="i"
      class="experience-card"
      :style="{ animationDelay: `${i * 0.2}s` }"
      :class="{ 'clickable': exp.website }"
      @click="openWebsite(exp.website)"
    >
      <div class="card-header">
        <div class="title-section">
          <h4>{{ exp.title }} &#8226; {{ exp.company }}</h4>
          <h5>{{ exp.duration[0] }} &mdash; {{ exp.duration[1] }}</h5>
        </div>
        <div
          v-if="exp.website"
          class="link-arrow"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>
      </div>
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

const openWebsite = (url?: string) => {
  if (url) {
    window.open(url, '_blank')
  }
}
</script>

<style scoped>
.experience-container {
  margin-top: 4rem;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  gap: 1rem;
  height: 100%;
  overflow-y: auto;

  h5 {
    font-weight: normal;
  }

  .experience-card {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 2rem;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 12px;
    box-shadow: var(--card-shadow);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    transition: all 0.3s ease-in-out;
    animation: slideInFromRight 0.6s ease-out forwards;
    opacity: 0;
    transform: translateX(50px);
  }

  .experience-card.clickable {
    cursor: pointer;
  }

  .experience-card:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
    background: var(--card-hover-bg);
    border-color: var(--border-color);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.5rem;
  }

  .title-section {
    flex: 1;
  }

  .link-arrow {
    opacity: 0;
    transition: all 0.3s ease-in-out;
    transform: scale(0.8);
    color: #D81E5B;
  }

  .experience-card.clickable:hover .link-arrow {
    opacity: 1;
    transform: scale(1.1);
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
      background: rgba(216, 30, 91, 0.15);
      border-radius: 1rem;
      box-shadow: 0 4px 20px rgba(216, 30, 91, 0.1);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(216, 30, 91, 0.25);
      padding: 0.5rem;
      transition: all 0.2s ease-in-out;
    }

    li:hover {
      background: rgba(216, 30, 91, 0.25);
      transform: scale(1.05);
      box-shadow: 0 6px 25px rgba(216, 30, 91, 0.2);
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
      z-index: 1;
      color: #D81E5B;
    }

    .experience-card {
      padding: 1rem;
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 12px;
      box-shadow: var(--card-shadow);
      backdrop-filter: var(--glass-blur);
      -webkit-backdrop-filter: var(--glass-blur);
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

@keyframes slideInFromRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>