// src/stores/alert.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAlertStore = defineStore('alert', () => {
  const visible = ref(false)
  const alertType = ref<'success' | 'warning' | 'danger'>('success')
  const alertHeading = ref('')
  const alertMessage = ref('')

  const alertTypeClass = computed(() => {
    switch (alertType.value) {
      case 'success':
        return 'bg-green-500'
      case 'warning':
        return 'bg-amber-500'
      case 'danger':
        return 'bg-red-500'
      default:
        return 'bg-gray-500'
    }
  })

  function showAlert(type: 'success' | 'warning' | 'danger', heading: string, message: string) {
    alertType.value = type
    alertHeading.value = heading.toUpperCase()
    alertMessage.value = message
    visible.value = true
    setTimeout(() => {
      visible.value = false
    }, 2500)
  }

  return {
    visible,
    alertHeading,
    alertMessage,
    alertTypeClass,
    showAlert,
  }
})
