<script setup lang="ts">
import { LucideCheckCircle2, LucideSquareExclamationPoint, type LucideIcon } from "@lucide/vue";
import { computed, defineProps } from "vue";

type Severity = "success" | "danger";

const { severity, variant = "text" } = defineProps<{
  variant: "status" | "dashed" | "text";
  severity?: Severity;
}>();

const iconMap = {
  success: LucideCheckCircle2,
  danger: LucideSquareExclamationPoint,
} as const satisfies Record<Severity, LucideIcon>;

const icon = computed(() => (severity ? iconMap[severity] : null));
</script>

<template>
  <span class="ui-badge" :class="[variant, severity]">
    <component :is="icon" v-if="variant === 'status'" />
    <slot />
  </span>
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

  &:not(.status) {
    text-transform: uppercase;
  }

  &.success {
    color: var(--color-ok);
  }

  &.danger {
    color: var(--color-danger);
  }

  &.text {
    color: var(--color-muted);
  }

  &.dashed {
    background: var(--color-surface);
    color: var(--color-pink);
    border: var(--size-px) dashed var(--color-pink-mid);
    border-radius: var(--radius-pill);
    padding: var(--size-1) var(--size-3);
  }
}
</style>
