<template>
  <transition name="fade">
    <div id="alert-box" v-if="visible" :class="[
      'alert-toast',
      alertTypeClass,
      'text-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-12.5 py-[1rem] mt-12 rounded-[0.35rem] z-50 shadow-lg text-sm min-w-4/5 max-w-90',
      'lg:top-4 lg:right-4 lg:left-auto lg:transform-none lg:translate-x-0 lg:translate-y-0 lg:text-md lg:min-w-40'
    ]">
      <h3 class="font-bold">{{ alertHeading }}</h3>
      <p>{{ alertMessage }}</p>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAlertStore } from '@/stores/alert'

const { visible, alertTypeClass, alertHeading, alertMessage } = storeToRefs(useAlertStore())

</script>
