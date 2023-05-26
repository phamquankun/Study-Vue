import { ref } from "vue";
import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loading", () => {
  const isLoading = ref(false);

  function toggleLoading(value: boolean) {
    isLoading.value = value;
  }

  return { isLoading, toggleLoading };
});
