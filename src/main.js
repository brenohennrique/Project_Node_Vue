'use strict';

import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

// importação dos componentes
import App from './App.vue'
import CreateProfile from './components/CreateProfile.vue';
import DisplayProfile from './components/DisplayProfile.vue'

const routes = [
  {
    name: 'CreateProfile',
    path: '/create/profile',
    component: CreateProfile
  },
  {
    name: 'DisplayProfile',
    path: '/',
    component: DisplayProfile
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
