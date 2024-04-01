<template>
  <div class="windows">
    <!-- :limit="3"
    :max-size="1024"
    :accept="'.csv'"
     action="https://bones.hctest.fun/upload"
     -->
    <!-- 文件上传框 -->
    <!-- <router-link to="/upload"> -->
    <div class="upload">
      <el-upload 
      class="upload-windows" 
      action="https://bones.hctest.fun/#/home"
      :http-request="handleHttpRequest" 
      :before-upload="uploadPreview"
      :auto-upload="true" 
      :on-success="handleSuccess" 
      show-file-list 
      drag 
      multiple 
      ref="upload"
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
      <!-- 上传按钮 -->
      <!-- <el-button type="primary" @click="submitUpload()">上 传</el-button> -->
    </div>
    <!-- </router-link> -->

    <!-- 邮箱输入框 -->
    <div class="input">
      <el-input v-model="email" style="max-width: 600px" placeholder="请输入您的邮箱">
        <template #prepend>Email</template>
      </el-input>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { UploadFilled } from '@element-plus/icons-vue'

const email = ref("");
const upload = ref("");

// 检测格式和大小
const uploadPreview = (file) => {
  const isCsv = /\.txt$/.test(file.name.substring(file.name.lastIndexOf('.')));
  const isLess1 = file.size / 1024 / 1024 < 1;

  if (!isCsv) {
    this.$message.error("上传图片只能是 txt 格式!");
    return false;
  };

  if (!isLess1) {
    this.$message.error("上传文件大小不能超过1MB!");
    return false;
  };

  return isCsv && isLess1;
}

// 按钮上传
const submitUpload = (e, file, filelist) => {
  console.log("调用发送")
  upload.submit();
  ElMessage({
    message: '上传成功',
    type: 'success',
    duration: '1000',
  });
}

// 自定义上传
const handleHttpRequest = (file) => {
  console.log(file)
}
//上传成功
const handleSuccess = (file) => { console.log(file) }
</script>

<style lang="less" scoped></style>