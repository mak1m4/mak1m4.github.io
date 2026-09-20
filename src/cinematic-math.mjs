import {clamp} from './motion-math.mjs';
export const fieldCanRun=({calm,narrow,visible,hidden,stage})=>!calm&&!narrow&&visible&&!hidden&&!stage;
export const segment=(p,start,end)=>clamp((p-start)/(end-start));
export function cinematicState(p){p=clamp(p);const starts=[.2,.45,.7];const reveal=starts.map((s,i)=>i===0?segment(p,.13,.26):segment(p,s,s+.075));return {hero:segment(p,0,.22),entry:segment(p,.10,.24),exit:segment(p,.93,1),active:p<.4875?0:p<.7375?1:2,reveal};}
