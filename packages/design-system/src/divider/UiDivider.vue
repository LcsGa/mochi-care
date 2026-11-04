<script setup lang="ts">
const { orientation = "horizontal" } = defineProps<{ orientation?: "horizontal" | "vertical" }>();
</script>

<template>
  <div class="ui-divider" role="separator" :aria-orientation="orientation">
    <slot />
  </div>
</template>

<style scoped>
.ui-divider {
  display: flex;
  gap: var(--size-4);
  align-items: center;
  font: var(--font-label);
  color: var(--color-muted);
  text-transform: uppercase;

  &::before,
  &::after {
    flex: 1;
    display: block;
    content: "";
  }

  &:empty::after {
    display: none;
  }

  &[aria-orientation="horizontal"] {
    margin-block: var(--size-4);

    &::before,
    &::after {
      border-block-start: var(--size-px) solid var(--color-line);
    }
  }

  &[aria-orientation="vertical"] {
    flex-direction: column;
    margin-inline: var(--size-4);

    &::before,
    &::after {
      border-inline-start: var(--size-px) solid var(--color-line);
    }
  }
}
</style>
