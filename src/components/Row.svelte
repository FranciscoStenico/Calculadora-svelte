<section class="calculator__row">
  <slot />
</section>

<style type="text/scss">
  .calculator__row {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    justify-content: space-between;
    gap: 0.5rem;
  }
</style>
