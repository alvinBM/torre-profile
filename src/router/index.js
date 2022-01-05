// import Vue from 'vue'
// import VueRouter from 'vue-router'
import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
// import SkillDetail from "../component/SkillDetail.vue";

// Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  }
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes,
});

export default router;
