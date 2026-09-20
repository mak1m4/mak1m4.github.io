import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { works } from '../src/data.mjs';

const routes = ['', '/works', '/systems', '/about', ...works.map(work => `/projects/${work.slug}`)];
const index = await readFile('dist/index.html', 'utf8');
for (const route of routes) {
  assert.equal(await readFile(`dist${route}/index.html`, 'utf8'), index, `Missing page entry: ${route}`);
}
assert.equal(await readFile('dist/404.html', 'utf8'), index);
for (const asset of index.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)"/g)) {
  assert.ok((await stat(`dist${asset[1]}`)).size > 0, asset[1]);
}
for (const work of works) {
  const html = await readFile(`dist/experiences/${work.slug}/index.html`, 'utf8');
  assert.notEqual(html, index, `Live work replaced by portfolio shell: ${work.slug}`);
}
let total = 0, count = 0;
async function inspect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    assert.ok(!entry.isSymbolicLink(), `Unexpected deployment symlink: ${path}`);
    if (entry.isDirectory()) await inspect(path);
    else {
      const { size } = await stat(path);
      assert.ok(size < 100 * 1024 ** 2, `File exceeds GitHub regular Git limit: ${path}`);
      total += size; count++;
    }
  }
}
await inspect('dist');
assert.ok(total < 1024 ** 3, 'Site exceeds 1 GiB');
console.log(`Pages verified: ${routes.length} routes, 3 live works, 404, asset links; ${count} files, ${(total / 1024 ** 2).toFixed(1)} MiB.`);
