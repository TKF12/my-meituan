import Vue from 'vue';
import VueRouter from 'vue-router';
import Default from '@/layout/default.vue';
import Index from '@/page/index.vue';
import Changecity from '@/page/changecity.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Default',
    component: Default,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'Index',
        component: Index,
      },
      {
        path: '/changecity',
        name: 'Changecity',
        component: Changecity,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
