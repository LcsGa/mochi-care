<script setup lang="ts">
import { LucideInfo, LucideSquareExclamationPoint, type LucideIcon } from "@lucide/vue";

type Severity = "info" | "danger";

const { severity, compact } = defineProps<{ severity: Severity; compact?: boolean }>();

const iconMap = {
  info: LucideInfo,
  danger: LucideSquareExclamationPoint,
} as const satisfies Record<Severity, LucideIcon>;
</script>

<template>
  <p class="ui-callout" :class="[severity, { compact }]">
    <component :is="iconMap[severity]" />
    <slot />
  </p>
</template>

<style scoped>
.ui-callout {
  display: flex;
  gap: --size(3);
  align-items: start;
  padding: --size(3) --size(4);
  background: var(--ui-callout-bg);
  color: var(--color-ink);
  border-radius: var(--radius-md);
  border-inline-start: --size(1) solid var(--ui-callout-color);

  > .lucide {
    margin-block-start: --size(0.75);
    flex-shrink: 0;
    color: var(--ui-callout-color);
    inline-size: 1.15em;
    block-size: 1.15em;
  }

  &.info {
    --ui-callout-bg: var(--color-info-soft);
    --ui-callout-color: var(--color-info);
  }

  &.danger {
    --ui-callout-bg: var(--color-danger-soft);
    --ui-callout-color: var(--color-danger);
  }

  &.compact {
    padding: --size(2) --size(3);
  }
}
</style>
