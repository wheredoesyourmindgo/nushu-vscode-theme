<script lang="ts">
  export let name = "Nushu";
  let count = 0;
  $: doubled = count * 2;
</script>

<h1 class:big={count > 5}>Hello {name}!</h1>
<button on:click={() => count++}>Clicked {count} {count === 1 ? "time" : "times"}</button>

{#if doubled > 10}
  <p>Doubled: {doubled}</p>
{:else}
  <p>Keep clicking</p>
{/if}

{#each ["light", "dark"] as variant (variant)}
  <span>{variant}</span>
{/each}

<style>
  .big { font-size: 2rem; }
</style>
