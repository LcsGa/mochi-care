<script setup lang="ts">
import { LucideMoon, LucideSun, LucideSunrise } from "@lucide/vue";
import { UiCallout } from "design-system/callout";
import { UiCard } from "design-system/card";
import { UiDivider } from "design-system/divider";
import { UiFact } from "design-system/fact";
</script>

<template>
  <UiCard>
    <p>
      <strong>3 repas par jour</strong>, avec <strong>30 g de croquettes</strong> à chaque fois.
    </p>

    <div role="group">
      <UiFact :icon="LucideSunrise" label="matin" value="30 g" />
      <UiFact :icon="LucideSun" label="midi" value="30 g" />
      <UiFact :icon="LucideMoon" label="soir" value="30 g" />
    </div>

    <UiDivider>ou</UiDivider>

    <p>
      <strong>2 repas par jour</strong>, avec <strong>45 g de croquettes</strong> à chaque fois.
    </p>

    <div role="group">
      <UiFact :icon="LucideSunrise" label="matin" value="45 g" />
      <UiFact :icon="LucideMoon" label="soir" value="45 g" />
    </div>

    <UiCallout severity="info">
      3 repas par jour, c'est mieux pour elle. Mais si besoin, 2 repas par jour, c'est tout à fait
      acceptable.
    </UiCallout>
  </UiCard>
</template>

<style scoped>
[role="group"] {
  display: flex;
  flex-wrap: wrap;
  gap: var(--size-3);
  margin-block-start: var(--size-2);
}

.ui-callout {
  margin-block-start: var(--size-3-5);
}
</style>
