<script setup lang="ts">
import { UiCard } from "design-system/card";

const { variant = "outlined" } = defineProps<{ variant?: "outlined" | "tonal" }>();
</script>

<template>
  <UiCard class="ui-tile" :variant>
    <span class="icon">
      <slot name="icon" />
    </span>
    <span class="label"><slot /></span>
  </UiCard>
</template>

<style>
.ui-tile {
  > .content {
    display: flex;
    align-items: center;
    column-gap: var(--size-2-5);
    padding: var(--size-2-5) var(--size-3);

    > .icon {
      display: flex;
      align-items: center;

      > .lucide {
        inline-size: var(--size-6-5);
        block-size: var(--size-6-5);
      }
    }
  }

  &.outlined {
    background: var(--color-bg);
    color: var(--color-ink);

    > .content > .icon {
      color: var(--color-pink);
    }
  }

  &.tonal {
    background: var(--color-pink);
    color: var(--color-on-pink);
    font-weight: 700;

    > .content > .icon > .lucide {
      inline-size: var(--size-5);
      block-size: var(--size-5);
    }

    /* Les fonds ne sont pas imprimés par défaut : on évite le texte blanc sur blanc. */
    @media print {
      background: none;
      color: var(--color-ink);
      border: var(--size-0-5) solid var(--color-ink);
    }
  }
}
</style>
