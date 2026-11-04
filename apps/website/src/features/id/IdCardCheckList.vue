<script setup lang="ts">
import { LucideShieldCheck, LucideSyringe } from "@lucide/vue";
import { UiBadge } from "design-system/badge";
import { UiCard } from "design-system/card";
</script>

<template>
  <ul class="id-card-check-list">
    <UiCard class="listitem" as="li">
      <LucideSyringe /> <span>Vaccins <small>(dont toux du chenil)</small></span>
      <UiBadge variant="status" severity="success">à jour</UiBadge>
    </UiCard>
    <UiCard class="listitem" as="li">
      <LucideShieldCheck /> Vermifuge <UiBadge variant="status" severity="success">à jour</UiBadge>
    </UiCard>
    <UiCard class="listitem" as="li">
      <LucideShieldCheck /> Antiparasitaire
      <UiBadge variant="status" severity="success">à jour</UiBadge></UiCard
    >
    <UiCard class="listitem" as="li">
      <LucideSyringe /> <span>Cytopoint <small>(pour sa peau atopique)</small></span>
      <UiBadge variant="status" severity="success">à jour</UiBadge>
    </UiCard>
  </ul>
</template>

<style>
.id-card-check-list {
  list-style: none;
  display: grid;
  grid-template-columns: var(--data-cols);
  column-gap: var(--data-cols-gap);
  row-gap: --size(2);

  > li > .content {
    display: grid;
    align-items: center;
    justify-items: start;
    grid-template-columns: auto 1fr auto;
    gap: --size(3);
    padding: --size(3);

    > .lucide {
      color: var(--color-pink);
    }
  }
}
</style>
