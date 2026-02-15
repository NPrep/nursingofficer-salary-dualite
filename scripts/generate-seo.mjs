import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const publicDir = path.join(root, 'public');
fs.mkdirSync(publicDir, { recursive: true });

const cnameCandidates = [
  path.join(root, 'CNAME'),
  path.join(publicDir, 'CNAME')
];

let domain = process.env.SITE_DOMAIN;
if (!domain) {
  for (const candidate of cnameCandidates) {
    if (fs.existsSync(candidate)) {
      const value = fs.readFileSync(candidate, 'utf8').trim().split(/\r?\n/)[0];
      if (value) {
        domain = value;
        break;
      }
    }
  }
}

if (!domain) {
  console.error('Missing domain. Set SITE_DOMAIN or CNAME.');
  process.exit(1);
}

const siteUrl = `https://${domain}`;
const routesPath = path.join(root, 'src', 'next', 'routes.ts');
if (!fs.existsSync(routesPath)) {
  console.error(`Missing routes file at ${routesPath}`);
  process.exit(1);
}

const routesText = fs.readFileSync(routesPath, 'utf8');
const matches = [...routesText.matchAll(/"([^"]+)"/g)].map(match => match[1]);

const normalized = new Set();
for (const route of matches) {
  if (!route) continue;
  let cleaned = route.trim();
  if (cleaned !== '/' && cleaned.endsWith('/')) {
    cleaned = cleaned.replace(/\/+$/, '');
  }
  normalized.add(cleaned);
}

const date = new Date().toISOString().split('T')[0];
const routes = Array.from(normalized).sort();

const toUrl = (route) => route === '/' ? `${siteUrl}/` : `${siteUrl}${route}/`;
const priorityFor = (route) => {
  if (route === '/' || route === '') return '1.0';
  const depth = route.split('/').filter(Boolean).length;
  if (depth === 1) return '0.8';
  if (depth === 2) return '0.6';
  return '0.5';
};

const lines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
];

for (const route of routes) {
  lines.push('  <url>');
  lines.push(`    <loc>${toUrl(route)}</loc>`);
  lines.push(`    <lastmod>${date}</lastmod>`);
  lines.push(`    <priority>${priorityFor(route)}</priority>`);
  lines.push('  </url>');
}

lines.push('</urlset>');

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), lines.join('\n') + '\n', 'utf8');

const robots = [
  'User-agent: *',
  'Allow: /',
  '',
  `Sitemap: ${siteUrl}/sitemap.xml`,
  ''
].join('\n');

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots, 'utf8');
