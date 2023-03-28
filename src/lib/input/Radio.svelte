<script lang='ts'>
  export let options;
  export let id = Math.floor(Math.random() * 100);
  export let title;
  export let flexDirection = 'row';
  export let userSelected = options[0].value;

  let radioValue;

  const slugify = (str = "") =>
    str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");
</script>

<fieldset>
  <legend>{title}</legend>
  <div style="flex-direction:{flexDirection}">
    {#each options as { value, label }}
    <label>
      <input type="radio" bind:group={userSelected} id={slugify(label)}>

    </label>
    {/each}
  </div>
</fieldset>
