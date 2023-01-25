import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/main/index.vue'
import About from '@/pages/about/index.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Main },
    { path: '/about', component: About }
  ]
});

export default router;