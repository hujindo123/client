// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import VueResource from 'vue-resource';

import header from './views/index/header';
import details from './views/details/details';
import search from './views/search/search';
import download from './views/about/download';
import './common/css/index.styl';
Vue.use(VueRouter);
Vue.use(VueResource);
/* Vue.config.productionTip = false; */
const routes = [
  {path: '/', component: header},
  {path: '/details', component: details},
  {path: '/search', component: search},
  {path: '/download', component: download}
];
const router = new VueRouter({
  routes,
  mode: 'history'
});
/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: {App}
});
app.$mount('#app');
/* router.push('/');  */

