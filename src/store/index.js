import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: '',
    location: {},
  },
  mutations: {
    setCity(state, player) {
      state.city = player;
    },
    setLocaTion(state, player) {
      state.location = player;
    },
  },
  actions: {
    setCity({ commit }, player) {
      localStorage.setItem('city', JSON.stringify(player));
      commit('setCity', player);
    },
    setLocaTion({ commit }, player) {
      commit('setLocaTion', player);
    },
  },
  modules: {
  },
});
