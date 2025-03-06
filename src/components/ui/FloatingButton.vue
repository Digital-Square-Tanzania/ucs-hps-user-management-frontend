<template>
  <button @click="goToAction"
    class="relative flex flex-row justify-items-center bg-ucs-500 text-white font-medium shadow-lg hover:bg-ucs-600 transition-all duration-300 ease-in-out px-5 py-3 rounded-full group mr-0">
    <span class="text-2xl">{{ symbol }}</span>
    <span
      class="ml-2 opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity ease-in-out duration-500 overflow-hidden mt-1">
      {{ text }}
    </span>



  </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps<{
  route: string
  text: string
  symbol: string
}>()

const router = useRouter()

function goToAction() {
  router.push(props.route)
}
</script>

<style scoped>
button {
  width: 56px;
  height: 56px;
}

button:hover {
  width: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
</style>
