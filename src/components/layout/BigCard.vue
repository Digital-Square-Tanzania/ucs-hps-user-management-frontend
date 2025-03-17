<template>
  <div id="big-card" class="flex flex-col justify-between bg-white dark:bg-gray-700 p-5 rounded-lg h-92 drop-shadow-md">
    <div id="heading" class="text-md font-bold">
      <slot name="heading"></slot>
    </div>
    <div id="big-number" class="font-bold text-5xl">
      <slot name="big-number"></slot>
    </div>
    <div id="subtext" class="text-gray-400 pt-9 pb-5 text-sm">
      <slot name="subtext"></slot>
    </div>
    <hr class="text-gray-200 dark:text-gray-500">
    <div id="chart" class="h-3/5 pt-3">
      <slot name="chart"></slot>
    </div>
  </div>
</template>