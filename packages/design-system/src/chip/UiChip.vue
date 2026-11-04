<script setup lang="ts">
import { UiCard } from "design-system/card";
import { computed } from "vue";

const { shape = "tile" } = defineProps<{ shape?: "pill" | "tile" }>();

const variant = computed(() => (shape === "pill" ? "outlined" : "tonal"));
</script>

<template>
  <UiCard as="span" class="ui-chip" :class="shape" :variant>
    <slot />
  </UiCard>
</template>

<style>
.ui-chip {
  display: inline-block;

  > .content {
    display: flex;
    align-items: start;
    gap: var(--size-2);
    padding: var(--ui-chip-padding);
    font-weight: 700;

    > .lucide {
      margin-block-start: var(--size-0-75);
      flex-shrink: 0;
      color: var(--color-pink);
      inline-size: var(--size-5);
      block-size: var(--size-5);
      stroke-width: 2.2;
    }
  }

  &.pill {
    border-radius: var(--radius-pill);
    background: var(--color-bg);
    --ui-chip-padding: var(--size-1-5) var(--size-3-5);
  }

  &.tile {
    border-radius: var(--radius-lg);
    --ui-chip-padding: var(--size-2) var(--size-3-5);
  }
}
</style>
