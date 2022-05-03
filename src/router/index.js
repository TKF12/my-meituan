import Vue from 'vue';
import VueRouter from 'vue-router';
import Default from '@/layout/default.vue';
import Index from '@/page/index.vue';
import Changecity from '@/page/changecity.vue';
import Goods from '@/page/goods.vue';
import Account from '@/layout/account.vue';
import Login from '@/page/login.vue';
import Register from '@/page/register.vue';
import store from '@/store/index';

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
        path: 'changecity',
        name: 'Changecity',
        component: Changecity,
      },
      {
        path: 'goods/:s',
        name: 'Goods',
        component: Goods,
      },
    ],
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
      },
      {
        path: 'register',
        name: 'Register',
        component: Register,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && to.name !== 'Register' && to.name !== 'Index') {
    if (!store.state.userName) {
      return next({ name: 'Login' });
    }
    return next();
  }
  return next();
});

export default router;
