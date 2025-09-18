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
    </div>
  </div>
</template>

<script lang="ts" setup>
import Experiences from "../../data/experience.json"

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
    background: transparent;
    border: 1px solid transparent;
    border-radius: 12px;
    box-shadow: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
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
    box-shadow: var(--card-shadow);
    background: var(--card-bg);
    border: 1px solid white;
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
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
    padding: 0 1rem;
    gap: 0.75rem;
    font-size: 0.9rem;

    .experience-card {
      padding: 1.5rem;
    }

    .card-header h4 {
      font-size: 0.95rem;
    }

    .card-header h5 {
      font-size: 0.85rem;
    }

    .details p {
      font-size: 0.75rem;
    }

    ul li {
      font-size: 0.7rem;
      padding: 0.4rem;
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

@media screen and (max-width: 834px) {
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