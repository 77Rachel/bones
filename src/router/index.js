import { createRouter, createWebHashHistory } from "vue-router";
import sideBar from "@/views/sideBar/sideBar.vue";

const router = createRouter({
  history: createWebHashHistory(),
  // 映射,path -> 组件
  routes: [
    {
      path: "/",
      redirect: "sideBar",
      hidden: true,
      meta: {
        name: "首页"
      }
    },
    // 废弃
    {
      path: "/home",
      hidden: true,
      component: () => import("@/views/home/home.vue"),
      meta: {
        name: "首页"
      }
    },
    // 下载
    {
      path: "/download",
      hidden: true,
      meta: {
        name: "下载"
      },
      component: sideBar,
      children: [
        {
          path: "/download",
          meta: {
            name: "欢迎"
          },
          component: () => import("@/views/download/download.vue"),
        }
      ]
    },
    // 主界面
    {
      path: "/sideBar",
      redirect: "welcome",
      meta: {
        name: "主界面",
        icon: "House"
      },
      component: sideBar,
      children: [
        {
          path: "/welcome",
          meta: {
            name: "欢迎"
          },
          component: () => import("@/views/redirect/welcome.vue"),
        },
        {
          path: "/myHome",
          meta: {
            name: "首页"
          },
          component: () => import("@/views/redirect/myHome.vue"),
        },
      ]
    },
    // 用户信息
    {
      path: "/info",
      meta: {
        name: "个人信息",
        icon: "User"
      },
      component: sideBar,
      children: [
        {
          path: "/infoList",
          meta: {
            name: "基本信息"
          },
          component: () => import("@/views/info/index.vue"),
        },
        {
          path: "/listCategory",
          meta: {
            name: "历史记录"
          },
          component: () => import("@/views/info/category.vue"),
        },
      ]
    },
    // 在线工具
    {
      path: "/tools",
      meta: {
        name: "在线工具",
        icon: "Setting"
      },
      component: sideBar,
      children: [
        {
          path: "/fileUpload",
          meta: {
            name: "单文件预测"
          },
          component: () => import("@/views/tools/predict.vue"),
        },
        {
          path: "/filesUpload",
          meta: {
            name: "多文件预测"
          },
          component: () => import("@/views/tools/predicts.vue"),
        },
      ]
    },
    // 新闻资讯
    {
      path: "/news",
      meta: {
        name: "新闻资讯",
        icon: "ChatLineRound"
      },
      component: sideBar,
      children: [
        {
          path: "/news",
          meta: {
            name: "前沿医学研究"
          },
          component: () => import("@/views/news/news.vue"),
        },
        {
          path: "/learnMore",
          meta: {
            name: "了解骨质疏松"
          },
          component: () => import("@/views/news/learnMore.vue"),
        },
      ]
    }
  ]
});

export default router