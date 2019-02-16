import Vue from 'vue';
import Vuex from 'vuex';
import permission from './modules/permission';
import user from './modules/user';
import getters from './getters';
import app from './modules/app';
import tagsView from './modules/tagsView';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    permission,
    user,
    app,
    tagsView,
  },
  getters,
});

export default store;
