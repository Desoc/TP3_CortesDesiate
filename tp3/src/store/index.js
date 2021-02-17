import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    desserts: [],
    dessertsSf: [],
    dessertsQ: [],
    dessertsT: [],
    header: ['Postre', 'Tiempo de preparado', 'Cantidad de ingredientes'],
    show: false
  },
  mutations: {
    traerPostres (state, elementos) {
      setTimeout(function () {
        state.desserts = elementos
        state.dessertsSf = elementos
        state.dessertsQ = state.desserts.filter(el => el.cantidadDeIngredientes <= 5)
        state.dessertsT = state.desserts.filter(el => parseInt(el.tiempoDePreparado) >= parseInt('70 minutos'))
        state.show = true
      }, 2000)
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
