<template>
  <div id="wide-card"
    class="flex flex-row justify-between bg-white dark:bg-gray-700 p-5 rounded-lg h-50 lg:h-92 w-full lg:w-1/2 drop-shadow-md">
    <slot name="lolote"></slot>
    <hr class="text-gray-200 dark:text-gray-500" />
    <br>
    <slot name="chart"></slot>
  </div>
</template>

<script setup lang="ts">
</script>