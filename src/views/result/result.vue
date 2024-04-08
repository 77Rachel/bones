<template>
  <div class="home">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const canvas = ref(null);

onMounted(() => {
  const ctx = canvas.value.getContext('2d');

  // 设置Canvas尺寸与窗口大小相匹配
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;

  // 创建渐变对象
  const gradient = ctx.createLinearGradient(0, 0, canvas.value.width, canvas.value.height);
  gradient.addColorStop(0, 'red');
  gradient.addColorStop(1, 'blue');

  // 绘制渐变背景
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);
});
</script>

<style scoped>
#backgroundCanvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>