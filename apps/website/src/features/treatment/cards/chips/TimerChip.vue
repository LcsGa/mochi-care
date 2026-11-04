<script setup lang="ts">
import { LucideClock } from "@lucide/vue";
import { UiChip } from "design-system/chip";

const { duration } = defineProps<{ duration: number }>();
</script>

<template>
  <div class="timer-chip">
    <div class="line"></div>

    <UiChip>
      <LucideClock />
      <strong>Attendre {{ duration }} minutes</strong>
    </UiChip>
  </div>
</template>

<style scoped>
.timer-chip {
  display: grid;
  grid-template-columns: var(--size-10) 1fr;
  justify-items: center;
  gap: var(--size-3);
  padding-block: var(--size-1);

  > .line {
    border-inline-start: var(--size-0-75) dotted var(--color-pink-mid);
  }

  > .ui-chip {
    justify-self: start;
  }
}
</style>
