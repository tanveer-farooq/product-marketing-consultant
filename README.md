# Consultant website

Personal site and portfolio for a freelance product marketing consultant serving AI, developer-tool, QA, security and technical SaaS companies. Built with Astro 7, Tailwind CSS 4 and Markdown content collections. No CMS, no client-side framework, deploys as static files.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at http://localhost:4321 (or `npx astro dev --background`) |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run check` | Type-check `.astro` and `.ts` files |
| `npm run og` | Regenerate `public/og.png`, `favicon.svg` and the favicon PNGs from the name in `src/data/site.ts` |

## Where things live

- `src/data/site.ts`: name, email, location, booking link, LinkedIn, headshot, proof strip, form key, analytics token.
- `src/data/services.ts`: the six offers (scope, timeline, price). `src/data/engagement.ts`: engagement steps and FAQ.
- `src/data/testimonials.ts`: quotes. The section is hidden while the array is empty.
- `src/content/work/*.md`: case studies. Schema in `src/content.config.ts`.
- `src/content/writing/*.md`: posts.
- `src/pages/`: one file per route, plus `rss.xml.ts`, `robots.txt.ts` and `llms.txt.ts`.
- `src/styles/global.css`: colour and font tokens. Light and dark follow the system setting.
- `content/`: the positioning document and copy drafts. Working material, not published.

## Adding a case study

1. Copy a file in `src/content/work/` and rename it. The file name becomes the URL.
2. Fill the frontmatter. `draft: true` shows the entry in `npm run dev` only; set `draft: false` to publish.
3. Anonymise: no company or product names, relative numbers or ranges, no dates precise enough to identify the client. Testimonials use first name and role only, with permission.

## Before the first deploy

1. Set `site` in `astro.config.mjs` to the real domain.
2. Fill every TODO in `src/data/site.ts` and the `[bracketed]` placeholders in `src/pages/about.astro`, `src/pages/index.astro` and `src/data/engagement.ts`.
3. Replace `$[X]` prices in `src/data/services.ts`, or change them to `Quoted per project`.
4. Set real case studies to `draft: false` and remove the template ones.
5. Run `npm run og`, then `npm run check` and `npm run build`.

## Deploy on Cloudflare Pages

Push the repo to GitHub (private is fine). In Cloudflare Pages, connect the repo with framework preset Astro, build command `npm run build`, output directory `dist`. Add the custom domain in the Pages project and turn on the www to apex redirect. Paste the Cloudflare Web Analytics token into `src/data/site.ts` to enable analytics. Vercel and Netlify work the same way with the Astro preset.
