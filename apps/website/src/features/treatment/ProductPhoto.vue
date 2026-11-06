<script setup lang="ts">
const {
  src,
  alt,
  size = "small",
} = defineProps<{ src: string; alt: string; size?: "small" | "medium" }>();
</script>

<template>
  <span class="product-photo" :class="size"><img :src :alt /></span>
</template>

<style scoped>
.product-photo {
  display: grid;
  place-items: center;
  flex: none;
  padding: var(--size-1);
  background: var(--color-photo-ground);
  border: var(--size-px) solid var(--color-line);
  border-radius: var(--radius-md);
  box-sizing: border-box;

  &.small {
    inline-size: var(--size-14);
    block-size: var(--size-16);
  }

  &.medium {
    inline-size: var(--size-19);
    block-size: var(--size-24);
  }

  > img {
    inline-size: 100%;
    block-size: 100%;
    min-block-size: 0;
    object-fit: contain;
  }
}
</style>
