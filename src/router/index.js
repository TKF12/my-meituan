import Vue from 'vue';
import VueRouter from 'vue-router';
import Default from '@/layout/default.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Default',
    component: Default,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
