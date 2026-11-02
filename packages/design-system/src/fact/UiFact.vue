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

<style scoped>
.ui-fact {
  display: inline flex;
  align-items: center;
  gap: --size(3);
  padding: --size(3) --size(4);
  border-radius: var(--radius-lg);

  > .lucide {
    color: var(--color-pink);
    inline-size: --size(7);
    block-size: --size(7);
    stroke-width: 2.2;
  }

  > dl {
    display: inline grid;
    gap: --size(1.5);

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
</style>
