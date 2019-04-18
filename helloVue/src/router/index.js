import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Date'
import Render from '@/pages/Render'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/render',
      name: 'Render',
      component: Render
    }
  ]
})
