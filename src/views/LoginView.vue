<template>
  <h1 class="text-4xl font-extrabold">Login</h1>
  <p class="text-base">{{ msg }}</p>
</template>

<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>
