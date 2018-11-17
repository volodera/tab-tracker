import Vue from 'vue';
import Router from 'vue-router';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Home from '@/views/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});
