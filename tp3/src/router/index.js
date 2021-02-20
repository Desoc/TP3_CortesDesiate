import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import recetas from '../views/recetas.vue'
import Flan from '../views/postres/Flan.vue'
import Tiramisu from '../views/postres/Tiramisu.vue'
import Chocotorta from '../views/postres/Chocotorta.vue'
import Pastafrola from '../views/postres/Pastafrola.vue'
import Islaflotante from '../views/postres/Islaflotante.vue'
import Login from '../views/Login.vue'
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
    path: '/recetas',
    name: 'Recetas',
    component: recetas,
    children: [
      {
        path: 'chocotorta',
        component: Chocotorta
      },
      {
        path: 'pastafrola',
        component: Pastafrola
      },
      {
        path: 'flan',
        component: Flan
      },
      {
        path: 'tiramisu',
        component: Tiramisu
      },
      {
        path: 'islaflotante',
        component: Islaflotante
      }
    ]
  },
  {
    path: '/tabla',
    name: 'Tabla',
    component: Tabla
  },
  {
    path: '/auth',
    name: 'auth',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
