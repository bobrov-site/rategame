<template>
  <div
    class="hover:shadow-md bg-primary
  w-full p-4 rounded-2xl flex flex-col justify-center items-center"
  >
    <h1 class="font-bold text-center text-6xl text-white mb-4">
      Лучший трекер видеоигр
    </h1>
    <p class="text-white max-w-xl mb-4 text-center w-full text-center">
      RateGame - сервис позволяющий следить за новыми
      видеоиграми, оценивать их рейтинг и получать рекомендации на основе их
      просмотров.
    </p>
    <UInput
      icon="i-mdi-magnify"
      size="xl"
      color="white"
      :trailing="false"
      placeholder="Read Dead Redemption 2"
    />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
