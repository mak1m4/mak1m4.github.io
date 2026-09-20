import React,{useState,useEffect,useRef} from 'react';
import {media,videos} from './media.mjs';
export function ProjectMedia({id,title,shared=false,priority=false,fit='contain'}){
 const asset=media[id];const [failed,setFailed]=useState(false);const frame=useRef();const image=useRef();
 // Failure/latency injection is available only on the local Vite development server.
 const testMode=import.meta.env.DEV&&typeof window!=='undefined'?new URLSearchParams(window.location.search).get('media-test'):null;
 const source=asset?.src+(['fail','slow'].includes(testMode)?`?media-test=${testMode}`:'');
 useEffect(()=>{setFailed(false);},[asset?.src]);
 useEffect(()=>{if(fit!=='crop'||!asset||!frame.current||!image.current)return;const [x,y,w,h]=asset.crop;const size=()=>{if(!image.current)return;const r=frame.current.getBoundingClientRect();const scale=Math.max(r.width/w,r.height/h);Object.assign(image.current.style,{width:`${asset.width*scale}px`,height:`${asset.height*scale}px`,left:`${(r.width-w*scale)/2-x*scale}px`,top:`${(r.height-h*scale)/2-y*scale}px`});};const observer=new ResizeObserver(size);observer.observe(frame.current);size();return()=>observer.disconnect();},[asset,failed,fit]);
 if(!asset)return null;
 const [x,y,w,h]=fit==='crop'?asset.crop:[0,0,asset.width,asset.height];
 const name=`cover-${id.slice(0,2).toLowerCase()}`;
 return <figure className={`project-media ${failed?'media-failed':''}`} data-media={id} data-fit={fit} style={{'--media-ratio':`${w}/${h}`,viewTransitionName:shared?name:undefined}}>
  <div ref={frame} className="media-window" style={{aspectRatio:`${w}/${h}`}}>{failed?<div className="media-error" role="status">Image unavailable.<br/>{asset.alt}</div>:<img ref={image} src={source} alt={asset.alt} width={asset.width} height={asset.height} loading={priority?'eager':'lazy'} decoding="async" onError={()=>setFailed(true)} style={{width:`${asset.width/w*100}%`,height:`${asset.height/h*100}%`,left:`${-x/w*100}%`,top:`${-y/h*100}%`}}/>}</div>
  <figcaption>{title||asset.alt}</figcaption>
 </figure>;
}
export function ProjectVideo({id}){
 const asset=videos[id];
 if(!asset)return null;
 return <figure className="project-video" data-video={id}>
  <video controls preload="metadata" playsInline poster={asset.poster} aria-label={asset.title}>
   <source src={asset.src} type="video/mp4"/>
   Your browser does not support embedded video. <a href={asset.src}>Open the video file.</a>
  </video>
 </figure>;
}
