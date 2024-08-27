    <script lang="ts" setup>
</script>
<template>
  <div class="w-full grid grid-cols-3 gap-4">
    <div class="bg-gray-300 p-4 rounded-md hover:scale-105 transition hover:bg-slate-300 hover:cursor-pointer col-span-3 md:col-span-1"
      v-for="item in $tm('home.services')">
      <PhosphorIconPipe class="text-center mx-auto" size="40" v-if="$rt(item.icon) === 'pipe'" />
      <PhosphorIconDropSimple class="text-center mx-auto" size="40" v-else-if="$rt(item.icon) === 'drop'" />
      <PhosphorIconThermometerSimple class="text-center mx-auto" size="40" v-else />
      <h3 class="text-xl font-bold text-center mb-2">{{ $rt(item.title) }}</h3>
      <p class="text-justify text-sm">
        {{ $rt(item.description) }}
      </p>
    </div>


  </div>
</template>


<style></style>