<svelte:options tag="md-counter" />

<script lang="ts">
  let count: number = 0;
</script>

<div>
  <button on:click={() => count++}>+</button>
  <span>&nbsp;{count}&nbsp;</span>
  <button on:click={() => count--}>-</button>
</div>
