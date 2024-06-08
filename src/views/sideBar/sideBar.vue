<template>
  <div class="sideBar">
    <Header/>
    <Main/>
    <Navbar/>
  </div>
</template>

<script setup>
import Header from "@/components/header.vue";
import Main from "@/components/main.vue";
import Navbar from "@/components/navbar.vue";

</script>

<style lang="scss" scoped>
.sideBar {
  background-color: #f7f7f7;
}
</style>