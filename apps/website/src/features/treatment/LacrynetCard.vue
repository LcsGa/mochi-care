<script setup lang="ts">
import { UiBadge } from "design-system/badge";
import { UiCard } from "design-system/card";
import lacrynet from "@/assets/lacrynet.webp";
import ProductPhoto from "./ProductPhoto.vue";
</script>

<template>
  <UiCard as="article" class="lacrynet-card" variant="dashed" aria-labelledby="lacrynet-name">
    <ProductPhoto :src="lacrynet" alt="Photo du Lacrynet" />

    <div class="text">
      <UiBadge variant="text">Si besoin, avant chaque séance</UiBadge>
      <strong id="lacrynet-name" class="name">Lacrynet</strong>
      <span class="detail">Seulement si les yeux sont sales.</span>
    </div>
  </UiCard>
</template>

<style>
.lacrynet-card {
  border-color: var(--color-line);

  > .content {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: var(--size-3);
    padding: var(--size-2-5) var(--size-3-5);
  }

  .text {
    display: grid;
    row-gap: var(--size-0-5);
  }

  .name {
    font: var(--font-heading-4);
  }

  .detail {
    font: var(--font-small);
    color: var(--color-muted);
  }
}
</style>
