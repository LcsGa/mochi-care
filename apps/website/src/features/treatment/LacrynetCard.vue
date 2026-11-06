<script setup lang="ts">
import lacrynet from "@/assets/lacrynet.webp";
import { UiCard } from "design-system/card";
import { UiHeading } from "design-system/heading";
import ProductPhoto from "./ProductPhoto.vue";
</script>

<template>
  <UiCard as="article" class="lacrynet-card" variant="dashed" aria-labelledby="lacrynet-name">
    <ProductPhoto size="medium" :src="lacrynet" alt="Photo du Lacrynet" />

    <hgroup>
      <p>Si besoin, avant chaque séance</p>
      <UiHeading id="lacrynet-name">Lacrynet</UiHeading>
      <p>Seulement si les yeux sont sales.</p>
    </hgroup>
  </UiCard>
</template>

<style>
.lacrynet-card > .content {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: var(--size-3);
  padding: var(--size-2-5) var(--size-3-5);
}
</style>
