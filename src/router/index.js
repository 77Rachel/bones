import { createRouter, createWebHashHistory } from "vue-router";

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
      path: "/upload",
      component: () => import("@/views/upload/upload.vue")
    },
    {
      path: "/result",
      component: () => import("@/views/result/result.vue")
    }
  ]
})

export default router