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
                <div class="modal-title-container">
                  <h1 id="modal-title">
                    {{ selectedProject.title }}
                  </h1>
                  <div
                    v-if="selectedProject.link"
                    class="modal-arrow"
                    @click="openLink(selectedProject.link)"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M7 7h10v10" />
                      <path d="m7 17 10-10" />
                    </svg>
                  </div>
                </div>
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
                    <template v-if="selectedProject.title === 'Nagoya Catalogue App'">
                      Feature {{ index + 1 }} showcase (Project confidentiality)
                    </template>
                    <template v-else>
                      Feature {{ index + 1 }} showcase
                    </template>
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

import cmappLogin from '/src/assets/cmapp-login.webp'
import cmappTasks from '/src/assets/cmapp-tasks.webp'
import cmappChannels from '/src/assets/cmapp-channels.webp'
import cmappCampaignManager from '/src/assets/cmapp-campaign-manager.webp'
import mangohireLanding from '/src/assets/mangohire-landing.webp'
import mangohireDashboard from '/src/assets/mangohire-dashboard.webp'
import mangohireInterviewList from '/src/assets/mangohire-interview-list.webp'
import mangohirePlanSetting from '/src/assets/mangohire-plan-setting.webp'
import clockmeLogin from '/src/assets/clockme-login.webp'
import clockmeActivity from '/src/assets/clockme-activity.webp'
import clockmeTask from '/src/assets/clockme-task.webp'
import clockmeReport from '/src/assets/clockme-report.webp'
import clockmeLanding1 from '/src/assets/clockme-landing-1.webp'
import clockmeLanding2 from '/src/assets/clockme-landing-2.webp'
import clockmeLanding3 from '/src/assets/clockme-landing-3.webp'
import clockmeLanding4 from '/src/assets/clockme-landing-4.webp'
import nagoyaLanding from '/src/assets/nagoya-landing.webp'
import nagoya1 from '/src/assets/nagoya-1.webp'
import nagoya2 from '/src/assets/nagoya-2.webp'
import nagoya3 from '/src/assets/nagoya-3.webp'

interface Project {
  title: string
  summary: string
  description: string
  image: string
  categories: string
  features: string[]
  techStack: string[]
  keyFeatures: string[]
  link?: string
}

const selectedProject = ref<Project | null>(null)

const projects = ref<Project[]>([
  {
    title: "Childcare Marketing App",
    summary: "Multi-tenant childcare marketing platform connecting agencies and nurseries",
    description: "A comprehensive multi-tenancy application that handles multiple nurseries and connects marketing agencies with childcare centers. Built with modern web technologies, the platform features campaign management, omni-channel optimization, task tracking, and many more. Each nursery operates within its own isolated environment while agencies can manage multiple client accounts, creating a seamless ecosystem for childcare marketing operations.",
    image: cmappLogin,
    categories: "CRM, Engineering, R&D, AI, UI/UX, Product Design",
    features: [
      cmappTasks,
      cmappChannels,
      cmappCampaignManager
    ],
    techStack: ["React.js", "Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Supabase", "Docker", "Tailwind", "Edge Functions"],
    keyFeatures: ["Multi-tenant architecture", "Agency-nursery connections", "Campaign management", "Channel optimization", "Task tracking"],
    link: "https://app.childcaremarketing.ai"
  },
  {
    title: "Mango Hire",
    summary: "AI-powered multi-tenant hiring platform with intelligent candidate matching",
    description: "A powerful multi-tenant hiring management application that leverages AI to streamline recruitment processes across multiple organizations. The platform uses artificial intelligence for candidate screening, automated interview scheduling, and intelligent matching algorithms. Features include AI-driven candidate tracking, smart plan settings, and comprehensive dashboard analytics with machine learning insights. Built with a focus on user experience and AI-enhanced efficiency for modern recruitment teams.",
    image: mangohireLanding,
    categories: "AI Hiring App, Product Design, Engineering, UX Research, AI",
    features: [
      mangohireDashboard,
      mangohireInterviewList,
      mangohirePlanSetting
    ],
    techStack: ["React.js", "Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Prisma", "AI", "Video HLS"],
    keyFeatures: ["AI candidate matching", "Multi-tenant architecture", "Smart interview scheduling", "ML-powered analytics", "Automated screening"],
    link: "https://hire.mango.nyc"
  },
  {
    title: "Clockme App",
    summary: "Multi-tenant time tracking platform with AI-powered productivity insights",
    description: "An intuitive multi-tenant time tracking application that helps organizations monitor their teams' productivity across multiple workspaces. The platform features AI-powered activity tracking, intelligent task management, and automated reporting with machine learning insights. Each organization operates within its own secure environment while benefiting from advanced analytics and AI-driven productivity recommendations. The app provides comprehensive insights into work patterns and team performance optimization.",
    image: clockmeLogin,
    categories: "Productivity Tracking, Engineering, UI/UX, AI, R&D",
    features: [
      clockmeActivity,
      clockmeTask,
      clockmeReport
    ],
    techStack: ["Vue.js", "Nuxt.js", "Scala", "Java", "PostgreSQL", "Playframework", "SASS", "Akka"],
    keyFeatures: ["Multi-tenant architecture", "AI productivity insights", "Smart activity tracking", "Automated reporting", "Team performance analytics"],
    link: "https://clock.me/signin"
  },
  {
    title: "Clockme Landing Page",
    summary: "Professional landing page showcasing Clockme's features and capabilities",
    description: "A modern, responsive landing page for the Clockme time tracking application. Features multiple sections highlighting different aspects of the product, user testimonials, pricing plans, and call-to-action elements. Designed to convert visitors into users.",
    image: clockmeLanding1,
    categories: "Marketing, Web Design, UI/UX",
    features: [
      clockmeLanding2,
      clockmeLanding3,
      clockmeLanding4
    ],
    techStack: ["Vue.js", "SCSS", "Intersection Observer API", "CSS Animations", "Responsive Design"],
    keyFeatures: ["Responsive design", "Interactive animations", "Feature showcase", "Call-to-action sections", "Performance optimized"],
    link: "https://clock.me"
  },
  {
    title: "Nagoya Catalogue App",
    summary: "Multi-tenant startup companies catalog with portfolio management",
    description: "A multi-tenant web app that catalogs health startups, allowing admins to manage all listings while company reps update their own profiles. It includes a public page with search and filters for discovering and connecting with emerging health businesses.",
    image: nagoyaLanding,
    categories: "Multi-tenant Platform, Engineering, Product Design, UI/UX",
    features: [
      nagoya1,
      nagoya2,
      nagoya3
    ],
    techStack: ["Vue.js", "Nuxt.js", "Php", "Laravel", "PostgreSQL"],
    keyFeatures: ["Multi-tenant architecture", "Portfolio management", "Admin controls", "Search and filtering", "Company profiles"]
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

const openLink = (url: string) => {
  window.open(url, '_blank')
}
</script>

<style src="./index.css" scoped></style>