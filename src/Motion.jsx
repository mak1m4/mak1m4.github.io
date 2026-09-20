import React, {createContext, useContext, useEffect, useRef, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {works, statement} from './data.mjs';
import {clamp, chapterState, fieldPoint, fieldDefaults} from './motion-math.mjs';
import {useCinemaEnabled,useScrub} from './Cinematic.jsx';
import {ProjectMedia} from './Media.jsx';
import {fieldCanRun} from './cinematic-math.mjs';

const MotionContext = createContext({calm:true});
export const useMotionSettings = () => useContext(MotionContext);
function useMedia(query){const [matches,setMatches]=useState(false);useEffect(()=>{const media=matchMedia(query);const sync=()=>setMatches(media.matches);sync();media.addEventListener('change',sync);return()=>media.removeEventListener('change',sync);},[query]);return matches;}

export function MotionProvider({children}) {
  const [calm, setCalm] = useState(()=>typeof window==='undefined'||matchMedia('(prefers-reduced-motion: reduce)').matches);
  const preference = useRef(false);
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setCalm(media.matches || preference.current);
    sync(); media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);
  useEffect(() => { document.documentElement.dataset.motion = calm ? 'reduced' : 'full'; }, [calm]);
  return <MotionContext.Provider value={{calm}}>{children}<button className="motion-toggle" aria-pressed={calm} onClick={() => {if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;preference.current=!calm; setCalm(!calm);}}><span aria-hidden="true">{calm?'Ⅱ':'◌'}</span> Motion {calm?'off':'on'}</button></MotionContext.Provider>;
}

export function MotionEffects() {
  const {pathname} = useLocation();
  const {calm} = useMotionSettings();
  useEffect(() => {
    const nav = document.querySelector('.site-nav');
    const main = document.querySelector('main');
    let raf = 0;
    const update = () => {
      raf=0;
      const cinema=document.querySelector('.cinema-home.cinema-enabled');
      const atStage = (cinema?.dataset.stageVisible==='true'&&cinema.getBoundingClientRect().bottom>76)||[...document.querySelectorAll('.scroll-stage:not(.cinema-enabled .scroll-stage), footer')].some(el => {const r=el.getBoundingClientRect(); return r.top<76 && r.bottom>76;});
      nav?.classList.toggle('on-dark',atStage);
      const max = document.documentElement.scrollHeight-innerHeight;
      document.documentElement.style.setProperty('--reading-progress', String(max>0?scrollY/max:0));
    };
    const schedule = () => {if(!raf) raf=requestAnimationFrame(update);};
    addEventListener('scroll',schedule,{passive:true}); addEventListener('resize',schedule); update();
    const animations=[];
    const observer = new IntersectionObserver(entries => entries.forEach(e => {
      if(!e.isIntersecting) return;
      e.target.classList.add('in-view');
      if(!calm && e.target.matches('.placeholder:not(.stage-chapter .placeholder)')) animations.push(e.target.animate([{clipPath:'inset(0 0 15% 0)',opacity:.65},{clipPath:'inset(0)',opacity:1}],{duration:850,easing:'cubic-bezier(.16,1,.3,1)'}));
      observer.unobserve(e.target);
    }),{threshold:.12});
    main?.querySelectorAll('.placeholder, .practice, .next-project').forEach(el=>observer.observe(el));
    const footer=document.querySelector('footer'); if(footer)observer.observe(footer);
    if(!calm && main && !document.startViewTransition) animations.push(main.animate([{opacity:.2,transform:'translateY(12px)'},{opacity:1,transform:'none'}],{duration:500,easing:'cubic-bezier(.16,1,.3,1)'}));
    return()=>{cancelAnimationFrame(raf);removeEventListener('scroll',schedule);removeEventListener('resize',schedule);observer.disconnect();animations.forEach(a=>a.cancel());};
  },[pathname,calm]);
  return null;
}

