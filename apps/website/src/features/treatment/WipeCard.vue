<script setup lang="ts">
import lingettes from "@/assets/lingettes.webp";
import ProductCard from "./ProductCard.vue";
</script>

<template>
  <ProductCard
    name="Lingette"
    :image="lingettes"
    image-alt="Photo des lingettes"
    frequency="1 fois par jour"
  >
    Un <strong>morceau découpé</strong> suffit, passé dans le pli du nez.
  </ProductCard>
</template>
