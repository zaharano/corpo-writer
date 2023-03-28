<script>
  import Checkbox from "./Checkbox.svelte";
  import Effects from "./Effects.svelte";
  import Field from "./Field.svelte";
  import Requires from "./Requires.svelte";

  export let text;
  export let next;
  export let effects = {}
  export let enders = 'next';
  export let invalid = false;

  const enderOptions = [{
    value: 'gameEnd',
    label: "Ends game",
  }, {
    value: 'eventEnd',
    label: "Ends event",
  }, {
    value: 'next',
    label: "Next screen"
  }]
</script>

<div class="option-box" class:invalid="{invalid}">
  <Field binding={text} placeholder="Option Text" />
  // redoing this so it's radio Game over, Event over, or Next Screen. default to next screen
  // next screen activates text box for next
  // the other two options leave that box inactive, but filled with the necessary item

  <span class="next-box">
    <span class="option-next" contenteditable="true" data-placeholder="nextSlug" bind:textContent={next}></span>
    <Checkbox selected={gameEnd} selectedColor="red" text="Game End" group='enders'/>
    <Checkbox selected={eventEnd} selectedColor='red' text='Event End' group='enders'/>
  </span>
  <Effects />
  <Requires />
</div>

<style>
  .option-box {
    border: 1px solid black;
    border-radius: 3px;
    padding: .4em .6em;
    background-color: cornsilk;
    display: flex;
    flex-direction: column;
    gap: .5em;
  }

  .option-box.invalid {
    background-color: hsl(350, 100%, 94%);
  }

  .next-box {
    display: flex;
    flex-direction: row;
    gap: .3em;
    width: 100%;
  }

  .option-next {
    flex-grow: 10;
  }
</style>