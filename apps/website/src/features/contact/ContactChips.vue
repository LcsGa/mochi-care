<script setup lang="ts">
import { LucideMapPin, LucidePhone } from "@lucide/vue";
import { UiChip } from "design-system/chip";
import { computed } from "vue";

const { phone, address } = defineProps<{ phone: string; address: string }>();
const tel = computed(() => `tel:+33${phone.slice(1).replaceAll(" ", "")}`);
const map = computed(() => `https://www.google.com/maps/dir//${address.replaceAll(" ", "+")}`);
</script>

<template>
  <div class="contact-chips" role="group">
    <UiChip as="a" :href="tel"><LucidePhone /> {{ phone }}</UiChip>

    <UiChip as="a" :href="map" target="_blank"><LucideMapPin /> {{ address }}</UiChip>
  </div>
</template>

<style scoped>
.contact-chips {
  margin-block-start: var(--size-1-5);
  display: flex;
  flex-wrap: wrap;
  gap: var(--size-2);
}
</style>
