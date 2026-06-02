import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Discography from '../views/Discography.vue'
import WhatsOn from '../views/WhatsOn.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/listen', component: Discography },
  { path: '/whats-on', component: WhatsOn },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
