<script setup lang="ts">
defineProps<{
  title: string;
  icon: any;
  isActived: boolean;
}>();
defineEmits(["redirect"]);
</script>

<template>
  <div
    :class="[
      'side-bar-item',
      'flex',
      'items-center',
      'gap-3',
      'p-2',
      'cursor-pointer',
      { 'bg-gray-50 rounded-md actived': isActived },
    ]"
    @click="() => $emit('redirect')"
  >
    <component :is="icon" :class="{ '!text-blue-700': isActived }"></component>
    <span :class="['font-medium', { 'text-blue-600': isActived }]">{{
      title
    }}</span>
  </div>
</template>
