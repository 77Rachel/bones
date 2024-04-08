import { defineStore } from "pinia";
import { ElMessage } from 'element-plus';
import axios from "axios";

const useFileStore = defineStore("file", {
  state: () => ({
    uploadFile: "",
  }),
  actions: {
    async fetchUpLoadFile(formData) {
      try {
        const res = await axios.post('http://192.168.2.89:9090/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          processData: false,
          contentType: false
        });
    
        ElMessage({
          showClose: true,
          message: res.data.msg + ',为您跳转下载页面',
          type: 'success',
        });
    
        this.uploadFile = res.data.fileName;
        // console.log(this.uploadFile)
      } catch (error) {
        console.error(error);
      }
    }
  }
})

export default useFileStore;