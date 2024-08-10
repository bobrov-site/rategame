<template>
  <div class="rg-theme-switch">
    <UButton
      color="primary"
      variant="ghost"
      icon="mdi:theme-light-dark"
      @click="isDark = !isDark"
    />
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get () {
    return colorMode.value === 'dark';
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  },
});
</script>

<style scoped>

</style>