export function ImmersiveHero({hidden=false,onExplore}={}) {
  const canvas=useRef(); const [mode,setMode]=useState(fieldDefaults.initialMode); const {calm}=useMotionSettings();
  const desktop=useMedia('(min-width:768px)');
  const target=useRef(fieldDefaults.initialMode), displayed=useRef(fieldDefaults.initialMode); target.current=mode;
  useEffect(()=>{
    if(calm||!desktop)return;
    const timer=setInterval(()=>{const r=canvas.current?.getBoundingClientRect();if(canvas.current?.closest('.cinema-home')?.dataset.stageVisible!=='true'&&!document.hidden&&r&&r.bottom>0&&r.top<innerHeight)setMode(n=>(n+1)%3);},fieldDefaults.rotationMs);
    return()=>clearInterval(timer);
  },[calm,desktop]);
  useEffect(()=>{
    const c=canvas.current, ctx=c.getContext('2d'); if(!ctx)return;
    const fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
    const narrow=!desktop;
    let width=1,height=1,raf=0,visible=true,time=2.5,last=0,current=(calm||narrow)?target.current:displayed.current;
    let pointerX=0,pointerY=0,smoothX=0,smoothY=0;
    const colors=getComputedStyle(document.documentElement);
    const ink=colors.getPropertyValue('--ink').trim(),accent=colors.getPropertyValue('--accent').trim();
    function draw() {
      ctx.clearRect(0,0,width,height);
      const scale=Math.min(width*.95,height*1.82);
      const cx=width*.55+smoothX,cy=height*.54+smoothY;
      const a=Math.floor(current)%3,b=(a+1)%3,mix=current-Math.floor(current);
      const count=narrow?24:40;
      for(let ring=0;ring<count;ring++){
        ctx.beginPath();
        for(let step=0;step<=180;step++){
          const angle=step/180*Math.PI*2;
          const p=fieldPoint(a,angle,ring*(40/count),time),q=fieldPoint(b,angle,ring*(40/count),time);
          const x=cx+(p[0]+(q[0]-p[0])*mix)*scale,y=cy+(p[1]+(q[1]-p[1])*mix)*scale;
          step===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
        }
        ctx.strokeStyle=ring%10===0?accent:ink;ctx.globalAlpha=ring%10===0?.7:.17;ctx.lineWidth=ring%10===0?1.2:.65;ctx.stroke();
      }
      ctx.globalAlpha=.5;ctx.strokeStyle=ink;ctx.lineWidth=.7;
      for(const [x,y] of [[cx,cy],[width*.12,height*.22],[width*.9,height*.81]]){ctx.beginPath();ctx.moveTo(x-6,y);ctx.lineTo(x+6,y);ctx.moveTo(x,y-6);ctx.lineTo(x,y+6);ctx.stroke();}
      ctx.globalAlpha=1;
    }
    function frame(now){
      raf=0;if(!canRun()){c.dataset.drawing='false';return;}
      const dt=last?Math.min((now-last)/1000,.05):.016;last=now;
      time+=dt;current+=(target.current-current)*Math.min(dt*3,1);displayed.current=current;
      smoothX+=(pointerX-smoothX)*.045;smoothY+=(pointerY-smoothY)*.045;draw();
      if(!calm&&!narrow)raf=requestAnimationFrame(frame);
    }
    function canRun(){return fieldCanRun({calm,narrow,visible,hidden:document.hidden,stage:c.closest('.cinema-home')?.dataset.stageVisible==='true'});}
    function start(){if(!raf&&canRun()){c.dataset.drawing='true';last=0;raf=requestAnimationFrame(frame);}else if(!canRun())c.dataset.drawing='false';}
    function size(){const r=c.getBoundingClientRect();width=r.width;height=r.height;const dpr=Math.min(devicePixelRatio||1,2);c.width=width*dpr;c.height=height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);draw();}
    function pointer(e){if(calm||!fine)return;const r=c.getBoundingClientRect();pointerX=(e.clientX-r.left-width/2)*.035;pointerY=(e.clientY-r.top-height/2)*.035;}
    function leave(){pointerX=0;pointerY=0;}
    function visibility(){if(document.hidden){cancelAnimationFrame(raf);raf=0;c.dataset.drawing='false';}else start();}
    const onScroll=()=>{if(c.closest('.cinema-home')?.dataset.stageVisible!=='true')start();};
    const resize=new ResizeObserver(size);resize.observe(c);
    const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible)start();else{cancelAnimationFrame(raf);raf=0;c.dataset.drawing='false';}},{threshold:0});observer.observe(c);
    size();draw();start();c.addEventListener('pointermove',pointer);c.addEventListener('pointerleave',leave);document.addEventListener('visibilitychange',visibility);addEventListener('scroll',onScroll,{passive:true});
    return()=>{cancelAnimationFrame(raf);resize.disconnect();observer.disconnect();c.removeEventListener('pointermove',pointer);c.removeEventListener('pointerleave',leave);document.removeEventListener('visibilitychange',visibility);removeEventListener('scroll',onScroll);};
  },[calm,mode,desktop]);
  return <section className="hero immersive-hero wrap" aria-labelledby="hero-title" inert={hidden?'':undefined} aria-hidden={hidden?true:undefined}><div className="hero-topline"><p className="meta">Creative Technologist</p><span>Interaction · Generative media · AI</span></div><h1 id="hero-title"><span>Making invisible</span><span>systems tangible<span className="signal-period">.</span></span></h1><div className="hero-field"><canvas ref={canvas} aria-hidden="true"/><span className="field-caption">A study in {['gesture','sound','uncertainty'][mode]}</span><div className="field-controls" role="group" aria-label="Homepage line field"><button aria-pressed={mode===0} onClick={()=>setMode(0)}>Gesture</button><button aria-pressed={mode===1} onClick={()=>setMode(1)}>Sound</button><button aria-pressed={mode===2} onClick={()=>setMode(2)}>Uncertainty</button></div></div><div className="hero-foot"><a className="explore-link" href="#selected-works" onClick={onExplore}><span className="explore-arrow" aria-hidden="true">↓</span> Explore selected works</a><p>{statement}</p></div></section>;
}

