<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();
</script>

<template>
  <main>
    <div v-if="!auth.userToken">
      <h1>Only logged-in users may access the contents.</h1>
      routerLink please
      <el-link type="primary">
        <router-link to="/signin">Signin</router-link>
      </el-link>
    </div>

    <div v-else>
      <el-avatar :size="50" src="https://cdn.quasar.dev/img/avatar.png" />
      <h1>Welcome "{{ auth.userName }}"</h1>
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>Secret Content</span>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">{{ 'My Secret item ' + o }}</div>
      </el-card>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
