<template>
  <div class="window">
    <el-row class="tac">
      <el-col :span="30">
        <h5 class="title">骨质疏松预测平台</h5>
        <el-menu 
        default-active="1" 
        class="el-menu-vertical-demo" 
        @open="handleOpen" 
        @close="handleClose"
        >
          <el-menu-item index="1">
            <el-icon><location /></el-icon>
            <span>单文件预测</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>多文件预测</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon>
              <document />
            </el-icon>
            <span>正在开发中...</span>
          </el-menu-item>
          <el-menu-item index="4" disabled>
            <el-icon>
              <setting />
            </el-icon>
            <span>正在开发中...</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'


const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};

const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};

</script>

<style scoped lang="less">
.window {
  position: relative;
  height: 100%;
  width: 100%;
  white-space: nowrap;

  .title {
    font-size: 20px;
  }

  .el-menu-vertical-demo {
    border-radius: 16px;
    height: 800px;
    width: 300px;
    overflow-y: auto;
  }
}

:deep(.el-col) {
  position: relative;
  left: -818px;
}



:deep(.el-menu-item-group__title) {
  color: black;
  font-size: 14px;
}
</style>