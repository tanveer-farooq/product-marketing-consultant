export type Service = {
  id: string; // anchor on /services/
  emoji: string; // shown on cards
  name: string;
  pillar?: string; // shown on the homepage cards; only the four core services carry one
  short: string; // one-liner for cards
  tagline: string;
  forWho: string;
  includes: string[];
  timeline: string;
  price: string; // TODO: real numbers, or 'Quoted per project' to hide pricing
  entry?: boolean; // "start here" badge
};

export const services: Service[] = [
  {
    id: 'positioning-sprint',
    emoji: '⚡',
    name: 'Positioning Sprint',
    entry: true,
    short: 'Two weeks to a clear answer to "what do you do and why should I care?"',
    tagline: 'Two weeks to a clear answer to "what do you do and why should I care?"',
    forWho: 'companies whose homepage does not say what they do, pre-launch companies, or anyone after a pivot.',
    includes: [
      'Interviews: founders, two engineers, sales or customer success, and three to five customers or prospects.',
      'Competitive alternatives map: what buyers use instead of you, including "nothing".',
      'Positioning document: alternatives, unique attributes, value, best-fit customers, market category.',
      'Messaging hierarchy: headline, sub-line, three pillars, proof points, objection answers.',
      'Homepage hero and one key page rewritten.',
      '60-minute readout with your team.',
    ],
    timeline: '2 weeks',
    price: 'From $[X]',
  },
  {
    id: 'positioning-messaging',
    emoji: '🧭',
    name: 'Positioning & messaging',
    pillar: 'Say it clearly',
    short:
      'Decide who you are for, what you replace and why you win. Then write it so an engineer nods instead of scrolling past.',
    tagline: 'The sprint, then the whole story written down everywhere buyers read it.',
    forWho: 'companies whose website, deck and sales script each describe a different product.',
    includes: [
      'Everything in the Positioning Sprint.',
      'Full website copy: home, product pages, pricing, about.',
      'Messaging guide for the team, so the next hire writes the same story.',
      'Sales narrative outline: why change, why now, why you.',
      'Category and naming recommendations where needed.',
    ],
    timeline: '3 to 4 weeks',
    price: 'From $[X]',
  },
  {
    id: 'launch',
    emoji: '🚀',
    name: 'Launch & go-to-market',
    pillar: 'Ship the launch',
    short: 'A plan, a narrative and every asset, shipped on the date you promised the board.',
    tagline: 'A launch that ships on the date, with every asset, and a number to judge it by.',
    forWho: 'a new product, a major feature, a new segment, or a rebrand.',
    includes: [
      'Launch tier, goals and success metric.',
      'Launch narrative and messaging.',
      'Launch page.',
      'Announcement post and social posts.',
      'Changelog entry and docs introduction.',
      'Customer email.',
      'Sales one-pager and demo talk track.',
      'Launch-day runbook.',
      '30-day post-launch review.',
    ],
    timeline: '4 to 6 weeks per launch',
    price: 'From $[X] per launch',
  },
  {
    id: 'competitive',
    emoji: '⚔️',
    name: 'Competitive intel & sales enablement',
    pillar: 'Win the comparison',
    short: 'Teardowns, battlecards and objection handling your reps actually open before a call.',
    tagline: 'Know exactly why you win and lose, and give sales the words.',
    forWho: 'teams losing to the same competitors, or hiring their first reps.',
    includes: [
      'Teardowns of five to eight competitors: positioning, pricing, packaging, claims, gaps.',
      'Battlecard per competitor.',
      'Objection-handling document.',
      'Comparison and "alternatives" pages for the website.',
      'Win/loss interview program, five to eight interviews.',
      'Quarterly refresh available.',
    ],
    timeline: '3 weeks',
    price: 'From $[X]. Refresh from $[X] per quarter',
  },
  {
    id: 'content',
    emoji: '🔎',
    name: 'SEO & AI-search content',
    pillar: 'Get found and cited',
    short:
      'Content written to rank in Google and be cited by ChatGPT, Claude and Perplexity, without reading like it was written for a robot.',
    tagline: 'Content that ranks, gets cited by AI assistants, and still reads like a person wrote it.',
    forWho:
      'companies whose buyers research on Google and in ChatGPT, Claude or Perplexity before they ever talk to sales.',
    includes: [
      'Keyword and AI-prompt research.',
      'Content plan by funnel stage.',
      'Four to eight pieces per month, written from subject-matter interviews.',
      'Comparison and alternatives pages.',
      'Brand-mention and backlink program.',
      'Technical basics: structured data, llms.txt, internal linking.',
      'Monthly report on rankings, citations and pipeline.',
    ],
    timeline: 'Monthly, three-month minimum',
    price: 'From $[X] per month',
  },
  {
    id: 'fractional',
    emoji: '🧑‍💻',
    name: 'Fractional product marketer',
    short: 'A product marketer in your standups, two or three days a week.',
    tagline: 'A product marketer in your standups, two or three days a week.',
    forWho: 'companies that need all of the above but are six to twelve months from a full-time hire.',
    includes: [
      'Ownership of positioning, launches, enablement and content.',
      'Attendance at product and sales meetings.',
      'Monthly plan and report.',
      'Handover plan for when you hire in-house.',
    ],
    timeline: 'Monthly, three-month minimum',
    price: 'From $[X] per month for two days a week',
  },
];

export const coreServices = services.filter((s) => s.pillar);
