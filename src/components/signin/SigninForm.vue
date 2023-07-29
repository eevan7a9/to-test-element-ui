<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { useRouter } from 'vue-router';
import { ElNotification } from 'element-plus';
import { useAuthStore } from '@/stores/auth.ts';

const ruleFormRef = ref<FormInstance>();
const authStore = useAuthStore();
const emits = defineEmits(['setLoading']);
const router = useRouter();

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'));
  } else {
    callback();
  }
};
const validateUsername = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the username again'));
  } else {
    callback();
  }
};

const ruleForm = reactive({
  username: '',
  pass: ''
});

const rules = reactive<FormRules<typeof ruleForm>>({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  username: [{ validator: validateUsername, trigger: 'blur' }]
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!');
      emits('setLoading', true);
      authStore.loginUser(ruleForm.username, ruleForm.pass).then(() => {
        router.push('/');
        emits('setLoading', false);
        ElNotification.success({
          title: 'Success',
          message: 'You are successfully signed-in.'
        });
      });
    } else {
      console.log('error submit!');
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
  >
    <el-space size="default" :fill="true" wrap>
      <el-form-item label="Username" prop="username">
        <el-input v-model="ruleForm.username" type="text" autocomplete="on" />
      </el-form-item>

      <el-form-item label="Password" prop="pass">
        <el-input v-model="ruleForm.pass" type="password" autocomplete="on" />
      </el-form-item>
    </el-space>

    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped></style>
