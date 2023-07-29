<script setup lang="ts">
import MainNav from './components/navigation/MainNav.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <el-container>
    <el-header>
      <MainNav />
    </el-header>

    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>

<style scoped>
.el-header {
  padding: 0;
}
</style>
