<script lang="ts">
  import Button from './Button.svelte';
  import Row from './Row.svelte';
</script>

<main class="calculator">
  <Row>
    <Button value="-" />
    <Button value="3" />
    <Button value="2" />
    <Button value="1" />
  </Row>
  <Row>
    <Button value="+" />
    <Button value="6" />
    <Button value="5" />
    <Button value="4" />
  </Row>
  <Row>
    <Button value="x" />
    <Button value="9" />
    <Button value="8" />
    <Button value="7" />
  </Row>
  <Row>
    <Button value=":" />
    <Button triple={true} value="AC" />
  </Row>
</main>

<style type="text/scss">
  .calculator {
    display: flex;
    width: 15rem;
    height: 20rem;
    background-color: #444;
    border-radius: 4px;
    flex-direction: column-reverse;
    box-sizing: border-box;
    padding: 1rem;
  }
</style>
