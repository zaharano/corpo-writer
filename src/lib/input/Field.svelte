<script>
  export let classes = null;
  export let placeholder = null;
  export let binding;
</script>

<div class="{classes}" contenteditable="true" data-placeholder="{placeholder}" bind:textContent={binding}></div>

<style>
</style>