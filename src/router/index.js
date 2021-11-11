import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: '首頁',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/article',
    name: '文章頁',
    component: () => import('../views/Article.vue'),
  },
  {
    path: '/attraction-list',
    name: '景點列表頁',
    component: () => import('../views/AttractionList.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
