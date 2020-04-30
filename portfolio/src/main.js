import Vue from 'vue'
import App from './App.vue'

import portfolio_api from '@/services/portfolio_api'

Vue.config.productionTip = false

Vue.prototype.$portfolio_api = portfolio_api

new Vue({
  render: h => h(App),
}).$mount('#app')
