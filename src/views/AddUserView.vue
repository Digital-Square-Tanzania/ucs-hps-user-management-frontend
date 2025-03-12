<!-- src/views/AddUserView.vue -->
<template>
  <PageTitle heading="Add New User" :subtext="'Add new ' + system.toUpperCase() + ' user'" />
  <div id="table-bg" class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
    <!-- Various forms go here -->
  </div>
</template>

<script setup lang="ts">
import PageTitle from '@/components/layout/PageTitle.vue'

defineProps({
  system: {
    type: String,
    required: true
  }
})

</script>