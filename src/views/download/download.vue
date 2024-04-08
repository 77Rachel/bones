<template>
  <div class="download">
    <div class="font">预测完毕,请点击下方按钮查收您的文件</div>
    <el-button type="primary" @click="downloadFile()">
      点击下载
    </el-button>
  </div>
</template>

<script setup>
import useFileStore from "@/stores/modules/file";
import { ref } from "vue";


const fileStore = useFileStore();
const uploadFile = ref('');
uploadFile.value = fileStore.uploadFile;
console.log(uploadFile.value);

const downloadFile = async () => {
  try {
    // const res = await api.get('/download?fileName=' + uploadFile.value, { responseType: 'blob' });
    const url = 'http://192.168.2.89:9090/download?fileName=' + uploadFile.value;
    console.log(url);
    const link = document.createElement('a');
    link.href = url;
    // console.log(link.href);
    link.setAttribute('download', 'download.csv');
    document.body.appendChild(link);
    link.click();
  } catch (error) {
    console.error(error);
  }
};
//  fetchDownLoadFile(uploadFile) {
//   try {
//     const res = await axios.get('http://192.168.2.19:9090/download?fileName=' + uploadFile, {
//       responseType: 'blob'
//     });

//     const url = window.URL.createObjectURL(new Blob([res.data]));
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', 'download.jpg');
//     document.body.appendChild(link);
//     link.click();
//   } catch (error) {
//     console.error(error);
//   }
// }

// const downloadFile = async (uploadFile) => {
//   try {
//     const res = await getDownLoadFile(uploadFile);
//     const url = window.URL.createObjectURL(new Blob([res.data]));
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', "download.jpg");
//     document.body.appendChild(link);
//     link.click();
//   } catch (error) {
//     console.error(error);
//   }
// };
// const downloadFile = (uploadFile) => {
//   getDownLoadFile(uploadFile)
//     .then(res => {
//       const url = window.URL.createObjectURL(new Blob([res.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', "download.jpg");
//       document.body.appendChild(link);
//       link.click();
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

</script>

<style scoped>
.font{
  font-weight: 700;
  font-size: 25px;
  padding-bottom: 8px;
}

:deep(.el-button) {
  --el-font-size-base: 18px;
  height: 45px;
  width: 130px;
}

</style>