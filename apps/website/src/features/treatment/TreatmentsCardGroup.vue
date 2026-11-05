<script setup lang="ts">
import { LucideCloudSun, LucideMoon, LucideSunrise } from "@lucide/vue";
import { UiCard } from "design-system/card";
import { UiHeading } from "design-system/heading";
import AnHyProCard from "./cards/AnHyProCard.vue";
import LacrynetCard from "./cards/LacrynetCard.vue";
import MaxidrolCard from "./cards/MaxidrolCard.vue";
import RegefluidCard from "./cards/RegefluidCard.vue";
import WipeCard from "./WipeCard.vue";
import { useIntervalFn, useNow } from "@vueuse/core";
import { computed } from "vue";

type Session = "morning" | "afternoon" | "evening";

const SESSION_START_HOURS = { morning: 5, afternoon: 13, evening: 18 } as const satisfies Record<
  Session,
  number
>;

const now = useNow({ scheduler: (update) => useIntervalFn(update, 60_000) });

const currentSession = computed<Session>(() => {
  const hour = now.value.getHours();
  if (hour >= SESSION_START_HOURS.morning && hour < SESSION_START_HOURS.afternoon) return "morning";
  if (hour >= SESSION_START_HOURS.afternoon && hour < SESSION_START_HOURS.evening)
    return "afternoon";
  return "evening";
});

const sessionAttrs = (session: Session) =>
  currentSession.value === session ? { class: "is-current", "aria-current": "time" as const } : {};
</script>

<template>
  <div class="treatments-card-group" role="group">
    <UiCard
      as="article"
      v-bind="sessionAttrs('morning')"
      aria-labelledby="morning-title"
      aria-describedby="morning-description"
    >
      <template #header>
        <hgroup>
          <UiHeading id="morning-title">
            <LucideSunrise />
            Matin
          </UiHeading>
          <p id="morning-description">Au réveil.</p>
        </hgroup>
      </template>

      <LacrynetCard />

      <ol>
        <li><MaxidrolCard /></li>
        <li><AnHyProCard /></li>
        <li><RegefluidCard /></li>
      </ol>
    </UiCard>

    <UiCard
      as="article"
      v-bind="sessionAttrs('afternoon')"
      aria-labelledby="afternoon-title"
      aria-describedby="afternoon-description"
    >
      <template #header>
        <hgroup>
          <UiHeading id="afternoon-title">
            <LucideCloudSun />
            Après-midi
          </UiHeading>
          <p id="afternoon-description">Pas de Maxidrol l'après-midi.</p>
        </hgroup>
      </template>

      <LacrynetCard />

      <ol>
        <li><AnHyProCard /></li>
        <li><RegefluidCard /></li>
      </ol>
    </UiCard>

    <UiCard
      as="article"
      v-bind="sessionAttrs('evening')"
      aria-labelledby="evening-title"
      aria-describedby="evening-description"
    >
      <template #header>
        <hgroup>
          <UiHeading id="evening-title">
            <LucideMoon />
            Soir
          </UiHeading>
          <p id="evening-description">Exactement comme le matin.</p>
        </hgroup>
      </template>

      <LacrynetCard />

      <ol>
        <li><MaxidrolCard /></li>
        <li><AnHyProCard /></li>
        <li><RegefluidCard /></li>
      </ol>
    </UiCard>

    <WipeCard />
  </div>
</template>

<style scoped>
.treatments-card-group {
  --treatments-card-group-column-gap: var(--size-5);
  --treatments-card-group-min-inline-size: calc(
    (var(--body-max-inline-size) - 2 * var(--treatments-card-group-column-gap)) / 3
  );
  display: grid;
  align-items: start;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%, var(--treatments-card-group-min-inline-size)), 1fr)
  );
  column-gap: var(--treatments-card-group-column-gap);
  row-gap: var(--size-7);

  @media print {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: var(--size-3);
    row-gap: var(--size-5);

    .lacrynet-card {
      margin-block-end: var(--size-2);
    }
  }

  .lacrynet-card {
    margin-block-end: var(--size-3-5);
  }

  ol {
    list-style: none;
    counter-reset: step;

    li {
      counter-increment: step;
    }
  }

  > .wipe-card {
    grid-column: 1 / -1;
  }
}
</style>

<style>
@media screen {
  .treatments-card-group > .ui-card {
    @media (prefers-reduced-motion: no-preference) {
      transition:
        translate 0.2s,
        box-shadow 0.2s;
    }

    &.is-current {
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
  }
}
</style>

<style>
/* Impression : cartes Matin / Après-midi / Soir plus compactes en hauteur. */
@media print {
  .treatments-card-group > .ui-card {
    > .header {
      padding: var(--size-2) var(--size-3);
    }

    > .content {
      padding: var(--size-3);
    }

    .lacrynet-card .img {
      block-size: var(--size-12);
    }
  }
}
</style>
