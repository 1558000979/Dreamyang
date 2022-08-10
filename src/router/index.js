import Vue from "vue";
import VueRouter from "vue-router";
import HeadNav from "@/views/HeadNav.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HeadNav',
    component: HeadNav
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
