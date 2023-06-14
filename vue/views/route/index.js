import Vue from 'vue';
import Router from 'vue-router'
import about from '../page1/about.vue';
import home from '../page1/home.vue';

Vue.use(Router);

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../page1/home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../page1/about.vue'),
  },
];

const router = new Router({
  mode: 'hash',
  base: '/',
  routes,
});

export default router;