// Turns a source photo into public/headshot.jpg (800x1000, cropped from the top so the head stays in frame).
// Usage: node scripts/headshot.mjs path/to/photo.jpg
import sharp from 'sharp';
const src = process.argv[2];
if (!src) { console.error('usage: node scripts/headshot.mjs <source image>'); process.exit(1); }
const meta = await sharp(src).metadata();
console.log('source:', meta.width + 'x' + meta.height, meta.format);
const info = await sharp(src).resize(800, 1000, { fit: 'cover', position: 'top' }).jpeg({ quality: 82, mozjpeg: true }).toFile('public/headshot.jpg');
console.log('wrote public/headshot.jpg', info.width + 'x' + info.height, Math.round(info.size / 1024) + ' KB');
