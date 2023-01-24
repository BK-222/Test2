import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router'

const store = createStore();
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: App }
  ]
});

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
