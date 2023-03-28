<script>
  export let clickHandler;
  export let size;
</script>

<div class="button-container">
  <button on:click={clickHandler}>
    +
  </button>
</div>

<style>
  .button-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button.big {
    font-size: 3.5em;
  }

  button.mid {
    font-size: 2.5em;
  }

  button.small {
    font-size: 2em;
  }

  button {
    color: white;
    font-weight: 700;
    font-size: 2.5em;
    border-radius: 100px;
    background-color: slateblue;
    outline: inherit;
    cursor: pointer;
    border: none;
    padding: .2em .2em .35em .2em;
    line-height: .5em;
  }
</style>