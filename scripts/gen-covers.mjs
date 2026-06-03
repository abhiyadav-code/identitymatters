// Generates warm-gradient SVG cover placeholders for seed posts.
// These are temporary art — replaced by real images during content migration.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(here, '../public/images/covers');
mkdirSync(outDir, { recursive: true });

// Warm palette gradient pairs.
const palettes = [
  ['#bd5d38', '#e6a06b'],
  ['#3f6f6a', '#7fa39d'],
  ['#a8572f', '#d99a5b'],
  ['#6d5d8a', '#a596c4'],
  ['#9c4527', '#cf8a5e'],
  ['#2f6f7a', '#69a7ad'],
  ['#b06a2e', '#e3b277'],
  ['#7a5230', '#bd8f5f'],
];

const covers = [
  { slug: 'identity-the-wall-future-cybersecurity', lines: ['Identity, The Wall &', 'the Future of', 'Cybersecurity'] },
  { slug: 'service-in-idaas', lines: ["Putting the 'Service'", 'in Identity as a', 'Service'] },
  { slug: 'iam-recommendations-google-cloud', lines: ['Security Analytics', 'Behind Cloud IAM', 'Recommendations'] },
  { slug: 'least-privilege-less-effort', lines: ['Achieve Least', 'Privilege with', 'Less Effort'] },
  { slug: 'ml-models-cloud-iam-recommender', lines: ['ML Models Behind', 'Cloud IAM', 'Recommender'] },
  { slug: 'pim-pam-or-perish', lines: ['PIM, PAM,', 'or Perish?'] },
  { slug: 'next-generation-idaas', lines: ['The Next', 'Generation of', 'IDaaS'] },
  { slug: 'managed-identity-services', lines: ['Managed Identity', 'Services'] },
];

const W = 1200, H = 675;

covers.forEach((c, i) => {
  const [a, b] = palettes[i % palettes.length];
  const startY = H / 2 - (c.lines.length - 1) * 38;
  const tspans = c.lines
    .map((line, j) => `<tspan x="80" y="${startY + j * 76}">${line}</tspan>`)
    .join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${a}"/>
      <stop offset="1" stop-color="${b}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <circle cx="${W - 140}" cy="120" r="220" fill="#ffffff" opacity="0.06"/>
  <circle cx="120" cy="${H - 80}" r="160" fill="#000000" opacity="0.05"/>
  <text x="80" y="90" font-family="Georgia, serif" font-size="26" fill="#ffffff" opacity="0.85" letter-spacing="3">IDENTITY MATTERS</text>
  <text font-family="Georgia, 'Times New Roman', serif" font-size="62" font-weight="600" fill="#ffffff">${tspans}</text>
</svg>`;
  writeFileSync(resolve(outDir, `${c.slug}.svg`), svg, 'utf8');
});

console.log(`Wrote ${covers.length} cover SVGs to ${outDir}`);
