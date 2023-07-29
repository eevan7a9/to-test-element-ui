import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SigninView.vue'),
      meta: {
        guest: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.guest) {
    const userStore = useAuthStore();
    if (userStore.userToken) next({ name: 'home' });
  }
  return next();
});
export default router;
