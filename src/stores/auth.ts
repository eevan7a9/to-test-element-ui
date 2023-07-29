import { ref, computed, type Ref } from 'vue';
import { defineStore } from 'pinia';
import type { User } from '@/share/types/user';
import axios from '@/boot/axios';
import { getCookie, setSessionCookie, deleteCookie } from '@/share/cookie';

export const useAuthStore = defineStore('counter', () => {
  const user: Ref<User | null> = ref({
    name: getCookie('user_name'),
    token: getCookie('user_token')
  });

  const userToken = computed(() => user.value?.token);
  const userName = computed(() => user.value?.name);

  async function loginUser(username: string, password: string) {
    console.log(username, password);
    try {
      const res = await axios.post('/users', {
        username,
        password
      });
      if (res.status != 200 && res.status != 201) {
        return;
      }
      user.value = {
        name: username,
        token: Math.random().toString(36).substring(2, 5).toUpperCase()
      };
      setSessionCookie('user_name', username);
      setSessionCookie('user_token', user?.value?.token as string);
    } catch (error) {
      console.error(error);
    }
  }

  function logoutUser() {
    user.value = null;
    deleteCookie('user_name');
    deleteCookie('user_token');
  }

  return { userName, loginUser, logoutUser, userToken };
});
