<script setup lang="ts">
import { LucideCalendarClock, LucidePlus } from "@lucide/vue";
import { UiBadge } from "design-system/badge";
import { UiCard } from "design-system/card";
import { UiChip } from "design-system/chip";
import { UiHeading } from "design-system/heading";
</script>

<template>
  <UiCard as="article" class="wipe-card" variant="dashed" aria-labelledby="wipe-heading">
    <UiBadge variant="dashed"><LucidePlus /> En plus des gouttes pour les yeux</UiBadge>

    <div class="img">
      <img src="@/assets/lingettes.webp" alt="Photo des lingettes" />
    </div>

    <UiHeading id="wipe-heading">Lingette sur le pli du nez</UiHeading>

    <p>Passer un petit coup de lingette (découpée) dans le pli au-dessus de son nez.</p>

    <UiChip>
      <LucideCalendarClock /> 1 fois par jour, quand vous voulez : avant, pendant ou après les
      gouttes.
    </UiChip>
  </UiCard>
</template>

<style>
.wipe-card {
  position: relative;
  overflow: visible;
  container-type: inline-size;
  border-color: var(--color-pink-mid);

  > .content {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: var(--size-4-5);

    @container (inline-size <= 540px) {
      grid-template-columns: auto;

      > .ui-heading {
        margin-block-start: var(--size-3);
      }
    }

    > .ui-badge {
      position: absolute;
      inset-block-start: calc(-1 * var(--size-3-5));
      inset-inline-start: var(--size-4-5);
    }

    > .img {
      grid-row: 1 / span 3;
    }

    > p {
      margin-block-start: var(--size-1);
    }

    > .ui-chip {
      justify-self: start;
      margin-block-start: var(--size-2-5);
    }
  }
}
</style>
