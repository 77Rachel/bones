import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  // 配置解析别名
  resolve: {
    extensions:['.js','.json','.vue'],
    alias: {
      // 'vue': 'vue/dist/vue.js',
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
