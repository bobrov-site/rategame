<template>
  <div class="flex">
    <UInput
      v-model="gameName"
      icon="i-mdi-magnify"
      size="xl"
      color="white"
      :trailing="false"
      placeholder="Read Dead Redemption 2"
      class="mr-2"
    />
    <UButton label="Поиск" color="white" @click="navigateToSearch" />
  </div>
</template>

<script setup lang="ts">
const gameName = ref<string>('');

const navigateToSearch = async() => {
  await navigateTo(`/search/${gameName.value}`);
};
</script>

<style scoped>

</style>
