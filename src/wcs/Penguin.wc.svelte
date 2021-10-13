<svelte:options tag="md-penguin" />

<script lang="ts">
  export let walk: boolean = false;
</script>

<div>
  {#if walk}
    <img
      class="moving"
      src="https://mdsvex.pngwn.io/penguin.gif"
      alt="walking"
    />
  {:else}
    <img src="https://mdsvex.pngwn.io/penguin_static.gif" alt="static" />
  {/if}
</div>

<style>
  .moving {
    animation: move 5s linear infinite;
  }

  @keyframes move {
    0% {
      transform: translateX(0) rotateY(0);
    }

    50% {
      transform: translateX(300px) rotateY(0);
    }
    51% {
      transform: translateX(300px) rotateY(180deg);
    }

    100% {
      transform: translateX(0) rotateY(180deg);
    }
  }
</style>
