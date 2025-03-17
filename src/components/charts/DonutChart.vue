<template>
  <div class="w-full h-full flex items-center justify-center">
    <Doughnut :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { computed } from 'vue'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

const props = defineProps<{
  dataValues: number[]
  dataLabels: string[]
  colors?: string[]
}>()

const chartData = computed(() => ({
  labels: props.dataLabels,
  datasets: [
    {
      data: props.dataValues,
      backgroundColor: props.colors || ['#1a709e', '#64afd6', '#d3e8f3'],
      hoverOffset: 4,
      borderWidth: 0,
      borderColor: '#364153',
    },
  ],
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '70%',
  plugins: {
    legend: {
      display: true,
      position: 'left' as const,
      labels: {
        boxWidth: 12,
        padding: 10,
        color: '#cccccc',
        font: {
          size: 12,
          lineHeight: '0.5em',
        },
      },
    },
  },
}
</script>
