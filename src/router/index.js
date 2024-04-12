import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/search/SearchPage.vue';
import PostPage from '@/post/PostPage.vue';
import CommingSoon from '@/future/CommingSoon.vue';

const routes = [
  {
    path: '/',
    name: 'Search',
    component: HomePage
  },
  {
    path: '/post',
    name: 'Post',
    component: PostPage
  },

  {
    path: '/soon',
    name: 'Soon',
    component: CommingSoon
  },

 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
