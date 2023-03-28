<script lang='ts'>
  export let selected = false;
  export let selectedColor = 'black';
  export let defaultColor = 'var(--placeholder-text)'
  export let text : string;
  export let group = null;

  let color = defaultColor;

  function handleChange() {
    color = selected ? selectedColor : defaultColor
    if (group && selected) {
      let eles = document.querySelectorAll(`.${group}`)
    }
  }
</script>

<label class:selected style="color: {color}">
  <input type=checkbox bind:checked={selected} on:change="{handleChange}">
  {text}
</label>

<style>
  label {
    white-space: nowrap;
    margin-right: .5em;
  }
  
</style>