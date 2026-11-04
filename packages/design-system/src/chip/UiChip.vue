<script setup lang="ts">
import { UiCard } from "design-system/card";
import { computed } from "vue";

const { shape = "pill" } = defineProps<{ shape?: "pill" | "tile" }>();

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
  border-radius: var(--radius-pill);

  > .content {
    display: flex;
    align-items: center;
    gap: var(--size-2);
    padding: var(--ui-chip-padding);
    font-weight: 700;
  }

  &.pill {
    background: var(--color-bg);
    --ui-chip-padding: var(--size-1-5) var(--size-3-5);

    > .content > .lucide {
      flex-shrink: 0;
      color: var(--color-pink);
      inline-size: var(--size-5);
      block-size: var(--size-5);
    }
  }
}
</style>
