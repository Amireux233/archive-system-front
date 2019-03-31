import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/layout/Layout.vue';

Vue.use(Router);

export const constantRouterMap = [
  // login
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true,
  },
  {
    path: '',
    redirect: '/scan',
  },
  // scan
  {
    path: '/scan',
    component: Layout,
    redirect: '/scan/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/scanPaper'),
        name: 'scan',
        meta: { title: '扫描', icon: 'dashboard' },
      },
    ],
  },
  {
    path: '/modify',
    component: Layout,
    redirect: '/modify/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/modify'),
        name: 'modify',
        meta: { title: '修改', icon: 'dashboard' },
      },
    ],
  },
  {
    path: '/search',
    component: Layout,
    redirect: '/search/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/search'),
        name: 'search',
        meta: { title: '查找', icon: 'dashboard' },
      },
    ],
  },
  // 404
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true,
  },
];

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
});

export const asyncRouterMap = [
  // redirect
  {
    path: '*',
    redirect: '/404',
    hidden: true,
  },
];
