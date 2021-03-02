import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/pages/TestIframe'
import Fabric from '@/pages/fabric'
// import demo from '@/pages/fabric/demo'
import IndexedDB from '@/pages/indexedDB'
// import localForage from '@/pages/indexedDB/localForage'
// import index from '@/pages/Rem/meta.vue'
// import index from '@/pages/Rem'
import H5 from '@/pages/H5'
// import Grid from '@/pages/TestCss/grid'
// import index from '@/pages/TestPlugin'
// import PageA from '@/pages/TestIframe/index'
// import PageB from '@/pages/TestIframe/PageB'
// import Render from '@/pages/Render'
// import TestRouter from '@/pages/TestRouter'
import TestES6 from '@/pages/TestES6'
// import Index from '@/pages/HelloXlsx'
// import Index from '@/pages/HelloXlsx/file/file.vue'
import Index from '@/pages/HelloXlsx/file2/file.vue'

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
      path: '/fabric',
      name: 'Fabric',
      component: Fabric
    },
    {
      path: '/indexedDB',
      name: 'IndexedDB',
      component: IndexedDB
    },
    {
      path: '/h5',
      name: 'H5',
      component: H5
    },
    {
      path: '/es6',
      name: 'TestES6',
      component: TestES6
    }
    // {
    //   path: '/demo',
    //   name: 'Demo',
    //   component: demo
    // }
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
