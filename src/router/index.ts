import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/default/DefaultLayout.vue'
import MainLayout from '../layouts/main/MainLayout.vue'
import ButtonDemo from '../examples/button.vue'
import SelectDemo from '../examples/select.vue'
import ToastDemo from '../examples/toast.vue'
import Home from '../pages/home/index.vue'
import Docs from '../pages/docs/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home,
          meta: {
            title: '首页'
          }
        }
      ]
    },
    {
      path: '/docs',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'docs',
          component: Docs,
          meta: {
            title: '文档',
            order: -1
          }
        },
        {
          path: 'button',
          name: 'button',
          component: ButtonDemo,
          meta: {
            title: 'Button 按钮',
            order: 1
          }
        },
        {
          path: 'select',
          name: 'select',
          component: SelectDemo,
          meta: {
            title: 'Select 选择器',
            order: 2
          }
        },
        {
          path: 'toast',
          name: 'toast',
          component: ToastDemo,
          meta: {
            title: 'Toast 轻提示',
            order: 3
          }
        }
      ]
    }
  ]
})

export default router
