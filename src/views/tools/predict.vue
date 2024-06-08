<template>
  <div class="content">
    <div class="font">单文件上传</div>
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


// 实现文件上传
const postFile = (fileInput) => {
  const fileSize = fileInput.file.size / 1024 < 5000;
  const fileName = fileInput.file.name
  const fileType = fileName.substring(fileInput.file.name.lastIndexOf(".") + 1);
  const isCsv = fileType === "csv";
  const { file } = fileInput;
  formData.append('file', file);
  // console.log(file);
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

<style lang="scss" scoped>

.content {
  position: relative;
  width: 900px;
  left: 30vh;
  top: 5vh;
}

.font {
  position: relative;
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