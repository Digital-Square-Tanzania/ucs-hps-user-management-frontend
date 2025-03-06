<template>
  <h2 :class="[textColor, 'flex text-2xl font-bold p-5']">
    UCS User Manager
    <span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded-sm ms-2 hidden">
      MOH
    </span>
  </h2>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  color: 'red' | 'blue' | 'green' | 'yellow' | 'black' | 'white' | 'ucs'
}>()

const colorMap = {
  red: 'text-red-600',
  blue: 'text-blue-600',
  green: 'text-green-600',
  yellow: 'text-yellow-600',
  white: 'text-white',
  black: 'text-black',
  ucs: 'text-ucs-500',
}

const textColor = computed(() => colorMap[props.color] || 'text-gray-500')
</script>
