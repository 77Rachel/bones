<template>
  <!-- <canvas class="canvas" ref="canvas">:before-upload="beforeUpload"</canvas> -->
  <div class="content">
    <div class="font">骨质疏松预测平台</div>
    <el-upload 
     class="upload-demo" 
     ref="fileInput" 
     :http-request="postFile" 
     :limit="limit" 
     
     drag multiple show-file-list
     >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        拖拽文件或者<em>点击上传</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          文件必须小于100kb,且后缀为.csv,单次只能上传一个文件
        </div>
      </template>
    </el-upload>
  </div>

  <!-- <el-input v-model="email" style="max-width: 600px" placeholder="请输入邮箱">
    <template #prepend>邮箱</template>
  </el-input> -->
</template>

<script setup>
import { UploadFilled } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
import { ref } from 'vue';
import useFileStore from "@/stores/modules/file";
import { useRouter } from "vue-router";

// 系统变量
const router = useRouter();
const fileStore = useFileStore();

// 自定义变量
const email = ref("");
const fileInput = ref([]);
const limit = ref(1);
const formData = new FormData();

// 背景添加
// const canvas = ref(null);
// onMounted(() => {
//   const ctx = canvas.value.getContext('2d');

//   // 设置Canvas尺寸与窗口大小相匹配
//   canvas.value.width = window.innerWidth;
//   canvas.value.height = window.innerHeight;

//   // 创建渐变对象
//   const gradient = ctx.createLinearGradient(0, 0, canvas.value.width, canvas.value.height);
//   gradient.addColorStop(0, 'hsl(0, 100%, 50%)');
//   gradient.addColorStop(0.5, 'hsl(60, 100%, 50%)');
//   gradient.addColorStop(1, 'hsl(240, 100%, 50%)');

//   // 绘制渐变背景
//   ctx.fillStyle = gradient;
//   ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);
// });

// 实现文件上传
const postFile = (fileInput) => {
  const fileSize = fileInput.file.size / 1024 < 100;
  const fileName = fileInput.file.name
  const fileType = fileName.substring(fileInput.file.name.lastIndexOf(".") + 1);
  const isCsv = fileType === "csv";
  const { file } = fileInput;
  formData.append('file', file);
  if (fileSize && isCsv) {
    fileStore.fetchUpLoadFile(formData).then(() => {
    router.push("/download");
  })
  } else {
    ElMessage({
          showClose: true,
          message: '文件格式有误,请检查',
          type: 'warning',
        });
  }
}

</script>

<style scoped>
.canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.content {
  position: fixed;
  transform: translate(-410px, -320px);
  z-index: 2;
}

.font {
  position: relative;
  bottom: 40px;
  right: 5px;
  font-weight: 700;
  font-size: 85px;
  padding-bottom: 5px;
}

:deep(.el-upload-dragger) {
  border: 2px dashed var(--el-border-color);
  border-radius: 17px;
}

:deep(.el-upload) {
  --el-upload-dragger-padding-horizontal: 190px !important;
  --el-upload-dragger-padding-vertical: 350px !important;
}

:deep(.el-upload__tip),:deep(.el-upload-list__item-name) {
  font-size: 18px;
  color: black;
}


:deep(.el-icon svg) {
  height: 1em;
  width: 1em;
}
</style>