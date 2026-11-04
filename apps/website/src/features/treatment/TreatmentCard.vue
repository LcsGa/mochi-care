<script setup lang="ts">
import { UiCard } from "design-system/card";
import { UiHeading } from "design-system/heading";
import { computed, useAttrs } from "vue";

const { heading } = defineProps<{ heading: string }>();
const { id } = useAttrs();
const headingId = computed(() => `${id}-heading`);
</script>

<template>
  <UiCard class="treatment-card" as="article" :aria-labelledby="headingId">
    <template #header>
      <UiHeading class="treatment-heading" :id="headingId">{{ heading }}</UiHeading>
    </template>

    <template #image>
      <slot name="image" />
    </template>

    <slot />
  </UiCard>
</template>

<style>
.treatment-card {
  border-width: var(--size-0-5);

  > .header {
    padding: var(--size-2-5) var(--size-3-5);

    > .treatment-heading {
      gap: var(--size-3);

      &::before {
        content: counter(step);
        display: grid;
        place-items: center;
        inline-size: var(--size-10);
        aspect-ratio: 1;
        background: var(--color-pink);
        color: var(--color-on-pink);
        border-radius: var(--radius-round);
      }
    }
  }

  > .content {
    display: grid;
    gap: var(--size-2);
    padding: var(--size-3);
  }
}
</style>
