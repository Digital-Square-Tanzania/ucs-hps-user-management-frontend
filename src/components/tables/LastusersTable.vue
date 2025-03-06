<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-2 overflow-x-hidden overflow-y-clip w-full">
    <h3 class="text-lg font-bold mb-5 text-gray-500">Last 10 Users</h3>
    <table class="min-w-full table-auto text-sm">
      <thead>
        <tr class="bg-gray-100 dark:bg-ucs-900 text-left text-gray-700 dark:text-white">
          <th class="px-4 py-3">SN</th>
          <th class="px-4 py-3">Name</th>
          <th class="px-4 py-3">Role</th>
          <th class="px-4 py-3">Facility</th>
          <th class="px-4 py-3">Council</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="user.id"
          :class="[rowColor(user.role), 'text-gray-600 dark:text-gray-200']">
          <td class="px-2 py-1 md:py-2">{{ index + 1 }}</td>
          <td class="px-2 py-1 md:py-2">{{ user.firstName }} {{ user.lastName }}</td>
          <td class="px-2 py-1 md:py-2">
            <span :class="roleColor(user.role)" class="px-2 py-1 rounded text-white text-xs font-light">
              {{ user.role }}
            </span>
          </td>
          <td class="px-2 py-1 md:py-2">{{ user.facility }}</td>
          <td class="px-2 py-1 md:py-2">{{ user.council }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface User {
  id: number
  firstName: string
  lastName: string
  role: string
  facility: string
  council: string
}

const users = ref<User[]>([
  { id: 1, firstName: 'Fatma', lastName: 'Mohamed', role: 'MOH', facility: 'Mnazi Mmoja Hospital', council: 'Mjini' },
  { id: 2, firstName: 'John', lastName: 'Doe', role: 'PROVIDER', facility: 'Amani Health Center', council: 'Magharibi A' },
  { id: 3, firstName: 'Asha', lastName: 'Ali', role: 'CHW', facility: 'Mwera Dispensary', council: 'Kati' },
  { id: 4, firstName: 'Peter', lastName: 'Ngowi', role: 'COUNCIL', facility: 'Kidongo Chekundu Clinic', council: 'Mjini' },
  { id: 5, firstName: 'Mary', lastName: 'Joseph', role: 'SYS_DEV', facility: 'ICT Office', council: 'HQ' },
  { id: 6, firstName: 'Ahmed', lastName: 'Hassan', role: 'PROVIDER', facility: 'Mwera Dispensary', council: 'Kati' },
  { id: 7, firstName: 'Zahra', lastName: 'Omar', role: 'MOH', facility: 'Mnazi Mmoja Hospital', council: 'Melele' },
])

function roleColor(role: string) {
  switch (role) {
    case 'MOH':
      return 'bg-blue-500'
    case 'PROVIDER':
      return 'bg-green-500'
    case 'CHW':
      return 'bg-amber-500'
    case 'COUNCIL':
      return 'bg-purple-500'
    case 'SYS_DEV':
      return 'bg-red-500'
    default:
      return 'bg-gray-500'
  }
}

function rowColor(role: string) {
  switch (role) {
    case 'MOH':
      return 'bg-blue-50 dark:bg-blue-950'
    case 'PROVIDER':
      return 'bg-green-50 dark:bg-green-950'
    case 'CHW':
      return 'bg-amber-50 dark:bg-amber-950'
    case 'COUNCIL':
      return 'bg-purple-50 dark:bg-purple-950'
    case 'SYS_DEV':
      return 'bg-red-50 dark:bg-red-950'
    default:
      return 'bg-gray-50 dark:bg-gray-950'
  }
}
</script>
