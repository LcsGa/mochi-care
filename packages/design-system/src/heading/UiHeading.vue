<script setup lang="ts">
import { computed, inject } from "vue";
import { HeadingLevel } from "./HeadingLevel";

const { level } = defineProps<{ level?: number | string }>();

const headingLevel = inject(HeadingLevel, 1);

const computedLevel = computed(() => level ?? headingLevel);
</script>

<template>
  <div class="ui-heading" role="heading" :aria-level="computedLevel">
    <slot />
  </div>
</template>

<style scoped>
.ui-heading {
  display: flex;
  align-items: center;
  gap: --size(2.5);
  color: var(--color-ink);

  > :slotted(.lucide) {
    color: var(--color-pink);
    inline-size: 1.1em;
    block-size: 1.1em;
  }

  &[aria-level="1"] {
    font: var(--font-display);
    color: var(--color-pink);
  }

  &[aria-level="2"] {
    font: var(--font-heading-1);
  }

  &[aria-level="3"] {
    font: var(--font-heading-2);
  }

  &[aria-level="4"] {
    font: var(--font-heading-3);
  }

  &[aria-level="5"] {
    font: var(--font-heading-4);
  }

  &:not([aria-level="1"], [aria-level="2"], [aria-level="3"], [aria-level="4"], [aria-level="5"]) {
    font: var(--font-heading-5);
  }
}
</style>
