/* Independent refinements of the original five modes. Original code remains in index.html.
 * No generated reference images are used at runtime. */
(() => {
const polishHash = n => { const x = Math.sin(n * 127.1) * 43758.5453; return x - Math.floor(x); };
function polishBlob(x,y,r,seed) {
  beginShape();
  for(let i=0;i<40;i++) { const a=i/40*TWO_PI, rr=r*(0.84+0.12*sin(a*3+seed)+0.09*sin(a*7+seed*0.4)); vertex(x+cos(a)*rr,y+sin(a)*rr); }
  endShape(CLOSE);
}
function polishCore(x,y,r,hue) {
  const c=drawingContext; c.save();
  const g=c.createRadialGradient(x,y,0,x,y,r*5);
  g.addColorStop(0,`hsla(${hue},70%,85%,${Math.min(0.7,0.4*PARAMS.brightness)})`);
  g.addColorStop(0.2,`hsla(${hue},65%,65%,0.12)`);g.addColorStop(1,`hsla(${hue},65%,30%,0)`);
  c.fillStyle=g;c.fillRect(x-r*5,y-r*5,r*10,r*10);c.restore();
  noStroke();fill(hue,35*PARAMS.saturation,min(100,90*PARAMS.brightness),85);circle(x,y,r*1.2);
}
/* ---------- 效果 A：粒子涟漪（圆环荡漾） ----------
   一整片发光粒子铺成的水面（略作透视压扁成椭圆）。波动由两层叠加而成：
   ① 载波 —— 一列固定波长、持续向外行进的同心正弦波：画面上永远有"一圈圈"在往外扩；
   ② 波包 —— 节拍 / 能量激起的高斯包络波列：像石子入水，推出格外强的一圈亮环。
   两者共同给出每颗粒子处的水面相位 θ = k·r − ωt：
     · 高度   h = cos θ    → 波峰把粒子抬起、提亮、放大；波谷让它沉下、压暗、缩小；
     · 径向位移 u = −sin θ  → 与高度相差 90°，粒子沿椭圆轨道运动（真实水波的质点轨迹），
                            并恰好在波峰处彼此聚拢 —— 密集 = 亮环，稀疏 = 暗谷。
   密度、亮度、隆起三者同时在波峰叠加，明暗相间的同心圆环便一圈圈向外荡漾开去。 */
(function () {
  let field = [];             // 粒子：固定极坐标 {r, a, ca, sa, tw, size}
  let waves = [];             // 波包
  let spawnT = 0;             // 波包生成计时
  let carrierPhase = 0;       // 载波相位（每帧推进 → 圆环持续外扩）
  let carrierAmp = 0;         // 载波振幅（音频驱动，已平滑）
  let builtFor = -1;          // 建场时的 maxR，窗口尺寸变化后重铺

  const SQUASH = 0.46;        // 透视压扁系数（把圆环压成椭圆）
  const MAXW = 12;            // 同屏波包上限

  class Wave {
    constructor(strength, big) {
      this.radius = 10;
      this.strength = strength;
      this.big = !!big;                 // 节拍激起的强波：额外描出光环
    }
    update(spd) {
      this.radius += spd * 1.06;        // 略快于载波，会穿过水面既有的波纹
      this.strength *= 0.9955;          // 衰减极慢 → 荡漾得又远又久
    }
    // 有效振幅：能量摊在越来越长的圆周上，随半径自然减弱
    env(refR) { return this.strength * Math.sqrt(refR / (refR + this.radius)); }
    get dead() { return this.strength < 0.02 || this.radius > Math.hypot(width, height) * 0.62; }
  }

  function buildField(maxR) {
    const n = constrain(Math.round(width * height / 340), 2400, 5200);
    field = Array.from({ length: n }, () => {
      const a = random(TWO_PI);
      return {
        r: Math.sqrt(random()) * maxR * 1.05,   // 面积均匀撒点，铺满整个圆盘
        a, ca: Math.cos(a), sa: Math.sin(a),
        tw: random(TWO_PI),
        size: random(0.45, 1.45),
      };
    });
    builtFor = maxR;
  }

  Effects.push({
    name: "Particle Ripple · Refined",
    trailAlpha: 28,             // 拖尾略短：圈与圈之间的暗谷更干净，波纹更清晰
    enter() {
      buildField(Math.hypot(width, height) / 2);
      waves = []; spawnT = 0; carrierPhase = 0; carrierAmp = 0;
    },
    draw() {
      const cx = width / 2, cy = height * 0.54;
      const maxR = Math.hypot(width, height) / 2;
      if (Math.abs(maxR - builtFor) > 2) buildField(maxR);      // 窗口变化 → 重铺粒子场

      // —— 波长 / 波数：全场统一，圈与圈之间才会等距规整 ——
      const lambda = maxR * 0.15;                                // 相邻两圈的间距（同屏约 6-7 圈）
      const k = TWO_PI / lambda;

      // —— 波速：能量越强，圈扩得越快 ——
      const spd = (1.8 + F.level * 9) * PARAMS.speed;
      carrierPhase += k * spd;                                   // 相位推进 ≡ 波峰以 spd 像素/帧 向外行进

      // —— 载波振幅：安静时水面微澜，激昂时波涛起伏 ——
      const drive = constrain(0.12 + F.level * 1.7 + (F.bass / 950) * PARAMS.reactivity, 0, 1.1);
      carrierAmp = lerp(carrierAmp, drive, 0.14);

      const pushPx = 0.78 / k;              // 径向位移尺度：使波峰处的粒子强烈聚拢，逼近焦散般的亮环
      const liftPx = maxR * 0.045;          // 波峰在屏幕上"隆起"的高度（水面起伏）
      const refR = maxR * 0.42;

      // —— 生成波包 ——
      spawnT++;
      const interval = Math.max(24, 72 - F.level * 120);         // 越激昂，石子落得越密
      if (spawnT >= interval) { spawnT = 0; waves.push(new Wave(0.30 + F.level * 0.6, false)); }
      if (F.beat) waves.push(new Wave(constrain(0.8 + F.beatPower * 0.9, 0.5, 1.7), true));
      for (const w of waves) w.update(spd);
      waves = waves.filter(w => !w.dead);
      if (waves.length > MAXW) waves.splice(0, waves.length - MAXW);

      const sig = lambda * 0.62;            // 波包包络宽度（一主峰 + 两侧各一谷）
      const invSig2 = 1 / (2 * sig * sig);
      const cut = sig * 2.6;

      // —— 先勾出波峰光环：让"一圈圈"的轮廓明确可读 ——
      noFill();
      for (const w of waves) {
        const e = w.env(refR);
        const g = (w.big ? 26 : 11) * e;
        if (g < 1.2) continue;
        for (let i = 0; i < 3; i++) {                            // 主峰 + 尾随一圈 → 波列感
          const rr = w.radius - i * lambda;
          if (rr < 10) continue;
          stroke((PAL.hue + 6) % 360, PAL.sat * 0.6, min(PAL.bri + 18, 100), g * Math.pow(0.36, i));
          strokeWeight((w.big ? 2.0 : 1.1) * (0.7 + e));
          ellipse(cx, cy - e * liftPx * (i ? 0.27 : 1), rr * 2, rr * 2 * SQUASH);
        }
      }

      // —— 粒子场：逐颗求水面高度 h 与径向位移 u ——
      const cph = Math.cos(carrierPhase), sph = Math.sin(carrierPhase);
      const wob = 0.008 + F.treble / 16000;                      // 圆环的轻微不规则，去掉机械感
      const t = frameCount * 0.02;
      noStroke();
      for (const p of field) {
        const rEff = p.r * (1 + wob * Math.sin(p.a * 3 + t));

        // 载波：h = cos(k·r − φ)，u = −sin(k·r − φ)
        const kr = k * rEff;
        const ck = Math.cos(kr), sk = Math.sin(kr);
        let h = carrierAmp * (ck * cph + sk * sph);
        let u = -carrierAmp * (sk * cph - ck * sph);

        // 波包：同波长、高斯包络，与载波相干叠加
        for (const w of waves) {
          const d = rEff - w.radius;
          if (d > cut || d < -cut) continue;
          const e = Math.exp(-d * d * invSig2) * w.env(refR);
          const th = k * d;
          h += e * Math.cos(th);
          u -= e * Math.sin(th);
        }
        h = constrain(h, -1.5, 1.8);
        u = constrain(u, -1.6, 1.6);

        const rr = rEff + u * pushPx;                            // 径向：波峰处聚拢 → 密集亮环
        const x = cx + p.ca * rr;
        const y = cy + p.sa * rr * SQUASH - h * liftPx;          // 纵向：波峰隆起 → 水面起伏

        const crest = Math.max(0, h);
        const radial = 1 - constrain(p.r / maxR, 0, 1);          // 暗角：中心亮、边缘暗
        const near = 0.60 + 0.65 * (p.sa * 0.5 + 0.5);           // 近端（画面下方）略大略亮
        const twk = 0.8 + 0.2 * Math.sin(frameCount * 0.06 + p.tw);
        const shade = constrain(0.55 + 0.62 * h, 0.12, 1.5);     // 波谷压暗、波峰提亮（谷底仍留一层微光，水面不会消失）

        const hue = (PAL.hue + (1 - radial) * 10 + crest * 10) % 360;
        const b = constrain(PAL.bri * (0.20 + radial * 0.40 + crest * 0.5) * shade * (0.85 + F.level) * twk * near, 3, 100);
        const al = constrain(28 + radial * 30 + crest * 42 + Math.min(h, 0) * 10, 12, 100);
        const sz = p.size * (1.05 + crest * 1.5) * near;

        if (crest > 0.9 && p.size > 1.2) {                                       // 波峰粒子外罩一层柔光 → 亮环发光
          fill(hue, PAL.sat * 0.75, min(b + 8, 100), al * 0.08);
          circle(x, y, sz * 2.0);
        }
        fill(hue, PAL.sat * (crest > 0.8 ? 0.5 : 0.85), min(100, b * 1.65 + crest * 18), min(100, al * 1.2));
        circle(x, y, sz);
      }

      // 原模式的音量 / 节拍呼吸，投影到粒子水面的同一倾斜平面。
      // 径向振动先在平面内计算，再统一压缩 Y 轴。
      const coreR = 34 * (0.6 + F.level * 2.6) + (F.beat ? F.beatPower * 14 : 0);
      const corePoints = [];
      for (let i = 0; i < 128; i++) {
        const a = i / 128 * TWO_PI;
        const vibration = (F.mid / 255) * 0.045 * Math.sin(a * 8 + carrierPhase)
          + (F.treble / 255) * 0.025 * Math.sin(a * 19 - carrierPhase);
        const rr = coreR * (1 + vibration * PARAMS.reactivity);
        corePoints.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr * SQUASH]);
      }
      noFill();
      for (const [weight, alpha] of [[9, 9], [4.5, 22], [1.6, 95]]) {
        stroke(PAL.hue, PAL.sat * 0.55, min(PAL.bri + 25, 100), alpha);
        strokeWeight(weight);
        beginShape();
        for (const [x, y] of corePoints) vertex(x, y);
        endShape(CLOSE);
      }
      // 两层内环共享外环的投影与音频振动，留出更多呼吸空间。
      for (const ratio of [0.68, 0.36]) {
        stroke(PAL.hue, PAL.sat * 0.5, min(PAL.bri + 22, 100), 30 + ratio * 45);
        strokeWeight(0.75 + ratio * 0.55);
        beginShape();
        for (const [x, y] of corePoints) vertex(cx + (x - cx) * ratio, cy + (y - cy) * ratio);
        endShape(CLOSE);
      }
      // 小亮点固定在波源中心，柔光也沿水面倾斜。
      const dotSize = 3 + Math.min(coreR * 0.07, 4);
      noStroke();
      fill(PAL.hue, PAL.sat * 0.45, min(PAL.bri + 25, 100), 16);
      ellipse(cx, cy, dotSize * 3.5, dotSize * 3.5 * SQUASH);
      fill(PAL.hue, PAL.sat * 0.25, min(PAL.bri + 30, 100), 100);
      circle(cx, cy, dotSize);
    },
  });
})();


