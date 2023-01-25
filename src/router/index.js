import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/main/index.vue'
import About from '@/pages/about/index.vue'
import NotFound from '@/layouts/404error.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Main },
    { path: '/about', component: About }, 
    { path: '/:catchAll(.*)', component: NotFound }
  ]
});

export default router;