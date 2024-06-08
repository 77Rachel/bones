<template>
  <div class="main">
    <router-view/>
  </div>
</template>

<script setup>
import router from '../router';



</script>

<style lang="scss" scoped>
@import "@/assets/css/config.scss";

.main {
  position: fixed;
  left: 250px;
  top: 75px;
  right: 0;
  bottom: 0;
  border: 30px solid #f7f7f7;
  border-bottom: none;
  -webkit-box-sizing: border;
}
</style>