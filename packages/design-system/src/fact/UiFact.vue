<script setup lang="ts">
import { type LucideIcon } from "@lucide/vue";
import { useElementSize } from "@vueuse/core";
import { UiCard } from "design-system/card";
import { computed, useTemplateRef } from "vue";

const COMPACT_THRESHOLD = 200;

const { icon, label, value, meta } = defineProps<{
  icon: LucideIcon;
  label: string;
  value: string;
  meta?: string;
}>();

const root = useTemplateRef("root");
const { width } = useElementSize(root, undefined, { box: "border-box" });
const compact = computed(() => width.value < COMPACT_THRESHOLD);
</script>

<template>
  <UiCard ref="root" class="ui-fact" :class="{ compact }" as="article" variant="tonal">
    <component :is="icon" />

    <dl>
      <dt>{{ label }}</dt>
      <dd>
        {{ value }}
        <small class="meta" v-if="meta">{{ meta }}</small>
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

        > .linebreak {
          display: none;
        }
      }
    }
  }

  &.compact > .content {
    flex-direction: column;
    align-items: start;
    gap: var(--size-1-5);

    > .lucide {
      inline-size: var(--size-5-5);
    }

    > dl {
      gap: var(--size-1);

      > dd > .meta {
        display: none;
      }
    }
  }
}
</style>
