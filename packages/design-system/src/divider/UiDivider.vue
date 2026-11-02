<template>
  <div class="ui-divider" role="separator">
    <slot />
  </div>
</template>

<style scoped>
.ui-divider {
  display: flex;
  gap: --size(4);
  align-items: center;
  font: var(--font-label);
  color: var(--color-muted);
  text-transform: uppercase;
  margin-block: --size(4);

  &::before,
  &::after {
    flex: 1;
    display: block;
    content: "";
    border-block-start: --size(px) solid var(--color-line);
  }

  &:empty::after {
    display: none;
  }

  &:not(:empty) {
    &::before {
      margin-inline-end: --size();
    }
  }
}
</style>
