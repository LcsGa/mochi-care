<script setup lang="ts">
const { src, alt } = defineProps<{ src: string; alt: string }>();
</script>

<template>
  <span class="product-photo"><img :src :alt /></span>
</template>

<style scoped>
.product-photo {
  display: grid;
  place-items: center;
  flex: none;
  inline-size: var(--size-14);
  block-size: var(--size-16);
  padding: var(--size-1);
  background: var(--color-photo-ground);
  border: var(--size-px) solid var(--color-line);
  border-radius: var(--radius-md);
  box-sizing: border-box;

  > img {
    inline-size: 100%;
    block-size: 100%;
    min-block-size: 0;
    object-fit: contain;
  }
}
</style>
