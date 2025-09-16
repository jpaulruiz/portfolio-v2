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
        jobTitle: 'Full Stack Developer',
        description: 'Full Stack Developer specializing in Vue.js, React.js, TypeScript, Java, Scala, PHP, Laravel, Play Framework, and modern web development',
        // url: 'https://johnpaulruiz.dev',
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
  title: 'John Paul Ruiz - Full Stack Developer & UI/UX Designer',
  description: 'Portfolio of John Paul Ruiz - Full Stack Developer specializing in Vue.js, React.js, TypeScript, Java, Scala, PHP, Laravel, Play Framework, and modern web development.',
  keywords: 'John Paul Ruiz, Full Stack Developer, Vue.js, React.js, TypeScript, Java, Scala, PHP, Laravel, Play Framework, Frontend Developer, Backend Developer, Web Developer, Portfolio, UI/UX Design',
  author: 'John Paul Ruiz',
  robots: 'index, follow',
  
  ogTitle: 'John Paul Ruiz - Full Stack Developer & UI/UX Designer',
  ogDescription: 'Portfolio of John Paul Ruiz - Full Stack Developer specializing in Vue.js, React.js, TypeScript, Java, Scala, PHP, Laravel, Play Framework, and modern web development.',
  ogType: 'website',
  // ogUrl: 'https://johnpaulruiz.dev',
  // ogImage: 'https://johnpaulruiz.dev/og-image.jpg',
  ogImageAlt: 'John Paul Ruiz Portfolio',
  ogSiteName: 'John Paul Ruiz Portfolio',
  
  // Additional SEO meta tags
  themeColor: '#000000',
  colorScheme: 'dark light',
  msapplicationTileColor: '#000000'
})
</script>

<style src="./src/assets/styles/index.css"></style>