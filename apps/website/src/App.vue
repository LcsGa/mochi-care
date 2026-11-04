<script setup lang="ts">
import IdCard from "@/features/id/IdCard.vue";
import MealsCard from "@/features/meal/MealsCard.vue";
import TreatmentsCardGroup from "@/features/treatment/TreatmentsCardGroup.vue";
import { LucideEye, LucideUtensils } from "@lucide/vue";
import { UiHeading, UiHeadingLayer } from "design-system/heading";
</script>

<template>
  <IdCard />

  <UiHeadingLayer as="section" id="meals" aria-labelledby="meals-title">
    <UiHeading id="meals-title"><LucideUtensils /> Ses repas</UiHeading>

    <MealsCard />
  </UiHeadingLayer>

  <UiHeadingLayer
    as="section"
    id="treatments"
    aria-labelledby="treatments-title"
    aria-describedby="treatments-description"
  >
    <hgroup>
      <UiHeading id="treatments-title">
        <LucideEye /> Les gouttes pour les yeux, étape par étape
      </UiHeading>
      <p id="traetments-description">
        Toujours <strong>1 goutte dans chaque œil</strong>. Après chaque goutte, Mochi a sa
        récompense. Pas d'heure précise : il suffit d'espacer les 3 séances à peu près régulièrement
        dans la journée.
      </p>
    </hgroup>

    <TreatmentsCardGroup />
  </UiHeadingLayer>
</template>

<style>
#app {
  margin: auto;
  max-inline-size: var(--size-320);
  inline-size: 100%;

  > section {
    margin-block-start: var(--size-12);

    > .ui-heading,
    > hgroup {
      margin-block-end: var(--size-3-5);
    }

    > hgroup > .ui-heading {
      margin-block-end: var(--size-3-5);
    }
  }
}
</style>
