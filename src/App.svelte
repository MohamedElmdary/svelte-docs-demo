<script lang="ts">
  import { onMount } from "svelte";
  import { parseMarkdown } from "./utils/parseMarkdown";
  import md from "./markdown.temp";

  let parsedHtml: string = "";
  let parsedAttrs: { [key: string]: any } = {};

  function onChangeHandler(e: Event) {
    const el = e.target as HTMLTextAreaElement;
    const { attributes, html } = parseMarkdown(el.value);
    parsedHtml = html;
    parsedAttrs = attributes;
  }

  onMount(() => {
    onChangeHandler({ target: { value: md } } as any);
  });
</script>

<section class="containerx">
  <div class="editor">
    <p>Editor</p>
    <textarea contenteditable="true" value={md} on:input={onChangeHandler} />
  </div>
  <div class="preview">
    <p>Preview</p>
    {JSON.stringify(parsedAttrs)}
    {@html parsedHtml}
  </div>
</section>

<style scoped>
  .containerx,
  .editor,
  .preview {
    height: 100%;
  }

  .containerx {
    width: 100%;
    display: flex;
  }

  .editor,
  .preview {
    width: 50%;
    padding: 20px;
  }

  .editor > p,
  .preview > p {
    margin-bottom: 15px;
    text-align: center;
    font-size: 30px;
  }

  .editor {
    background-color: #333;
    color: white;
  }

  .editor > textarea {
    height: calc(100% - 64px);
    padding: 15px;
    border: 1px solid white;
    background-color: transparent;
    outline: none;
    display: block;
    width: 100%;
    overflow-y: auto;
    color: white;
  }

  .preview {
    background-color: white;
    overflow-y: auto;
  }
</style>