/* ---------- 效果 B：频谱绽放（色彩爆发） ---------- */
(function () {
  let shards = [], rot = 0;

  class Shard {
    constructor(power) {
      const a = random(TWO_PI);
      const sp = 4 + power * random(6, 14);
      const rim = min(width, height) * (0.18 + power * 0.12);
      this.x = width / 2 + cos(a) * rim; this.y = height / 2 + sin(a) * rim;
      this.vx = cos(a) * sp; this.vy = sin(a) * sp;
      this.len = random(6, 22) * (0.6 + power);
      this.hue = (PAL.hue + random(-40, 40) + 360) % 360;
      this.alpha = 100;
    }
    update() { this.x += this.vx; this.y += this.vy; this.vx *= 0.97; this.vy *= 0.97; this.alpha *= 0.94; }
    draw() {
      const a = atan2(this.vy, this.vx);
      stroke(this.hue, PAL.sat, PAL.bri, this.alpha);
      strokeWeight(1.6);
      line(this.x, this.y, this.x - cos(a) * this.len, this.y - sin(a) * this.len);
    }
    get dead() { return this.alpha < 3; }
  }

  Effects.push({
    name: "Spectral Bloom · Refined",
    enter() { shards = []; rot = 0; },
    draw() {
      const spec = freqData || new Uint8Array(64);
      rot += (0.0015 + F.treble / 40000) * PARAMS.speed;

      push();
      translate(width / 2, height / 2);
      rotate(rot);
      const N = 220, baseR = min(width, height) * 0.16;
      for (let i = 0; i < N; i++) {
        const bin = floor(map(i, 0, N, 2, spec.length * 0.55));
        const v = spec[bin] / 255;
        const a = (i / N) * TWO_PI;
        const len = min(v * min(width, height) * 0.23 * (0.65 + F.level * 1.4), min(width, height) * 0.25);
        const hue = 43 + v * 13;
        stroke(hue, PAL.sat, constrain(PAL.bri * (0.35 + v * 1.1), 10, 100), 88);
        strokeWeight(0.8);
        const r0 = baseR + min(F.bass * 0.055, min(width,height)*0.025);
        line(cos(a) * r0, sin(a) * r0, cos(a) * (r0 + len), sin(a) * (r0 + len));
        // Secondary bundled filaments and restrained lime tips.
        for (const offset of [-0.004, 0.004]) {
          stroke(48, 65 * PARAMS.saturation, min(90, PAL.bri + 12), 24);
          strokeWeight(0.4);
          line(cos(a + offset) * r0, sin(a + offset) * r0, cos(a + offset) * (r0 + len * 0.92), sin(a + offset) * (r0 + len * 0.92));
        }
        if (v > 0.42) {
          stroke(i % 7 === 0 ? 83 : 48, 68 * PARAMS.saturation, min(100, 83 * PARAMS.brightness), 75);
          strokeWeight(1.1);
          line(cos(a) * (r0 + len * 0.92), sin(a) * (r0 + len * 0.92), cos(a) * (r0 + len), sin(a) * (r0 + len));
        }
        // 内侧镜像，形成花瓣感
        stroke(hue, PAL.sat * 0.8, PAL.bri * 0.6, 40);
        strokeWeight(1.2);
        line(cos(a) * r0, sin(a) * r0, cos(a) * (r0 - len * 0.35), sin(a) * (r0 - len * 0.35));
      }
      pop();

      if (F.beat) {
        const n = floor(6 + F.beatPower * 14);
        for (let i = 0; i < n; i++) shards.push(new Shard(F.beatPower));
      }
      shards = shards.filter(s => !s.dead);
      shards.forEach(s => { s.update(); s.draw(); });
      polishCore(width / 2, height / 2, 4 + F.level * 8, 45);
    },
  });
})();


