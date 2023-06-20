import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/index.vue'
import Location from '@/pages/location/location.vue'
import About from '@/pages/about/about.vue'
import NotFound from '@/layouts/404error.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Main },
    { path: '/about', component: About }, 
    { path: '/location', component: Location },
    { path: '/:catchAll(.*)', component: NotFound }
  ]
});

export default router;