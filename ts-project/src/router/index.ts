import Vue from 'vue';
import VueRouter from 'vue-router';

const SongSheet = () => import('../views/song-sheet/index.vue');
const Login = () => import('../views/login/index.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'SongSheet',
    component: SongSheet,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  }
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
