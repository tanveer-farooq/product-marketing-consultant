## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Project conventions

- Messaging source of truth: `content/positioning.md`. Voice: plain, punchy, specific, no marketing jargon (banned words are listed there). No exclamation marks.
- Never name the client or employer inside case studies (`src/content/work/`). Anonymise per the rules in `README.md`.
- `draft: true` content renders in dev only; production builds hide it (see `src/lib/content.ts`).
- Internal links use trailing slashes (`/about/`). `src/components/Seo.astro` normalises canonicals the same way.
- Colours and fonts are semantic tokens in `src/styles/global.css`: use `bg-bg`, `bg-surface`, `text-fg`, `text-muted`, `border-line`, `bg-accent`, `text-accent-fg`. Do not hard-code colours in components.
- `src/data/site.ts` holds every personal detail; pages read from it rather than repeating strings.
- After changing the name in `site.ts`, run `npm run og` to regenerate the favicon and social image.
