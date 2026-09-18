// Generates public/og.png, public/favicon.svg, public/favicon-32.png and public/apple-touch-icon.png
// from the name in src/data/site.ts. Run with `npm run og` after changing the name.
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';
import { site } from '../src/data/site.ts';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const font = "Inter, 'Segoe UI', Arial, sans-serif";
const initial = esc(site.name.trim().charAt(0).toUpperCase() || 'P');

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#4b5bd6"/>
  <text x="32" y="45" text-anchor="middle" font-family="${font}" font-size="38" font-weight="700" fill="#ffffff">${initial}</text>
</svg>
`;

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#15171f"/>
  <rect width="16" height="630" fill="#7c8cff"/>
  <text x="96" y="140" font-family="${font}" font-size="32" fill="#a3a8bd">${esc(site.name)}</text>
  <text x="96" y="290" font-family="${font}" font-size="76" font-weight="700" fill="#f5f5f7">Product marketing for</text>
  <text x="96" y="380" font-family="${font}" font-size="76" font-weight="700" fill="#f5f5f7">technical products.</text>
  <text x="96" y="470" font-family="${font}" font-size="30" fill="#a3a8bd">Positioning, launches, competitive intel and content</text>
  <text x="96" y="514" font-family="${font}" font-size="30" fill="#a3a8bd">for AI, developer, QA and security companies.</text>
</svg>`;

await writeFile('public/favicon.svg', favicon);
await sharp(Buffer.from(og)).png().toFile('public/og.png');
await sharp(Buffer.from(favicon), { density: 300 }).resize(180, 180).png().toFile('public/apple-touch-icon.png');
await sharp(Buffer.from(favicon), { density: 300 }).resize(32, 32).png().toFile('public/favicon-32.png');
console.log('Wrote public/og.png, public/favicon.svg, public/favicon-32.png, public/apple-touch-icon.png');
