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
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/myList",
    name: "MyList",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MyList.vue"),
  },
  {
    path: "/create/subscription",
    name: "CreateSubscription",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CreateSubscription.vue"),
  },
  {
    path: "/subscriptions",
    name: "subscriptions",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Subscriptions.vue"),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
