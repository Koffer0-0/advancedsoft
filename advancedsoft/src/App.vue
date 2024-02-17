<script setup lang="ts">
import TheSidebar from "@/components/TheSidebar.vue";
import TheNavbar from "@/components/TheNavbar.vue";
</script>
<template>
  <div id="app">
    <div class="antialiased bg-gray-50 dark:bg-gray-900">
      <TheNavbar/>
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 md:col-span-2">
          <TheSidebar/>
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
