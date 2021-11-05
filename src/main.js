import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mockdata.js'
import mockSpecial from './mockspecial.js'

Vue.config.productionTip = false

let data = {
  products: mock,
  specials: mockSpecial,
  cart: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
