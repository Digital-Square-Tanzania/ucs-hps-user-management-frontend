<script setup lang="ts">
import LoginView from './views/LoginView.vue'
import DashboardView from './views/DashboardView.vue'
import { useAuthStore } from './stores/auth'
import { computed } from 'vue'

const auth = useAuthStore()
const isAuthenticated = computed(() => auth.isAuthenticated)
</script>

<template>
  <header>
    <div class="wrapper"> <!--Will add if no login -->
      <LoginView v-if="!isAuthenticated" msg="Please login first" />
      <DashboardView v-else />
    </div>
  </header>

  <footer>
    <p>&copy; 2025</p>
  </footer>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
