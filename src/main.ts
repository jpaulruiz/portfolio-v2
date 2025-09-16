import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import DefaultLayout from './layouts/Default.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'About',
        component: () => import('./pages/About.vue')
      },
      {
        path: '/experience',
        name: 'Experience',
        component: () => import('./pages/Experience.vue')
      },
      {
        path: '/projects',
        name: 'Projects',
        component: () => import('./pages/Projects.vue')
      }
    ]
  }
]

export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL,
  },
  () => {
    // install all modules under `modules/`
  }
)
