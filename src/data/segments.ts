// Target segments. Keys are used in case-study frontmatter (`segment:`) and for the Work page filter.
export const segments = {
  ai: 'AI & agents',
  devtools: 'Developer tools',
  qa: 'QA & testing',
  security: 'Cyber security',
  saas: 'B2B SaaS',
} as const;

export type Segment = keyof typeof segments;
