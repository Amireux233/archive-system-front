import Vue from 'vue';

import 'normalize.css/normalize.css'; // A modern alternative to CSS resets

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/styles/index.scss'; // global css

import App from './App.vue';
import router from './router';
import store from './store';

import './icons'; // icon
import './permission'; // permission control
// import './test';

// eslint-disable-next-line
// require('./mock');

Vue.use(Element);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

