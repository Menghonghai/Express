import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import Solutions from '@/views/SolutionsView.vue'
import NewsView from '@/views/NewsView.vue'
import PricingView from '@/views/PricingView.vue'
import Modal from '@/components/Modal.vue'
import MerchanForm from '@/views/MerchanForm.vue'
import DeliveryView from '@/views/DeliveryView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/solutions',
      name: 'solutions',
      component: Solutions
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: PricingView
    },
    {
      path: '/merchan',
      name: 'merchan',
      component: MerchanForm
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: DeliveryView
    },
    {
      path: '/modal',
      name: 'modal',
      component: Modal
    },
  ]
})

export default router
