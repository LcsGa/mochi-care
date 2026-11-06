<script setup lang="ts">
import anHyPro from "@/assets/anhypro.webp";
import maxidrol from "@/assets/maxidrol.webp";
import regefluid from "@/assets/regefluid.webp";
import { LucideMoon, LucideSun, LucideSunrise, type LucideIcon } from "@lucide/vue";
import { UiCallout } from "design-system/callout";
import { UiCard } from "design-system/card";
import { UiHeading } from "design-system/heading";
import { useIntervalFn, useNow } from "@vueuse/core";
import { computed } from "vue";
import LacrynetCard from "./LacrynetCard.vue";
import DropStep from "./steps/DropStep.vue";
import WaitStep from "./steps/WaitStep.vue";

type Session = "morning" | "afternoon" | "evening";

type Step = { name: string; image: string; detail: string; waitMinutes?: number };

const SESSION_START_HOURS = { morning: 5, afternoon: 13, evening: 18 } as const satisfies Record<
  Session,
  number
>;

const ONE_DROP = "1 goutte par œil";

const MAXIDROL = { name: "Maxidrol", image: maxidrol, detail: ONE_DROP, waitMinutes: 5 };
const AN_HYPRO = { name: "an-HyPro", image: anHyPro, detail: ONE_DROP, waitMinutes: 15 };
const REGEFLUID = { name: "Régéfluid", image: regefluid, detail: ONE_DROP };
const REGEFLUID_WITH_COMPRESS = { ...REGEFLUID, detail: `${ONE_DROP}, puis la compresse` };

const sessions = [
  {
    id: "morning",
    title: "Matin",
    description: "Au réveil",
    icon: LucideSunrise,
    steps: [MAXIDROL, AN_HYPRO, REGEFLUID_WITH_COMPRESS],
  },
  {
    id: "afternoon",
    title: "Après-midi",
    description: "Sans Maxidrol",
    icon: LucideSun,
    steps: [AN_HYPRO, REGEFLUID],
  },
  {
    id: "evening",
    title: "Soir",
    description: "En fin de journée ou la nuit",
    icon: LucideMoon,
    steps: [MAXIDROL, AN_HYPRO, REGEFLUID_WITH_COMPRESS],
  },
] as const satisfies readonly {
  id: Session;
  title: string;
  description: string;
  icon: LucideIcon;
  steps: readonly Step[];
}[];

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
  <div class="treatments-card-group">
    <LacrynetCard />

    <div class="sessions" role="group">
      <UiCard
        v-for="session in sessions"
        :key="session.id"
        as="article"
        v-bind="sessionAttrs(session.id)"
        :aria-labelledby="`${session.id}-title`"
        :aria-describedby="`${session.id}-description`"
      >
        <template #header>
          <hgroup>
            <UiHeading :id="`${session.id}-title`">
              <component :is="session.icon" />
              {{ session.title }}
            </UiHeading>
            <p :id="`${session.id}-description`">{{ session.description }}</p>
          </hgroup>
        </template>

        <ol class="steps">
          <template v-for="(step, index) in session.steps" :key="step.name">
            <DropStep :name="step.name" :image="step.image" :detail="step.detail" />
            <WaitStep
              v-if="'waitMinutes' in step && index < session.steps.length - 1"
              :duration="step.waitMinutes"
            />
          </template>
        </ol>
      </UiCard>
    </div>

    <UiCallout severity="danger">
      Œil fermé ? <strong>Arrêter le Maxidrol tout de suite</strong> et appeler le véto.
    </UiCallout>
  </div>
</template>

<style>
.treatments-card-group {
  --step-marker-size: var(--size-10);
  display: grid;
  row-gap: var(--size-5);
}

.treatments-card-group .sessions {
  --sessions-column-gap: var(--size-5);
  --sessions-min-inline-size: calc(
    (var(--body-max-inline-size) - 2 * var(--sessions-column-gap)) / 3
  );
  display: grid;
  align-items: start;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--sessions-min-inline-size)), 1fr));
  column-gap: var(--sessions-column-gap);
  row-gap: var(--size-7);

  > .ui-card > .header p {
    font: var(--font-small);
    color: var(--color-muted);
  }

  @media print {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: var(--size-3);
  }
}

.treatments-card-group .steps {
  list-style: none;
  counter-reset: step;

  > li {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      inset-block: 0;
      inset-inline-start: calc(var(--step-marker-size) / 2 - var(--size-0-75) / 2);
      border-inline-start: var(--size-0-75) dotted var(--color-pink-mid);
    }

    &:first-child::after {
      inset-block-start: 50%;
    }

    &:last-child::after {
      inset-block-end: 50%;
    }
  }
}
</style>

<style>
@media screen {
  .treatments-card-group .sessions > .ui-card {
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

@media print {
  .treatments-card-group .sessions > .ui-card {
    > .header {
      padding: var(--size-2) var(--size-3);
    }

    > .content {
      padding: var(--size-3);
    }
  }
}
</style>
