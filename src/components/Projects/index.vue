<template>
  <div
    id="projects"
    class="projects-container"
  >
    <h1>PROJECTS</h1>
    <div class="projects-list">
      <div
        v-for="(project, i) in projects"
        :key="i"
        class="project-card"
        :style="{ animationDelay: `${i * 0.2}s` }"
        @click="openModal(project)"
      >
        <div class="project-image">
          <img
            :src="project.image"
            :alt="project.title"
          >
        </div>
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.summary }}</p>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="selectedProject"
      class="modal-overlay"
      @click="closeModal"
    >
      <div
        class="modal-content"
        @click.stop
      >
        <div class="modal-header">
          <h2>{{ selectedProject.title }}</h2>
          <button
            class="close-button"
            @click="closeModal"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <line
                x1="18"
                y1="6"
                x2="6"
                y2="18"
              />
              <line
                x1="6"
                y1="6"
                x2="18"
                y2="18"
              />
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <div class="project-summary">
            <p>{{ selectedProject.description }}</p>
          </div>

          <div class="image-marquee">
            <div class="marquee-container">
              <div
                v-for="(image, index) in [...selectedProject.features, ...selectedProject.features]"
                :key="index"
                class="marquee-item"
              >
                <img
                  :src="image"
                  :alt="`Feature ${index + 1}`"
                >
              </div>
            </div>
          </div>

          <div class="modal-details">
            <div class="tech-stack">
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

            <div class="project-features">
              <h4>Features</h4>
              <ul class="features-list">
                <li
                  v-for="feature in selectedProject.keyFeatures"
                  :key="feature"
                >
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Project {
  title: string
  summary: string
  description: string
  image: string
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

<style scoped>
.projects-container {
  margin-top: 4rem;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  gap: 1rem;
  height: 100%;
  overflow-y: auto;
  font-family: 'IBM Plex Mono', 'Montserrat Variable', Georgia, 'Times New Roman', Times, serif;
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.project-card {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 8px;
  box-shadow: none;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  transition: all 0.3s ease-in-out;
  animation: slideInFromRight 0.6s ease-out forwards;
  opacity: 0;
  transform: translateX(50px);
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--card-shadow);
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
}

.project-image {
  flex-shrink: 0;
  width: 120px;
  height: 90px;
  border-radius: 8px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.project-content h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.95);
}

.project-content p {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.4;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
}

.modal-content {
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  width: 80vw;
  height: 80vh;
  overflow: hidden;
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  animation: modalSlideIn 0.3s ease-out;
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem 0 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 2rem;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
}

.close-button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.modal-body {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 2rem 2rem 2rem;
  flex: 1;
  overflow-y: auto;
}

.project-summary p {
  margin: 0;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
}

.image-marquee {
  overflow: hidden;
  border-radius: 12px;
  height: 200px;
}

.marquee-container {
  display: flex;
  animation: marquee 15s linear infinite;
  gap: 1rem;
}

.marquee-item {
  flex-shrink: 0;
  width: 300px;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
}

.marquee-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.modal-details h4 {
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #D81E5B;
}

.tech-list, .features-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.tech-list li {
  color: #D81E5B;
  background: rgba(216, 30, 91, 0.15);
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(216, 30, 91, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(216, 30, 91, 0.25);
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;
  font-size: 0.9rem;
}

.tech-list li:hover {
  background: rgba(216, 30, 91, 0.25);
  transform: translateX(4px);
  box-shadow: 0 6px 25px rgba(216, 30, 91, 0.2);
}

.features-list li {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  padding: 0.25rem 0;
  position: relative;
  padding-left: 1.5rem;
}

.features-list li::before {
  content: "•";
  color: #D81E5B;
  position: absolute;
  left: 0;
}

@keyframes slideInFromRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@media screen and (max-width: 1024px) {
  .modal-details {
    grid-template-columns: 1fr;
  }

  .modal-content {
    width: 90vw;
    height: 90vh;
  }
}

@media screen and (max-width: 768px) {
  .project-card {
    flex-direction: column;
    gap: 1rem;
  }

  .project-image {
    width: 100%;
    height: 150px;
  }

  .modal-header {
    padding: 1.5rem 1.5rem 0 1.5rem;
  }

  .modal-body {
    padding: 0 1.5rem 1.5rem 1.5rem;
    gap: 1.5rem;
  }

  .marquee-item {
    width: 250px;
    height: 160px;
  }

  .image-marquee {
    height: 160px;
  }
}

@media screen and (min-width: 835px) {
  .projects-container {
    h1 {
      display: none;
    }
  }
}

@media screen and (max-width: 834px) {
  .projects-container {
    h1 {
      display: none;
    }
  }

  .projects-container {
    padding: 0 1rem;
    gap: 0.75rem;
    font-size: 0.9rem;
  }

  .project-card {
    padding: 1.5rem;
  }

  .project-content h3 {
    font-size: 1.1rem;
  }

  .project-content p {
    font-size: 0.8rem;
  }
}
</style>