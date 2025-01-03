import { createRouter, createWebHistory } from 'vue-router'
import ButtonDemo from '../examples/button.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/components/button'
    },
    {
      path: '/components/button',
      name: 'button',
      component: ButtonDemo,
      meta: {
        title: 'Button 按钮'
      }
    }
  ]
})

export default router
