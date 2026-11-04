<script setup lang="ts">
import { LucideCloudSun, LucideMoon, LucideSunrise } from "@lucide/vue";
import { UiCard } from "design-system/card";
import { UiHeading } from "design-system/heading";
import AnHyProCard from "./cards/AnHyProCard.vue";
import LacrynetCard from "./cards/LacrynetCard.vue";
import MaxidrolCard from "./cards/MaxidrolCard.vue";
import RegefluidCard from "./cards/RegefluidCard.vue";
</script>

<template>
  <div class="treatments-card-group" role="group">
    <UiCard as="article" aria-labelledby="morning-title" aria-describedby="morning-description">
      <template #header>
        <hgroup>
          <UiHeading id="morning-title">
            <LucideSunrise />
            Matin
          </UiHeading>
          <p id="morning-description">Au réveil.</p>
        </hgroup>
      </template>

      <LacrynetCard />

      <ol>
        <li><MaxidrolCard /></li>
        <li><AnHyProCard /></li>
        <li><RegefluidCard /></li>
      </ol>
    </UiCard>

    <UiCard as="article" aria-labelledby="afternoon-title" aria-describedby="afternoon-description">
      <template #header>
        <hgroup>
          <UiHeading id="afternoon-title">
            <LucideCloudSun />
            Après-midi
          </UiHeading>
          <p id="afternoon-description">Pas de Maxidrol l'après-midi.</p>
        </hgroup>
      </template>

      <LacrynetCard />

      <ol>
        <li><AnHyProCard /></li>
        <li><RegefluidCard /></li>
      </ol>
    </UiCard>

    <UiCard as="article" aria-labelledby="evening-title" aria-describedby="evening-description">
      <template #header>
        <hgroup>
          <UiHeading id="evening-title">
            <LucideMoon />
            Soir
          </UiHeading>
          <p id="evening-description">Exactement comme le matin.</p>
        </hgroup>
      </template>

      <LacrynetCard />

      <ol>
        <li><MaxidrolCard /></li>
        <li><AnHyProCard /></li>
        <li><RegefluidCard /></li>
      </ol>
    </UiCard>
  </div>
</template>

<style scoped>
.treatments-card-group {
  display: grid;
  align-items: start;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
  gap: --size(5);

  .lacrynet-card {
    margin-block-end: --size(3.5);
  }

  ol {
    list-style: none;
    counter-reset: step;

    li {
      counter-increment: step;
    }
  }
}
</style>
