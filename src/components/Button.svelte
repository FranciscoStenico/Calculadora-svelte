<script lang="ts">
  export let value: number | string;
  export let size: number = 1;
  export let emphasis: boolean = false;
  export let operator: boolean = false;
  export let onClick: (value: number | string) => void = () => {};

  export const buttonSize = (num: number) => {
    switch (num) {
      case 2:
        return 'row__button--double';
      case 3:
        return 'row__button--triple';
      case 4:
        return 'row__button--fill';
      default:
        return '';
    }
  };
</script>

<button
  class="row__button {buttonSize(size)}"
  class:emphasis
  class:operator
  on:click={() => onClick(value)}
>
  {value}
</button>

<style type="text/scss">
  .row__button {
    flex-basis: 25%;
    background-color: var(--color-primary-button);
    border: 2px solid transparent;
    transition: 200ms ease;

    &:hover {
      background-color: var(--color-primary-hover);
    }

    &:active {
      background-color: var(--color-white);
      border: 2px solid var(--color-primary-button);
      color: var(--color-primary-button);
    }
  }

  .row__button--double {
    flex-basis: 50%;
  }

  .row__button--triple {
    flex-basis: 75%;
  }

  .row__button--fill {
    flex-basis: 100%;
  }

  .emphasis {
    background-color: var(--color-emphasis);

    &:hover {
      background-color: var(--color-emphasis-hover);
    }

    &:active {
      background-color: var(--color-white);
      border: 2px solid var(--color-emphasis);
      color: var(--color-emphasis);
    }
  }

  .operator {
    background-color: var(--color-operator);

    &:hover {
      background-color: var(--color-operator-hover);
    }

    &:active {
      background-color: var(--color-white);
      border: 2px solid var(--color-operator);
      color: var(--color-operator);
    }
  }
</style>
