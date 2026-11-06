<script setup lang="ts">
import { LucideCake, LucidePawPrint, LucidePhone, LucideVenus, LucideWeight } from "@lucide/vue";
import { UiAvatar } from "design-system/avatar";
import { UiButton } from "design-system/button";
import { UiCard } from "design-system/card";
import { UiDivider } from "design-system/divider";
import { UiFact } from "design-system/fact";
import { UiHeading } from "design-system/heading";
import InsuranceCard from "@/features/insurance/InsuranceCard.vue";
import IdCardCheckList from "./IdCardCheckList.vue";
</script>

<template>
  <UiCard class="id-card" as="article" aria-label="Carnet de santé de Mochi">
    <header class="header">
      <UiAvatar size="large">
        <img src="@/assets/mochi.webp" alt="Photo portrait de Mochi" />
      </UiAvatar>

      <hgroup>
        <UiHeading level="1">
          Mochi <UiAvatar size="medium"><LucideVenus /></UiAvatar>
        </UiHeading>
        <p>N° de puce : 250 268 712 860 784</p>
      </hgroup>

      <UiButton as="a" href="#contacts">
        <LucidePhone />
        Un soucis ? Numéros du véto
      </UiButton>
    </header>

    <UiDivider />

    <div class="metadata" role="group">
      <UiFact :icon="LucidePawPrint" label="Race" value="Carlin" />
      <UiFact :icon="LucideWeight" label="Poids" value="7,5 kg" />
      <UiFact :icon="LucideCake" label="Âge" value="4 ans" meta="née le 27 juin 2022" />
    </div>

    <IdCardCheckList />

    <InsuranceCard />
  </UiCard>
</template>

<style>
.id-card > .content {
  container-type: inline-size;

  --data-cols-gap: var(--size-3);

  > .header {
    display: grid;
    align-items: center;
    column-gap: var(--size-6);
    grid-template: "avatar description action" / auto 1fr auto;

    > hgroup > p {
      margin-block-start: var(--size-1-5);
    }

    @container (inline-size <= 800px) {
      grid-template:
        "avatar description"
        "action action" / auto 1fr;

      > .ui-button {
        margin-block-start: var(--size-5);
      }
    }

    @container (inline-size <= 640px) {
      grid-template:
        "avatar"
        "description"
        "action" / 1fr;

      > .ui-avatar {
        margin-block-end: var(--size-4);
      }
    }

    @media print {
      grid-template-areas:
        "avatar heading"
        "avatar description"
        "avatar meta";
    }

    > .ui-avatar {
      grid-area: avatar;
    }

    > .ui-heading {
      grid-area: heading;
    }

    > p {
      grid-area: description;
    }

    > small {
      grid-area: meta;
    }

    > .ui-button {
      grid-area: action;
      justify-self: start;

      @media print {
        display: none;
      }
    }
  }

  > .metadata {
    display: flex;
    gap: var(--data-cols-gap);

    > * {
      flex: 1;
    }
  }

  > .metadata ~ * {
    margin-block-start: var(--size-5);
  }
}
</style>
