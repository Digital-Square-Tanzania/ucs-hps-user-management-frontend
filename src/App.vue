<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from './stores/auth'
import LoginView from './views/LoginView.vue'
import DashboardView from './views/DashboardView.vue'
import AlertToast from '@/components/ui/AlertToast.vue'
import TransparentCover from '@/components/ui/TransparentCover.vue'

const auth = useAuthStore()
const isAuthenticated = computed(() => auth.isAuthenticated)
</script>

<template>
  <main class="h-[97vh] lg:h-1/1 lg:flex-grow md:h-screen">
    <LoginView v-if="!isAuthenticated" msg="Please login first" />
    <DashboardView v-else />
  </main>

  <footer class="text-center">
    <p class="text-sm text-gray-500">
      &copy; 2025 | MOH
    </p>
  </footer>
  <AlertToast />
  <TransparentCover />


</template>
