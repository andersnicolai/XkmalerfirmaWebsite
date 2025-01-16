// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/components/MainLayout.vue';
import XKMalerfirmaHome from '@/components/XKMalerfirmaHome.vue'; // Your home page component
import Malerarbeid from '@/components/XK/Malerarbeid.vue';
import Snekker from '@/components/XK/Snekker.vue';
import Tapetsering from '@/components/XK/Tapetsering.vue';
import Gulvlegging from '@/components/XK/Gulvlegging.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: 'home', component: XKMalerfirmaHome },
      { path: 'home', name: 'home-alt', component: XKMalerfirmaHome },
      { path: 'malerarbeid', name: 'malerarbeid', component: Malerarbeid },
      { path: 'snekker', name: 'snekker', component: Snekker },
      { path: 'tapetsering', name: 'tapetsering', component: Tapetsering },
      { path: 'gulvlegging', name: 'gulvlegging', component: Gulvlegging },
    ],
  },
  {
    path: '/privacy-policy',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'privacy-policy',
        component: () => import('@/components/PrivacyPolicy.vue')
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            selector: to.hash,
            behavior: "smooth",
          });
        }, 300); // delay 300ms
      });
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  }
  
});

export default router;
