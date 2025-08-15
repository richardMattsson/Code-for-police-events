import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: () => import('./views/HomeView.vue'),
      path: '/',
    },
    {
      component: () => import('./views/SearchView.vue'),
      path: '/search',
    },
    {
      component: () => import('./views/SavedView.vue'),
      path: '/saved',
    },
    {
      component: () => import('./views/AboutView.vue'),
      path: '/about/:contact',
    },
  ],
});
