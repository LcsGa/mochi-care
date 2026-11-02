<script setup lang="ts">
import { LucideCake, LucidePhone, LucideWeight } from "@lucide/vue";
import { UiAvatar } from "design-system/avatar";
import { UiButton } from "design-system/button";
import { UiCard } from "design-system/card";
import { UiDivider } from "design-system/divider";
import { UiFact } from "design-system/fact";
import { UiHeading } from "design-system/heading";
</script>

<template>
  <UiCard class="id-card" as="article" aria-label="Carnet de santé de Mochi">
    <header class="header">
      <UiAvatar>
        <img src="@/assets/mochi.webp" alt="Photo portrait de Mochi" />
      </UiAvatar>
      <UiHeading level="1">Mochi</UiHeading>
      <p>Carlin, femelle. Voici tout ce qu'il faut savoir pour s'occuper d'elle</p>
      <small>Consignes à jour au 7 novembre 2026.</small>

      <UiButton as="a" href="#veterinarians">
        <LucidePhone />
        Un soucis ? Numéros du véto
      </UiButton>
    </header>

    <UiDivider />

    <div class="metadata" role="group">
      <UiFact :icon="LucideWeight" label="Poids" value="7,5 kg" />

      <UiFact :icon="LucideCake" label="Âge" value="4 ans" meta="née le 27 juin 2022" />
    </div>
  </UiCard>
</template>

<style scoped>
.id-card {
  container-type: inline-size;

  > .header {
    display: grid;
    align-items: center;
    column-gap: --size(6);
    grid-template:
      "avatar heading action"
      "avatar description action"
      "avatar meta action" / auto 1fr auto;

    @container (inline-size <= 980px) {
      grid-template:
        "avatar heading"
        "avatar description"
        "avatar meta"
        "action action" / auto 1fr;

      > .ui-button {
        margin-block-start: --size(4);
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
    flex-wrap: wrap;
    gap: --size(3);

    > * {
      flex: 1;
    }
  }
}
</style>
