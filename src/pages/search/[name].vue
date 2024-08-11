<template>
  <div>
    <rg-section-title title="Найденные игры по результату поиска" class="mb-4" />
    <rg-games-table />
  </div>
</template>

<script setup lang="ts">
import { useIgdbStore } from '~/entities/igdb/model/igdb-store';

const { name } = useRoute().params;
const igdbStore = useIgdbStore();
const searchGames = async() => {
  const games = await $fetch('/igdb/games', { method: 'POST', body: { accessToken: igdbStore.accessToken, gameName: name } });
};

await searchGames();
</script>

<style scoped>

</style>
