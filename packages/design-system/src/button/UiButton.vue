<script setup lang="ts">
const { as = "button", variant = "filled" } = defineProps<{
  as: "button" | "a";
  variant?: "filled" | "outlined";
}>();
</script>

<template>
  <component :is="as" class="ui-button" :class="variant">
    <slot />
  </component>
</template>

<style scoped>
.ui-button {
  display: inline flex;
  align-items: center;
  gap: var(--size-3);
  padding: var(--size-3) var(--size-5);
  border: var(--size-0-5) solid var(--color-pink);
  border-radius: var(--radius-pill);
  font: var(--font-body-strong);
  text-decoration: none;

  &.filled {
    background: var(--color-pink);
    color: var(--color-on-pink);
  }

  &.outlined {
    background: var(--color-surface);
    color: var(--color-pink);
  }

  > :slotted(.lucide) {
    inline-size: var(--size-5-5);
    block-size: var(--size-5-5);
  }
}
</style>
