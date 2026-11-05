<script setup lang="ts">
import {
  LucideEye,
  LucideFileText,
  LucideShieldCheck,
  LucideSiren,
  LucideStethoscope,
  LucideUser,
  LucideUser2,
} from "@lucide/vue";
import { UiChip } from "design-system/chip";
import { UiCard } from "design-system/card";
import { UiHeading } from "design-system/heading";
import { UiListItem } from "design-system/list";
import { careSheetUrl, insurerName, insurerPhone } from "@/features/insurance/careSheet";
import ContactChips from "./ContactChips.vue";
</script>

<template>
  <UiCard class="contact-card" as="article">
    <ul>
      <UiListItem>
        <template #icon><LucideStethoscope /></template>
        <hgroup>
          <UiHeading>Vétérinaire habituel</UiHeading>
          <p>Argos Vétérinaire</p>
        </hgroup>
        <ContactChips
          phone="03 87 18 02 10"
          address="118 Rue de Pont-à-Mousson, 57950 Montigny-lès-Metz"
        />
      </UiListItem>

      <UiListItem>
        <template #icon><LucideEye /></template>
        <hgroup>
          <UiHeading>Vétérinaire ophtalmologue</UiHeading>
          <p>MVET, vétérinaires référés pour les yeux</p>
        </hgroup>
        <ContactChips
          phone="03 87 62 41 14"
          address="Rue du Fossé, 57155 Marly"
          maps-query="MVET, Rue du Fossé, 57155 Marly"
        />
      </UiListItem>

      <UiListItem>
        <template #icon><LucideSiren class="alert" /></template>
        <hgroup>
          <UiHeading class="alert">Vétérinaire de garde</UiHeading>
          <p>Soirs, week-ends, urgences</p>
        </hgroup>
        <ContactChips phone="03 82 88 26 66" address="124 Route de Verdun, 57180 Terville" />
      </UiListItem>

      <UiListItem class="insurance">
        <template #icon><LucideShieldCheck /></template>
        <hgroup>
          <UiHeading>{{ insurerName }}</UiHeading>
          <p>Assurance santé de Mochi</p>
        </hgroup>
        <ContactChips :phone="insurerPhone">
          <UiChip as="a" :href="careSheetUrl" target="_blank">
            <LucideFileText /> Feuille de soins (PDF)
          </UiChip>
        </ContactChips>
      </UiListItem>

      <UiListItem>
        <template #icon><LucideUser /></template>
        <hgroup>
          <UiHeading>Père de Lucas</UiHeading>
          <p>A l'habitude des chiens</p>
        </hgroup>
        <ContactChips phone="06 67 25 56 49" address="21B Rue de la Source, 57000 Metz" />
      </UiListItem>

      <UiListItem>
        <template #icon><LucideUser2 /></template>
        <hgroup>
          <UiHeading>Mère de Lucas</UiHeading>
          <p>A l'habitude des chiens</p>
        </hgroup>
        <ContactChips phone="06 43 74 57 83" address="30 Rue Jean Dagnaux, 57155 Marly" />
      </UiListItem>
    </ul>
  </UiCard>
</template>

<style scoped>
.contact-card {
  hgroup {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    column-gap: var(--size-2);
  }

  .insurance .contact-chips > :last-child {
    @media print {
      display: none;
    }
  }
}
</style>
