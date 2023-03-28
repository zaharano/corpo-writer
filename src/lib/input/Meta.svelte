<script lang='ts'>
  import type { Meta } from "../eventData.types";
  import Field from "./Field.svelte";

  export let meta : Meta;
</script>

<div class="meta-box"> 
  <h3 class='title'>Meta</h3>
  <Field placeholder={'Slug'} binding={meta.slug} />
</div>

<style>
  .meta-box {
    border: 1px solid black;
    border-radius: 5px;
    padding: .5em;
    background-color: aliceblue;
    margin-bottom: 1em;
  }  
</style>