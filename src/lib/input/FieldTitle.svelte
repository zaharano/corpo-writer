<script>
  export let placeholder = 'Placeholder text'
  export let binding;
</script>

<h3 class="title" contenteditable="true" data-placeholder="placeholder"
	bind:textContent={binding}></h3>