import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { VueJsonp } from 'vue-jsonp';
import App from './App.vue';
import router from './router';
import store from './store';

store.dispatch('setUser', JSON.parse(localStorage.getItem('user')) || '');

Vue.use(VueJsonp);

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
