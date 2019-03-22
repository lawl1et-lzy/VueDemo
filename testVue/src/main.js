// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import '@/assets/style/reset.css'
import store from './store'
import './assets/js/flex.js'
// import VConsole from 'vconsole'

// const vConsole = new VConsole()

// console.log(vConsole.version)
Vue.config.productionTip = false
Vue.prototype.$axios = Axios
/* eslint-disable */
const app = new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
