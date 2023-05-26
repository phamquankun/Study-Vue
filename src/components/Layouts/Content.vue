<script setup lang="ts">
import { RouterView } from "vue-router";
import { useAuthApi } from "../apis/authApi";

const { getUsers } = useAuthApi();
</script>

<template>
  <div class="content ml-[300px] p-10">
    <RouterView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  async mounted() {
    const res = await getUsers();
    console.log("check res", res);
  },
});
</script>
