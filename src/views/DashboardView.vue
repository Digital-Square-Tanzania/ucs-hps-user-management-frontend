<template>
  <header class="flex flex-row items-center justify-between">
    <h2 class="text-4xl font-extrabold">Dashboard</h2>
    <p class="text-sm font-medium cursor-pointer" @click="logout">Logout</p>
  </header>
  <main>

  </main>
</template>

<script setup lang="ts">
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
