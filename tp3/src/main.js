import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/fontawesome/css/fontawesome.css'
import './assets/fontawesome/css/brands.css'
import './assets/fontawesome/css/solid.css'

Vue.config.productionTip = false

Vue.directive('focus', {
  inserted: function (element) {
    element.focus()
  }
})

Vue.filter('enMayuscula', function (txt) {
  if (!txt) return ''
  else {
    txt = txt.toString()
    return txt.charAt(0).toUpperCase() + txt.slice(1)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
