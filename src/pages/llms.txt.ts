import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { services } from '../data/services';

// llms.txt: a plain-text summary for AI assistants and crawlers. https://llmstxt.org
export const GET: APIRoute = ({ site: base }) => {
  const abs = (path: string) => new URL(path, base).href;
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.title}. ${site.tagline}`,
    '',
    site.description,
    '',
    '## Services',
    ...services.map((s) => `- [${s.name}](${abs(`/services/#${s.id}`)}): ${s.tagline}`),
    '',
    '## Pages',
    `- [Services](${abs('/services/')})`,
    `- [Work](${abs('/work/')}): anonymised case studies`,
    `- [Writing](${abs('/writing/')}): positioning teardowns and notes`,
    `- [About](${abs('/about/')})`,
    `- [Contact](${abs('/contact/')})`,
    '',
    '## Contact',
    `- Email: ${site.email}`,
    ...(site.booking ? [`- Book a call: ${site.booking}`] : []),
    ...(site.linkedin ? [`- LinkedIn: ${site.linkedin}`] : []),
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
