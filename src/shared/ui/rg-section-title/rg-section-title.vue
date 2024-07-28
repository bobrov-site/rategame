<template>
  <h2 class="text-4xl font-bold">
    {{ props.title }}
  </h2>
</template>

<script setup lang="ts">
import type { SectionTitle } from '~/shared/types/sectionTitle';

const props = withDefaults(defineProps<SectionTitle>(), {
  title: 'Заголовок секции',
});
</script>

<style scoped>

</style>
