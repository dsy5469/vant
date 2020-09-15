import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/HelloWorld.vue";
import Login from "../components/login.vue";
import Main from "../components/Main.vue";
import Index from "../components/Index.vue";
import Goods from "../components/Goods.vue";


Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/home", component: Home },
    { path: "/login", component: Login },
    { path: "/main", component: Main },
    { path: "/index", component: Index },
    { path: "/goods", component: Goods }
  ]
});

export default router;