<script setup lang="ts">
import { LucideCheckCircle2, LucideSquareExclamationPoint, type LucideIcon } from "@lucide/vue";
import { computed, defineProps } from "vue";

type Severity = "success" | "danger";

const {
  as = "span",
  severity,
  variant = "text",
  size = "default",
} = defineProps<{
  as?: "span" | "p";
  variant: "status" | "dashed" | "tonal" | "text";
  severity?: Severity;
  size?: "default" | "small";
}>();

const iconMap = {
  success: LucideCheckCircle2,
  danger: LucideSquareExclamationPoint,
} as const satisfies Record<Severity, LucideIcon>;

const icon = computed(() => (severity ? iconMap[severity] : null));
</script>

<template>
  <component :is="as" class="ui-badge" :class="[variant, severity, size]">
    <component :is="icon" v-if="variant === 'status'" />
    <slot />
  </component>
</template>

<style scoped>
.ui-badge {
  display: inline flex;
  align-items: center;
  gap: var(--size-1-25);
  font: var(--font-label);

  > :slotted(.lucide),
  > .lucide {
    inline-size: 1.15em;
    block-size: 1.15em;
  }

  &.success {
    color: var(--color-ok);
  }

  &.danger {
    color: var(--color-danger);
  }

  &.text {
    color: var(--color-muted);
    text-transform: uppercase;
  }

  &.dashed {
    font: var(--font-body-strong);
    background: var(--color-surface);
    color: var(--color-pink);
    border: var(--size-px) dashed var(--color-pink-mid);
    border-radius: var(--radius-pill);
    padding: var(--size-1) var(--size-3);
  }

  &.tonal {
    font: var(--font-body-strong);
    background: var(--color-pink-soft);
    color: var(--color-pink);
    border-radius: var(--radius-pill);
    padding: var(--size-1) var(--size-3);
  }

  &.small {
    font: var(--font-label);

    &:is(.dashed, .tonal) {
      padding: var(--size-0-5) var(--size-3);
    }
  }
}
</style>
