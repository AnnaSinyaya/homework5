import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router/router'
import './assets/styles/styles.scss'
import store from './vuex/store'

Vue.prototype.axios = axios

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
