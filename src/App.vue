<script setup lang="ts">
import Dashboard from "./components/Layouts/Dashboard.vue";
import Loading from "@/components/Loading.vue";
import { useLoadingStore } from "./stores/loading";
const isLoading = useLoadingStore();
</script>

<template>
  <Dashboard />
  <Loading :is-loading="isLoading.isLoading" />
</template>
