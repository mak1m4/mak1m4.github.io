import test from 'node:test';
import assert from 'node:assert/strict';
import {clamp,chapterState,fieldPoint,fieldDefaults} from '../src/motion-math.mjs';
import {cinematicState,fieldCanRun} from '../src/cinematic-math.mjs';
import {media,fuzzyComparison} from '../src/media.mjs';
import fs from 'node:fs';
import path from 'node:path';
test('Canvas loop stops in every non-animated viewing state',()=>{
 const full={calm:false,narrow:false,visible:true,hidden:false,stage:false};
 assert.equal(fieldCanRun(full),true);
 for(const state of [{calm:true},{narrow:true},{visible:false},{hidden:true},{stage:true}])assert.equal(fieldCanRun({...full,...state}),false);
});
test('Unified cinema timeline preserves chapter holds and bounded reveals',()=>{
 for(const [p,active] of [[.31,0],[.56,1],[.81,2]])assert.equal(cinematicState(p).active,active);
 assert.equal(cinematicState(0).entry,0);assert.equal(cinematicState(1).exit,1);
 for(let p=-.2;p<=1.2;p+=.01){const s=cinematicState(p);assert.ok(s.reveal.every(n=>n>=0&&n<=1));assert.ok(s.hero>=0&&s.hero<=1);}
});
test('All media sources exist and crops stay within their original bounds',()=>{
 for(const [id,a] of Object.entries(media)){assert.ok(fs.existsSync(path.resolve(import.meta.dirname,'../public',a.src.slice(1))),id);assert.ok(a.alt.length>20,id);const [x,y,w,h]=a.crop;assert.ok(x>=0&&y>=0&&w>0&&h>0&&x+w<=a.width&&y+h<=a.height,id);}
 assert.ok(fuzzyComparison.verified);assert.equal(new Set([1,2,3].map(i=>media[`FB-MODE-${i}`].comparisonGroup)).size,1);
 assert.deepEqual(media['FB-MODE-1'].crop.slice(2),media['FB-MODE-3'].crop.slice(2));
});
test('Chapter progress has bounded terminal states',()=>{
  assert.equal(clamp(-1),0);assert.equal(clamp(2),1);
  assert.equal(chapterState(1000,1300,900).reveal,0);
  assert.equal(chapterState(-900,1300,900).reveal,1);
  for(const top of [-3000,-300,0,400,1200]){const s=chapterState(top,1300,900);assert.ok(s.progress>=0&&s.progress<=1);}
});
test('Every line-field mode is finite, closed and distinct',()=>{
  for(let mode=0;mode<3;mode++)for(let ring=0;ring<40;ring++){
    const first=fieldPoint(mode,0,ring,2.5),last=fieldPoint(mode,Math.PI*2,ring,2.5);
    assert.ok(first.every(Number.isFinite));assert.ok(Math.abs(first[0]-last[0])<1e-9);assert.ok(Math.abs(first[1]-last[1])<1e-9);
  }
  assert.notDeepEqual(fieldPoint(0,1,12,2.5),fieldPoint(1,1,12,2.5));
  assert.notDeepEqual(fieldPoint(1,1,12,2.5),fieldPoint(2,1,12,2.5));
});
test('Homepage labels keep their order while Gesture and Sound use the exchanged shapes',()=>{
  const angle=1,ring=12,time=2.5,radius=.09+ring*.014;
  const wave=[Math.cos(angle)*radius,Math.sin(angle)*radius*(.32+.26*Math.sin(angle*6+ring*.16+time*.3)**2)];
  const envelope=Math.sin(angle*3+time*.18)*.12+Math.cos(angle*5-time*.12)*.06;
  const contour=[Math.cos(angle)*radius*(1+envelope),Math.sin(angle)*radius*.59*(1+envelope)];
  assert.deepEqual(fieldPoint(0,angle,ring,time),wave,'Gesture should use the former Sound waveform');
  assert.deepEqual(fieldPoint(1,angle,ring,time),contour,'Sound should use the former Gesture contour field');
});
test('Homepage line field opens on Sound and rotates every seven seconds',()=>{
  assert.equal(fieldDefaults.initialMode,1);
  assert.equal(fieldDefaults.rotationMs,7000);
});
