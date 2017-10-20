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
import DisplayProfile from './components/DisplayProfile.vue';
import EditProfile from './components/EditProfile.vue';
import DisplayUser from './components/DisplayUser.vue';
import CreateUser from './components/CreateUser.vue';
import EditUser from './components/EditUser.vue';
// import server from '../server';

const routes = [
  {
    name: 'CreateProfile',
    path: '/create/profile',
    component: CreateProfile
  },
  {
    name: 'DisplayProfile',
    path: '/displayProfile',
    component: DisplayProfile
  },
  {
    name: 'EditProfile',
    path: '/edit/:id',
    component: EditProfile
  },
  {
    name: 'DisplayUser',
    path: '/',
    component: DisplayUser
  },
  {
    name: 'CreateUser',
    path: '/create/user',
    component: CreateUser
  },
  {
    name: 'EditUser',
    path: '/edit/:id',
    component: EditUser
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
