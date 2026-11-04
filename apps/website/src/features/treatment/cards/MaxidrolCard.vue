<script setup lang="ts">
import { UiCallout } from "design-system/callout";
import { useId } from "vue";
import TreatmentCard from "../TreatmentCard.vue";
import DropTile from "./tiles/DropTile.vue";
import TreatTile from "./tiles/TreatTile.vue";

const id = `maxidrol-${useId()}`;
</script>

<template>
  <TreatmentCard :id heading="Maxidrol">
    <template #image>
      <img src="@/assets/maxidrol.webp" alt="Photo du Maxidrol" />
    </template>

    <DropTile />

    <TreatTile />

    <UiCallout severity="danger" compact>
      Œil fermé ? <strong>Ne pas mettre de Maxidrol</strong> et appeler le vétérinaire.
    </UiCallout>
  </TreatmentCard>
</template>
