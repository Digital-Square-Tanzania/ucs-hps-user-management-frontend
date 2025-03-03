<template>
  <div v-if="authStore.loading" class="fixed inset-0 bg-white opacity-80 flex items-center justify-center z-49">
    <div class="text-black flex flex-col items-center justify-center">
      <SettingsCog class="animate-spin [animation-duration:2.4s]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import SettingsCog from '@/components/vectors/SettingsCog.vue'

const authStore = useAuthStore()
</script>