export function ScrollStage({children}) {
  const root=useRef(); const [active,setActive]=useState(0); const {calm}=useMotionSettings();
  useEffect(()=>{
    const el=root.current, chapters=[...el.querySelectorAll('.stage-chapter')];let raf=0;
    function update(){raf=0;let index=0;const viewport=innerHeight;
      chapters.forEach((chapter,i)=>{const r=chapter.getBoundingClientRect();if(r.top<viewport*.55)index=i;const s=chapterState(r.top,r.height,viewport,140);chapter.style.setProperty('--chapter-reveal',String(s.reveal));});
      setActive(previous=>previous===index?previous:index);
    }
    const schedule=()=>{if(!raf)raf=requestAnimationFrame(update);};
    update();addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);
    return()=>{cancelAnimationFrame(raf);removeEventListener('scroll',schedule);removeEventListener('resize',schedule);};
  },[calm]);
  function jump(i){const target=root.current.querySelectorAll('.stage-chapter')[i];if(target){const dock=innerWidth>=768?parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'))+64:0;window.scrollTo({top:target.getBoundingClientRect().top+scrollY-dock,behavior:'instant'});}}
  return <div ref={root} className="scroll-stage" data-calm={calm}><div className="stage-toolbar"><span>Selected Works</span><nav aria-label="Jump to a work">{works.map((w,i)=><button key={w.slug} onClick={()=>jump(i)} aria-current={active===i?'step':undefined}><span>{String(i+1).padStart(2,'0')}</span><span className="stage-nav-title">{w.title}</span></button>)}</nav><a href="#practice">Skip stage ↓</a></div>{React.Children.map(children,(child,i)=><div className="stage-chapter" data-chapter={i} style={{'--chapter-index':i}}>{child}</div>)}<div className="stage-end"><span>Three inputs. Three ways of seeing.</span><Link to="/works" viewTransition>All selected works ↗</Link></div></div>;
}

export function ModeTransition({active,children}) {
  const el=useRef();const {calm}=useMotionSettings();
  useEffect(()=>{if(calm)return;const animation=el.current?.animate([{clipPath:'inset(0 100% 0 0)',opacity:.35},{clipPath:'inset(0)',opacity:1}],{duration:650,easing:'cubic-bezier(.16,1,.3,1)'});return()=>animation?.cancel();},[active,calm]);
  return <div ref={el} className="mode-transition">{children}</div>;
}

export function Comparison({active,items,renderPanel}) {
  const [split,setSplit]=useState(50);const root=useRef();const windowRef=useRef();const enabled=useCinemaEnabled();
  const [scene,setScene]=useState(0);const right=active===0?1:active;
  useScrub(root,enabled,p=>{root.current.querySelectorAll('.fuzzy-scene').forEach((el,i)=>el.style.setProperty('--wipe',i===0?1:clamp((p-i*.3)/.2)));setScene(n=>{const next=p<.4?0:p<.7?1:2;return n===next?n:next;});});
  const move=e=>{const r=windowRef.current.getBoundingClientRect();setSplit(Math.round(clamp((e.clientX-r.left)/r.width)*100));};
  return <div className="comparison">
    {enabled&&<div className="fuzzy-story" ref={root}><div className="fuzzy-pin"><div className="fuzzy-scenes">{items.map((name,i)=><div key={name} className="fuzzy-scene" style={{zIndex:i}} aria-hidden={scene!==i}>{renderPanel(i)}</div>)}</div><p className="scene-label">{items[scene]} <span>{scene+1} / 3</span></p></div></div>}
    <div className="comparison-window" ref={windowRef}><div className="comparison-base">{renderPanel(0,{fit:'crop'})}</div><div className="comparison-overlay" style={{clipPath:`inset(0 0 0 ${split}%)`}}>{renderPanel(right,{fit:'crop'})}</div><div className="comparison-rule draggable" style={{left:`${split}%`}} onPointerDown={e=>{e.currentTarget.setPointerCapture(e.pointerId);move(e);}} onPointerMove={e=>{if(e.currentTarget.hasPointerCapture(e.pointerId))move(e);}} onPointerUp={e=>{if(e.currentTarget.hasPointerCapture(e.pointerId))e.currentTarget.releasePointerCapture(e.pointerId);}} aria-hidden="true"><span>↔</span></div></div>
    <label className="comparison-control">Reveal boundary <input type="range" min="0" max="100" value={split} onChange={e=>setSplit(Number(e.target.value))} aria-label="Comparison boundary" aria-valuetext={`${split}% ${items[0]}, ${100-split}% ${items[right]}`}/><span>{split}%</span></label><p className="prototype-note">Same preset and parameters: c = 5, m = 2, σ = 0.25. Drag the boundary or use the slider arrow keys.</p>
  </div>;
}

export function GestureNarrative({items,active,setActive,renderPanel}) {
  const root=useRef();const enabled=useCinemaEnabled();
  useScrub(root,enabled,p=>{const i=Math.min(3,Math.floor(p*4));setActive(n=>n===i?n:i);root.current.style.setProperty('--gesture-phase',clamp((p*4-i)*3));});
  function choose(i){setActive(i);if(enabled){const r=root.current.getBoundingClientRect();window.scrollTo({top:r.top+scrollY-96+((i+.35)/4)*(r.height-innerHeight+96),behavior:'instant'});}}
  return <div ref={root} className={`gesture-cinema ${enabled?'project-pinned':''}`}><div className="gesture-pin"><div className="gesture-stops">{items.map((name,i)=><button key={name} aria-pressed={active===i} onClick={()=>choose(i)}><span>{String(i+1).padStart(2,'0')}</span>{name}</button>)}</div><div className="gesture-composition"><div className="gesture-result"><ModeTransition active={active}>{renderPanel(active)}</ModeTransition></div><div className="gesture-input" key={active}><ProjectMedia id={`GT-INPUT-${active+1}`} title={`Input · ${items[active]}`}/></div></div><p className="prototype-note">Recorded input and terrain states. Transitions explain the sequence; they do not simulate continuous terrain generation.</p></div></div>;
}

export function SoundRail({items,active,setActive,renderPanel}) {
  const rail=useRef(),root=useRef();const enabled=useCinemaEnabled();const {calm}=useMotionSettings();
  useScrub(root,enabled,p=>{rail.current.scrollLeft=p*(rail.current.scrollWidth-rail.current.clientWidth);const i=Math.min(4,Math.round(p*4));setActive(n=>n===i?n:i);});
  function choose(i){setActive(i);if(enabled){const r=root.current.getBoundingClientRect();window.scrollTo({top:r.top+scrollY-96+(i/4)*(r.height-innerHeight+96),behavior:'instant'});}else rail.current.scrollTo({left:rail.current.children[i].offsetLeft,behavior:calm?'instant':'smooth'});}
  useEffect(()=>{if(enabled)return;const el=rail.current;const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting&&e.intersectionRatio>.6)setActive(Number(e.target.dataset.mode));}),{root:el,threshold:.65});[...el.children].forEach(child=>observer.observe(child));return()=>observer.disconnect();},[setActive,enabled]);
  return <div ref={root} className={`sound-story ${enabled?'project-pinned':''}`}><div className="sound-pin"><div className="mode-controls" role="group" aria-label="Five visual readings">{items.map((name,i)=><button key={name} onClick={()=>choose(i)} aria-pressed={active===i}>{name}</button>)}</div><div className="sound-rail" ref={rail} tabIndex={enabled?-1:0} aria-label="Five visual modes. Scroll horizontally or choose a mode above.">{items.map((name,i)=><div className="sound-frame" data-mode={i} data-active={i===active} key={name}>{renderPanel(i)}</div>)}</div></div></div>;
}
