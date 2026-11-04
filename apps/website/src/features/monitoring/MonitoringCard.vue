<script setup lang="ts">
import {
  LucideDroplets,
  LucideEar,
  LucideEyeClosed,
  LucideFootprints,
  LucideTally5,
} from "@lucide/vue";
import { UiCard } from "design-system/card";
import { UiHeading } from "design-system/heading";
import { UiListItem } from "design-system/list";
</script>

<template>
  <UiCard class="monitoring-card" as="article">
    <ul>
      <UiListItem>
        <template #icon><LucideEyeClosed class="alert" /></template>
        <hgroup>
          <UiHeading class="alert">Œil fermé</UiHeading>
          <p>Ça peut être un ulcère.</p>
        </hgroup>
        <p class="alert">Arrêter tout de suite le Maxidrol.</p>
        <p>Appeler le vétérinaire rapidement.</p>
      </UiListItem>

      <UiListItem>
        <template #icon><LucideDroplets /></template>
        <hgroup>
          <UiHeading>Incontinence</UiHeading>
          <p>C'est lié à sa stérilisation.</p>
        </hgroup>
        <p>Son traitement : Incurin.</p>
      </UiListItem>

      <UiListItem>
        <template #icon><LucideTally5 /></template>
        <hgroup>
          <UiHeading>Pipi trop fréquent ou avec du sang</UiHeading>
          <p>Ça peut être une infection urinaire.</p>
        </hgroup>
        <p>Appeler le vétérinaire : c'est lui qui prescrit le traitement.</p>
      </UiListItem>

      <UiListItem>
        <template #icon><LucideEar /></template>
        <hgroup>
          <UiHeading>Elle se gratte beaucoup les oreilles</UiHeading>
          <p>Oreilles rouges ou avec des croûtes.</p>
        </hgroup>
        <p>Son traitement : Cortanmycétine.</p>
      </UiListItem>

      <UiListItem>
        <template #icon><LucideDroplets /></template>
        <hgroup>
          <UiHeading>Vomissements ou régurgitations fréquents</UiHeading>
          <p>Liquide clair, comme de la salive ou de l'eau.</p>
        </hgroup>
        <p>Son traitement : Vetgastril+, 1 ml le matin et 1 ml le soir.</p>
      </UiListItem>

      <UiListItem>
        <template #icon><LucideFootprints /></template>
        <hgroup>
          <UiHeading>Patte un peu froissée</UiHeading>
          <p>Ça arrive si elle a couru comme une folle en promenade.</p>
        </hgroup>
        <p>Surveiller. En général, ce n'est pas grave.</p>
      </UiListItem>
    </ul>
  </UiCard>
</template>

<style>
.monitoring-card hgroup ~ p {
  font-weight: 700;
}
</style>

<style>
/* Impression : liste sur 2 colonnes pour gagner de la hauteur. */
@media print {
  .monitoring-card ul {
    columns: 2;
    column-gap: var(--size-6);

    > .ui-list-item {
      break-inside: avoid;
    }
  }
}
</style>
