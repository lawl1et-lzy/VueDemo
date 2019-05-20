import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/TestES6'
import PageB from '@/pages/TestIframe/PageB'
// import Render from '@/pages/Render'
// import TestRouter from '@/pages/TestRouter'

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
      path: '/pageb',
      name: 'PageB',
      component: PageB
    }
    // {
    //   path: '/testrouter/:id?/:pageid?',
    //   name: 'TestRouter',
    //   component: TestRouter
    // }
  ]
})
