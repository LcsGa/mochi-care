<script setup lang="ts">
import ProductPhoto from "../ProductPhoto.vue";

const { name, image, detail } = defineProps<{ name: string; image: string; detail: string }>();
</script>

<template>
  <li class="drop-step">
    <span class="marker" aria-hidden="true"></span>
    <div class="card">
      <ProductPhoto :src="image" :alt="`Photo du ${name}`" />
      <span class="text">
        <strong class="name">{{ name }}</strong>
        <span class="detail">{{ detail }}</span>
      </span>
    </div>
  </li>
</template>

<style scoped>
.drop-step {
  counter-increment: step;
  display: grid;
  grid-template-columns: var(--step-marker-size) 1fr;
  align-items: center;
  column-gap: var(--size-3);

  > .marker {
    position: relative;
    z-index: 1;
    display: grid;
    place-items: center;
    inline-size: var(--step-marker-size);
    aspect-ratio: 1;
    border-radius: var(--radius-round);
    background: var(--color-pink);
    color: var(--color-on-pink);
    font-weight: 700;
    print-color-adjust: exact;

    &::before {
      content: counter(step);
    }
  }

  > .card {
    display: flex;
    align-items: center;
    gap: var(--size-3);
    padding: var(--size-2-5);
    background: var(--color-surface);
    border: var(--size-px) solid var(--color-line);
    border-radius: var(--radius-lg);
  }

  .text {
    display: grid;
  }

  .name {
    font: var(--font-heading-4);
  }

  .detail {
    font: var(--font-small);
    color: var(--color-muted);
  }
}
</style>
