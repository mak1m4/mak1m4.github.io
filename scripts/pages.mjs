import { mkdir, copyFile, writeFile } from 'node:fs/promises';
import { works } from '../src/data.mjs';

export const pagePaths = ['/', '/works', '/systems', '/about', ...works.map(work => `/projects/${work.slug}`)];

// Real directory entries work without server rewrites, including direct visits.
for (const route of pagePaths.filter(route => route !== '/')) {
  await mkdir(`dist${route}`, { recursive: true });
  await copyFile('dist/index.html', `dist${route}/index.html`);
}
await copyFile('dist/index.html', 'dist/404.html');
await writeFile('dist/.nojekyll', '');
console.log(`Pages: generated ${pagePaths.length} page entries and a 404 fallback.`);
