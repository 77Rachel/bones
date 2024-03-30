<template>
  <div class="windows">
    <!-- :limit="3"
    :max-size="1024"
    :accept="'.csv'" -->
    <!-- 文件上传框 -->
  <div class="upload">
    <el-upload
    class="upload-windows"
    action="./upload"
    :before-upload="uploadPreview"
    drag
    multiple
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      拖拽文件或者 <em>点击上传</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        文件必须小于1024kb,且后缀为.csv
      </div>
    </template>
  </el-upload>
  </div>
  <!-- 邮箱输入框 -->
  <div class="input">
    <el-input
      v-model="email"
      style="max-width: 600px"
      placeholder="请输入您的邮箱"
    >
      <template #prepend>Email</template>
    </el-input>
  </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { UploadFilled } from '@element-plus/icons-vue'
  
  const email = ref("");

  // 检测格式和大小
  const uploadPreview = (file) => {
    const isCsv = /\.txt$/.test(file.name.substring(file.name.lastIndexOf('.')));
    const isLess100 = file.size / 1024 < 100;

    if (!isCsv) {
        this.$message.error("上传图片只能是 txt 格式!");
        return false;
      };

   if (!isLess100) {
        this.$message.error("上传文件大小不能超过100KB!");
        return false;
      };

   return isCsv && isLess100;
  }
</script>

<style lang="less" scoped>

</style>