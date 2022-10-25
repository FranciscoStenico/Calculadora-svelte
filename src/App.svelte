<script lang="ts">
  import Calculator from './components/Calculator.svelte';
</script>

<main class="App">
  <h1>Calculadora - Svelte</h1>
  <Calculator />
</main>

<style type="text/scss">
  :root {
    --color-bg:            #333;
    --color-calculator:    #445;
    --color-white:         #eee;
    --color-black:         #111;
    --color-primary-button:#09f;
    --color-primary-hover: #08e;
    --color-operator:      #f90;
    --color-operator-hover:#e80;
    --color-emphasis:      #f45;
    --color-emphasis-hover:#e34;
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
    color: var(--color-white);
    cursor: pointer;
    transition: 200ms ease;
  }

  .App {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-direction: column;

    h1 {
      color: var(--color-white);
    }
  }
</style>
