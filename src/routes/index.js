import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/dark',
    },
    {
      path: '/dark',
      component: () => import('@/views/Dark.vue'),
    },
    {
      path: '/light',
      component: () => import('@/views/Light.vue'),
    },
  ],
});

export default router;
