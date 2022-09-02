import { createRouter, createWebHashHistory } from 'vue-router'
import News from "../views/News.vue";
import New from "../views/New.vue";

const routes = [
  {
    path: '/',
    name: 'news',
    component: News
  },
  {
    path: '/new/:newId',
    name: 'new',
    component: New,
    props: true
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router