<template>
  <transition name="fade">
    <div v-if="visible"
      :class="['alert-toast', alertTypeClass, 'text-center fixed top-1/100 text-white right-5 translate-x-[-50%] px-12.5 py-[1rem] mt-12 rounded-[0.35rem] z-50 shadow-lg']">
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
