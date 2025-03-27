<template>
  <header class="rg-header pt-3 pb-3">
    <div class="container mx-auto flex justify-between items-center">
      <div class="rg-logo">
        <NuxtLink class="font-bold text-xl flex items-center" to="/">
          RateGame
          <UIcon name="i-mdi-robot-love-outline" class="ms-1" />
        </NuxtLink>
        <!-- mdi:robot-love-outline -->
      </div>
      <UHorizontalNavigation :links="links" />
      <rg-theme-switch />
    </div>
  </header>
</template>

<script setup lang="ts">
import { Routes } from '~/app/config/routes';

const links = [
  {
    label: Routes.trends.title,
    to: Routes.trends.path,
  },
  {
    label: Routes.registration.title,
    to: Routes.registration.path,
  },
  {
    label: Routes.login.title,
    to: Routes.login.path,
  },
];
</script>

<style scoped>

</style>
