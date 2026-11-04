<script setup lang="ts">
import ContactCard from "@/features/contact/ContactCard.vue";
import IdCard from "@/features/id/IdCard.vue";
import MealsCard from "@/features/meal/MealsCard.vue";
import MonitoringCard from "@/features/monitoring/MonitoringCard.vue";
import TipsList from "@/features/tip/TipsList.vue";
import TreatmentsCardGroup from "@/features/treatment/TreatmentsCardGroup.vue";
import {
  LucideEye,
  LucideHeartPulse,
  LucideLightbulb,
  LucidePhone,
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

    > hgroup > .ui-heading {
      margin-block-end: var(--size-3-5);
    }
  }
}
</style>
