<script setup lang="ts">
import { useId } from "vue";
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

    <TreatTile :count="2" />
  </TreatmentCard>
</template>
