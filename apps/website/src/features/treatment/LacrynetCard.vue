<script setup lang="ts">
import lacrynet from "@/assets/lacrynet.webp";
import ProductCard from "./ProductCard.vue";
</script>

<template>
  <ProductCard
    variant="dashed"
    name="Lacrynet"
    :image="lacrynet"
    image-alt="Photo du Lacrynet"
    frequency="Si besoin, avant chaque séance"
  >
    Seulement si les yeux sont sales.
  </ProductCard>
</template>
