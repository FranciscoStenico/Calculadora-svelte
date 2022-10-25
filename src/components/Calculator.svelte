<script lang="ts">
  import Button from './Button.svelte';
  import Row from './Row.svelte';
  import Screen from './Screen.svelte';

  let entry: string = '0';
  let memoNumber: number = 0;
  let memo: string[] = [];

  const allClear = (_: string) => {
    entry = 'All clear!';
    setTimeout(() => {
      entry = '0';
    }, 1000);
    memoNumber = 0;
    memo = [];
  };
</script>

<main class="calculator">
  <Row>
    <Button value="." size={2} operator />
    <Button value="0" size={2} />
  </Row>
  <Row>
    <Button value="=" emphasis />
    <Button value="3" />
    <Button value="2" />
    <Button value="1" />
  </Row>
  <Row>
    <Button value="+" operator />
    <Button value="6" />
    <Button value="5" />
    <Button value="4" />
  </Row>
  <Row>
    <Button value="x" operator />
    <Button value="9" />
    <Button value="8" />
    <Button value="7" />
  </Row>
  <Row>
    <Button value=":" operator />
    <Button value="-" operator />
    <Button onClick={allClear} size={2} value="AC" emphasis />
  </Row>
  <Row>
    <Screen displayText={entry} />
  </Row>
</main>

<style type="text/scss">
  .calculator {
    display: flex;
    background-color: var(--color-calculator);
    border-radius: 4px;
    flex-direction: column-reverse;
    box-sizing: border-box;
    padding: 1rem;
    width: 15rem;
  }
</style>
