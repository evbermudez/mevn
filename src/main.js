import Vue from 'vue'
import App from '@/App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

Vue.config.productionTip = false;

import Home from '@/components/Home.vue';
import Create from '@/components/Create.vue';
import Index from '@/components/Index.vue';
import Edit from '@/components/Edit.vue';

const routes = [
  {
      name: 'home',
      path: '/',
      component: Home
  },
  {
      name: 'create',
      path: '/create',
      component: Create
  },
  {
      name: 'posts',
      path: '/posts',
      component: Index
  },
  {
      name: 'edit',
      path: '/edit/:id',
      component: Edit
  }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue(
  Vue.util.extend({
    router 
  }, App)
).$mount('#app');
