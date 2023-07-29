<script setup lang="ts">
import { ref } from 'vue';
import SigninForm from '../components/signin/SigninForm.vue';
import { ElLoading } from 'element-plus';

const loader = ref();

function setLoader(val: boolean) {
  if (val) {
    loader.value = ElLoading.service({
      lock: true,
      text: 'Loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });
    return;
  }
  loader.value.close();
}
</script>

<template>
  <div class="form-wrapper">
    <el-card>
      <h1>Please Sign-in to continue</h1>
      <SigninForm @setLoading="setLoader" />
    </el-card>
  </div>
  <div class="notice">
    <small>Type anything on the input field and click submit!!!</small>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
}
.form-wrapper {
  margin-top: 100px;
  display: flex;
  justify-content: center;
}

.notice {
  display: flex;
  justify-content: center;
  margin: 24px 0;
}
</style>
