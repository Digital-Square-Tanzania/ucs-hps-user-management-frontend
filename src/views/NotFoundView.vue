<template>
  <div class="h-[80vh] flex flex-col items-center justify-center text-center">
    <h1 class="text-5xl font-bold text-red-500">404</h1>
    <p class="text-lg text-gray-600 dark:text-gray-300 mt-2">Page Not Found</p>
    <Button label="Go Home" class="mt-4 px-4 py-2 bg-ucs-500 text-white rounded-lg" @click="goHome" unstyled />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Button from 'primevue/button';

const router = useRouter();

const goHome = () => {
  router.push('/');
};
</script>
