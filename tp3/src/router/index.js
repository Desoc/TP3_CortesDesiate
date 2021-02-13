import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Chocotorta from '../views/Chocotorta.vue'
import Pastafrola from '../views/Pastafrola.vue'
import Tabla from '../views/Tabla.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/chocotorta',
    name: 'Chocotorta',
    component: Chocotorta
  },
  {
    path: '/pastafrola',
    name: 'Pastafrola',
    component: Pastafrola
  },
  {
    path: '/tabla',
    name: 'Tabla',
    component: Tabla
  }
]

const router = new VueRouter({
  routes
})

export default router
