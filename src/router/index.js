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
    }
  ]
})

export default router