import { defineStore } from 'pinia'
import axios, { AxiosError } from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: '' as string | null,
    refreshToken: '' as string | null,
    loading: false,
    error: '' as string | null,
  }),
  actions: {
    async login(email: string, password: string) {
      this.loading = true
      this.error = null
      try {
        const response = await axios.post(`${API_URL}/auth/login`, {
          email,
          password,
        })

        if (response.data.status !== 'success') {
          throw new Error(response.data.message || 'Login failed')
        }

        this.accessToken = response.data.data.accessToken
        this.refreshToken = response.data.data.refreshToken

        if (this.accessToken) localStorage.setItem('accessToken', this.accessToken)
        if (this.refreshToken) localStorage.setItem('refreshToken', this.refreshToken)
      } catch (error: unknown) {
        const axiosError = error as AxiosError<{ message?: string }>
        this.error = axiosError.response?.data?.message || axiosError.message || 'Login failed'
        this.accessToken = null
        this.refreshToken = null
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
      } finally {
        this.loading = false
      }
    },
    async logout() {
      this.loading = true
      this.error = null
      try {
        await axios.post(
          `${API_URL}/auth/logout`,
          {},
          {
            headers: {
              Authorization: `Bearer ${this.accessToken}`,
            },
          },
        )
      } catch (error: unknown) {
        const axiosError = error as AxiosError<{ message?: string }>
        this.error = axiosError.response?.data?.message || axiosError.message || 'Logout failed'
      } finally {
        this.clearTokens()
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        this.loading = false
      }
    },
    clearTokens() {
      this.accessToken = null
      this.refreshToken = null
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.accessToken,
  },
})
