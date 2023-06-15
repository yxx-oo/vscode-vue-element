import Vue from 'vue';
import Router from 'vue-router'
import About from '../page1/about.vue';
import Home from '../page1/home.vue';
import Layout from '../layout/index.vue';

Vue.use(Router);

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    children: [
      {
        path: '/',
        name: '首页',
        meta: {
        },
        component: () => import('../page1/home.vue'),
      }
    ]
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