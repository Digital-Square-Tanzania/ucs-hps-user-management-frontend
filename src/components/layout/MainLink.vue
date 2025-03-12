<template>
  <router-link :to=route
    class="text-lg font-normal text-ucs-100 hover:text-white dark:text-ucs-500 dark:hover:text-ucs-200 transition-colors mr-5"
    active-class="text-white dark:text-ucs-200 border-b-2 border-ucs-200">{{ title }}</router-link>
</template>

<script setup lang="ts">

defineProps<{
  route: string,
  title: string
}>()
</script>