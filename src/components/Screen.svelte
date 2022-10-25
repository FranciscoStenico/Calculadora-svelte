<script lang="ts">
  export let displayText: string;

  const handleFontSize = () => {
    const length = displayText.length;
    return length < 12 ? '24px' : length < 27 ? `${24 - length * 0.5}px` : '11px';
  };
</script>

<section
  class="calculator__screen"
  lang="ts"
  style="font-size: {handleFontSize()}"
>
  {displayText}
</section>

<style type="text/scss">
  .calculator__screen {
    height: 3rem;
    width: 100%;
    background-color: var(--color-white);
    border-radius: 5px;
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
    box-sizing: border-box;
    font-weight: 700;
    overflow: hidden;
  }
</style>
