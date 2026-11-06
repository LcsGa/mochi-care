<script setup lang="ts">
import { LucideHourglass } from "@lucide/vue";
import { UiCard } from "design-system/card";
import { UiChip } from "design-system/chip";
import { UiHeading } from "design-system/heading";
import ProductPhoto from "../ProductPhoto.vue";
import type { Step } from "./DropSession.ts";

const { name, image, detail, waitMinutes } = defineProps<Step>();
</script>

<template>
  <li class="drop-step">
    <span class="marker" aria-hidden="true"></span>

    <UiCard class="drop-card" as="article">
      <ProductPhoto :src="image" :alt="`Photo du ${name}`" />
      <hgroup>
        <UiHeading>{{ name }}</UiHeading>
        <p>{{ detail }}</p>
      </hgroup>
    </UiCard>

    <UiChip v-if="waitMinutes" class="timer" shape="pill">
      <LucideHourglass />
      {{ waitMinutes }} minutes
    </UiChip>
  </li>
</template>

<style>
.drop-step {
  list-style: none;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: var(--drop-step-row-gap) var(--size-3);
  counter-increment: step;

  &:first-child > .marker {
    anchor-name: var(--drop-first-anchor);
  }

  &:last-child > .marker {
    anchor-name: var(--drop-last-anchor);
  }

  > .marker {
    display: grid;
    place-items: center;
    aspect-ratio: 1;
    block-size: var(--size-10);
    background: var(--color-pink);
    color: var(--color-on-pink);
    border-radius: var(--radius-round);
    z-index: 1;
    print-color-adjust: exact;

    &::before {
      content: counter(step);
      font: var(--font-body-strong);
      font-variant-numeric: tabular-nums;
    }
  }

  > .drop-card {
    background: var(--color-surface);
    border-radius: var(--radius-lg);

    > .content {
      display: flex;
      align-items: center;
      gap: var(--size-3);
      padding: var(--size-2-5);
    }
  }

  > .timer {
    grid-column: 2;
    justify-self: start;
  }
}
</style>
