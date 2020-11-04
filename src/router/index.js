import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/create/subscription",
    name: "CreateSubscription",
    component: () =>
      import("../views/CreateSubscription.vue"),
  },
  {
    path: "/subscriptions",
    name: "subscriptions",
    component: () =>
      import("../views/Subscriptions.vue"),
  },
  {
    path: "/subscriptions/:subscription_id?/edit",
    name: "subscription_edit",
    component: () =>
      import("../views/CreateSubscription.vue"),
  },
  {
    path: "/terms",
    name: "TermsOfService",
    component: () =>
      import("../views/TermsOfService.vue"),
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: () =>
      import("../views/Privacy.vue"),
  },
  {
    path: "/usage",
    name: "Usage",
    component: () =>
      import("../views/Usage.vue"),
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
