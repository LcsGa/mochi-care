<script setup lang="ts">
import { UiHeadingLayer } from "design-system/heading";
import type { Component } from "vue";

const { as = "div", variant = "outlined" } = defineProps<{
  as?: keyof HTMLElementTagNameMap | Component;
  variant?: "outlined" | "tonal";
}>();
</script>

<template>
  <UiHeadingLayer class="ui-card" :class="variant" :as>
    <slot />
  </UiHeadingLayer>
</template>

<style scoped>
:where(.ui-card) {
  padding: --size(5.5);
  background: var(--color-surface);
  border-radius: var(--radius-xl);

  &.outlined {
    border: --size(px) solid var(--color-line);
  }

  &.tonal {
    background: var(--color-pink-soft);
  }
}
</style>
