<script setup lang="ts">
import { LucideMoon, LucideSun, LucideSunrise } from "@lucide/vue";
import { useElementSize } from "@vueuse/core";
import { UiCallout } from "design-system/callout";
import { UiCard } from "design-system/card";
import { UiDivider } from "design-system/divider";
import { UiFact } from "design-system/fact";
import { useTemplateRef } from "vue";

const mealsCard = useTemplateRef("mealsCard");
const { width } = useElementSize(mealsCard);
</script>

<template>
  <UiCard ref="mealsCard" class="meals-card">
    <section aria-label="Repas en 3 fois">
      <p>
        <strong>3 repas par jour</strong>, avec <strong>30 g de croquettes</strong> à chaque fois.
      </p>

      <div role="group">
        <UiFact :icon="LucideSunrise" label="matin" value="30 g" />
        <UiFact :icon="LucideSun" label="midi" value="30 g" />
        <UiFact :icon="LucideMoon" label="soir" value="30 g" />
      </div>
    </section>

    <UiDivider :orientation="width <= 800 ? 'horizontal' : 'vertical'">ou</UiDivider>

    <section aria-label="Repas en 2 fois">
      <p>
        <strong>2 repas par jour</strong>, avec <strong>45 g de croquettes</strong> à chaque fois.
      </p>

      <div role="group">
        <UiFact :icon="LucideSunrise" label="matin" value="45 g" />
        <UiFact :icon="LucideMoon" label="soir" value="45 g" />
      </div>
    </section>

    <UiCallout severity="info">
      3 repas par jour, c'est mieux pour elle. Mais si besoin, 2 repas par jour, c'est tout à fait
      acceptable.
    </UiCallout>
  </UiCard>
</template>

<style>
.meals-card {
  container-type: inline-size;

  > .content {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    column-gap: var(--size-7);

    @container (inline-size <= 800px) {
      grid-template-columns: 1fr;
    }

    [role="group"] {
      display: flex;
      flex-wrap: wrap;
      gap: var(--size-3);
      margin-block-start: var(--size-2);
    }

    > .ui-callout {
      grid-column: 1 / -1;
      margin-block-start: var(--size-4-5);
    }
  }
}
</style>