/* ---------- 效果 C：星云流场（漩涡流线） ----------
   参考“流场生成艺术”：大量细流粒子在一个「漩涡 + 曲线噪声」流场里游走，
   长拖尾把它们的轨迹累积成一圈圈卷向中心的星云流线。
   中心暖亮（漩涡之眼）、边缘冷暗，另有大小不一的星点散布其间。
   音频驱动：流速、湍流强度、向内螺旋的松紧、亮度与节拍闪烁。 */
(function () {
  let streams = [], orbs = [];
  let swirlDir = 1;                              // 每首曲子随机漩涡方向

  // 细流粒子：每帧只画一小段线，靠拖尾累积成连续流线
  class Stream {
    constructor() { this.respawn(); }
    respawn() {
      this.x = random(width); this.y = random(height);
      this.px = this.x; this.py = this.y;
      this.hueOff = random(-18, 18); this.depth = random(0.25, 1);
      this.life = random(120, 460);
    }
    step(t, scale, cx, cy, spiral, turb, spd) {
      const dx = this.x - cx, dy = this.y - cy;
      const r = Math.hypot(dx, dy);
      const base = Math.atan2(dy, dx);
      const n = noise(this.x * scale, this.y * scale, t);
      // 切向(绕中心)略偏内 → 向心螺旋；叠加噪声让流线自然弯曲
      const ang = base + spiral * swirlDir + (n - 0.5) * turb;
      this.px = this.x; this.py = this.y;
      this.x += Math.cos(ang) * spd * this.depth;
      this.y += Math.sin(ang) * spd * this.depth;
      this.life--;
      if (this.life < 0 || r < 8 ||
          this.x < -12 || this.x > width + 12 || this.y < -12 || this.y > height + 12) this.respawn();
    }
    render(cx, cy, maxR) {
      const rr = constrain(Math.hypot(this.x - cx, this.y - cy) / maxR, 0, 1);
      const hue = (285 + 25 * (1 - rr) + this.hueOff) % 360;  // 中心暖、边缘冷
      const flash = F.beat ? 20 * F.beatPower : 0;
      const bri = constrain(PAL.bri * (lerp(0.95, 0.42, rr) + F.level * 1.5) + flash, 6, 100);
      const sat = constrain(PAL.sat * lerp(0.85, 1.05, rr), 0, 100);
      stroke(hue, sat, bri, 16 + this.depth * 42);
      strokeWeight(0.25 + this.depth * 0.65);   // 越靠中心线越粗
      line(this.px, this.py, this.x, this.y);
      if (this.depth > 0.94 && this.life % 13 < 2) {
        noStroke(); fill(hue, sat * 0.4, min(100, bri + 20), 65); circle(this.x, this.y, 1.5);
      }
    }
  }

  // 星点：较大的发光圆，沿流场缓慢漂移
  class Orb {
    constructor() { this.respawn(); }
    respawn() {
      // 生成在漩涡之眼之外（避开中心亮核区）
      const eyeR = min(width, height) * 0.24;
      let x, y, tries = 0;
      do {
        x = random(width); y = random(height);
        tries++;
      } while (Math.hypot(x - width / 2, y - height / 2) < eyeR && tries < 10);
      this.x = x; this.y = y;
      this.px = x; this.py = y;
      this.size = random(1.0, 3.0);
      this.hueOff = random(-18, 18);
      this.band = random();
      this.life = random(240, 760);
    }
    step(t, scale, cx, cy, spiral, spd) {
      const dx = this.x - cx, dy = this.y - cy;
      const r = Math.hypot(dx, dy);
      const base = Math.atan2(dy, dx);
      const n = noise(this.x * scale + 5, this.y * scale + 5, t);
      const ang = base + spiral * swirlDir + (n - 0.5) * 1.0;
      const slow = spd * 0.16;                                // 比细流慢得多，拖尾只留很淡的尾迹
      this.px = this.x; this.py = this.y;
      this.x += Math.cos(ang) * slow;
      this.y += Math.sin(ang) * slow;
      this.life--;
      // 漂入漩涡之眼就重生到外围，保证眼内没有星点
      if (this.life < 0 || r < min(width, height) * 0.24 ||
          this.x < -20 || this.x > width + 20 || this.y < -20 || this.y > height + 20) this.respawn();
    }
    render(cx, cy, maxR) {
      const rr = constrain(Math.hypot(this.x - cx, this.y - cy) / maxR, 0, 1);
      const hue = (285 + 25 * (1 - rr) + this.hueOff) % 360;
      const e = this.band < 0.5 ? F.bass : F.treble;
      const s = this.size * (0.7 + e / 210) * (0.85 + F.level * 1.1);
      const bri = constrain(PAL.bri * lerp(1.05, 0.55, rr) + (F.beat ? 16 * F.beatPower : 0), 10, 100);
      noStroke();
      fill(hue, PAL.sat * 0.75, bri, 20);
      circle(this.x, this.y, s * 2.3);                       // 柔光
      fill(hue, PAL.sat * 0.9, min(bri + 12, 100), 88);
      circle(this.x, this.y, s);                             // 实心核
    }
  }

  // 漩涡之眼：中心暖亮辉光
  function centerGlow(cx, cy) {
    const R = min(width, height) * (0.045 + F.level * 0.11) + (F.beat ? F.beatPower * 18 : 0);
    noStroke();
    for (let i = 6; i >= 1; i--) {
      fill((PAL.warmHue + 360) % 360, PAL.sat * 0.5, min(PAL.bri + 24, 100), 3.5 * i);
      circle(cx, cy, R * (1 + i * 0.6) * 2);
    }
    fill((PAL.warmHue + 8) % 360, PAL.sat * 0.28, 100, 90);
    circle(cx, cy, R * 0.9);
  }

  Effects.push({
    name: "Nebula Flow · Refined",
    enter() {
      swirlDir = random() < 0.5 ? 1 : -1;
      streams = Array.from({ length: width < 700 ? 900 : 1900 }, () => new Stream());
      orbs = Array.from({ length: 10 }, () => new Orb());
    },
    draw() {
      const cx = width / 2, cy = height / 2;
      const maxR = Math.hypot(width, height) / 2;
      const t = frameCount * (0.0016 + F.treble / 70000) * PARAMS.speed;   // 噪声缓慢演化
      const scale = 0.0016 + F.centroid * 0.0012;                          // 噪声尺度（质心→细节）
      const spd = (0.9 + F.level * 7 + F.mid / 260) * PARAMS.speed;        // 流速
      const turb = 0.65 + F.level * 1.4;                                    // 湍流强度（越大越弯曲）
      const spiral = 1.40 - F.bass / 1500;                                 // < π/2：向内螺旋，低频收得更紧
      for (const s of streams) { s.step(t, scale, cx, cy, spiral, turb, spd); s.render(cx, cy, maxR); }
      // 亮核与外围光晕共用尺寸参数，整体缩至上一版的 2/3。
      const paintRingRadius = 34 * (0.6 + F.level * 2.6) + (F.beat ? F.beatPower * 14 : 0);
      polishCore(cx, cy, paintRingRadius / 1.2 * (2 / 3), 315);
      for (const o of orbs) { o.step(t, scale, cx, cy, spiral, spd); o.render(cx, cy, maxR); }
    },
  });
})();


