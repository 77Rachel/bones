<template>
  <div class="navbar">
    <el-menu 
      default-active="1" 
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="transparent"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
      router
      >
      <template v-for="(item, index) in routers">
        <!-- 使用+string处理类型转换 -->
        <el-sub-menu v-if="!item.hidden" :key="item.id" :index="index + ''">
          <!-- 一级菜单 -->
          <template #title>
            <el-icon>
              <component :is="iconMap[item.meta.icon]"></component>
            </el-icon>
            <span>{{ item.meta.name }}</span>
          </template>
          <!-- 子级菜单 -->
          <el-menu-item-group>
            <template #title></template>
              <el-menu-item v-for="subItem in item.children" 
              :key="subItem.id" 
              :index="subItem.path"
              >
                {{ subItem.meta.name }}
              </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </template>
    </el-menu>
    <!-- 全局组件 -->
    <Svg-Icon />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router';
import {
  House,
  Document,
  User,
  ChatLineRound,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'

const router = useRouter();
const routers = reactive(router.options.routes);
// console.log(routers[3].meta.icon)
// console.log(routers);

// 切换icon
const iconMap = {
  House: House,
  User: User,
  Document: Document,
  Setting: Setting,
  ChatLineRound: ChatLineRound
};

// menu
const isCollapse = ref(false)

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};

const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};

</script>

<style lang="scss" scoped>
@import "@/assets/css/config.scss";

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: $navMenu;
  height: 100vh;
  background-color: #344a5f;
}
</style>