import type { LucideIcon } from "@lucide/vue";

export type Session = "morning" | "afternoon" | "evening";

export type Step = {
  name: string;
  image: string;
  detail: string;
  waitMinutes?: number;
};

export type DropSession = {
  name: Session;
  title: string;
  description: string;
  icon: LucideIcon;
  steps: readonly Step[];
};
