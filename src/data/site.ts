// Central site settings. Everything marked TODO or in [brackets] needs your real value.
// The domain lives in astro.config.mjs (`site`), not here.

export const site = {
  name: 'Tanveer', // TODO: full name as it should appear on the site, e.g. 'Tanveer Surname'
  title: 'Product marketing for technical products',
  tagline:
    'Positioning, launches, competitive intel and content for AI, developer, QA and security companies.',
  description:
    'Freelance product marketer for technical products. Positioning, launches, competitive intel and SEO / AI-search content for AI, developer-tool, QA and security companies.',
  email: 'tanveer.insights@gmail.com', // TODO: confirm this is the address you want published
  location: 'Delhi, India',
  regions: 'North America and Europe',
  booking: '', // TODO: e.g. 'https://cal.com/yourhandle/intro'. Empty falls back to email.
  linkedin: '', // TODO: e.g. 'https://www.linkedin.com/in/yourhandle/'
  headshot: '', // TODO: e.g. '/headshot.jpg' placed in public/. Empty shows a monogram.
  web3formsKey: '', // Optional: Web3Forms access key. Empty hides the contact form.
  cloudflareAnalyticsToken: '', // Optional: Cloudflare Web Analytics token. Empty disables the beacon.
  nav: [
    { label: 'Services', href: '/services/' },
    { label: 'Work', href: '/work/' },
    { label: 'Writing', href: '/writing/' },
    { label: 'About', href: '/about/' },
  ],
  // Sanitised outcomes for the homepage proof strip. Replace with real, rounded numbers, or empty the array to hide it.
  proof: [
    { value: '[TODO]', label: 'e.g. Company-wide repositioning shipped in 6 weeks' },
    { value: '[TODO]', label: 'e.g. Top-3 for the category keyword in 90 days' },
    { value: '[TODO]', label: 'e.g. 12 launches, zero slipped dates' },
  ],
};

export const bookingHref = site.booking || `mailto:${site.email}`;
export const ctaLabel = site.booking ? 'Book a 30-minute call' : 'Email me';
