<script setup lang="ts">
import { UiCallout } from "design-system/callout";
import { UiCard } from "design-system/card";
</script>

<template>
  <UiCard as="article" aria-label="Instruction du Lacrynet" class="lacrynet-card" variant="dashed">
    <div class="img">
      <img src="@/assets/lacrynet.webp" alt="Photo du Lacrynet" />
    </div>

    <div role="group">
      <p class="tag">Si besoin, avant de commencer</p>
      <p>Nettoyer les yeux avec du <strong>Lacrynet</strong>.</p>
    </div>

    <UiCallout severity="info" compact>
      Seulement si ses yeux sont vraiment sales. Pas besoin d'attendre ensuite.
    </UiCallout>
  </UiCard>
</template>

<style>
.lacrynet-card > .content {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: --size(3);
  padding: --size(3);

  > .ui-callout {
    grid-column: 1 / -1;
  }
}
</style>
