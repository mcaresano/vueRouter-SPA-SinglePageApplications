import isAuthenticatedGuard from '@/modules/auth/guads/is-authenticated.guards';
import NotFound404 from '@/modules/common/pages/NotFound404.vue';
import HomePage from '@/modules/landing/pages/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // landing
    {
      path: '/',
      name: 'Landing',
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage,
        },
        {
          path: '/features',
          name: 'features',
          component: () => import('@/modules/landing/pages/FeaturesPage.vue'),
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('@/modules/landing/pages/PricingPage.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/modules/landing/pages/ContactPage.vue'),
        },
        {
          path: '/pokemon/:id',
          beforeEnter:[isAuthenticatedGuard],
          name: 'pokemon',
          props: (route)=> {
            const id = +route.params.id
            return isNaN(id) ? { id:1 } : { id }
            },
          component: () => import('@/modules/pokemons/pages/PokemonPage.vue'),
        },
      ],
    },
    // Auth
    {
      path: '/auth',
      redirect: { name: 'login' },
      name: 'auth',
      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/modules/auth/pages/LoginPage.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/modules/auth/pages/RegisterPage.vue'),
        },
      ],
    },
    // Not found
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound404,
    },
  ],
});

export default router;
