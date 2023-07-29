<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { ElNotification } from 'element-plus';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const currentRoute = ref(router.currentRoute.value.fullPath);
const auth = useAuthStore();

watch(router.currentRoute, () => {
  currentRoute.value = router.currentRoute.value.fullPath;
});

function logout() {
  ElNotification.success({
    title: 'Success',
    message: 'You are successfully Logged out.'
  });
  auth.logoutUser();
}
</script>

<template>
  <el-menu
    :default-active="currentRoute"
    class="el-menu-demo"
    mode="horizontal"
    background-color="danger"
    :ellipsis="false"
    router
  >
    <el-menu-item index="/"> Home </el-menu-item>
    <el-menu-item index="/about"> About </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="/signin" v-if="!auth.userToken"> Sign in </el-menu-item>
    <el-menu-item @click="logout" v-else> Logout </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
