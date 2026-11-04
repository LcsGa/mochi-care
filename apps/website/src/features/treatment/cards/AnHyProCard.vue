<script setup lang="ts">
import { useId } from "vue";
import TreatmentCard from "../TreatmentCard.vue";

const id = `an-hypro-${useId()}`;
</script>

<template>
  <TreatmentCard :id heading="an-HyPro"></TreatmentCard>
</template>
