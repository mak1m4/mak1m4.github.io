import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';

test('Original renderers preserve the baseline apart from the approved ripple core tilt',()=>{
 const html=fs.readFileSync('public/experiences/shape-of-sound/index.html','utf8');
 const source=html.slice(html.indexOf('/* ---------- 效果 A'),html.indexOf('/* ---------- 公共元素'));
 const approvedTilt = '      push();\n      translate(cx, cy);\n      scale(1, SQUASH); // 与向外扩散的粒子波纹共用倾斜平面。\n      drawCore(34, 0, 0);\n      pop();';
 const normalized = source.replace(/\r\n/g,'\n');
 assert.ok(normalized.includes(approvedTilt));
 assert.equal(createHash('sha256').update(normalized.replace(approvedTilt,'      drawCore(34, cx, cy);')).digest('hex'),fs.readFileSync('tests/original-effects.sha256','utf8'));
 assert.ok(html.includes('./refined-modes.js'));
 assert.ok(!html.includes('pearl-mode.js'));
 assert.ok(!html.includes('pearl-motion.js'));
 assert.ok(!fs.existsSync('public/experiences/shape-of-sound/pearl-mode.js'));
 assert.ok(!fs.existsSync('public/experiences/shape-of-sound/pearl-motion.js'));
 assert.ok(!html.includes('sculpture-modes'));
 assert.ok(!fs.existsSync('public/experiences/shape-of-sound/sculpture-modes.js'));
});

test('Five requested modes remain in order and selected refinements render finite geometry',()=>{
 let points=0,sum=0;
 const point=(...args)=>{args.forEach(n=>assert.ok(Number.isFinite(n),String(n)));points++;sum+=args.reduce((a,b)=>a+b,0);};
 const noop=()=>{};
 const el=()=>({appendChild:noop,addEventListener:noop,replaceChildren:noop});
 const originals=Array.from({length:5},(_,i)=>({name:`Original ${i}`}));
 const ctx={save:noop,restore:noop,beginPath:noop,rect:point,moveTo:point,arc:point,clip:noop,fillRect:point,createRadialGradient:()=>({addColorStop:noop}),createLinearGradient:()=>({addColorStop:noop})};
 const c={Math,Uint8Array,Float32Array,Effects:[...originals],width:1440,height:900,frameCount:1,TWO_PI:Math.PI*2,CLOSE:'close',
  drawingContext:ctx,document:{getElementById:el,createElement:el},switchEffect:noop,
  PARAMS:{speed:1,reactivity:1,saturation:1,brightness:1,trail:80},
  PAL:{hue:285,sat:65,bri:75,warmHue:315,coolHue:260,bgHue:230,bgBri:3},drawCore:point,
  F:{level:0,bass:0,mid:0,treble:0,centroid:0.5,beat:false,beatPower:0},freqData:new Uint8Array(1024),
  random:(a=1,b)=>b===undefined?Math.random()*a:a+Math.random()*(b-a),noise:()=>0.5,
  constrain:(v,a,b)=>Math.max(a,Math.min(v,b)),lerp:(a,b,t)=>a+(b-a)*t,lerpHue:(a,b,t)=>a+(b-a)*t,
  map:(v,a,b,x,y)=>x+(v-a)/(b-a)*(y-x),min:Math.min,max:Math.max,floor:Math.floor,abs:Math.abs,sin:Math.sin,cos:Math.cos,atan2:Math.atan2,
  noFill:noop,noStroke:noop,fill:point,stroke:point,strokeWeight:point,beginShape:noop,endShape:noop,vertex:point,
  circle:point,ellipse:point,line:point,rect:point,push:noop,pop:noop,translate:point,rotate:point,scale:point};
 vm.runInNewContext(fs.readFileSync('public/experiences/shape-of-sound/refined-modes.js','utf8'),c);
 assert.equal(c.Effects.length,5);
 assert.equal(c.Effects[1],originals[1]);
 assert.equal(c.Effects[4],originals[4]);
 assert.deepEqual(Array.from(c.Effects,v=>v.name),['Particle Ripple','Spectral Bloom','Nebula Flow','Paint Splash','Corridor']);
 for(const fx of [c.Effects[0],c.Effects[2],c.Effects[3]]) {
  for(const [w,h] of [[1440,900],[390,844]]) {
   c.width=w;c.height=h;fx.enter();
   for(const active of [false,true]) {
    Object.assign(c.F,{level:active?0.7:0,bass:active?180:0,mid:active?140:0,treble:active?100:0,beat:active,beatPower:active?0.8:0,centroid:active?0.9:0.3});
    c.freqData.fill(active?180:0); points=0;sum=0;
    for(let f=0;f<4;f++){c.frameCount++;fx.draw();}
    assert.ok(Number.isFinite(sum));if(active)assert.ok(points>20,fx.name);
   }
  }
 }
});
