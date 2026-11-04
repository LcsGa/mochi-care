<script setup lang="ts">
import { useId } from "vue";
import TreatmentCard from "../TreatmentCard.vue";

const id = `regefluid-${useId()}`;
</script>

<template>
  <TreatmentCard :id heading="Régéfluid"></TreatmentCard>
</template>
