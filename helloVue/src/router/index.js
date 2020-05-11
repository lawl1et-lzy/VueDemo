import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/fabric'
import demo from '@/pages/fabric/demo'
// import index from '@/pages/Rem/meta.vue'
// import index from '@/pages/Rem'
// import index from '@/pages/TestES6'
// import Grid from '@/pages/TestCss/grid'
// import index from '@/pages/TestPlugin'
// import PageA from '@/pages/TestIframe/index'
// import PageB from '@/pages/TestIframe/PageB'
// import Render from '@/pages/Render'
// import TestRouter from '@/pages/TestRouter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: index
    },
    {
      path: '/demo',
      name: 'Demo',
      component: demo
    }
    // {
    //   path: '/pageb',
    //   name: 'PageB',
    //   component: PageB
    // }
    // {
    //   path: '/page/a',
    //   name: 'PageA',
    //   component: PageA
    // },
    // {
    //   path: '/page/b',
    //   name: 'PageB',
    //   component: PageB
    // }
    // {
    //   path: '/testrouter/:id?/:pageid?',
    //   name: 'TestRouter',
    //   component: TestRouter
    // }
  ]
})
