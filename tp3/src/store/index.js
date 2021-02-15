import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    desserts: [],
    header: ['Postre', 'Tiempo de preparado', 'Cantidad de ingredientes']
  },
  mutations: {
    traerPostres (state, elementos) {
      state.desserts = elementos
    }
  },
  actions: {
    getDesserts: function ({ commit }) {
      fetch('https://5fcba09751f70e00161f1c5b.mockapi.io/postres')
        .then((res) => res.json())
        .then((elementos) => {
          commit('traerPostres', elementos)
          for (this.i in elementos) {
            delete elementos[this.i].id
          }
        })
        .catch((error) => console.log(error))
    }
  }
})
