<template>
  <div id="page-title" class="lg:mb-5 sm:mb-2">
    <h1 class="text-2xl lg:text-3xl font-extrabold text-ucs-700 dark:text-ucs-200">{{ heading || "Admin" }}</h1>
    <p class="text-sm lg:text-base text-ucs-500 dark:text-ucs-300">{{ subtext || "" }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  heading: string
  subtext: string
}>()

</script>