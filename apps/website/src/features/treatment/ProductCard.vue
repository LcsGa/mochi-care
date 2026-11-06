<script setup lang="ts">
import { UiCard } from "design-system/card";
import { UiHeading } from "design-system/heading";
import ProductPhoto from "./ProductPhoto.vue";

const { name, image, imageAlt, frequency } = defineProps<{
  name: string;
  image: string;
  imageAlt: string;
  frequency: string;
}>();
</script>

<template>
  <UiCard as="article" class="product-card" :aria-label="name">
    <ProductPhoto size="medium" :src="image" :alt="imageAlt" />

    <hgroup>
      <p>{{ frequency }}</p>
      <UiHeading>{{ name }}</UiHeading>
      <p><slot /></p>
    </hgroup>
  </UiCard>
</template>

<style>
.product-card > .content {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: var(--size-4);
}
</style>
