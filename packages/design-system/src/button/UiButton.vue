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
  gap: --size(3);
  padding: --size(3) --size(5);
  border-radius: var(--radius-pill);
  background: var(--color-pink);
  color: var(--color-on-pink);
  font: var(--font-body-strong);
  text-decoration: none;

  > :slotted(.lucide) {
    inline-size: --size(5.5);
    block-size: --size(5.5);
  }
}
</style>
