import Vue from 'vue';
import VueRouter from 'vue-router';
import Default from '@/layout/default.vue';
import Index from '@/page/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Default',
    component: Default,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'Index',
        component: Index,
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
