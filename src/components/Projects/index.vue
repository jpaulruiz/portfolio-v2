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
import projectsData from '../../data/projects.json'

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

const projects = ref<Project[]>(projectsData)

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