import type { ToastServiceMethods } from 'primevue/toastservice'

export function showError(toast: ToastServiceMethods, message: string) {
  toast.add({
    severity: 'error',
    summary: 'Error',
    detail: message,
  })
}

export function showSuccess(toast: ToastServiceMethods, message: string) {
  toast.add({
    severity: 'success',
    summary: 'Success',
    detail: message,
  })
}
