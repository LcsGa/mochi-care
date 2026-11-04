<script setup lang="ts">
import { LucideHand } from "@lucide/vue";
import { useId } from "vue";
import UiTile from "../../../../../../packages/design-system/src/tile/UiTile.vue";
import TreatmentCard from "../TreatmentCard.vue";
import DropTile from "./tiles/DropTile.vue";
import TreatTile from "./tiles/TreatTile.vue";

const id = `regefluid-${useId()}`;
</script>

<template>
  <TreatmentCard :id heading="Régéfluid">
    <template #image>
      <img src="@/assets/regefluid.webp" alt="Photo du Régéfluid" />
    </template>

    <DropTile />

    <UiTile>
      <template #icon><LucideHand /></template>
      Essuyer doucement ses yeux avec une <strong>compresse</strong>
    </UiTile>

    <TreatTile :count="2" />
  </TreatmentCard>
</template>
