import Vue from 'vue';
import VueRouter from 'vue-router';

const Login = () => import('../views/login/index.vue');
const SongSheet = () => import('../views/song-sheet/index.vue');
const SongList = () => import('../views/song-list/index.vue');

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
  },
  {
    path: '/songlist/:id',
    name: 'SongList',
    component: SongList,
  },
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
