import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: '' as string | null,
  }),
  actions: {
    setToken(token: string) {
      this.token = token
    },
    clearToken() {
      this.token = null
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
})
