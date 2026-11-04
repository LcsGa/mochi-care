<script setup lang="ts">
import { type LucideIcon } from "@lucide/vue";
import { UiCard } from "design-system/card";

const { icon, label, value, meta } = defineProps<{
  icon: LucideIcon;
  label: string;
  value: string;
  meta?: string;
}>();
</script>

<template>
  <UiCard class="ui-fact" as="article" variant="tonal">
    <component :is="icon" />

    <dl>
      <dt>{{ label }}</dt>
      <dd>
        {{ value }} <small v-if="meta">{{ meta }}</small>
      </dd>
    </dl>
  </UiCard>
</template>

<style>
.ui-fact {
  border-radius: var(--radius-lg);

  > .content {
    display: inline flex;
    align-items: center;
    gap: var(--size-3);
    padding: var(--size-3) var(--size-4);

    > .lucide {
      color: var(--color-pink);
      inline-size: var(--size-7);
      block-size: var(--size-7);
    }

    > dl {
      display: inline grid;
      gap: var(--size-1-5);

      > dt {
        font: var(--font-label);
        text-transform: uppercase;
        color: var(--color-muted);
      }

      > dd {
        font: var(--font-figure);
        font-variant-numeric: tabular-nums;
      }
    }
  }
}
</style>
