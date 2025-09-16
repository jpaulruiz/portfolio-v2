<template>
  <section
    id="projects"
    class="projects-container"
  >
    <h1>PROJECTS</h1>
    <div
      class="projects-list"
      role="list"
    >
      <article
        v-for="(project, i) in projects"
        :key="i"
        class="project-card"
        :style="{ animationDelay: `${i * 0.2}s` }"
        role="listitem"
        tabindex="0"
        @click="openModal(project)"
        @keydown.enter="openModal(project)"
        @keydown.space="openModal(project)"
      >
        <div class="project-content">
          <div class="project-number">
            {{ String(i + 1).padStart(2, 'Ø') }}
          </div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.categories }}</p>
        </div>
        <div class="project-image-hover">
          <img
            :src="project.image"
            :alt="project.title"
          >
        </div>
      </article>
    </div>

    <Teleport to="body">
      <div
        v-if="selectedProject"
        class="modal-overlay"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="selectedProject ? 'modal-title' : undefined"
        @click="closeModal"
      >
        <FlowingRibbons
          class="modal-background"
          :background-color="'#0a0a0a'"
          :line-color="'#333333'"
          :animation-speed="0.2"
        />

        <article
          class="modal-content"
          @click.stop
        >
          <button
            class="close-button"
            aria-label="Close modal"
            @click="closeModal"
          >
            ×
          </button>

          <div class="modal-layout">
            <div class="left-section">
              <div class="project-summary">
                <h1 id="modal-title">
                  {{ selectedProject.title }}
                </h1>
                <p class="project-description">
                  {{ selectedProject.description }}
                </p>
              </div>

              <div class="tech-stack-footer">
                <h4>Tech Stack</h4>
                <ul class="tech-list">
                  <li
                    v-for="tech in selectedProject.techStack"
                    :key="tech"
                  >
                    {{ tech }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="right-section">
              <div class="images-container">
                <div
                  v-for="(image, index) in selectedProject.features.slice(0, 3)"
                  :key="index"
                  class="image-item"
                >
                  <div class="connecting-line" />
                  <img
                    :src="image"
                    :alt="`Feature ${index + 1}`"
                  >
                  <p class="image-description">
                    Feature {{ index + 1 }} showcase
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </Teleport>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import FlowingRibbons from '../FlowingRibbons/index.vue'

interface Project {
  title: string
  summary: string
  description: string
  image: string
  categories: string
  features: string[]
  techStack: string[]
  keyFeatures: string[]
}

const selectedProject = ref<Project | null>(null)

const projects = ref<Project[]>([
  {
    title: "E-Commerce Platform",
    summary: "Modern full-stack e-commerce solution with real-time inventory management",
    description: "A comprehensive e-commerce platform built with modern web technologies, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard. The platform supports multiple payment methods and provides detailed analytics for business insights.",
    image: "https://picsum.photos/200/150?random=1",
    categories: "Engineering, R&D, UI/UX",
    features: [
      "https://picsum.photos/400/250?random=11",
      "https://picsum.photos/400/250?random=12",
      "https://picsum.photos/400/250?random=13",
      "https://picsum.photos/400/250?random=14",
      "https://picsum.photos/400/250?random=15"
    ],
    techStack: ["Vue.js", "Node.js", "PostgreSQL", "Stripe API", "Docker"],
    keyFeatures: ["Real-time inventory", "Payment processing", "Admin dashboard", "Analytics", "Multi-vendor support"]
  },
  {
    title: "Task Management App",
    summary: "Collaborative project management tool with real-time updates and team collaboration",
    description: "A powerful task management application designed for teams to collaborate efficiently. Features include real-time updates, drag-and-drop task organization, time tracking, and comprehensive reporting. Built with a focus on user experience and performance.",
    image: "https://picsum.photos/200/150?random=2",
    categories: "Product Design, Engineering, UX Research",
    features: [
      "https://picsum.photos/400/250?random=21",
      "https://picsum.photos/400/250?random=22",
      "https://picsum.photos/400/250?random=23",
      "https://picsum.photos/400/250?random=24",
      "https://picsum.photos/400/250?random=25"
    ],
    techStack: ["React", "TypeScript", "Firebase", "Material-UI", "WebSocket"],
    keyFeatures: ["Drag-and-drop interface", "Real-time collaboration", "Time tracking", "File attachments", "Custom workflows"]
  },
  {
    title: "Weather Dashboard",
    summary: "Interactive weather application with detailed forecasts and location-based services",
    description: "An intuitive weather dashboard that provides comprehensive weather information with beautiful visualizations. Features include location-based weather, 7-day forecasts, weather maps, and personalized alerts. The app uses multiple weather APIs for accurate data.",
    image: "https://picsum.photos/200/150?random=3",
    categories: "Data Visualization, Engineering, UI/UX",
    features: [
      "https://picsum.photos/400/250?random=31",
      "https://picsum.photos/400/250?random=32",
      "https://picsum.photos/400/250?random=33",
      "https://picsum.photos/400/250?random=34",
      "https://picsum.photos/400/250?random=35"
    ],
    techStack: ["Vue.js", "Chart.js", "OpenWeather API", "Geolocation API", "PWA"],
    keyFeatures: ["Location-based weather", "7-day forecast", "Weather maps", "Push notifications", "Offline support"]
  },
  {
    title: "Social Media Analytics",
    summary: "Comprehensive social media analytics platform with data visualization and insights",
    description: "A robust analytics platform that helps businesses understand their social media performance across multiple platforms. Features advanced data visualization, competitor analysis, and automated reporting with actionable insights.",
    image: "https://picsum.photos/200/150?random=4",
    categories: "Analytics, Data Science, Engineering",
    features: [
      "https://picsum.photos/400/250?random=41",
      "https://picsum.photos/400/250?random=42",
      "https://picsum.photos/400/250?random=43",
      "https://picsum.photos/400/250?random=44",
      "https://picsum.photos/400/250?random=45"
    ],
    techStack: ["Angular", "D3.js", "Python", "MongoDB", "Redis"],
    keyFeatures: ["Multi-platform analytics", "Data visualization", "Competitor analysis", "Automated reports", "Custom dashboards"]
  }
])

const openModal = (project: Project) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedProject.value = null
  document.body.style.overflow = 'auto'
}
</script>

<style src="./index.css" scoped></style>