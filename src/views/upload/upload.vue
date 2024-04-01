<template>
  <!-- <el-upload action="uploadUrl" list-type="picture-card" v-model:file-list="formData.fileList" :limit="9" accept="image/*" :before-upload="beforeUpload" :on-success="handleSuccess">
    <el-icon>
      <Plus />
    </el-icon>
    <template #file="{ file }">
      <div>
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="el-upload-list__item-actions">
          <span class="el-upload-list__item-delete" @click="handleRemove(file)">
            <el-icon>
              <Delete />
            </el-icon>
          </span>
        </span>
      </div>
    </template>
  </el-upload> -->
  <div>1</div>
</template>

<!-- <script setup>
const uploadUrl = import.meta.env.VITE_APP_HOSTURL + "/imgUpload/upload";

const handleRemove = (file) => {
  for (let i = 0; i < formData.fileList.length; i++) {
    let item = formData.fileList[i]
    if (item.uid === file.uid) {
      formData.fileList.splice(i, 1)
      return true
    }
  }
  console.log(file)
}
const beforeUpload = (file) => {
  const isLtSize = file.size / 1024 / 1024 < 5;
  if (!isLtSize) {
    ElMessage.error("上传图片大小不能超过 5MB!");
    return false;
  }
  return true;
}
const handleSuccess = (file) => { console.log(file) }
</script> -->

<style scoped></style>