/* ---------- 效果 D：颜料飞溅（色彩爆发） ----------
   在屏幕各处随机爆开一团团颜料：中心浓斑 + 四散的液滴 + 甩出的长条飞溅。
   节拍触发大爆发，音频能量持续催生小飞溅；每团颜料的色相取自当前情绪调色板。 */
(function () {
  let splats = [];

  // 单个液滴 / 甩痕
  class Droplet {
    constructor(ox, oy, ang, dist, size, hue, streak) {
      this.ox = ox; this.oy = oy;          // 爆心
      this.ang = ang;
      this.targetDist = dist;              // 最终飞出的距离
      this.dist = 0;
      this.size = size;
      this.hue = hue;
      this.streak = streak;                // 是否为甩出的长条
      this.speed = random(0.18, 0.34);
      this.wobble = random(-0.25, 0.25);   // 甩痕的轻微弯曲
    }
    grow() {
      // 缓出：快速飞出后减速定住，模拟颜料溅出
      this.dist += (this.targetDist - this.dist) * this.speed;
      this.speed *= 0.9;
      // Keep landed pigment still; only the initial burst bends.
      this.ang += this.wobble * this.speed * 0.025;
    }
    draw(alpha, hueShift) {
      const x=this.ox+cos(this.ang)*this.dist, y=this.oy+sin(this.ang)*this.dist;
      const h=(this.hue+hueShift+360)%360;
      if(this.streak) {
        noFill(); stroke(h,PAL.sat,PAL.bri,alpha*0.8); strokeWeight(max(1.0,this.size*0.65));
        beginShape();
        for(let i=0;i<=16;i++) {
          const f=i/16, a=this.ang+this.wobble*(1-f)*0.6;
          vertex(this.ox+cos(a)*this.dist*f,this.oy+sin(a)*this.dist*f);
        }
        endShape();
      }
      push();translate(x,y);rotate(this.ang);
      noStroke();fill(h,PAL.sat,PAL.bri,alpha);
      ellipse(0,0,this.size*(this.streak?1.8:1.2),this.size*0.8);
      if(alpha>60) {fill(h,20,98,alpha*0.55);ellipse(-this.size*0.2,-this.size*0.18,this.size*0.5,this.size*0.18);}
      pop();
    }
  }

  // 一团完整的颜料爆发
  class Splat {
    constructor(x, y, power, hue) {
      this.x = x; this.y = y;
      this.power = power;                  // 0-1，决定规模
      this.hue = hue;
      this.life = 1;                       // 逐渐淡出
      this.fade = random(0.0025, 0.005);
      this.coreSize = (8 + power * 26) * random(0.8, 1.2);
      this.hueShift = 0; this.seed = random(1000); this.bias = random(TWO_PI);
      this.drops = [];

      const spread = min(width, height);
      const n = floor(22 + power * 60);    // 液滴数量随能量增加
      for (let i = 0; i < n; i++) {
        const ang = random() < 0.6 ? this.bias + random(-1.05, 1.05) : random(TWO_PI);
        const dist = random(0.15, 1) * (18 + power * spread * 0.14);
        const size = random(1.5, 6) * (0.6 + power);
        this.drops.push(new Droplet(x, y, ang, dist, size, hue, false));
      }
      // 几条甩出的长飞溅
      const streaks = floor(5 + power * 10);
      for (let i = 0; i < streaks; i++) {
        const ang = random() < 0.6 ? this.bias + random(-1.05, 1.05) : random(TWO_PI);
        const dist = (30 + power * spread * 0.22) * random(0.7, 1.3);
        const size = random(2, 5) * (0.7 + power);
        this.drops.push(new Droplet(x, y, ang, dist, size, hue, true));
      }
    }
    update() {
      this.life -= this.fade;
      this.hueShift += 0.015;               // 缓慢偏色，让颜料更"活"
      this.drops.forEach(d => d.grow());
    }
    draw() {
      const a = constrain(this.life, 0, 1);
      const alpha = Math.pow(a, 0.45) * 100;
      // 中心浓斑（多层叠加出湿润的厚涂感）
      noStroke();
      const h = (this.hue + this.hueShift + 360) % 360;
      fill(h, min(100,PAL.sat * 1.3), PAL.bri * 0.85, alpha * 0.9);
      polishBlob(this.x, this.y, this.coreSize * (1.25 - a * 0.25), this.seed);      // 略微扩散
      fill(h, min(100,PAL.sat * 1.3), PAL.bri, alpha);
      polishBlob(this.x, this.y, this.coreSize * 0.77, this.seed + 17);
      // 高光点，增加立体感
      fill((h + 15) % 360, PAL.sat * 0.5, min(PAL.bri + 30, 100), alpha * 0.8);
      if (a > 0.65) ellipse(this.x - this.coreSize * 0.24, this.y - this.coreSize * 0.2, this.coreSize * 0.29, this.coreSize * 0.1);
      for (let i = 0; i < 160; i++) {
        const ang = i * 2.39996 + this.seed;
        const rr = this.coreSize * (0.65 + polishHash(i + this.seed) * 3.3);
        fill(h, PAL.sat * 0.9, PAL.bri * (0.7 + a * 0.3), alpha * 0.6);
        circle(this.x + cos(ang) * rr, this.y + sin(ang) * rr, 0.5 + polishHash(i * 9 + this.seed) * 1.5);
      }
      // 四散的液滴与甩痕
      this.drops.forEach(d => d.draw(alpha, this.hueShift));
    }
    get dead() { return this.life <= 0; }
  }

  function spawnSplat(power) {
    // 在屏幕各处随机取点（略微偏向中心区域，避免全挤在边缘）
    const x = random(width * 0.08, width * 0.92);
    const y = random(height * 0.08, height * 0.92);
    // 只让爆心避开当前圆环，保留较小的自然间距；飞溅按原尺寸自由展开。
    const coreReach = (34 * (0.6 + F.level * 2.6) + (F.beat ? F.beatPower * 14 : 0)) * 1.6;
    if (Math.hypot(x - width / 2, y - height / 2) < coreReach + random(15, 30)) return;
    const hue = random() < 0.08 ? 280 : (random() < 0.7 ? random(2, 16) : random(28, 40));
    splats.push(new Splat(x, y, power, hue));
    // 数量上限，保护性能
    if (splats.length > 9) splats.shift();
  }

  Effects.push({
    name: "Paint Splash · Refined",
    trailAlpha: 9,   // 更弱的拖尾，让颜料在画面上停留更久、逐渐堆叠
    enter() { splats = []; },
    draw() {
      // 节拍 → 一次大爆发（能量越强，可能连喷两团）
      if (F.beat) {
        spawnSplat(constrain(F.beatPower * 1.1, 0.3, 1));
        if (F.beatPower > 0.7 && random() < 0.5) spawnSplat(F.beatPower * 0.8);
      }
      // 持续能量 → 随机的小飞溅，让画面始终鲜活
      if (F.level > 0.04 && random() < F.level * 0.16) {
        spawnSplat(constrain(F.level * 2.5, 0.15, 0.7));
      }

      splats = splats.filter(s => !s.dead);
      splats.forEach(s => { s.update(); s.draw(); });
      drawCore(34, width / 2, height / 2);
    },
  });
})();


