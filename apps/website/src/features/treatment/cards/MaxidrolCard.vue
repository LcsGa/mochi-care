<script setup lang="ts">
import { useId } from "vue";
import TreatmentCard from "../TreatmentCard.vue";

const id = `maxidrol-${useId()}`;
</script>

<template>
  <TreatmentCard :id heading="Maxidrol"></TreatmentCard>
</template>
