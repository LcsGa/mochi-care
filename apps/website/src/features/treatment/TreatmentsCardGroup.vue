<script setup lang="ts">
import anHyPro from "@/assets/anhypro.webp";
import maxidrol from "@/assets/maxidrol.webp";
import regefluid from "@/assets/regefluid.webp";
import { LucideMoon, LucideSun, LucideSunrise } from "@lucide/vue";
import { useIntervalFn, useNow } from "@vueuse/core";
import { UiCallout } from "design-system/callout";
import { computed } from "vue";
import type { DropSession, Session, Step } from "./drops/DropSession.ts";
import DropSessionCard from "./drops/DropSessionCard.vue";
import LacrynetCard from "./LacrynetCard.vue";

const SESSION_START_HOURS = { morning: 5, afternoon: 13, evening: 18 } as const satisfies Record<
  Session,
  number
>;

const ONE_DROP = "1 goutte par œil";

const MAXIDROL: Step = {
  name: "Maxidrol",
  image: maxidrol,
  detail: ONE_DROP,
  waitMinutes: 5,
};
const AN_HYPRO: Step = {
  name: "an-HyPro",
  image: anHyPro,
  detail: ONE_DROP,
  waitMinutes: 15,
};
const REGEFLUID: Step = {
  name: "Régéfluid",
  image: regefluid,
  detail: `${ONE_DROP}, puis la compresse`,
};

const sessions = [
  {
    name: "morning",
    title: "Matin",
    description: "Au réveil",
    icon: LucideSunrise,
    steps: [MAXIDROL, AN_HYPRO, REGEFLUID],
  },
  {
    name: "afternoon",
    title: "Après-midi",
    description: "Sans Maxidrol",
    icon: LucideSun,
    steps: [AN_HYPRO, REGEFLUID],
  },
  {
    name: "evening",
    title: "Soir",
    description: "En fin de journée ou la nuit",
    icon: LucideMoon,
    steps: [MAXIDROL, AN_HYPRO, REGEFLUID],
  },
] as const satisfies readonly DropSession[];

const now = useNow({ scheduler: (update) => useIntervalFn(update, 60_000) });

const currentSession = computed<Session>(() => {
  const hour = now.value.getHours();
  if (hour >= SESSION_START_HOURS.morning && hour < SESSION_START_HOURS.afternoon) return "morning";
  if (hour >= SESSION_START_HOURS.afternoon && hour < SESSION_START_HOURS.evening)
    return "afternoon";
  return "evening";
});
</script>

<template>
  <div role="group" class="treatments-card-group">
    <LacrynetCard class="col-span-full" />

    <DropSessionCard
      v-for="session in sessions"
      :key="session.name"
      v-bind="session"
      :active="session.name === currentSession"
    />

    <UiCallout class="col-span-full" severity="danger">
      Œil fermé ? <strong>Arrêter le Maxidrol tout de suite</strong> et appeler le véto.
    </UiCallout>
  </div>
</template>

<style>
.treatments-card-group {
  --treatments-gap: var(--size-5);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--size-80)), 1fr));
  align-items: start;
  gap: var(--treatments-gap);

  @media print {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: var(--size-3);
  }
}
</style>
