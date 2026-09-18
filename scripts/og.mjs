// Generates public/og.png, public/favicon.svg, public/favicon-32.png and public/apple-touch-icon.png
// from the name in src/data/site.ts. Run with `npm run og` after changing the name.
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';
import { site } from '../src/data/site.ts';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const font = "Nunito, 'Segoe UI', Arial, sans-serif";
const initial = esc(site.name.trim().charAt(0).toUpperCase() || 'P');

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#d512eb"/>
      <stop offset="1" stop-color="#5a19ff"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="url(#g)"/>
  <text x="32" y="46" text-anchor="middle" font-family="${font}" font-size="40" font-weight="900" fill="#ffffff">${initial}</text>
</svg>
`;

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="t" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ac32e4"/>
      <stop offset="1" stop-color="#5a19ff"/>
    </linearGradient>
    <radialGradient id="orb" cx="50%" cy="0%" r="65%">
      <stop offset="0" stop-color="#d512eb" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#d512eb" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#050507"/>
  <rect width="1200" height="630" fill="url(#orb)"/>
  <text x="96" y="140" font-family="${font}" font-size="30" font-weight="800" fill="#d512eb" letter-spacing="2">${esc(site.name.toUpperCase())}</text>
  <text x="96" y="290" font-family="${font}" font-size="78" font-weight="900" fill="#ffffff">Product marketing for</text>
  <text x="96" y="380" font-family="${font}" font-size="78" font-weight="900" fill="url(#t)">technical products.</text>
  <text x="96" y="470" font-family="${font}" font-size="30" font-weight="600" fill="#a1adc4">Positioning, launches, competitive intel and content</text>
  <text x="96" y="514" font-family="${font}" font-size="30" font-weight="600" fill="#a1adc4">for AI, developer, QA and security companies.</text>
</svg>`;

await writeFile('public/favicon.svg', favicon);
await sharp(Buffer.from(og)).png().toFile('public/og.png');
await sharp(Buffer.from(favicon), { density: 300 }).resize(180, 180).png().toFile('public/apple-touch-icon.png');
await sharp(Buffer.from(favicon), { density: 300 }).resize(32, 32).png().toFile('public/favicon-32.png');
console.log('Wrote public/og.png, public/favicon.svg, public/favicon-32.png, public/apple-touch-icon.png');
