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
    show: false,
    inpuPostre: '',
    inpuTdp: '',
    inpuCdi: '',
    newDessert: [],
    ids: []
  },
  mutations: {
    traerPostres (state, elementos) {
      setTimeout(function () {
        for (this.l in elementos) {
          state.ids.push(elementos[this.l].id)
        }
        state.desserts = elementos
        state.dessertsSf = elementos
        state.dessertsQ = state.desserts.filter(el => el.cantidadDeIngredientes <= 5)
        state.dessertsT = state.desserts.filter(el => parseInt(el.tiempoDePreparado) >= parseInt('70 minutos'))
        state.show = true
        for (this.i in elementos) {
          delete elementos[this.i].id
        }
        console.log(state.ids)
      }, 2000)
    }
  },
  actions: {
    getDesserts: function ({ commit }) {
      fetch('https://5fcba09751f70e00161f1c5b.mockapi.io/postres')
        .then((res) => res.json())
        .then((elementos) => {
          commit('traerPostres', elementos)
        })
        .catch((error) => console.log(error))
    },
    addDessert: function (context, payload) {
      fetch('https://5fcba09751f70e00161f1c5b.mockapi.io/postres', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then((res) => {
          console.log('Postre agregado', res)
          location.reload()
        })
        .catch((error) => console(error))
    }
  }
})
