<script setup lang="ts">
import ContactCard from "@/features/contact/ContactCard.vue";
import IdCard from "@/features/id/IdCard.vue";
import MealsCard from "@/features/meal/MealsCard.vue";
import MonitoringCard from "@/features/monitoring/MonitoringCard.vue";
import TipsList from "@/features/tip/TipsList.vue";
import TreatmentsCardGroup from "@/features/treatment/TreatmentsCardGroup.vue";
import WipeCard from "@/features/treatment/WipeCard.vue";
import {
  LucideEye,
  LucideHeartPulse,
  LucideLightbulb,
  LucidePhone,
  LucideSparkle,
  LucideUtensils,
} from "@lucide/vue";
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
      <UiHeading id="treatments-title"><LucideEye /> Gouttes pour les yeux</UiHeading>
      <p id="treatments-description">Après chaque goutte, lui donner un bonbon.</p>
    </hgroup>

    <TreatmentsCardGroup />
  </UiHeadingLayer>

  <UiHeadingLayer
    as="section"
    id="wipe"
    aria-labelledby="wipe-title"
    aria-describedby="wipe-description"
  >
    <hgroup>
      <UiHeading id="wipe-title"><LucideSparkle /> Lingette sur le pli du nez</UiHeading>
      <p id="wipe-description">Après la lingette, lui donner un bonbon.</p>
    </hgroup>

    <WipeCard />
  </UiHeadingLayer>

  <UiHeadingLayer as="section" id="monitoring" aria-labelledby="monitoring-title">
    <UiHeading id="monitoring-title"><LucideHeartPulse /> Ce qu'il faut serveiller</UiHeading>
    <MonitoringCard />
  </UiHeadingLayer>

  <UiHeadingLayer as="section" id="contacts" aria-labelledby="contacts-title">
    <UiHeading id="contacts-title"><LucidePhone /> Qui appeler</UiHeading>
    <ContactCard />
  </UiHeadingLayer>

  <UiHeadingLayer as="section" id="tips" aria-labelledby="tips-title">
    <UiHeading id="tips-title"><LucideLightbulb /> Bons réflexes</UiHeading>
    <TipsList />
  </UiHeadingLayer>
</template>

<style>
#app {
  --body-max-inline-size: var(--size-320);
  max-inline-size: var(--body-max-inline-size);
  margin: auto;
  inline-size: 100%;

  > section {
    margin-block-start: var(--size-12);

    > .ui-heading,
    > hgroup {
      margin-block-end: var(--size-3-5);
    }

    > hgroup {
      display: grid;
      row-gap: var(--size-1);

      > p {
        font: var(--font-small);
        color: var(--color-muted);
      }
    }
  }
}

/* Impression compacte : tout est réduit d'un coup pour tenir sur le moins de pages possible. */
@media print {
  @page {
    margin: 8mm;
  }

  html {
    zoom: 0.56;
  }

  body {
    padding: 0;
  }

  #app > section {
    margin-block-start: var(--size-6);
  }
}
</style>
