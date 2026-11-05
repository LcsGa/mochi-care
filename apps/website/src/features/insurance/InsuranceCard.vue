<script setup lang="ts">
import { LucideFileText, LucideShieldCheck } from "@lucide/vue";
import { UiAvatar } from "design-system/avatar";
import { UiButton } from "design-system/button";
import { UiCard } from "design-system/card";
import { UiHeading } from "design-system/heading";
import { careSheetUrl, insurerName } from "./careSheet";
</script>

<template>
  <UiCard class="insurance-card" as="aside" variant="dashed">
    <UiAvatar size="medium"><LucideShieldCheck /></UiAvatar>

    <hgroup>
      <UiHeading>Assurée chez {{ insurerName }}</UiHeading>
      <p>Après une visite chez le véto, la feuille de soins permet de se faire rembourser.</p>
    </hgroup>

    <UiButton as="a" variant="outlined" :href="careSheetUrl" target="_blank">
      <LucideFileText /> Feuille de soins
    </UiButton>
  </UiCard>
</template>

<style>
.insurance-card {
  border-color: var(--color-pink-mid);
  container-type: inline-size;

  > .content {
    display: grid;
    grid-template: "avatar text action" / auto 1fr auto;
    align-items: start;
    gap: var(--size-3) var(--size-4);

    > .ui-avatar {
      grid-area: avatar;
    }

    > hgroup {
      grid-area: text;
      align-self: center;

      > p {
        margin-block-start: var(--size-0-5);
        color: var(--color-muted);
      }
    }

    > .ui-button {
      grid-area: action;
      align-self: center;
      justify-self: start;

      @media print {
        display: none;
      }
    }

    @container (inline-size <= 670px) {
      grid-template:
        "avatar text"
        ". action" / auto 1fr;
    }

    @container (inline-size <= 400px) {
      padding: var(--size-4);
      grid-template:
        "avatar text"
        "action action" / auto 1fr;
    }
  }
}
</style>
