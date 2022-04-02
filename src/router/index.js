import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Pasteles',
    name: 'Pasteles',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pasteles.vue')
  },
  {
    path: '/Adornos',
    name: 'Adornos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Adornos.vue')
  },
  {
    path: '/Pedido',
    name: 'Pedido',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pedido.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
