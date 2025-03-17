<template>
  <div
    class="flex flex-row justify-between bg-white dark:bg-gray-700 p-5 rounded-lg h-50 lg:h-92 w-full lg:w-1/2 drop-shadow-md">
    <canvas ref="chartRef" class="w-full h-full"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title } from 'chart.js'

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title)

const props = defineProps<{ userRegistrations: number[] }>()
const chartRef = ref<HTMLCanvasElement | null>(null)
let chartInstance: Chart | null = null

const getLast12Months = () => {
  const months = []
  const date = new Date()
  for (let i = 11; i >= 0; i--) {
    const d = new Date(date.getFullYear(), date.getMonth() - i, 1)
    months.push(d.toLocaleString('default', { month: 'short' }))
  }
  return months
}

// ✅ Watch for prop changes and update the chart
watch(() => props.userRegistrations, (newData) => {
  if (chartInstance && newData.length > 0) {
    chartInstance.data.datasets[0].data = newData
    chartInstance.update()
  }
}, { deep: true })

onMounted(() => {
  if (chartRef.value) {
    chartInstance = new Chart(chartRef.value, {
      type: 'bar',
      data: {
        labels: getLast12Months(),
        datasets: [
          {
            label: 'Users Registered',
            data: props.userRegistrations || [], // Use default empty array
            backgroundColor: '#218cc5',
            borderRadius: 2,
            barThickness: 13,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: '#4B5563',
            },
          },
          title: {
            display: true,
            text: 'User Registrations (Last 12 Months)',
            color: '#6a7282',
            font: { size: 16, weight: 'bold' },
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.raw} users`,
            },
          },
        },
        scales: {
          x: {
            ticks: { color: '#6B7280' },
            grid: { display: false },
          },
          y: {
            ticks: { color: '#6B7280' },
            grid: { color: '#E5E7EB', display: false },
            beginAtZero: true,
          },
        },
      },
    })
  }
})

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.destroy()
  }
})
</script>