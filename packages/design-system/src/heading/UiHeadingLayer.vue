<script setup lang="ts">
import { inject, provide, type Component } from "vue";
import { HeadingLevel } from "./HeadingLevel";

provide(HeadingLevel, inject(HeadingLevel, 0) + 1);

const { as = "div" } = defineProps<{ as?: keyof HTMLElementTagNameMap | Component }>();
</script>

<template>
  <component :is="as">
    <slot />
  </component>
</template>
