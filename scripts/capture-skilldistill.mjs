import { chromium } from '../../SkillDistill Studio/frontend/node_modules/@playwright/test/index.mjs';
import { mockApi } from '../../SkillDistill Studio/frontend/e2e/fixtures/mock-api.ts';
import fs from 'node:fs/promises';
import path from 'node:path';

const output = path.resolve(import.meta.dirname, '../public/images/skilldistill-studio');
await fs.mkdir(path.resolve(import.meta.dirname, '../artifacts/skilldistill-refresh'), { recursive: true });
const scenes = [
  ['cover', '/', 'SkillDistill Studio'],
  ['source-and-run-configuration', '/projects/new', '新建项目'],
  ['overview-review', '/runs/run-1?stage=overview', 'Overview 审核', 'review_overview'],
  ['candidate-verification', '/runs/run-1?stage=candidates', '候选审核', 'review_candidates'],
  ['skill-pack-review', '/runs/run-1?stage=skills', 'Skill Pack 审核', 'review_skill_pack'],
  ['evaluation-with-failures', '/runs/run-1?stage=evaluation', '演示级测试报告', 'package_artifacts'],
  ['failure-aware-export', '/runs/run-1?stage=export', '导出 Skill Pack', 'package_artifacts'],
];
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const results = [];
try {
  for (const [name, route, heading, stage] of scenes) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
    const fixturePage = { route: (_pattern, handler) => page.route(/^http:\/\/127\.0\.0\.1:5188\/api\//, handler) };
    await mockApi(fixturePage, { populated: true, initialStage: stage, initialStatus: stage === 'package_artifacts' ? 'evaluation_complete' : undefined, reportReady: stage === 'package_artifacts', finalizableSkillPack: true });
    await page.goto(`http://127.0.0.1:5188${route}`);
    page.on('pageerror', error => console.error(error.message));
    await page.getByRole('heading', { name: heading, exact: true }).waitFor({ timeout: 10000 }).catch(async error => { console.error(await page.locator('body').innerText()); throw error; });
    if (name === 'overview-review') await page.getByRole('button', { name: '预览', exact: true }).click();
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: path.join(output, `${name}.png`), fullPage: true, animations: 'disabled' });
    const dimensions = await page.evaluate(() => ({ width: innerWidth, height: Math.max(innerHeight, document.documentElement.scrollHeight), overflow: document.documentElement.scrollWidth > innerWidth }));
    results.push({ name, route, ...dimensions, fixture: 'SkillDistill frontend/e2e/fixtures/mock-api.ts' });
    console.log(name, dimensions);
    await page.close();
  }
  await fs.writeFile(path.resolve(import.meta.dirname, '../artifacts/skilldistill-refresh/capture.json'), JSON.stringify(results, null, 2));
  const mediaPath = path.resolve(import.meta.dirname, '../src/media.mjs');
  let media = await fs.readFile(mediaPath, 'utf8');
  for (const { name, width, height } of results) {
    media = media.replace(new RegExp(`('skilldistill-studio','${name}\\.png',)\\d+,\\d+`), `$1${width},${height}`);
  }
  await fs.writeFile(mediaPath, media);
} finally {
  await browser.close();
}
