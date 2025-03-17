<template>
  <PageTitle heading="UCS Users" subtext="Users Using UCS" />
  <div id="table-bg" class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
    <!-- Filter buttons-->
    <div class="mb-4">
      <button @click="filterUsers('openmrs')"
        class="btn-filter mr-2 py-2 px-4 bg-ucs-300 dark:bg-ucs-600 text-ucs-50 dark:text-ucs-200 rounded-sm curson:pointer hover:bg-ucs-400 dark:hover:bg-ucs-700">OpenMRS</button>
      <button @click="filterUsers('dhis')"
        class="btn-filter mr-2 py-2 px-4 bg-ucs-300 dark:bg-ucs-600 text-ucs-50 dark:text-ucs-200 rounded-sm curson:pointer hover:bg-ucs-400 dark:hover:bg-ucs-700">DHIS</button>
      <button @click="filterUsers('manager')"
        class="btn-filter mr-2 py-2 px-4 bg-ucs-300 dark:bg-ucs-600 text-ucs-50 dark:text-ucs-200 rounded-sm curson:pointer hover:bg-ucs-400 dark:hover:bg-ucs-700">Manager</button>
      <button @click="filterUsers('all')"
        class="btn-filter mr-2 py-2 px-4 bg-ucs-300 dark:bg-ucs-600 text-ucs-50 dark:text-ucs-200 rounded-sm curson:pointer hover:bg-ucs-400 dark:hover:bg-ucs-700">All</button>
      <Select v-model="selectedSystem" :options="systems" optionLabel="name" placeholder="Add New User" class="w-48"
        @change="navigateToAddUser" />
    </div>
    <!-- End of filter buttons -->

    <DataTable :value="filteredUsers" stripedRows paginator :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]"
      tableStyle="min-width: 50rem">
      <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" :class="col.class">
        <template #body="slotProps">
          <span v-if="col.field === 'role'" :class="roleColor(slotProps.data.role)"
            class="text-xs px-2 py-0.5 rounded-md">
            {{ slotProps.data.role }}
          </span>
          <span v-else>
            {{ slotProps.data[col.field] }}
          </span>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PageTitle from '@/components/layout/PageTitle.vue'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { users } from '@/utilities/DummyUsers'
import Select from 'primevue/select'


interface Column {
  field: string;
  header: string;
  class: string;
}

interface system {
  name: string;
  code: string;
}

const columns = ref<Column[]>([
  { field: 'id', header: 'ID', class: '' },
  { field: 'firstName', header: 'First Name', class: '' },
  { field: 'lastName', header: 'Last Name', class: '' },
  { field: 'role', header: 'Role', class: '' },
  { field: 'facility', header: 'Facility', class: '' },
  { field: 'council', header: 'Council', class: '' },
])

const systems = ref([
  { name: 'OpenMRS', code: 'openmrs' },
  { name: 'DHIS', code: 'dhis' },
  { name: 'Manager', code: 'manager' },
])

const dummyUsers = ref(users)
const filteredUsers = ref(users)
const selectedSystem = ref<system | null>(null)
const router = useRouter()

function roleColor(role: string) {
  switch (role) {
    case 'MOH':
      return 'bg-blue-200 dark:bg-blue-900'
    case 'PROVIDER':
      return 'bg-green-200 dark:bg-green-900'
    case 'CHW':
      return 'bg-amber-200 dark:bg-amber-900'
    case 'COUNCIL':
      return 'bg-purple-200 dark:bg-purple-900'
    case 'SYS_DEV':
      return 'bg-red-200 dark:bg-red-900'
    default:
      return 'bg-gray-200 dark:bg-gray-900'
  }
}

function filterUsers(system: string) {
  if (system === 'all') {
    filteredUsers.value = dummyUsers.value
  } else {
    filteredUsers.value = dummyUsers.value.filter(user => user.system === system)
  }
}

function navigateToAddUser() {
  if (selectedSystem.value) {
    router.push(`/adduser/${selectedSystem.value.code}`);
  }
}
</script>
