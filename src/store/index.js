import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: '深圳',
  },
  mutations: {
    setCity(state, player) {
      state.city = player;
    },
  },
  actions: {

  },
  modules: {
  },
});
