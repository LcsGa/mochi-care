<template>
  <li class="ui-list-item">
    <slot name="icon" />
    <div class="content">
      <slot />
    </div>
  </li>
</template>

<style>
.ui-list-item {
  list-style: none;
  display: flex;
  gap: var(--size-1) var(--size-3);
  padding-block: var(--size-3);

  > .lucide {
    margin-block-start: var(--size-0-75);
    color: var(--color-pink);
    inline-size: var(--size-5);
    block-size: var(--size-5);
  }

  > .content {
    flex: 1;
  }

  &:not(:last-child) {
    border-block-end: var(--size-px) solid var(--color-line);
  }
}
</style>
