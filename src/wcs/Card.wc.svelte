<svelte:options tag="md-card" />

<script lang="ts">
  export let image: string =
    "https://bulma.io/images/placeholders/1280x960.png";
  export let width: string = "300px";
  export let title: string = "John Smith";
  export let subTitle: string = "@johnsmith";
</script>

<link rel="stylesheet" href="/global.css" />

<div class="card" style={`width: ${width};`}>
  {#if image}
    <div class="card-image">
      <figure class="image is-4by3">
        <img src={image} alt="Placeholder image" />
      </figure>
    </div>
  {/if}
  <div class="card-content">
    <div class="media">
      {#if image}
        <div class="media-left">
          <figure class="image is-48x48">
            <img src={image} alt="Placeholder image" />
          </figure>
        </div>
      {/if}
      <div class="media-content">
        {#if title}
          <p class="title is-4">{title}</p>
        {/if}
        {#if subTitle}
          <p class="subtitle is-6">{subTitle}</p>
        {/if}
      </div>
    </div>

    <div class="content">
      <slot />
    </div>
  </div>
</div>
