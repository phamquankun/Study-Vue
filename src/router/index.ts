import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/project",
      name: "project",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/team",
      name: "team",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/calendar",
      name: "calendar",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/document",
      name: "document",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/reports",
      name: "reports",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
