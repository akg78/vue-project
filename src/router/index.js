import { createRouter, createWebHistory } from 'vue-router'
import MyComponent from '@/components/MyComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MyComponent
    },
    
  ]
})

export default router
