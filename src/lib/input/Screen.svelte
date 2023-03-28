<script lang='ts'>
  import type { Screen, Option as OptionType } from "../eventData.types";
  import Option from "./Option.svelte";
  import FieldTitle from "./FieldTitle.svelte";
  import Field from "./Field.svelte";

  export let screen : Screen;
  let { title, text, options } = screen;
</script>

<div class="screen-box">
  <FieldTitle binding={title} placeholder={"Screen Title"} />
  <Field binding={text} placeholder="Screen Text" />
  <!-- <div class="screen-text" contenteditable="true" data-placeholder="Screen Text" bind:textContent={text}></div> -->
  <div class="options-container">
    <Option />
  </div>
</div>

<style>
  .screen-box {
    border: 1px solid black;
    border-radius: 5px;
    padding: .5em;
  }
  
  .screen-text {
    margin-bottom: .5em;
  }

  .options-container {
    display:flex;
    flex-direction: column;
    gap: .3em;
  }
</style>