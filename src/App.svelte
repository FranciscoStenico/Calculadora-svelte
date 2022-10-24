<script lang="ts">
  import Calculator from './components/Calculator.svelte';
</script>

<main class="App">
  <Calculator />
</main>

<style type="text/scss">
  :root {
    --color-bg: #234;
  }

  :global(body) {
    background-color: var(--color-bg);
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :global(button) {
    border: none;
    border-radius: 5px;
    font-weight: 700;
    color: #eee;
    cursor: pointer;
    transition: 200ms ease;

    &:hover {
      background-image: linear-gradient(#0005);
    }
  }

  .App {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
</style>
