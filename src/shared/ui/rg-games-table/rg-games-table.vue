<template>
  <UTable :columns="columns" />
</template>

<script setup lang="ts">
const columns = [{
  key: 'name',
  label: 'Игра',
},
{
  key: 'rating',
  label: 'Рейтинг',
},
{
  key: 'plays',
  label: 'Играют',
},
{
  key: 'releaseDate',
  label: 'Дата выхода',
}];
</script>

<style scoped>

</style>
