<script lang="ts">
  import Event from "./lib/input/Event.svelte";
  import AddButton from "./lib/input/AddButton.svelte";

  import type { Events } from "./lib/eventData.types"
  import { newEvent } from "./lib/eventData"; 

  let events : Events;
  let eventCreationCount = 0;

  function addNewEvent(){
    let id = crypto.randomUUID();
    events = { ...events, [id]: newEvent() }
    eventCreationCount++
  }

</script>

{#if events !== undefined}
  {#each Object.entries(events) as [name, event] (event.meta.id)}
    {name}
    <Event event={event}/>
  {/each}
{/if}

{eventCreationCount}

<AddButton clickHandler={() => addNewEvent()} size='med'/>
fkk