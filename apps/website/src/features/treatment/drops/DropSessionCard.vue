<script setup lang="ts">
import { UiCard } from "design-system/card";
import { UiHeading } from "design-system/heading";
import type { DropSession } from "./DropSession.ts";
import DropStep from "./DropStep.vue";

const { name, icon, title, description, steps, active } = defineProps<
  DropSession & { active?: boolean }
>();
</script>

<template>
  <UiCard
    as="article"
    class="drop-session-card"
    :aria-current="active ? 'time' : undefined"
    :aria-labelledby="`${name}-title`"
    :aria-describedby="`${name}-description`"
  >
    <template #header>
      <hgroup>
        <UiHeading :id="`${name}-title`">
          <component :is="icon" />
          {{ title }}
        </UiHeading>
        <p :id="`${name}-description`">{{ description }}</p>
      </hgroup>
    </template>

    <ol class="steps">
      <DropStep
        v-for="(step, index) in steps"
        :key="step.name"
        v-bind="step"
        :class="{ first: index === 0, last: index === steps.length - 1 }"
      />
    </ol>

    <div class="marker-link"></div>
  </UiCard>
</template>

<style>
.drop-session-card {
  counter-reset: step;
  anchor-scope: --first, --last;

  > .content {
    > .steps {
      --drop-step-row-gap: var(--size-2);
      display: grid;
      row-gap: var(--drop-step-row-gap);
    }

    > .marker-link {
      position: absolute;
      inset-inline-start: anchor(--first center);
      inset-block-start: anchor(--first center);
      inset-block-end: anchor(--last center);
      border-inline-start: var(--size-1) dotted var(--color-pink-mid);
      translate: -50%;
    }
  }

  &[aria-current] {
    background: var(--color-bg);
    border: var(--size-0-75) solid var(--color-pink);
    box-shadow: var(--shadow-highlight);
    translate: 0 calc(-1 * var(--size-1-5));

    > .header {
      background: var(--color-pink-mid);

      p {
        color: var(--color-ink);
      }
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      translate 0.2s,
      box-shadow 0.2s;
  }
}
</style>
