import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from "./router";
import pinia from './stores';
import axios from "@/services/request/request";

import "./assets/css/index.css"

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from "element-plus/dist/locale/zh-cn.mjs"

const app = createApp(App);
app.use(ElementPlus).use(router).use(pinia).mount('#app');
app.provide("$axios", axios);
app.config.globalProperties.$axios = axios;