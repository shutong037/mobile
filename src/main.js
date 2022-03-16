import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './common/common.css'

Vue.config.productionTip = false

import rem from './common/rem'
rem()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
