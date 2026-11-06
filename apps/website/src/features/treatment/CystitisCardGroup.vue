<script setup lang="ts">
import fortiflora from "@/assets/fortiflora.webp";
import sultrian from "@/assets/sultrian.webp";
import { LucideCalendar } from "@lucide/vue";
import { UiCallout } from "design-system/callout";
import { UiChip } from "design-system/chip";
import ProductCard from "./ProductCard.vue";
</script>

<template>
  <div role="group" class="cystitis-card-group">
    <UiChip shape="pill">
      <LucideCalendar />
      Jusqu'au 26 novembre
    </UiChip>

    <div class="products">
      <ProductCard
        name="Sultrian 100"
        :image="sultrian"
        image-alt="Boîte de Sultrian 100"
        frequency="Matin et soir"
      >
        <strong>1 cachet</strong> dans son repas du matin, et 1 dans celui du soir.
      </ProductCard>

      <ProductCard
        name="FortiFlora"
        :image="fortiflora"
        image-alt="Boîte de FortiFlora"
        frequency="1 fois par jour"
      >
        <strong>1 sachet</strong> de probiotiques dans un de ses repas, pour éviter la diarrhée.
      </ProductCard>
    </div>

    <UiCallout severity="info">
      <strong>Contrôle :</strong> 10 jours après la fin de l'antibiotique, vers le 6 décembre, faire
      un prélèvement d'urines à envoyer au labo.
    </UiCallout>
  </div>
</template>

<style>
.cystitis-card-group {
  display: grid;
  gap: var(--size-5);

  > .ui-chip {
    justify-self: start;
  }

  > .products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--size-80)), 1fr));
    align-items: start;
    gap: var(--size-5);

    @media print {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
}
</style>
