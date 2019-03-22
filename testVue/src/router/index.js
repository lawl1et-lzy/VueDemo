import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Star.vue'
import PageA from '@/page/PageA.vue'
import PageB from '@/page/PageB.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/pagea',
          name: 'PageA',
          component: PageA
        },
        {
          path: '/pageb',
          name: 'PageB',
          component: PageB
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
