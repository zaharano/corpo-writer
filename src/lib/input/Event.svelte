<script lang="ts">
  import Meta from "./Meta.svelte";
  import Screen from "./Screen.svelte";
  import type { Event as EventType } from "../eventData.types";

  export let collapsed = false;

  export let event : EventType;

</script>

<div class="event-box" class:bink="{collapsed}">
  <h2 class="event-title" contenteditable="true"
	bind:textContent={event.meta.title}></h2>
  <Meta meta={event.meta}/>
  <div class="screens-container">
    {#each Object.entries(event) as [name, screen]}
      {#if name !== 'meta'}
        <Screen {screen}/>
        {/if}
    {/each}
  </div>
</div>

<style>
  .event-box {
    border: 1px solid black;
    border-radius: 10px;
    width: 800px;
    padding: 1em;
  }
  
  .event-title {
    font-size: 1.5em;
    font-weight: bold;
    border-bottom: 1px solid black;
    margin-bottom: .5em;
  }

  .screens-container {
    display: flex;
    flex-direction: column;
    gap: .6em;
  }
</style>