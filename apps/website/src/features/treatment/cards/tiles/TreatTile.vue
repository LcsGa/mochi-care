<script setup lang="ts">
import { LucideCandy } from "@lucide/vue";
import { UiTile } from "design-system/tile";

const { count = 1 } = defineProps<{ count?: number }>();
</script>

<template>
  <UiTile variant="tonal">
    <template #icon>
      <LucideCandy v-for="i in count" :key="i" />
    </template>
    {{ count }} bonbon{{ count > 1 ? "s" : "" }}
  </UiTile>
</template>
