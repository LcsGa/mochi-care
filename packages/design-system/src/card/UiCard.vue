<script setup lang="ts">
import { UiHeadingLayer } from "design-system/heading";
import { type Component } from "vue";

const { as = "div", variant = "outlined" } = defineProps<{
  as?: keyof HTMLElementTagNameMap | Component;
  variant?: "outlined" | "dashed" | "tonal";
  contentClass?: object;
}>();
</script>

<template>
  <UiHeadingLayer class="ui-card" :class="variant" :as>
    <header class="header" v-if="$slots.header">
      <slot name="header" />
    </header>

    <div class="image" v-if="$slots.image">
      <slot name="image" />
    </div>

    <div class="content">
      <slot />
    </div>
  </UiHeadingLayer>
</template>

<style scoped>
:where(.ui-card) {
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  overflow: hidden;

  &:where(.outlined, .dashed) {
    border: var(--size-px) solid var(--color-line);
  }

  &:where(.dashed) {
    border-style: dashed;
  }

  &:where(.tonal) {
    background: var(--color-pink-soft);
  }

  > .header {
    padding: var(--size-4) var(--size-5);
    background: var(--color-pink-soft);

    > :slotted(hgroup) {
      display: grid;
      row-gap: var(--size-0-5);
    }
  }

  > .image {
    display: grid;
    place-content: center;
    padding: var(--size-2-5);
    background: white;

    > :slotted(img) {
      block-size: var(--size-32);
    }
  }

  > :where(.content) {
    padding: var(--size-5-5);
  }
}
</style>
