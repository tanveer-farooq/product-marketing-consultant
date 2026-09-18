// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// Deployment target.
// - GitHub Actions builds for GitHub Pages as a project site: https://tanveer-farooq.github.io/product-marketing-consultant/
// - Locally the site runs at the root (http://localhost:4321/).
// - For a custom domain, set SITE_URL (e.g. https://yourname.com) and BASE_PATH=/ in the build environment,
//   or change the two defaults below.
const onGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const SITE = process.env.SITE_URL ?? (onGitHubActions ? 'https://tanveer-farooq.github.io' : 'https://example.com');
const BASE = process.env.BASE_PATH ?? (onGitHubActions ? '/product-marketing-consultant' : '/');

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
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
