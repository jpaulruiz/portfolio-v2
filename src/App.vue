<template>
  <router-view />
</template>

<script setup lang="ts">
import { useSeoMeta, useHead } from '@unhead/vue'

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'John Paul Ruiz',
        jobTitle: 'Full Stack Engineer',
        description: 'Full Stack Engineer specializing in Vue.js, React.js, TypeScript, Java, Scala, PHP, Laravel, Play Framework, and modern web development',
        url: 'https://www.johnpaulruiz.com',
        sameAs: [
          'https://github.com/jpaulruiz',
          'https://www.linkedin.com/in/john-paul-ruiz-5310bb127'
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'Freelance'
        }
      })
    }
  ]
})

useSeoMeta({
  charset: 'utf-8',
  viewport: {
    width: 'device-width',
    initialScale: 1
  },
  title: 'John Paul Ruiz - Full Stack Engineer',
  description: 'Portfolio of John Paul Ruiz - Full Stack Engineer specializing in Vue.js, React.js, TypeScript, Java, Scala, PHP, Laravel, Play Framework, and modern web development.',
  keywords: 'John Paul Ruiz, Full Stack Engineer, Vue.js, React.js, TypeScript, Java, Scala, PHP, Laravel, Play Framework, Frontend Developer, Backend Developer, Web Developer, Portfolio, UI/UX Design',
  author: 'John Paul Ruiz',
  robots: 'index, follow',
  
  ogTitle: 'John Paul Ruiz - Full Stack Engineer',
  ogDescription: 'Portfolio of John Paul Ruiz - Full Stack Engineer specializing in Vue.js, React.js, TypeScript, Java, Scala, PHP, Laravel, Play Framework, and modern web development.',
  ogType: 'website',
  ogUrl: 'https://www.johnpaulruiz.com',
  ogImageAlt: 'John Paul Ruiz Portfolio',
  ogSiteName: 'John Paul Ruiz Portfolio',
  
  // Additional SEO meta tags
  themeColor: '#000000',
  colorScheme: 'dark light',
  msapplicationTileColor: '#000000'
})
</script>

<style src="./src/assets/styles/index.css"></style>