/* ---------- 效果 E：维度回廊（频谱透视空间） ----------
   用频谱数据搭建一个单点透视的三维回廊：
   · 低频 → 地平线下沉，画面底部被挤压，色调转沉郁；
   · 高频 → 地平线上方“天际线”光晕向上扩散；
   · 频谱质心(音色亮度) → 透视灭点的位置与性格：
       明亮 → 灭点远远沉在地平线上，化作放射的“天堂之光”，回廊无限深远，
              地形自灭点向观者奔涌而来；
       低沉 → 灭点上浮、坍缩到屏幕正中，化作吞噬一切的黑洞，
              地形被向心卷入、退向灭点而消失。
   频谱以“瀑布”方式沿纵深层层退去，构成回廊地面的山脊。 */
(function () {
  const COLS = 112;      // 每条山脊的横向采样数
  const MAXR = 44;      // 同屏最多山脊数
  let ridges = [];      // {p:纵深 0(远/灭点)~1(近/底边), spec:Float32Array 频谱快照}
  let spawnAcc = 0;
  let stars = [];
  let vpXs = 0, portalYs = 0, horizonYs = 0;   // 平滑后的关键坐标
  let portalIsSun = false;                      // 太阳/黑洞的迟滞状态

  // 取当前频谱，压成 COLS 列（对数偏置，低频占更多列，更有地形感）
  function snapSpectrum() {
    const spec = freqData || new Uint8Array(COLS);
    const out = new Float32Array(COLS);
    const usable = Math.max(4, Math.floor(spec.length * 0.62));
    for (let i = 0; i < COLS; i++) {
      const f = i / (COLS - 1);
      const idx = Math.min(usable - 1, Math.floor(Math.pow(f, 1.35) * usable));
      let m = 0;
      for (let k = -1; k <= 1; k++) {
        const j = Math.max(0, Math.min(usable - 1, idx + k));
        if (spec[j] > m) m = spec[j];
      }
      out[i] = m / 255;
    }
    return out;
  }

  Effects.push({
    name: "Corridor · Refined",
    trailAlpha: 34,      // 稍短的拖尾，让线框保持清晰
    enter() {
      ridges = [];
      spawnAcc = 0;
      for (let i = 0; i < MAXR; i++) ridges.push({ p: i / MAXR, spec: snapSpectrum() });
      stars = Array.from({ length: 130 }, () => ({
        x: random(1), y: random(1), z: random(0.4, 1), tw: random(TWO_PI),
      }));
      vpXs = width / 2; horizonYs = height * 0.5; portalYs = height * 0.5;
    },
    draw() {
      const bassN  = constrain(F.bass / 255, 0, 1);
      const trebN  = constrain(F.treble / 255, 0, 1);
      // 重新映射音色亮度：把判定门槛进一步抬高，让更多中/偏亮音色也被判为“低沉”→ 黑洞。
      // 把原始质心 0.52~0.92 拉伸到 0~1，使太阳/黑洞交界点落在原始质心≈0.72 处：
      // 质心低于约 0.68 → 黑洞，高于约 0.74 → 太阳，只有明显偏亮的音乐才是太阳。
      const bright = constrain(map(F.centroid, 0.52, 0.92, 0, 1), 0, 1);
      const gloom  = 1 - bright;
      const lvl    = F.level;

      // 太阳 / 黑洞 迟滞切换：进入需越过 0.58，退出需跌破 0.42，避免在门槛处反复闪烁
      if (portalIsSun && bright < 0.42) portalIsSun = false;
      else if (!portalIsSun && bright > 0.58) portalIsSun = true;

      // —— 关键坐标 ——
      // 地平线：低频将它压向底部（下沉 / 塌陷）
      const horizonYt = height * (0.44 + bassN * 0.07);
      // 灭点 X 轻微摆动；Y：亮→落在地平线，暗→上浮至屏幕正中（黑洞）
      const vpXt     = width / 2 + sin(frameCount * 0.006) * width * 0.015;
      const portalYt = lerp(height * 0.47, horizonYt, bright);
      vpXs      = lerp(vpXs, vpXt, 0.06);
      horizonYs = lerp(horizonYs, horizonYt, 0.06);
      portalYs  = lerp(portalYs, portalYt, 0.05);
      const vpX = vpXs, portalY = portalYs, horiz = horizonYs;

      // —— 天空：星点 + 天际线光晕（高频向上扩散）——
      drawSky(horiz, portalY, bright, trebN);

      // —— 透视轨道线（放射“铁轨”，收敛于灭点）——
      drawRails(vpX, portalY, bright);

      // —— 频谱山脊瀑布 ——
      // 有向前进：亮→向观者涌来(+)，暗→退向灭点被吸入(-)，中性→近乎静止
      let dirRaw = (bright - 0.5) * 2;
      if (Math.abs(dirRaw) < 0.12) dirRaw = 0;
      else dirRaw = Math.sign(dirRaw) * map(Math.abs(dirRaw), 0.12, 1, 0, 1);
      const stepMag = (0.0015 + lvl * 0.009) * PARAMS.speed;
      const step = stepMag * dirRaw +
                   (F.beat ? F.beatPower * 0.02 * Math.sign(dirRaw || 1) : 0);

      for (const r of ridges) r.p += step;
      ridges = ridges.filter(r => r.p >= -0.06 && r.p <= 1.06);
      spawnAcc += Math.abs(step);
      const spacing = 1 / MAXR;
      while (spawnAcc >= spacing) {
        spawnAcc -= spacing;
        ridges.push({ p: dirRaw >= 0 ? 0 : 1, spec: snapSpectrum() });
      }
      if (ridges.length > MAXR + 6) ridges.splice(0, ridges.length - (MAXR + 6));

      ridges.sort((a, b) => a.p - b.p);         // 远(小p)先画，近(大p)覆盖
      for (const r of ridges) drawRidge(r, vpX, portalY, gloom);

      // —— 灭点：太阳(亮) / 黑洞(暗) ——
      drawPortal(vpX, portalY, bright, lvl, portalIsSun);
    },
  });

  // 放射轨道线：从底边各点收敛到灭点
  function drawRails(vpX, portalY, bright) {
    const n = 8;
    strokeWeight(1);
    for (let i = 0; i <= n; i++) {
      const u = i / n;
      stroke((PAL.hue + 360) % 360, PAL.sat * 0.55, PAL.bri * 0.75, lerp(2, 7, bright));
      line(u * width, height * 1.02, vpX, portalY);
    }
  }

  // 一条频谱山脊。p:纵深(0远~1近)；沿轨道向灭点收敛，频谱值向上隆起
  function drawRidge(r, vpX, portalY, gloom) {
    const s = Math.pow(constrain(r.p, 0, 1), 1.35);
    const amp = min(width, height) * 0.25 * s * (0.6 + F.level * 1.3);
    const baseY = portalY + (height * 1.04 - portalY) * s;
    const pts = [];
    for (let i = 0; i < COLS; i++) {
      const u = i / (COLS - 1), side = abs(u - 0.5) * 2;
      const detail = (sin(i * 1.7 + r.spec[i] * 4) * 0.025 + 0.035) * side;
      const v = r.spec[i] * (0.45 + side * 0.55) + detail;
      pts.push([vpX + (u - 0.5) * width * (0.045 + s * 1.65), baseY - v * amp]);
    }
    // Opaque valley faces occlude far ridges before the crest is drawn.
    noStroke(); fill(255, 35, 3.5 + (1 - s) * 2, 100);
    beginShape(); pts.forEach(p => vertex(...p));
    vertex(pts[pts.length - 1][0], height * 1.1); vertex(pts[0][0], height * 1.1); endShape(CLOSE);
    noFill(); stroke(285 + s * 30, 65 * PARAMS.saturation, min(100, (28 + s * 53) * PARAMS.brightness), 25 + s * 65);
    strokeWeight(0.5 + s * 0.7); beginShape(); pts.forEach(p => vertex(...p)); endShape();
    if (s > 0.4) {
      for (let i = 2; i < pts.length - 2; i++) {
        const p = pts[i];
        if (p[1] < pts[i-1][1] && p[1] < pts[i+1][1]) {
          stroke(318, 35 * PARAMS.saturation, min(100, 90 * PARAMS.brightness), s * 65);
          line(pts[i-1][0], pts[i-1][1], p[0], p[1]);
          stroke(285, 50, 24 * PARAMS.brightness, s * 24);
          line(p[0], p[1] + 2, p[0] + s * 7, p[1] + amp * 0.15);
        }
      }
    }
  }

  // 天空：星点 + 贴着地平线、随高频向上铺展的辉光
  function drawSky(horiz, portalY, bright, trebN) {
    const starTop = min(horiz, portalY);
    noStroke();
    for (const st of stars) {
      const sy = st.y * starTop;
      if (sy > starTop - 2) continue;
      const tw = 0.5 + 0.5 * sin(frameCount * 0.05 * st.z + st.tw);
      const b = constrain((10 + 60 * bright) * st.z * tw, 0, 90);
      fill((PAL.hue + 20) % 360, PAL.sat * 0.4, b, b);
      circle(st.x * width, sy, st.z * 1.8);
    }
    const ctx = drawingContext;
    ctx.save();
    const h = height * (0.035 + trebN * 0.05);
    const grad = ctx.createLinearGradient(0, horiz - h, 0, horiz + h * 0.2);
    grad.addColorStop(0, 'rgba(95,40,125,0)'); grad.addColorStop(1, 'rgba(130,65,160,0.12)');
    ctx.fillStyle = grad; ctx.fillRect(0, horiz-h, width, h*1.2);ctx.restore();
  }

  // 灭点：明亮 → 太阳 / 天堂隧道；低沉 → 黑洞
  function drawPortal(vpX, portalY, bright, lvl, isSun) {
    const radius = min(width,height) * (0.006 + lvl * 0.007);
    if (isSun) polishCore(vpX, portalY, radius, 322);
    else {
      polishCore(vpX, portalY, radius * 1.2, 286);
      noStroke(); fill(0,0,1,100); circle(vpX, portalY, radius * 1.7);
      noFill(); stroke(300,55 * PARAMS.saturation,80 * PARAMS.brightness,55);
      strokeWeight(0.7); ellipse(vpX,portalY,radius*3.8,radius*0.85);
    }
  }
})();

