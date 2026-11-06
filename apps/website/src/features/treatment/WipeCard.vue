<script setup lang="ts">
import lingettes from "@/assets/lingettes.webp";
import { LucideClock } from "@lucide/vue";
import { UiCard } from "design-system/card";
import { UiChip } from "design-system/chip";
import ProductPhoto from "./ProductPhoto.vue";
</script>

<template>
  <UiCard as="article" class="wipe-card" aria-label="Lingette sur le pli du nez">
    <ProductPhoto :src="lingettes" alt="Photo des lingettes" />

    <div class="text">
      <UiChip><LucideClock /> 1 fois par jour</UiChip>
      <p>
        Passer <strong>1 lingette</strong> (découpée) dans le pli du nez, à n'importe quel moment.
      </p>
    </div>
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

  > .content > .product-photo {
    inline-size: var(--size-19);
    block-size: var(--size-24);
  }

  .text {
    display: grid;
    row-gap: var(--size-1-5);

    > .ui-chip {
      justify-self: start;
    }
  }
}
</style>
