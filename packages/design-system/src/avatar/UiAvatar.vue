<script setup lang="ts">
const { size = "small", inverted } = defineProps<{
  size?: "large" | "medium" | "small";
  inverted?: boolean;
}>();
</script>

<template>
  <div class="ui-avatar" :class="[size, { inverted }]">
    <slot />
  </div>
</template>

<style scoped>
.ui-avatar {
  display: inline grid;
  place-items: center;
  aspect-ratio: 1;
  border-radius: var(--radius-round);
  overflow: clip;
  background: var(--color-pink-soft);
  color: var(--color-pink);

  > :slotted(img) {
    inline-size: 100%;
    block-size: 100%;
  }

  &.large {
    border: var(--size-1) solid var(--color-pink-mid);
    inline-size: var(--size-32);
  }

  &.medium {
    inline-size: var(--size-11);

    > :slotted(.lucide) {
      inline-size: var(--size-6-5);
      block-size: var(--size-6-5);
      stroke-width: 2.5;
    }
  }

  &.small {
    inline-size: var(--size-10);

    > :slotted(.lucide) {
      inline-size: var(--size-5);
      block-size: var(--size-5);
    }
  }

  &.inverted {
    background: var(--color-surface);
  }
}
</style>
