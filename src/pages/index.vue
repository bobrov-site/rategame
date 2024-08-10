<template>
  <div class="rg-index">
    <rg-main-banner class="mb-8" />
    <rg-trends />
  </div>
</template>

<script setup lang="ts">
import type { IgdbAuth } from '~/entities/igdb/domen/igdbAuth';
import { useIgdbStore } from '~/entities/igdb/model/igdb-store';

onMounted(async() => {
  await fetchToken();
  await fetchGames();
});
const igdbStore = useIgdbStore();
const fetchToken = async() => {
  const data : IgdbAuth = await $fetch('/igdb/token', { method: 'POST' });
  igdbStore.accessToken = data.access_token;
};

const fetchGames = async() => {
  const data = await $fetch('/igdb/games', { method: 'GET', params: { accessToken: igdbStore.accessToken } });
  console.log(data);
};
</script>

<style scoped>

</style>
