<script setup lang="ts">
import { LucideHourglass } from "@lucide/vue";
import { UiChip } from "design-system/chip";

const { duration } = defineProps<{ duration: number }>();
</script>

<template>
  <li class="wait-step">
    <UiChip shape="pill">
      <LucideHourglass />
      {{ duration }} minutes
    </UiChip>
  </li>
</template>

<style scoped>
.wait-step {
  display: grid;
  grid-template-columns: var(--step-marker-size) 1fr;
  align-items: center;
  column-gap: var(--size-3);
  padding-block: var(--size-2);
  line-height: 1.3;

  > .ui-chip {
    grid-column: 2;
    justify-self: start;
  }
}
</style>
