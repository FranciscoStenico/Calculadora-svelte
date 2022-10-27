<script lang="ts">
  import { ReactiveCalculator } from '../models/useState.model';
  import Button from './Button.svelte';
  import Row from './Row.svelte';
  import Screen from './Screen.svelte';

  let calc = new ReactiveCalculator();

  const inputValue = (value: string) => (calc = calc.addChar(value));
  const inputOperator = (value: string) => (calc = calc.calculate(value));
  const inputComma = () => (calc = calc.addCommas());
  const allClear = () => (calc = calc.resetInstance());
</script>

<main class="calculator">
  <Row>
    <Button onClick={inputComma} value="." size={2} operator />
    <Button onClick={inputValue} value="0" size={2} />
  </Row>
  <Row>
    <Button onClick={inputOperator} value="=" emphasis />
    <Button onClick={inputValue} value="3" />
    <Button onClick={inputValue} value="2" />
    <Button onClick={inputValue} value="1" />
  </Row>
  <Row>
    <Button onClick={inputOperator} value="+" operator />
    <Button onClick={inputValue} value="6" />
    <Button onClick={inputValue} value="5" />
    <Button onClick={inputValue} value="4" />
  </Row>
  <Row>
    <Button onClick={inputOperator} value="*" operator />
    <Button onClick={inputValue} value="9" />
    <Button onClick={inputValue} value="8" />
    <Button onClick={inputValue} value="7" />
  </Row>
  <Row>
    <Button onClick={inputOperator} value="/" operator />
    <Button onClick={inputOperator} value="-" operator />
    <Button onClick={allClear} size={2} value="AC" emphasis />
  </Row>
  <Row>
    <Screen displayText={calc.value} />
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
