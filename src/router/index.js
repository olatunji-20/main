import { createRouter, createWebHistory } from 'vue-router'
import Mainpage from '../views/Mainpage.vue'
import Support from '../views/Support.vue'

const routes = [
  {
    path: '/',
    name: 'Mainpage',
    component: Mainpage
  },
  {
    path: '/support-page',
    name: 'Support',
    component: Support
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
