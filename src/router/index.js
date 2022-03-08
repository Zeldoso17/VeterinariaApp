import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/auth/Login'
import RegistroUsuario from '../views/auth/RegistroUsuario'
import CrearCita from '../views/crearCita'
import EditarCita from '../views/EditarCita'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registroUsuario',
    name: 'registroUsuario',
    component: RegistroUsuario
  },
  {
    path: '/crearCita',
    name: 'crearCita',
    component: CrearCita
  },
  {
    path: '/EditarCita',
    name: 'EditarCita',
    component: EditarCita
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
