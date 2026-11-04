<script setup lang="ts">
const { as = "button" } = defineProps<{ as: "button" | "a" }>();
</script>

<template>
  <component :is="as" class="ui-button">
    <slot />
  </component>
</template>

<style scoped>
.ui-button {
  display: inline flex;
  align-items: center;
  gap: var(--size-3);
  padding: var(--size-3) var(--size-5);
  border-radius: var(--radius-pill);
  background: var(--color-pink);
  color: var(--color-on-pink);
  font: var(--font-body-strong);
  text-decoration: none;

  > :slotted(.lucide) {
    inline-size: var(--size-5-5);
    block-size: var(--size-5-5);
  }
}
</style>