const backgrounds = [0.25, 0.7, 0.09, 1, 1];
const hues = [292, 46, 288, 12, 300];
Effects.slice(5).forEach((effect, i) => {
  effect.background = () => {
    const alpha = i === 3 || i === 4 ? 100 : min(100, backgrounds[i] * 100 * (1.6 - PARAMS.trail / 100));
    background(235, 40, 1.8, alpha);
  };
  const render = effect.draw;
  effect.draw = () => {
    const saved = {...PAL};
    Object.assign(PAL, {hue:hues[i],sat:min(100,62*PARAMS.saturation),bri:min(100,(70+F.level*22)*PARAMS.brightness),warmHue:315,coolHue:262,bgHue:235,bgBri:1.8});
    try { render(); } finally {Object.assign(PAL,saved);}
  };
});
const originals=Effects.slice(0,5);
const refined=Effects.slice(5,10);
Effects.splice(0,Effects.length,refined[0],originals[1],refined[2],refined[3],originals[4]);
Effects.forEach((effect,i)=>{effect.name=['Particle Ripple','Spectral Bloom','Nebula Flow','Paint Splash','Corridor'][i];});
const select=document.getElementById('effectSelect');
select.replaceChildren();
Effects.forEach((effect,i)=>{
 const option=document.createElement('option');
 option.value=String(i);
 option.textContent=`${i+1} · ${effect.name}`;
 select.appendChild(option);
});
select.addEventListener('change',()=>switchEffect(Number(select.value)));
})();
