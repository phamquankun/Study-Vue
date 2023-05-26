<script setup lang="ts">
import DashboardItem from "./DashboardItem.vue";
import Sidebar from "./Sidebar.vue";
import Content from "./Content.vue";
</script>

<template>
  <DashboardItem>
    <template #sidebar>
      <Sidebar />
    </template>
    <template #content>
      <Content />
    </template>
  </DashboardItem>
</template>
