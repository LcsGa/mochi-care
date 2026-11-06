<script setup lang="ts">
import lingettes from "@/assets/lingettes.webp";
import { UiCard } from "design-system/card";
import { UiHeading } from "design-system/heading";
import ProductPhoto from "./ProductPhoto.vue";
</script>

<template>
  <UiCard as="article" class="wipe-card" aria-label="Lingette sur le pli du nez">
    <ProductPhoto size="medium" :src="lingettes" alt="Photo des lingettes" />

    <hgroup>
      <p>1 fois par jour</p>
      <UiHeading>Lingette</UiHeading>
      <p>Un <strong>morceau découpé</strong> suffit, passé dans le pli du nez.</p>
    </hgroup>
  </UiCard>
</template>

<style>
.wipe-card {
  > .content {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: var(--size-4);
  }
}
</style>
