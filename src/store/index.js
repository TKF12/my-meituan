import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: '',
    location: {},
    userName: '',
  },
  mutations: {
    setCity(state, player) {
      state.city = player;
    },
    setLocaTion(state, player) {
      state.location = player;
    },
    setUser(state, player) {
      state.userName = player;
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
    setUser({ commit }, player) {
      localStorage.setItem('user', JSON.stringify(player));
      commit('setUser', player);
    },
  },
  modules: {
  },
});
