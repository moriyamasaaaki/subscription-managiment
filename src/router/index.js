import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "ホーム", desc: "Subscmentはサブスクリプションを管理、金額を算出できるサービスです" },
  },
  {
    path: "/create/subscription",
    name: "CreateSubscription",
    component: () => import("../views/CreateSubscription.vue"),
    meta: { title: "サブスク作成" },
  },
  {
    path: "/subscriptions",
    name: "subscriptions",
    component: () => import("../views/Subscriptions.vue"),
    meta: { title: "サブスク一覧" },
  },
  {
    path: "/subscriptions/:subscription_id?/edit",
    name: "subscription_edit",
    component: () => import("../views/CreateSubscription.vue"),
    meta: { title: "サブスク編集" },
  },
  {
    path: "/terms",
    name: "TermsOfService",
    component: () => import("../views/TermsOfService.vue"),
    meta: { title: "利用規約" },
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: () => import("../views/Privacy.vue"),
    meta: { title: "プライバシーポリシー" },
  },
  {
    path: "/usage",
    name: "Usage",
    component: () => import("../views/Usage.vue"),
    meta: { title: "使い方" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router
