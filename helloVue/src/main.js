// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/js/flex'
import store from './store'
import Axios from 'axios'

Vue.prototype.$axios = Axios
Vue.prototype.HOST = '/api'
Vue.config.productionTip = false

Vue.prototype.$EventBus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
  // mounted () {
  //   document.dispatchEvent(new Event('render-event'))
  // }
})
