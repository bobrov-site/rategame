import { defineStore } from 'pinia';

export const useIgdbStore = defineStore('igdbStore', () => {
  const accessToken = ref<string>('');
  return {
    accessToken,
  };
});
