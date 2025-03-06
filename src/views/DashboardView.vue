<template>
  <TopBar class="hidden opacity-100 lg:flex md:hidden" />
  <div id="main-content shadow-lg"
    class="absolute h-auto w-1/1 lg:w-8/10 lg:top-25 bg-gray-100 dark:bg-ucs-900 p-5 z-3 rounded-2xl ">
    <header class="flex flex-row items-start justify-between">
      <div id="header-left" class="flex flex-col items-start justify-start">
        <h2 class="lg:text-4xl md:text-4xl sm:text-3xl font-extrabold">Dashboard</h2>
        <p class="text-ucs-300 font-medium text-sm lg:text-lg">UCS User Statistics</p>
      </div>
      <div id="header-right">
        <FloatingActionButton route="/add-user" text="Add User" symbol="+" />
      </div>
    </header>
    <main>
      <div id="dash-top"
        class="lg:flex lg:flex-row lg:mt-10 md:flex md:flex-col md:mt-4 sm:grid sm:grid-cols-1 sm:gap-4 sm:mt-3">
        <div id="left-cards"
          class="mt-5 box-border flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:w-1/2 lg:pr-2 lg:mt-0 lg:gap-4 md:grid md:grid-cols-2 md:w-full md:mt-0 md:gap-4 sm:mt-5 sm:w-1">
          <InfoCard color="green">
            <template #heading>OpenMRS Users</template>
            <template #big-number>9'320</template>
            <template #percent>94%</template>
            <template #subtext>Last Sync: Mar 02, 2025</template>
            <template #icon>
              <IconUsers class="h-8 w-8 fill-gray-500 dark:fill-gray-200" />
            </template>
          </InfoCard>
          <InfoCard color="red">
            <template #heading>DHIS2 Users</template>
            <template #big-number>120</template>
            <template #percent>6%</template>
            <template #subtext>Last Sync: Mar 02, 2025</template>
            <template #icon>
              <IconUserGear class="h-8 w-8 fill-gray-500 dark:fill-gray-200" />
            </template>
          </InfoCard>
          <InfoCard color="green">
            <template #heading>All Villages</template>
            <template #big-number>64,531</template>
            <template #percent>-32</template>
            <template #subtext>Last Sync: Mar 01, 2025</template>
            <template #icon>
              <IconVillage class="h-8 w-8 fill-gray-500 dark:fill-gray-200" />
            </template>
          </InfoCard>
          <InfoCard color="red">
            <template #heading>Registered Facilities</template>
            <template #big-number>2'672</template>
            <template #percent>+12</template>
            <template #subtext>Last Sync: Mar 03, 2025</template>
            <template #icon>
              <IconHospital class="h-8 w-8 fill-gray-500 dark:fill-gray-200" />
            </template>
          </InfoCard>
        </div>
        <div id="right-cards" class="lg:w-1/2 lg:pl-2 md:w-full">
          <div
            class="grid mt-4 lg:grid-cols-2 gap-4 md:gap-4 lg:gap-4 lg:mt-0 md:w-full md:grid-cols-2 md:mt-0 sm:grid-cols-1">
            <BigCard>
              <template #heading>UCS Teams</template>
              <template #big-number>3'197</template>
              <template #subtext>Active UCS Teams</template>
              <template #chart>
                <DonutChart :data-values="[3197, 323, 90]" :data-labels="['10+ Members', '5-9 Members', '<5 Members']"
                  :colors="['#1a709e', '#64afd6', '#d3e8f3']" />
              </template>
            </BigCard>

            <BigCard>
              <template #heading>Team Members</template>
              <template #big-number>29,056</template>
              <template #subtext>Comprehensive Community Users</template>
              <template #chart>
                <DonutChart :data-values="[17920, 5670, 168]" :data-labels="['CHWs', 'Providers', 'Coordinators']"
                  :colors="['#ffaa1a', '#ffd080', '#ffeccc']" />
              </template>
            </BigCard>
          </div>
        </div>
      </div>
      <div id="dash-bottom" class="flex flex-col lg:flex-row grid-cols-1 lg:grid-cols-2 gap-4 pt-4">
        <BarchartYear />
        <LastUsersTable />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import TopBar from '@/components/ui/TopBar.vue'
import InfoCard from '@/components/ui/InfoCard.vue'
import BigCard from '@/components/ui/BigCard.vue'
import IconUsers from '@/components/icons/IconUsers.vue'
import IconUserGear from '@/components/icons/IconUserGear.vue'
import IconVillage from '@/components/icons/IconVillage.vue'
import IconHospital from '@/components/icons/IconHospital.vue'
import BarchartYear from '@/components/charts/BarchartYear.vue'
import DonutChart from '@/components/charts/DonutChart.vue'
import LastUsersTable from '@/components/tables/LastUsersTable.vue'
import FloatingActionButton from '@/components/ui/FloatingButton.vue'

</script>
