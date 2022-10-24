<script lang="ts">
  export let value: string;
  export let triple: boolean = false;
</script>

<button class={triple ? 'row__button--triple' : "row__button"}> {value} </button>

<style type="text/scss">
  .row__button {
    background-color: #09f;
    flex-basis: 20%;

    &:active {
      background-color: #06c;
    }
  }

  .row__button--triple {
    flex-basis: 75%;
    background-color: #f90;
  }
</style>
