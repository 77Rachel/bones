<template>
  <div class="Header">
    <h2>Header</h2>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "@/assets/css/config.scss";

.Header {
  position: fixed;
  top: 0;
  right: 0;
  left: $navMenu;
  height: 75px;
  background-color: #fff;
  -webkit-box-shadow: 0 3px 16px 0 rgba(0,0,0,.1); 
}
</style>