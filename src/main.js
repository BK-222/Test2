import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/router.js'
//import store from './store'

import './assets/main.css'

const app = createApp(App);
app.use(createPinia());
//app.use(store);
app.use(router);
app.mount('#app');
