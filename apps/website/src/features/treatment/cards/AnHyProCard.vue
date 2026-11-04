<script setup lang="ts">
import { useId } from "vue";
import TreatmentCard from "../TreatmentCard.vue";
import DropTile from "./tiles/DropTile.vue";
import TreatTile from "./tiles/TreatTile.vue";

const id = `an-hypro-${useId()}`;
</script>

<template>
  <TreatmentCard :id heading="an-HyPro">
    <template #image>
      <img src="@/assets/anhypro.webp" alt="Photo de l'an-HyPro" />
    </template>

    <DropTile />

    <TreatTile />
  </TreatmentCard>
</template>
