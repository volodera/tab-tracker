import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import { sync } from 'vuex-router-sync';
import 'vuetify/dist/vuetify.min.css';
import App from './App';
import router from './router';
import store from './store/store';

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  iconfont: 'mdi',
});

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
