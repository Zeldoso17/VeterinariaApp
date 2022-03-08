import Vue from 'vue'
import Vuex from 'vuex'

import Usuarios from '../modules/Usuarios'
import Citas from '../modules/Citas'
import Tareas from '../modules/Tareas'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Usuarios,
    Citas,
    Tareas
  }
})
