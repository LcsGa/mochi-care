<template>
  <div class="ui-avatar">
    <slot />
  </div>
</template>

<style scoped>
.ui-avatar {
  display: inline grid;
  place-items: center;
  inline-size: var(--size-32);
  aspect-ratio: 1;
  border-radius: var(--radius-round);
  overflow: clip;
  border: var(--size-1) solid var(--color-pink-mid);
  background: var(--color-pink-soft);
  color: var(--color-pink);

  > :slotted(img) {
    inline-size: 100%;
    block-size: 100%;
  }
}
</style>
