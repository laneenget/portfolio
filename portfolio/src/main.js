import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

import portfolio_api from '@/services/portfolio_api'

Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.prototype.$portfolio_api = portfolio_api

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
