import { createRouter, createWebHistory } from 'vue-router'
import Mainpage from '../views/Mainpage.vue'
import Support from '../views/Support.vue'
import Success from '../views/Success.vue'

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
  },
  {
    path: '/success',
    name: 'Success',
    component: Success
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
