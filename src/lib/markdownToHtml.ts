import { remark } from 'remark';
import html from 'remark-html';

export default async function markdownToHtml(markdown: string | number) {
  const markdownContent =
    typeof markdown === 'number' ? markdown.toString() : markdown;
  const result = await remark().use(html).process(markdownContent);
  return result.toString();
}
