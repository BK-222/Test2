import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'

import './assets/main.css'

import { createStore } from 'vuex'

const store = createStore();

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
