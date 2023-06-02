<template>
  <div class="content ml-[300px] p-10">
    <RouterView />
    <h1>{{ loading.isLoading }}</h1>
    <button @click="loading.toggleLoading(true)">Clickl</button>
  </div>
</template>

<script lang="ts">
import { RouterView } from "vue-router";
import { useLoadingStore } from "@/stores/loading";
import { defineComponent, onMounted } from "vue";
import { useAuthApi } from "@/apis/authApi";

export default defineComponent({
  setup() {
    const loading = useLoadingStore();
    const { getA, getUsers } = useAuthApi();
    onMounted(async () => {
      const res = await getUsers();
      console.log("log", res);
    });
    return {
      loading,
      getA,
    };
  },
});
</script>
