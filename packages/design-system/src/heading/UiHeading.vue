<script setup lang="ts">
import { inject } from "vue";
import { HeadingLevel } from "./HeadingLevel";

const headingLevel = inject(HeadingLevel, 1);
</script>

<template>
  <div class="ui-heading" role="heading" :aria-level="headingLevel">
    <slot />
  </div>
</template>

<style scoped>
.ui-heading {
  color: var(--color-ink);

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
