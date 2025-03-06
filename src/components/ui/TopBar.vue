<template>
  <div id="left"
    class="absolute left-0 top-0 z-1 bar-container h-[30vh] w-screen bg-ucs-500 dark:bg-ucs-800 flex flex-row justify-between">
    <div id="logo-area w-2/10">
      <AppHeading color="white" />
    </div>
    <div id="right">
      <div id="user-area" class="p-5 text-white dark:text-ucs-200 tracking-wider">
        Welcome User | <span class="text-white dark:text-ucs-200 font-bold cursor-pointer" @click="logout">Logout</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeading from '@/components/ui/AppHeading.vue'
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useAlertStore } from '@/stores/alert'

const authStore = useAuthStore()
const alertStore = useAlertStore()

const logout = () => {
  authStore.logout();
  alertStore.showAlert('warning', 'Goodbye', 'You\'ve successfully logged out!')
};

onMounted(() => {
  alertStore.showAlert('success', 'Welcome', 'You\'ve successfully logged in!')
})
</script>