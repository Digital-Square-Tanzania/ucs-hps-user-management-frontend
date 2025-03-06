<template>
  <div id="info-card"
    class="flex flex-row justify-between bg-white dark:bg-gray-700 p-5 rounded-lg h-44 drop-shadow-md">
    <div id="card-left" class="flex flex-col align-middle justify-between w-4/5">
      <div id="left-heading" class="text-md font-bold">
        <slot name="heading"></slot>
      </div>
      <div id="left-big-number" class="font-bold text-4xl">
        <slot name="big-number"></slot>
      </div>
      <div id="left-percent" class="flex flex-row justify-start">
        <span id="percent-number" :class="[percentColor, 'font-bold text-lg']">
          <slot name="percent"></slot>
        </span>
        <span id="percent-text" class="text-sm text-gray-400 pl-5">
          <slot name="subtext"></slot>
        </span>
      </div>
    </div>
    <div id="card-right" class="flex flex-col items-center justify-around w-1/5">
      <i>
        <slot name="icon"></slot>
      </i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  color: 'red' | 'amber' | 'green'
}>()

const colorMap = {
  red: 'text-red-600',
  amber: 'text-amber-600',
  green: 'text-green-600',
}

const percentColor = computed(() => colorMap[props.color] || 'text-gray-500')
</script>