// import Vue from 'vue'
// import VueRouter from 'vue-router'
import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import SkillDetail from "../views/SkillDetail.vue";

// Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/SkillDetail",
    name: "SkillDetail",
    component: SkillDetail,
  }
];


// const router = new VueRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   base: process.env.BASE_URL,
//   routes
// })

// export default router

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes,
});

export default router;
