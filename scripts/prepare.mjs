// One-time, local migration. Keep the old portfolio as a reference.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const root=path.resolve(import.meta.dirname,'..');
const old=path.resolve(root,'../OldPortfolio');
const require=createRequire(import.meta.url);
const sharp=require('C:/Users/74164/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
for(const dir of ['images','experiences','videos']) fs.cpSync(path.join(old,'public',dir),path.join(root,'public',dir),{recursive:true,errorOnExist:false});
const cases=fs.readFileSync(path.resolve(root,'../docs/english-content-draft.md'),'utf8').replace(/\r/g,'');
const titles=['Gesture Terrain','Shape of Sound','Fuzzy Boundaries','Systems & Research','About'];
const content={};
for(const title of titles){
 const start=cases.indexOf('\n## '+title+'\n');
 let end=cases.indexOf('\n---\n',start); if(end<0)end=cases.length;
 const raw=cases.slice(start,end).trim();
 content[title]=raw;
}
fs.mkdirSync(path.join(root,'src'),{recursive:true});
fs.writeFileSync(path.join(root,'src/content.json'),JSON.stringify(content,null,2));
const crops={
 'gesture-terrain': ['gesture-terrain/06-concept-complete.png',{left:340,top:330,width:1200,height:510}],
 'shape-of-sound':['shape-of-sound/sound-ripple.png',{left:370,top:270,width:1800,height:870}],
 'fuzzy-boundaries':['fuzzy-boundaries/fuzzy-soft.png',{left:185,top:33,width:560,height:420}],
 'fuzzy-hard':['fuzzy-boundaries/fuzzy-hard.png',{left:208,top:32,width:560,height:420}],
 'fuzzy-entropy':['fuzzy-boundaries/fuzzy-entropy.png',{left:214,top:28,width:560,height:420}],
};
fs.mkdirSync(path.join(root,'public/media'),{recursive:true});
for(const [name,[src,crop]] of Object.entries(crops))for(const width of [640,1440])await sharp(path.join(old,'public/images',src)).extract(crop).resize({width,withoutEnlargement:true}).webp({quality:87}).toFile(path.join(root,`public/media/${name}-${width}.webp`));
console.log('Migrated experiences and evidence; extracted approved case text; prepared responsive media.');
