<template>
  <div
    id="home" 
    class="home-container"
  >
    <h1>ABOUT</h1>
    <div class="content-wrapper">
      <p class="intro-text">
        Hello there! I am <span
          class="name-highlight"
          @click="animateNameHighlight"
        >John Paul</span>.
        A Full-Stack Engineer with 5+ years work experience.
      </p>
      
      <p class="experience-text">
        I have worked with several Japanese companies, as well as US and UK clients, gaining valuable experience in cross-cultural collaboration and strengthening my skills in diverse business environments.
      </p>
      
      <p class="current-focus-text">
        My main focus right now is working with various AI-related projects, building on my experience.
      </p>
      
      <p class="skills-text">
        HTML, JavaScript, TypeScript, CSS, SCSS, SASS, Tailwind, Vue, Nuxt, React, Next, Scala, Java, Php, Laravel, MySQL, PostgreSQL, Supabase, CI/CD, Docker, Rest APIs, WebSocket, AI
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap'

const animateNameHighlight = () => {
  gsap.to('.name-highlight', {
    duration: 0.5,
    scale: 1.2,
    color: '#ff1361',
    ease: 'elastic.out(1, 0.3)',
    yoyo: true,
    repeat: 1
  })
}
</script>

<style scoped>
.home-container {
  padding: 1rem 2rem 0 2rem;
  height: 100%;
  overflow-y: auto;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
}

.intro-text {
  font-size: 0.9rem;
  text-align: right;
  line-height: 1.5rem;
  font-weight: normal;
  margin-bottom: 1rem;
}

.name-highlight {
  color: #D81E5B;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s ease;
}

.name-highlight:hover {
  color: #ff1361;
}

.experience-text {
  font-size: 0.9rem;
  text-align: right;
  line-height: 1.5rem;
  font-weight: normal;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.current-focus-text {
  font-size: 0.9rem;
  text-align: right;
  line-height: 1.5rem;
  font-weight: normal;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.skills-text {
  font-size: 0.75rem;
  text-align: right;
  line-height: 1.3rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.5px;
  margin-top: auto;
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

  .intro-text,
  .experience-text,
  .current-focus-text,
  .skills-text {
    text-align: left;
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