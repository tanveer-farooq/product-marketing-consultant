// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// TODO: replace with the real domain before deploying.
// Used for canonical URLs, Open Graph URLs, the sitemap, RSS, robots.txt and llms.txt.
const SITE = 'https://example.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  // Astro 7 defaults to 'jsx' whitespace handling, which drops spaces between adjacent inline
  // elements written on separate lines. Keep the classic behaviour so hand-written markup reads as expected.
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/contact/thanks'),
    }),
    mdx(),
  ],
});
