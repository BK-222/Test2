import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/index.vue'
import Products from '@/pages/products/products.vue'
import Location from '@/pages/location/location.vue'
import About from '@/pages/about/about.vue'
import Members from '@/pages/members/members.vue'
import MembersTwo from '@/pages/members/members-two.vue'
import NotFound from '@/layouts/404error.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Main },
    { path: '/about', component: About }, 
    { path: '/products', component: Products },
    { path: '/location', component: Location },
    { path: '/members', component: Members }, 
    { path: '/members-two', component: MembersTwo }, 
    { path: '/:catchAll(.*)', component: NotFound }
  ]
});

export default router;