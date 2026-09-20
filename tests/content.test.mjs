import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { build } from 'esbuild';
import Module from 'node:module';
import {media,mediaGroups,videos} from '../src/media.mjs';

const root=path.resolve(import.meta.dirname,'..');
const compiled=await build({entryPoints:[path.join(root,'tests/render.jsx')],bundle:true,write:false,platform:'node',format:'cjs',define:{'process.env.NODE_ENV':'"production"','import.meta.env.DEV':'false'}});
const module=new Module(path.join(root,'tests/render.cjs'));
module._compile(compiled.outputFiles[0].text,module.id);
const {render,works,caseSections,headerFor}=module.exports;

await test('All seven portfolio pages render headings and annotated media slots',()=>{
 const cases=[['/','Making invisible'],['/works','Selected Works'],['/projects/gesture-terrain','A Landscape That Remembers'],['/projects/shape-of-sound','Five Visual Grammars'],['/projects/fuzzy-boundaries','Three Ways of Seeing'],['/systems','SkillDistill Studio'],['/about','Selected Background']];
 for(const [url,title] of cases){const html=render(url);assert.ok(html.includes(title),url);assert.equal((html.match(/<h1[ >]/g)||[]).length,1,url);assert.ok(/data-slot=|data-media=|data-video=/.test(html),url);assert.ok(!/<iframe|<audio/.test(html),`unexpected embedded media: ${url}`);assert.ok(!html.includes('undefined'),url);}
});
await test('GitHub Pages directory URLs preserve page rendering and film anchors',()=>{
 for(const [url,title] of [['/works/','Selected Works'],['/systems/','SkillDistill Studio'],['/about/','Selected Background'],['/projects/gesture-terrain/','A Landscape That Remembers'],['/projects/shape-of-sound/#film','Five Visual Grammars'],['/projects/fuzzy-boundaries/','Three Ways of Seeing']]){
  const html=render(url);assert.ok(html.includes(title),url);assert.equal((html.match(/<h1[ >]/g)||[]).length,1,url);
 }
});
await test('Home header uses a direct portfolio label and no review banner',()=>{
 const html=render('/');
 assert.ok(html.includes('>Portfolio</a>'));
 assert.ok(!html.includes('review-banner'));
 assert.ok(!html.includes('MOTION PREVIEW'));
});
await test('SkillDistill copy omits budget-control wording',()=>{
 const html=render('/');
 assert.ok(!html.toLowerCase().includes('budget control'));
 assert.ok(!html.toLowerCase().includes('usage budgets'));
});
await test('Gesture Terrain header omits project duration',()=>{
 const html=render('/projects/gesture-terrain');
 assert.ok(html.includes('Independent project · 2026'));
 assert.ok(!html.includes('5 weeks'));
});
await test('Gesture Terrain technical note removes only the selected qualifier',()=>{
 const html=render('/projects/gesture-terrain');
 assert.ok(html.includes('In a preliminary study, 12 trials produced 658 labelled frames'));
 assert.ok(!html.includes('single-participant study'));
 assert.ok(html.includes('evidence from one participant'));
});
await test('Shape of Sound header omits project duration',()=>{
 const html=render('/projects/shape-of-sound');
 assert.ok(html.includes('Independent project · 2026'));
 assert.ok(!html.includes('3 weeks'));
 assert.ok(html.includes('p5.js · Web Audio API'));
});
await test('Shape of Sound mode gallery omits the sample timing note',()=>{
 const html=render('/projects/shape-of-sound');
 assert.ok(!html.includes('Existing mode samples, captured independently'));
});
await test('Project films omit the draft footage note',()=>{
 for(const work of works){assert.ok(!render(`/projects/${work.slug}`).includes('Archived prototype footage is used for this draft.'));}
});
await test('Shape of Sound audio section keeps only track and artist',()=>{
 const html=render('/projects/shape-of-sound');
 assert.ok(html.includes('>Audio</h2>'));
 assert.ok(html.includes('<dt>Track</dt>'));
 assert.ok(html.includes('<dt>Artist / Label</dt>'));
 assert.ok(!html.includes('<dt>Use</dt>'));
 assert.ok(!html.includes('<dt>Source / licence record</dt>'));
 assert.ok(!html.includes('The applicant has confirmed authorization'));
});
await test('Fuzzy Boundaries m = 1.1 uses the replacement capture',()=>{
 assert.equal(media['FB-PARAM-1'].src,'/images/fuzzy-boundaries/fuzzy-m11.png');
 assert.deepEqual([media['FB-PARAM-1'].width,media['FB-PARAM-1'].height],[1858,1128]);
 assert.deepEqual(media['FB-PARAM-1'].crop,[0,0,1858,1128]);
});
await test('Home preserves the agreed module sequence',()=>{
 const html=render('/');const ids=['hero-title','selected-works','practice','systems-preview','about-preview'];let previous=-1;
 for(const id of ids){const index=html.indexOf(`id="${id}"`);assert.ok(index>previous,id);previous=index;}
 assert.ok(html.indexOf('Get in touch')>previous);
});
await test('Home opens on Sound without changing the visible mode order',()=>{
 const html=render('/');const gesture=html.indexOf('>Gesture</button>'),sound=html.indexOf('>Sound</button>'),uncertainty=html.indexOf('>Uncertainty</button>');
 assert.ok(gesture>-1&&gesture<sound&&sound<uncertainty);
 assert.match(html,/A study in.*sound/);
 assert.match(html,/aria-pressed="true">Sound<\/button>/);
});
await test('Static reading exposes every work, and shared cover names are unique',()=>{
 const home=render('/');assert.ok(!home.includes('cinema-enabled'));assert.ok(!home.includes('inert=""'));
 for(const work of works)assert.ok(home.includes(`id="${work.slug}"`));
 for(const url of ['/','/works',...works.map(w=>`/projects/${w.slug}`)]){
  const names=[...render(url).matchAll(/view-transition-name:([^;"\s]+)/g)].map(m=>m[1]);
  assert.equal(new Set(names).size,names.length,url);
 }
});
await test('Project media defaults to complete-image contain rendering',()=>{
 for(const url of ['/','/works','/projects/gesture-terrain','/projects/shape-of-sound','/projects/fuzzy-boundaries']){
  const html=render(url);assert.ok(html.includes('data-fit="contain"'),url);
 }
 const fuzzy=render('/projects/fuzzy-boundaries');
 assert.equal((fuzzy.match(/data-fit="crop"/g)||[]).length,2,'only the verified draggable comparison may use a crop');
 for(const code of ['GT','SS','FB']){const cover=media[`${code}-COVER`];assert.deepEqual(cover.crop,[0,0,cover.width,cover.height],`${code} cover must use its complete source`);}
});
await test('Every in-page navigation target exists on its route',()=>{
 for(const url of ['/','/works','/projects/gesture-terrain','/projects/shape-of-sound','/projects/fuzzy-boundaries','/systems','/about']){
  const html=render(url);const ids=new Set([...html.matchAll(/id="([^"]+)"/g)].map(m=>m[1]));
  for(const [,id] of html.matchAll(/href="#([^"]+)"/g))assert.ok(ids.has(id),`${url} has unresolved anchor ${id}`);
 }
});
await test('Case introductions, evidence, reflection and live files remain available',()=>{
 for(const w of works){assert.ok(headerFor(w.title).intro.length>80);assert.ok(headerFor(w.title).facts.includes('2026'));const sections=caseSections(w.title);assert.ok(sections.some(s=>s.name==='Reflection'));assert.ok(sections.every(s=>s.body.length>0));assert.ok(fs.existsSync(path.join(root,'public/experiences',w.slug,'index.html')));}
 assert.ok(render('/projects/gesture-terrain').includes('632'));
 assert.ok(render('/projects/gesture-terrain').includes('one participant'));
 assert.ok(render('/systems').includes('low-confidence'));
});
await test('Unknown routes and work slugs show a recovery page',()=>{
 for(const url of ['/missing','/projects/missing']){const html=render(url);assert.ok(html.includes('Page not found.'));assert.ok(html.includes('Return home'));}
});
await test('Only the approved public contact is presented',()=>{
 for(const url of ['/','/about','/systems']){const html=render(url);assert.ok(html.includes('mailto:741648292@qq.com'));assert.ok(!/href="(?:tel:|[^\"]*linkedin.com|[^\"]*github.com)/i.test(html));}
});
await test('Reusable project and system captures are mapped to evidence slots',()=>{
 const expectedGroups=['SYS-1-OVERVIEW','SYS-1-2','SYS-1-3','SYS-1-4','SYS-2-OVERVIEW','SYS-2-2','SYS-2-3','SYS-2-4','SYS-2-5','FB-ORIGIN','ABOUT-INDEX'];
 for(const id of expectedGroups){assert.ok(mediaGroups[id]?.length,`${id} must resolve to a media group`);for(const mediaId of mediaGroups[id])assert.ok(media[mediaId],`${id} references missing ${mediaId}`);}
 for(const id of ['HOME-SYSTEM-1','HOME-SYSTEM-2','SS-CORRIDOR-ALT','FB-PARAM-1','FB-PARAM-2','FB-PARAM-3'])assert.ok(media[id],`${id} must be mapped`);
 const systemsHtml=render('/systems');
 for(const id of expectedGroups.filter(id=>id.startsWith('SYS-')))assert.ok(systemsHtml.includes(`data-media-group="${id}"`),id);
 const fuzzyHtml=render('/projects/fuzzy-boundaries');
 assert.ok(fuzzyHtml.includes('data-media="FB-PARAM-1"'));
 assert.ok(fuzzyHtml.includes('data-media-group="FB-ORIGIN"'));
 assert.ok(render('/projects/shape-of-sound').includes('data-media="SS-CORRIDOR-ALT"'));
});
await test('Mapped media keep complete-source crops unless explicitly verified for comparison',()=>{
 for(const [id,asset] of Object.entries(media).filter(([id])=>id.startsWith('SYS-')||id.startsWith('FB-PARAM-')||id==='SS-CORRIDOR-ALT'||id.startsWith('HOME-SYSTEM-'))){
  assert.deepEqual(asset.crop,[0,0,asset.width,asset.height],`${id} should preserve the complete source image`);
 }
});
await test('Project films have accessible, non-autoplay controls',()=>{
 for(const work of works){const id=`${work.code}-FILM`,asset=videos[id],html=render(`/projects/${work.slug}`);assert.ok(asset,id);assert.ok(fs.existsSync(path.join(root,'public',asset.src)),id);assert.ok(html.includes(`data-video="${id}"`),id);assert.ok(html.includes('controls=""'),id);assert.ok(html.includes('preload="metadata"'),id);assert.ok(!html.includes('autoplay'),id);const start=html.indexOf(`data-video="${id}"`),end=html.indexOf('</figure>',start);assert.equal(html.slice(start,end).includes('<figcaption>'),false,id);}
 assert.ok(!render('/').includes('<video'));
});
await test('Mapped films and parameter captures use final-facing labels',()=>{
 for(const work of works){const html=render(`/projects/${work.slug}`);assert.ok(html.includes('Watch film ↓'),work.title);assert.ok(!html.includes('View film slot'),work.title);}
 const fuzzyHtml=render('/projects/fuzzy-boundaries');
 assert.ok(fuzzyHtml.includes('The source image, cluster count and kernel width stay fixed; only fuzziness m changes.'));
 assert.ok(!fuzzyHtml.includes('Evidence is still reserved'));
 for(const url of ['/','/works','/projects/gesture-terrain','/projects/shape-of-sound','/projects/fuzzy-boundaries','/systems','/about'])assert.ok(!render(url).includes('data-slot='),`${url} has an unmapped media placeholder`);
});
await test('Shape of Sound publishes the verified track identity and real signal diagram',()=>{
 const html=render('/projects/shape-of-sound');
 assert.ok(html.includes('data-media="SS-SIGNAL"'));
 assert.ok(html.includes('Speed of Light'));
 assert.ok(html.includes('Monster Siren Records'));
 assert.ok(!html.includes('To be supplied'));
});
