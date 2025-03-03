<template>
  <!-- <h1 class="text-4xl font-extrabold">Login</h1>
  <p class="text-base">{{ msg }}</p> -->
  <div class="login-box flex flex-row bg-white dark:bg-gray-800 shadow-md rounded-lg m-20 h-[75vh]">
    <div class="box-left w-1/2 flex flex-col">
      <div class="left-top box-border p-5 h-1/20">
        <h2 class="flex text-2xl font-bold dark:text-white"><span
            class="text-transparent bg-clip-text bg-gradient-to-r to-sky-400 from-blue-600">UCS</span>&nbsp; User
          Manager<span
            class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-2 hidden">MOH</span>
        </h2>
      </div>

      <div class="left-bottom box-border p-5 h-19/20 flex flex-row justify-center">
        <div class="bottom-form w-3/5 h-full flex flex-col justify-center">
          <form @submit.prevent="handleLogin" class="w-full max-w-sm">
            <h2 class="text-3xl font-bold dark:text-white top-0">Login</h2>
            <br>
            <p class="text-sm dark:text-white">Please enter your email and password to login</p>
            <div class="mb-4 mt-15">
              <label for="username" class="block text-sm dark:text-white">E-mail</label>
              <input type="text" id="email" name="email" v-model="email"
                class="w-full px-2 text-lg py-4 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white" />
            </div>
            <div class="mb-4 mt-5">
              <label for="password" class="block text-sm dark:text-white">Password</label>
              <input type="password" id="password" name="password" v-model="password"
                class="w-full px-2 py-4 text-lg border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white" />
            </div>
            <div class="mb-4 mt-5">
              <button type="submit" :disabled="auth.loading"
                class="w-full px-2 py-4 bg-blue-500 text-lg hover:bg-blue-600 cursor-pointer text-white rounded-md dark:bg-blue-700">
                {{ auth.loading ? 'Logging in...' : 'Login' }}
              </button>
            </div>
            <br>
            <p class="text-sm dark:text-white">Don't have an account? <strong
                class="text-transparent bg-clip-text bg-gradient-to-r to-sky-400 from-blue-600">Contact MOH</strong></p>
          </form>
        </div>
      </div>

    </div>
    <div
      class="flex flex-col items-center justify-center box-right box-border w-1/2 bg-blue-50 rounded-lg dark:bg-gray-700">
      <div
        class="circle rounded-[50%] bg-blue-500 dark:bg-blue-600 h-60 w-60 z-1 absolute hover:animate-pulse cursor-pointer">
      </div>
      <div class="opaque h-60 w-[100%] z-2 relative top-30 backdrop-blur-lg"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

defineProps<{ msg: string }>()

const email = ref('')
const password = ref('')
const auth = useAuthStore()

const handleLogin = async () => {
  await auth.login(email.value, password.value)
  if (auth.error) {
    alert(auth.error)
  }
}
</script>
