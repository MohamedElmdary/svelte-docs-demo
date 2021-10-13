import { parse } from "marked";
import fm from "front-matter";
import hljs from "highlight.js";

function parseMarkdown(markdown: string) {
  const { attributes, body } = fm(markdown);
  const html = parse(body, {
    sanitize: false,
    highlight(code, lang) {
      return hljs.highlight(code, { language: lang }).value;
    },
  });
  return { attributes, html };
}

export { parseMarkdown };
