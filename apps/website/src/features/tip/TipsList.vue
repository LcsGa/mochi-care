<script setup lang="ts">
import { LucideBan, LucideClock, LucideTrees } from "@lucide/vue";
import { UiAvatar } from "design-system/avatar";
import { UiCard } from "design-system/card";
import { UiHeading } from "design-system/heading";
</script>

<template>
  <ul class="tips-list">
    <UiCard as="li" variant="tonal">
      <UiHeading>
        <UiAvatar inverted><LucideTrees /></UiAvatar> Au retour de promenade
      </UiHeading>
      <p>
        En cas de fortes rafales de vents, ses yeux sèchent : mettre 1 goutte d'an-HyPro dans chaque
        œil en prévention.
      </p>
    </UiCard>

    <UiCard as="li" variant="tonal">
      <UiHeading>
        <UiAvatar inverted><LucideClock /></UiAvatar>Si vous partez longtemps
      </UiHeading>
      <p>Étaler 1 petite cuillère à café de beurre de cacahuète sur son tapis de léchage.</p>
    </UiCard>

    <UiCard as="li" variant="tonal">
      <UiHeading>
        <UiAvatar inverted><LucideBan /></UiAvatar>Aliments interdits
      </UiHeading>
      <p>Jamais de raisin (frais ou sec), de chocolat, d'oignon, d'ail ni de sucreries.</p>
    </UiCard>
  </ul>
</template>

<style scoped>
.tips-list {
  --tips-list-gap: var(--size-3);
  --tips-listitem-min-size: calc((var(--body-max-inline-size) - 2 * var(--tips-list-gap)) / 3);

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--tips-listitem-min-size)), 1fr));
  gap: var(--tips-list-gap);
}
</style>
