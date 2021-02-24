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
    hasErrors: false,
    user: {
      token: null,
      userId: null
    },
    newDessert: [],
    dessertId: [],
    postreAEditar: []
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
    },
    traerUnPostre (state, elemento) {
      state.postreAEditar = elemento
    },
    setUser (state, payload) {
      state.user = {
        token: payload.token,
        userId: payload.userId
      }
    },
    clearUser (state) {
      state.user = {}
    },
    setErrorStatus (state, payload) {
      state.hasErrors = payload.hasErrors
    }
  },
  getters: {
    getToken (state) {
      return state.user.token
    },
    isLogged (state) {
      return !!state.user.token
    },
    getErrorStatus (state) {
      return state.hasErrors
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
    signUp ({ commit }, payload) {
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBJZ2TfUrlstScG3ouR4-gyoEl5DKZw0vU', {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
      })
        .then(res => res.json())
        .then(data => commit('setUser', {
          token: data.idToken,
          userId: data.localId
        }))
    },
    login ({ commit }, payload) {
      commit('setErrorStatus', { error: false })
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBJZ2TfUrlstScG3ouR4-gyoEl5DKZw0vU', {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password
        })
      })
        .then((resp) => {
          if (!resp.ok) {
            throw Error(resp.statusCode)
          } else {
            return resp.json()
          }
        })
        .then(data => {
          localStorage.setItem('token', data.idToken)
          localStorage.setItem('userId', data.localId)
          commit('setUser', {
            token: data.idToken,
            userId: data.localId
          })
        })
        .catch(err => {
          commit('setErrorStatus', { hasErrors: err })
        })
    },
    logout ({ commit }) {
      commit('clearUser')
      localStorage.setItem('token', null)
      localStorage.setItem('userId', null)
    },
    addDessert: function (context, payload) {
      fetch('https://5fcba09751f70e00161f1c5b.mockapi.io/postres', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then((res) => {
          console.log('Postre agregado', res)
        })
        .catch((error) => console(error))
    },
    editDessert: function (context, payload) {
      fetch(`https://5fcba09751f70e00161f1c5b.mockapi.io/postres/${context.state.dessertId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then((res) => {
          console.log('Postre editado', res)
        })
        .catch((error) => console.log(error))
    },
    dessertWithId: function ({ commit, state }) {
      fetch(`https://5fcba09751f70e00161f1c5b.mockapi.io/postres/${state.dessertId}`)
        .then((res) => res.json())
        .then((elemento) => {
          commit('traerUnPostre', elemento)
        })
        .catch((error) => console.log(error))
    },
    deleteDessert: function ({ state }) {
      fetch(`https://5fcba09751f70e00161f1c5b.mockapi.io/postres/${state.dessertId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      }).then((res) => {
        if (res.ok) {
          console.log('Postre eliminado')
        } else {
          console.log('No se pudo eliminar el postre')
        }
      })
    }
  }
})
