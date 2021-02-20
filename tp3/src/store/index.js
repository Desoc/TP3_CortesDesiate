import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    desserts: [],
    header: ['Postre', 'Tiempo de preparado', 'Cantidad de ingredientes'],
    user: {
      token: null,
      userId: null
    }
  },
  mutations: {
    traerPostres (state, elementos) {
      state.desserts = elementos
    },
    setPostres (state, payload) {
      state.postre = payload.postres
    },
    setUser (state, payload) {
      state.user = {
        token: payload.token,
        userId: payload.userId
      }
    },
    clearUser (state) {
      state.user = {}
    }
  },
  getters: {
    getToken (state) {
      return state.user.token
    },
    isLogged (state) {
      return !!state.user.token
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
    },
    addPostres (context, payload) {
      fetch('https://postres-vue-default-rtdb.firebaseio.com/postres.json', {
        method: 'POST',
        body: JSON.stringify(payload.newPostres)
      })
    },
    getPostres ({ commit }) {
      fetch('https://postres-vue-default-rtdb.firebaseio.com/postres.json')
        .then(res => res.json())
        .then(data => commit('setPostres', { postres: data }))
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
    login (context, payload) {
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBJZ2TfUrlstScG3ouR4-gyoEl5DKZw0vU', {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password
        })
      })
        .then(resp => resp.json())
        .then(data => {
          localStorage.setItem('token', data.idToken)
          localStorage.setItem('userId', data.localId)
          context.commit('setUser', {
            token: data.idToken,
            userId: data.localId
          })
        })
    },
    logout ({ commit }) {
      commit('clearUser')
      localStorage.setItem('token', null)
      localStorage.setItem('userId', null)
    }
  }
}
)
