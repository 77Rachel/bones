import { createRouter, createWebHashHistory } from "vue-router";
import useFileStore from "@/stores/modules/file";

const router = createRouter({
  history: createWebHashHistory(),
  // 映射,path -> 组件
  routes: [
    {
      path: "/",
      redirect: "home"
    },
    {
      path: "/home",
      component: () => import("@/views/home/home.vue")
    },
    {
      path: "/download",
      component: () => import("@/views/download/download.vue"),
    }
  ]
});

export default router