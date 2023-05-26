<script setup lang="ts">
defineProps<{
  isLoading: boolean;
}>();
</script>
<template>
  <div
    class="loading fixed top-0 left-0 bottom-0 right-0 z-50 bg-[rgba(0,0,0,0.5)] flex items-center justify-center"
    v-if="isLoading"
  >
    <div
      class="flex items-center justify-center w-[150px] h-[80px] bg-white rounded-lg"
    >
      <h1>Loading...</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
