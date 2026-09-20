(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mu="165",i_=0,zh=1,r_=2,Bp=1,s_=2,Ti=3,ir=0,un=1,bi=2,Ji=0,ms=1,Gh=2,Hh=3,Vh=4,a_=5,yr=100,o_=101,l_=102,c_=103,u_=104,h_=200,d_=201,f_=202,p_=203,Cc=204,Pc=205,m_=206,g_=207,__=208,v_=209,x_=210,S_=211,M_=212,y_=213,E_=214,A_=0,T_=1,b_=2,Io=3,w_=4,R_=5,C_=6,P_=7,kp=0,L_=1,I_=2,Qi=0,D_=1,U_=2,N_=3,F_=4,O_=5,B_=6,k_=7,zp=300,Ss=301,Ms=302,Lc=303,Ic=304,nl=306,Dc=1e3,Ar=1001,Uc=1002,On=1003,z_=1004,Xa=1005,$n=1006,Bl=1007,Tr=1008,rr=1009,G_=1010,H_=1011,Do=1012,Gp=1013,ys=1014,Zi=1015,il=1016,Hp=1017,Vp=1018,Es=1020,V_=35902,W_=1021,X_=1022,oi=1023,$_=1024,q_=1025,gs=1026,As=1027,Y_=1028,Wp=1029,j_=1030,Xp=1031,$p=1033,kl=33776,zl=33777,Gl=33778,Hl=33779,Wh=35840,Xh=35841,$h=35842,qh=35843,Yh=36196,jh=37492,Kh=37496,Zh=37808,Jh=37809,Qh=37810,ed=37811,td=37812,nd=37813,id=37814,rd=37815,sd=37816,ad=37817,od=37818,ld=37819,cd=37820,ud=37821,Vl=36492,hd=36494,dd=36495,K_=36283,fd=36284,pd=36285,md=36286,Z_=3200,J_=3201,qp=0,Q_=1,Ki="",ri="srgb",ar="srgb-linear",gu="display-p3",rl="display-p3-linear",Uo="linear",gt="srgb",No="rec709",Fo="p3",Xr=7680,gd=519,e1=512,t1=513,n1=514,Yp=515,i1=516,r1=517,s1=518,a1=519,_d=35044,vd="300 es",Ci=2e3,Oo=2001;class Bs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xd=1234567;const ha=Math.PI/180,_a=180/Math.PI;function ks(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function ln(t,e,n){return Math.max(e,Math.min(n,t))}function _u(t,e){return(t%e+e)%e}function o1(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function l1(t,e,n){return t!==e?(n-t)/(e-t):0}function da(t,e,n){return(1-n)*t+n*e}function c1(t,e,n,i){return da(t,e,1-Math.exp(-n*i))}function u1(t,e=1){return e-Math.abs(_u(t,e*2)-e)}function h1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function d1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function f1(t,e){return t+Math.floor(Math.random()*(e-t+1))}function p1(t,e){return t+Math.random()*(e-t)}function m1(t){return t*(.5-Math.random())}function g1(t){t!==void 0&&(xd=t);let e=xd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _1(t){return t*ha}function v1(t){return t*_a}function x1(t){return(t&t-1)===0&&t!==0}function S1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function M1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function y1(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),u=a((e+i)/2),d=s((e-i)/2),h=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":t.set(o*u,l*d,l*h,o*c);break;case"YZY":t.set(l*h,o*u,l*d,o*c);break;case"ZXZ":t.set(l*d,l*h,o*u,o*c);break;case"XZX":t.set(o*u,l*g,l*p,o*c);break;case"YXY":t.set(l*p,o*u,l*g,o*c);break;case"ZYZ":t.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function hs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Ui={DEG2RAD:ha,RAD2DEG:_a,generateUUID:ks,clamp:ln,euclideanModulo:_u,mapLinear:o1,inverseLerp:l1,lerp:da,damp:c1,pingpong:u1,smoothstep:h1,smootherstep:d1,randInt:f1,randFloat:p1,randFloatSpread:m1,seededRandom:g1,degToRad:_1,radToDeg:v1,isPowerOfTwo:x1,ceilPowerOfTwo:S1,floorPowerOfTwo:M1,setQuaternionFromProperEuler:y1,normalize:rn,denormalize:hs};class He{constructor(e=0,n=0){He.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,n,i,r,s,a,o,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],_=r[0],m=r[3],f=r[6],E=r[1],M=r[4],A=r[7],k=r[2],w=r[5],b=r[8];return s[0]=a*_+o*E+l*k,s[3]=a*m+o*M+l*w,s[6]=a*f+o*A+l*b,s[1]=c*_+u*E+d*k,s[4]=c*m+u*M+d*w,s[7]=c*f+u*A+d*b,s[2]=h*_+p*E+g*k,s[5]=h*m+p*M+g*w,s[8]=h*f+p*A+g*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,p=c*s-a*l,g=n*d+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=h*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Wl.makeScale(e,n)),this}rotate(e){return this.premultiply(Wl.makeRotation(-e)),this}translate(e,n){return this.premultiply(Wl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wl=new Oe;function jp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Bo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function E1(){const t=Bo("canvas");return t.style.display="block",t}const Sd={};function Kp(t){t in Sd||(Sd[t]=!0,console.warn(t))}function A1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Md=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),yd=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$a={[ar]:{transfer:Uo,primaries:No,toReference:t=>t,fromReference:t=>t},[ri]:{transfer:gt,primaries:No,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[rl]:{transfer:Uo,primaries:Fo,toReference:t=>t.applyMatrix3(yd),fromReference:t=>t.applyMatrix3(Md)},[gu]:{transfer:gt,primaries:Fo,toReference:t=>t.convertSRGBToLinear().applyMatrix3(yd),fromReference:t=>t.applyMatrix3(Md).convertLinearToSRGB()}},T1=new Set([ar,rl]),ut={enabled:!0,_workingColorSpace:ar,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!T1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=$a[e].toReference,r=$a[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return $a[t].primaries},getTransfer:function(t){return t===Ki?Uo:$a[t].transfer}};function _s(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Xl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let $r;class b1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$r===void 0&&($r=Bo("canvas")),$r.width=e.width,$r.height=e.height;const i=$r.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=$r}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Bo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=_s(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(_s(n[i]/255)*255):n[i]=_s(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let w1=0;class Zp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=ks(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push($l(r[a].image)):s.push($l(r[a]))}else s=$l(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function $l(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?b1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let R1=0;class gn extends Bs{constructor(e=gn.DEFAULT_IMAGE,n=gn.DEFAULT_MAPPING,i=Ar,r=Ar,s=$n,a=Tr,o=oi,l=rr,c=gn.DEFAULT_ANISOTROPY,u=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R1++}),this.uuid=ks(),this.name="",this.source=new Zp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dc:e.x=e.x-Math.floor(e.x);break;case Ar:e.x=e.x<0?0:1;break;case Uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dc:e.y=e.y-Math.floor(e.y);break;case Ar:e.y=e.y<0?0:1;break;case Uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=zp;gn.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,n=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,A=(p+1)/2,k=(f+1)/2,w=(u+h)/4,b=(d+_)/4,O=(g+m)/4;return M>A&&M>k?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=w/i,s=b/i):A>k?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=w/r,s=O/r):k<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(k),i=b/s,r=O/s),this.set(i,r,s,n),this}let E=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-_)/E,this.z=(h-u)/E,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class C1 extends Bs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new xt(0,0,e,n),this.scissorTest=!1,this.viewport=new xt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new gn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Zp(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends C1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Jp extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class P1 extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ba{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(o===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(d!==_||l!==h||c!==p||u!==g){let m=1-o;const f=l*h+c*p+u*g+d*_,E=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const k=Math.sqrt(M),w=Math.atan2(k,f*E);m=Math.sin(m*w)/k,o=Math.sin(o*w)/k}const A=o*E;if(l=l*m+h*A,c=c*m+p*A,u=u*m+g*A,d=d*m+_*A,m===1-o){const k=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=k,c*=k,u*=k,d*=k}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],h=s[a+1],p=s[a+2],g=s[a+3];return e[n]=o*g+u*d+l*p-c*h,e[n+1]=l*g+u*h+c*d-o*p,e[n+2]=c*g+u*p+o*h-l*d,e[n+3]=u*g-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ed.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ed.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ql.copy(this).projectOnVector(e),this.sub(ql)}reflect(e){return this.sub(ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ql=new U,Ed=new ba;class wa{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vn):Vn.fromBufferAttribute(s,a),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qa.copy(i.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),Ya.subVectors(this.max,Qs),qr.subVectors(e.a,Qs),Yr.subVectors(e.b,Qs),jr.subVectors(e.c,Qs),Hi.subVectors(Yr,qr),Vi.subVectors(jr,Yr),fr.subVectors(qr,jr);let n=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-fr.z,fr.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,fr.z,0,-fr.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-fr.y,fr.x,0];return!Yl(n,qr,Yr,jr,Ya)||(n=[1,0,0,0,1,0,0,0,1],!Yl(n,qr,Yr,jr,Ya))?!1:(ja.crossVectors(Hi,Vi),n=[ja.x,ja.y,ja.z],Yl(n,qr,Yr,jr,Ya))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new U,new U,new U,new U,new U,new U,new U,new U],Vn=new U,qa=new wa,qr=new U,Yr=new U,jr=new U,Hi=new U,Vi=new U,fr=new U,Qs=new U,Ya=new U,ja=new U,pr=new U;function Yl(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){pr.fromArray(t,s);const o=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),l=e.dot(pr),c=n.dot(pr),u=i.dot(pr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const L1=new wa,ea=new U,jl=new U;class sl{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):L1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);const n=ea.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ea,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(jl)),this.expandByPoint(ea.copy(e.center).sub(jl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Si=new U,Kl=new U,Ka=new U,Wi=new U,Zl=new U,Za=new U,Jl=new U;class Qp{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,n),Si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Kl.copy(e).add(n).multiplyScalar(.5),Ka.copy(n).sub(e).normalize(),Wi.copy(this.origin).sub(Kl);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ka),o=Wi.dot(this.direction),l=-Wi.dot(Ka),c=Wi.lengthSq(),u=Math.abs(1-a*a);let d,h,p,g;if(u>0)if(d=a*l-o,h=a*o-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Kl).addScaledVector(Ka,h),p}intersectSphere(e,n){Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),r=Si.dot(Si)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,n,i,r,s){Zl.subVectors(n,e),Za.subVectors(i,e),Jl.crossVectors(Zl,Za);let a=this.direction.dot(Jl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wi.subVectors(this.origin,e);const l=o*this.direction.dot(Za.crossVectors(Wi,Za));if(l<0)return null;const c=o*this.direction.dot(Zl.cross(Wi));if(c<0||l+c>a)return null;const u=-o*Wi.dot(Jl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,s,a,o,l,c,u,d,h,p,g,_,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,d,h,p,g,_,m)}set(e,n,i,r,s,a,o,l,c,u,d,h,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Kr.setFromMatrixColumn(e,0).length(),s=1/Kr.setFromMatrixColumn(e,1).length(),a=1/Kr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*d,g=o*u,_=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=h-_*c,n[9]=-o*l,n[2]=_-h*c,n[6]=g+p*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,g=c*u,_=c*d;n[0]=h+_*o,n[4]=g*o-p,n[8]=a*c,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=p*o-g,n[6]=_+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,g=c*u,_=c*d;n[0]=h-_*o,n[4]=-a*d,n[8]=g+p*o,n[1]=p+g*o,n[5]=a*u,n[9]=_-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*d,g=o*u,_=o*d;n[0]=l*u,n[4]=g*c-p,n[8]=h*c+_,n[1]=l*d,n[5]=_*c+h,n[9]=p*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,g=o*l,_=o*c;n[0]=l*u,n[4]=_-h*d,n[8]=g*d+p,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*d+g,n[10]=h-_*d}else if(e.order==="XZY"){const h=a*l,p=a*c,g=o*l,_=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+_,n[5]=a*u,n[9]=p*d-g,n[2]=g*d-p,n[6]=o*u,n[10]=_*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(I1,e,D1)}lookAt(e,n,i){const r=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Xi.crossVectors(i,yn),Xi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Xi.crossVectors(i,yn)),Xi.normalize(),Ja.crossVectors(yn,Xi),r[0]=Xi.x,r[4]=Ja.x,r[8]=yn.x,r[1]=Xi.y,r[5]=Ja.y,r[9]=yn.y,r[2]=Xi.z,r[6]=Ja.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],E=i[3],M=i[7],A=i[11],k=i[15],w=r[0],b=r[4],O=r[8],y=r[12],S=r[1],L=r[5],H=r[9],N=r[13],q=r[2],$=r[6],X=r[10],j=r[14],G=r[3],ue=r[7],fe=r[11],me=r[15];return s[0]=a*w+o*S+l*q+c*G,s[4]=a*b+o*L+l*$+c*ue,s[8]=a*O+o*H+l*X+c*fe,s[12]=a*y+o*N+l*j+c*me,s[1]=u*w+d*S+h*q+p*G,s[5]=u*b+d*L+h*$+p*ue,s[9]=u*O+d*H+h*X+p*fe,s[13]=u*y+d*N+h*j+p*me,s[2]=g*w+_*S+m*q+f*G,s[6]=g*b+_*L+m*$+f*ue,s[10]=g*O+_*H+m*X+f*fe,s[14]=g*y+_*N+m*j+f*me,s[3]=E*w+M*S+A*q+k*G,s[7]=E*b+M*L+A*$+k*ue,s[11]=E*O+M*H+A*X+k*fe,s[15]=E*y+M*N+A*j+k*me,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*l*d-r*c*d-s*o*h+i*c*h+r*o*p-i*l*p)+_*(+n*l*p-n*c*h+s*a*h-r*a*p+r*c*u-s*l*u)+m*(+n*c*d-n*o*p-s*a*d+i*a*p+s*o*u-i*c*u)+f*(-r*o*u-n*l*d+n*o*h+r*a*d-i*a*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],E=d*m*c-_*h*c+_*l*p-o*m*p-d*l*f+o*h*f,M=g*h*c-u*m*c-g*l*p+a*m*p+u*l*f-a*h*f,A=u*_*c-g*d*c+g*o*p-a*_*p-u*o*f+a*d*f,k=g*d*l-u*_*l-g*o*h+a*_*h+u*o*m-a*d*m,w=n*E+i*M+r*A+s*k;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=E*b,e[1]=(_*h*s-d*m*s-_*r*p+i*m*p+d*r*f-i*h*f)*b,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*f+i*l*f)*b,e[3]=(d*l*s-o*h*s-d*r*c+i*h*c+o*r*p-i*l*p)*b,e[4]=M*b,e[5]=(u*m*s-g*h*s+g*r*p-n*m*p-u*r*f+n*h*f)*b,e[6]=(g*l*s-a*m*s-g*r*c+n*m*c+a*r*f-n*l*f)*b,e[7]=(a*h*s-u*l*s+u*r*c-n*h*c-a*r*p+n*l*p)*b,e[8]=A*b,e[9]=(g*d*s-u*_*s-g*i*p+n*_*p+u*i*f-n*d*f)*b,e[10]=(a*_*s-g*o*s+g*i*c-n*_*c-a*i*f+n*o*f)*b,e[11]=(u*o*s-a*d*s-u*i*c+n*d*c+a*i*p-n*o*p)*b,e[12]=k*b,e[13]=(u*_*r-g*d*r+g*i*h-n*_*h-u*i*m+n*d*m)*b,e[14]=(g*o*r-a*_*r-g*i*l+n*_*l+a*i*m-n*o*m)*b,e[15]=(a*d*r-u*o*r+u*i*l-n*d*l-a*i*h+n*o*h)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,d=o+o,h=s*c,p=s*u,g=s*d,_=a*u,m=a*d,f=o*d,E=l*c,M=l*u,A=l*d,k=i.x,w=i.y,b=i.z;return r[0]=(1-(_+f))*k,r[1]=(p+A)*k,r[2]=(g-M)*k,r[3]=0,r[4]=(p-A)*w,r[5]=(1-(h+f))*w,r[6]=(m+E)*w,r[7]=0,r[8]=(g+M)*b,r[9]=(m-E)*b,r[10]=(1-(h+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Kr.set(r[0],r[1],r[2]).length();const a=Kr.set(r[4],r[5],r[6]).length(),o=Kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);const c=1/s,u=1/a,d=1/o;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=d,Wn.elements[9]*=d,Wn.elements[10]*=d,n.setFromRotationMatrix(Wn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Ci){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,g;if(o===Ci)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Oo)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Ci){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(a-s),h=(n+e)*c,p=(i+r)*u;let g,_;if(o===Ci)g=(a+s)*d,_=-2*d;else if(o===Oo)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Kr=new U,Wn=new Et,I1=new U(0,0,0),D1=new U(1,1,1),Xi=new U,Ja=new U,yn=new U,Ad=new Et,Td=new ba;class hi{constructor(e=0,n=0,i=0,r=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ln(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ad.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ad,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Td.setFromEuler(this),this.setFromQuaternion(Td,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class em{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let U1=0;const bd=new U,Zr=new ba,Mi=new Et,Qa=new U,ta=new U,N1=new U,F1=new ba,wd=new U(1,0,0),Rd=new U(0,1,0),Cd=new U(0,0,1),Pd={type:"added"},O1={type:"removed"},Jr={type:"childadded",child:null},Ql={type:"childremoved",child:null};class jt extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U1++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new U,n=new hi,i=new ba,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Oe}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new em,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(wd,e)}rotateY(e){return this.rotateOnAxis(Rd,e)}rotateZ(e){return this.rotateOnAxis(Cd,e)}translateOnAxis(e,n){return bd.copy(e).applyQuaternion(this.quaternion),this.position.add(bd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(wd,e)}translateY(e){return this.translateOnAxis(Rd,e)}translateZ(e){return this.translateOnAxis(Cd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Qa.copy(e):Qa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(ta,Qa,this.up):Mi.lookAt(Qa,ta,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),Zr.setFromRotationMatrix(Mi),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pd),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(O1),Ql.child=e,this.dispatchEvent(Ql),Ql.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pd),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,N1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,F1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jt.DEFAULT_UP=new U(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new U,yi=new U,ec=new U,Ei=new U,Qr=new U,es=new U,Ld=new U,tc=new U,nc=new U,ic=new U;class ai{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Xn.subVectors(e,n),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Xn.subVectors(r,n),yi.subVectors(i,n),ec.subVectors(e,n);const a=Xn.dot(Xn),o=Xn.dot(yi),l=Xn.dot(ec),c=yi.dot(yi),u=yi.dot(ec),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static isFrontFacing(e,n,i,r){return Xn.subVectors(i,n),yi.subVectors(e,n),Xn.cross(yi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Xn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ai.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ai.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Qr.subVectors(r,i),es.subVectors(s,i),tc.subVectors(e,i);const l=Qr.dot(tc),c=es.dot(tc);if(l<=0&&c<=0)return n.copy(i);nc.subVectors(e,r);const u=Qr.dot(nc),d=es.dot(nc);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Qr,a);ic.subVectors(e,s);const p=Qr.dot(ic),g=es.dot(ic);if(g>=0&&p<=g)return n.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(es,o);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Ld.subVectors(s,r),o=(d-u)/(d-u+(p-g)),n.copy(r).addScaledVector(Ld,o);const f=1/(m+_+h);return a=_*f,o=h*f,n.copy(i).addScaledVector(Qr,a).addScaledVector(es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},eo={h:0,s:0,l:0};function rc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ge{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ut.workingColorSpace){return this.r=e,this.g=n,this.b=i,ut.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ut.workingColorSpace){if(e=_u(e,1),n=ln(n,0,1),i=ln(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=rc(a,s,e+1/3),this.g=rc(a,s,e),this.b=rc(a,s,e-1/3)}return ut.toWorkingColorSpace(this,r),this}setStyle(e,n=ri){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ri){const i=tm[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}copyLinearToSRGB(e){return this.r=Xl(e.r),this.g=Xl(e.g),this.b=Xl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return ut.fromWorkingColorSpace(en.copy(this),e),Math.round(ln(en.r*255,0,255))*65536+Math.round(ln(en.g*255,0,255))*256+Math.round(ln(en.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ut.workingColorSpace){ut.fromWorkingColorSpace(en.copy(this),n);const i=en.r,r=en.g,s=en.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ut.workingColorSpace){return ut.fromWorkingColorSpace(en.copy(this),n),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=ri){ut.fromWorkingColorSpace(en.copy(this),e);const n=en.r,i=en.g,r=en.b;return e!==ri?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+n,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL($i),e.getHSL(eo);const i=da($i.h,eo.h,n),r=da($i.s,eo.s,n),s=da($i.l,eo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new Ge;Ge.NAMES=tm;let B1=0;class zs extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B1++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=ms,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cc,this.blendDst=Pc,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(i.blending=this.blending),this.side!==ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cc&&(i.blendSrc=this.blendSrc),this.blendDst!==Pc&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Io&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ra extends zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=kp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new U,to=new He;class _n{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=_d,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Kp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)to.fromBufferAttribute(this,n),to.applyMatrix3(e),this.setXY(n,to.x,to.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix3(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix4(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyNormalMatrix(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.transformDirection(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=hs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=hs(n,this.array)),n}setX(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=hs(n,this.array)),n}setY(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=hs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=hs(n,this.array)),n}setW(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array),s=rn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_d&&(e.usage=this.usage),e}}class nm extends _n{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class im extends _n{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class bn extends _n{constructor(e,n,i){super(new Float32Array(e),n,i)}}let k1=0;const Dn=new Et,sc=new jt,ts=new U,En=new wa,na=new wa,Yt=new U;class Kn extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k1++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jp(e)?im:nm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return sc.lookAt(e),sc.updateMatrix(),this.applyMatrix4(sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new bn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];na.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(En.min,na.min),En.expandByPoint(Yt),Yt.addVectors(En.max,na.max),En.expandByPoint(Yt)):(En.expandByPoint(na.min),En.expandByPoint(na.max))}En.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Yt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Yt.fromBufferAttribute(o,c),l&&(ts.fromBufferAttribute(e,c),Yt.add(ts)),r=Math.max(r,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<i.count;O++)o[O]=new U,l[O]=new U;const c=new U,u=new U,d=new U,h=new He,p=new He,g=new He,_=new U,m=new U;function f(O,y,S){c.fromBufferAttribute(i,O),u.fromBufferAttribute(i,y),d.fromBufferAttribute(i,S),h.fromBufferAttribute(s,O),p.fromBufferAttribute(s,y),g.fromBufferAttribute(s,S),u.sub(c),d.sub(c),p.sub(h),g.sub(h);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),o[O].add(_),o[y].add(_),o[S].add(_),l[O].add(m),l[y].add(m),l[S].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let O=0,y=E.length;O<y;++O){const S=E[O],L=S.start,H=S.count;for(let N=L,q=L+H;N<q;N+=3)f(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const M=new U,A=new U,k=new U,w=new U;function b(O){k.fromBufferAttribute(r,O),w.copy(k);const y=o[O];M.copy(y),M.sub(k.multiplyScalar(k.dot(y))).normalize(),A.crossVectors(w,y);const L=A.dot(l[O])<0?-1:1;a.setXYZW(O,M.x,M.y,M.z,L)}for(let O=0,y=E.length;O<y;++O){const S=E[O],L=S.start,H=S.count;for(let N=L,q=L+H;N<q;N+=3)b(e.getX(N+0)),b(e.getX(N+1)),b(e.getX(N+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,u=new U,d=new U;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Yt.fromBufferAttribute(e,n),Yt.normalize(),e.setXYZ(n,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new _n(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Kn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Id=new Et,mr=new Qp,no=new sl,Dd=new U,ns=new U,is=new U,rs=new U,ac=new U,io=new U,ro=new He,so=new He,ao=new He,Ud=new U,Nd=new U,Fd=new U,oo=new U,lo=new U;class cn extends jt{constructor(e=new Kn,n=new Ra){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){io.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(ac.fromBufferAttribute(d,e),a?io.addScaledVector(ac,u):io.addScaledVector(ac.sub(n),u))}n.add(io)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),no.copy(i.boundingSphere),no.applyMatrix4(s),mr.copy(e.ray).recast(e.near),!(no.containsPoint(mr.origin)===!1&&(mr.intersectSphere(no,Dd)===null||mr.origin.distanceToSquared(Dd)>(e.far-e.near)**2))&&(Id.copy(s).invert(),mr.copy(e.ray).applyMatrix4(Id),!(i.boundingBox!==null&&mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=a[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let A=E,k=M;A<k;A+=3){const w=o.getX(A),b=o.getX(A+1),O=o.getX(A+2);r=co(this,f,e,i,c,u,d,w,b,O),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=o.getX(m),M=o.getX(m+1),A=o.getX(m+2);r=co(this,a,e,i,c,u,d,E,M,A),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=a[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let A=E,k=M;A<k;A+=3){const w=A,b=A+1,O=A+2;r=co(this,f,e,i,c,u,d,w,b,O),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=m,M=m+1,A=m+2;r=co(this,a,e,i,c,u,d,E,M,A),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function z1(t,e,n,i,r,s,a,o){let l;if(e.side===un?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ir,o),l===null)return null;lo.copy(o),lo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(lo);return c<n.near||c>n.far?null:{distance:c,point:lo.clone(),object:t}}function co(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,ns),t.getVertexPosition(l,is),t.getVertexPosition(c,rs);const u=z1(t,e,n,i,ns,is,rs,oo);if(u){r&&(ro.fromBufferAttribute(r,o),so.fromBufferAttribute(r,l),ao.fromBufferAttribute(r,c),u.uv=ai.getInterpolation(oo,ns,is,rs,ro,so,ao,new He)),s&&(ro.fromBufferAttribute(s,o),so.fromBufferAttribute(s,l),ao.fromBufferAttribute(s,c),u.uv1=ai.getInterpolation(oo,ns,is,rs,ro,so,ao,new He)),a&&(Ud.fromBufferAttribute(a,o),Nd.fromBufferAttribute(a,l),Fd.fromBufferAttribute(a,c),u.normal=ai.getInterpolation(oo,ns,is,rs,Ud,Nd,Fd,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};ai.getNormal(ns,is,rs,d.normal),u.face=d}return u}class Ca extends Kn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new bn(c,3)),this.setAttribute("normal",new bn(u,3)),this.setAttribute("uv",new bn(d,2));function g(_,m,f,E,M,A,k,w,b,O,y){const S=A/b,L=k/O,H=A/2,N=k/2,q=w/2,$=b+1,X=O+1;let j=0,G=0;const ue=new U;for(let fe=0;fe<X;fe++){const me=fe*L-N;for(let Ke=0;Ke<$;Ke++){const dt=Ke*S-H;ue[_]=dt*E,ue[m]=me*M,ue[f]=q,c.push(ue.x,ue.y,ue.z),ue[_]=0,ue[m]=0,ue[f]=w>0?1:-1,u.push(ue.x,ue.y,ue.z),d.push(Ke/b),d.push(1-fe/O),j+=1}}for(let fe=0;fe<O;fe++)for(let me=0;me<b;me++){const Ke=h+me+$*fe,dt=h+me+$*(fe+1),W=h+(me+1)+$*(fe+1),Q=h+(me+1)+$*fe;l.push(Ke,dt,Q),l.push(dt,W,Q),G+=6}o.addGroup(p,G,y),p+=G,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function an(t){const e={};for(let n=0;n<t.length;n++){const i=Ts(t[n]);for(const r in i)e[r]=i[r]}return e}function G1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function rm(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const H1={clone:Ts,merge:an};var V1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V1,this.fragmentShader=W1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=G1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class sm extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Ci}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new U,Od=new He,Bd=new He;class Tn extends sm{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_a*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _a*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,n){return this.getViewBounds(e,Od,Bd),n.subVectors(Bd,Od)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ha*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ss=-90,as=1;class X1 extends jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(ss,as,e,n);r.layers=this.layers,this.add(r);const s=new Tn(ss,as,e,n);s.layers=this.layers,this.add(s);const a=new Tn(ss,as,e,n);a.layers=this.layers,this.add(a);const o=new Tn(ss,as,e,n);o.layers=this.layers,this.add(o);const l=new Tn(ss,as,e,n);l.layers=this.layers,this.add(l);const c=new Tn(ss,as,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class am extends gn{constructor(e,n,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Ss,super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $1 extends Nr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new am(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:$n}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ca(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Ji});s.uniforms.tEquirect.value=n;const a=new cn(r,s),o=n.minFilter;return n.minFilter===Tr&&(n.minFilter=$n),new X1(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const oc=new U,q1=new U,Y1=new Oe;class Sr{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=oc.subVectors(i,n).cross(q1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(oc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Y1.getNormalMatrix(e),r=this.coplanarPoint(oc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new sl,uo=new U;class vu{constructor(e=new Sr,n=new Sr,i=new Sr,r=new Sr,s=new Sr,a=new Sr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ci){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],g=r[9],_=r[10],m=r[11],f=r[12],E=r[13],M=r[14],A=r[15];if(i[0].setComponents(l-s,h-c,m-p,A-f).normalize(),i[1].setComponents(l+s,h+c,m+p,A+f).normalize(),i[2].setComponents(l+a,h+u,m+g,A+E).normalize(),i[3].setComponents(l-a,h-u,m-g,A-E).normalize(),i[4].setComponents(l-o,h-d,m-_,A-M).normalize(),n===Ci)i[5].setComponents(l+o,h+d,m+_,A+M).normalize();else if(n===Oo)i[5].setComponents(o,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(uo.x=r.normal.x>0?e.max.x:e.min.x,uo.y=r.normal.y>0?e.max.y:e.min.y,uo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(uo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function om(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function j1(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l._updateRange,h=l.updateRanges;if(t.bindBuffer(c,o),d.count===-1&&h.length===0&&t.bufferSubData(c,0,u),h.length!==0){for(let p=0,g=h.length;p<g;p++){const _=h[p];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Pa extends Kn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=n/l,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const E=f*h-a;for(let M=0;M<c;M++){const A=M*d-s;g.push(A,-E,0),_.push(0,0,1),m.push(M/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){const M=E+c*f,A=E+c*(f+1),k=E+1+c*(f+1),w=E+1+c*f;p.push(M,A,w),p.push(A,k,w)}this.setIndex(p),this.setAttribute("position",new bn(g,3)),this.setAttribute("normal",new bn(_,3)),this.setAttribute("uv",new bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.width,e.height,e.widthSegments,e.heightSegments)}}var K1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Z1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,J1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ev=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rv=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,av=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ov=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_v=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,xv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ev=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Av=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bv="gl_FragColor = linearToOutputTexel( gl_FragColor );",wv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Rv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ov=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Hv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$v=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,s2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,d2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,p2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,m2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,x2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,T2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,I2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,D2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,U2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,N2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,O2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,k2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,V2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,W2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,X2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Y2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const j2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ex=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ix=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ux=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,px=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_x=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ex=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ax=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:K1,alphahash_pars_fragment:Z1,alphamap_fragment:J1,alphamap_pars_fragment:Q1,alphatest_fragment:ev,alphatest_pars_fragment:tv,aomap_fragment:nv,aomap_pars_fragment:iv,batching_pars_vertex:rv,batching_vertex:sv,begin_vertex:av,beginnormal_vertex:ov,bsdfs:lv,iridescence_fragment:cv,bumpmap_pars_fragment:uv,clipping_planes_fragment:hv,clipping_planes_pars_fragment:dv,clipping_planes_pars_vertex:fv,clipping_planes_vertex:pv,color_fragment:mv,color_pars_fragment:gv,color_pars_vertex:_v,color_vertex:vv,common:xv,cube_uv_reflection_fragment:Sv,defaultnormal_vertex:Mv,displacementmap_pars_vertex:yv,displacementmap_vertex:Ev,emissivemap_fragment:Av,emissivemap_pars_fragment:Tv,colorspace_fragment:bv,colorspace_pars_fragment:wv,envmap_fragment:Rv,envmap_common_pars_fragment:Cv,envmap_pars_fragment:Pv,envmap_pars_vertex:Lv,envmap_physical_pars_fragment:Hv,envmap_vertex:Iv,fog_vertex:Dv,fog_pars_vertex:Uv,fog_fragment:Nv,fog_pars_fragment:Fv,gradientmap_pars_fragment:Ov,lightmap_pars_fragment:Bv,lights_lambert_fragment:kv,lights_lambert_pars_fragment:zv,lights_pars_begin:Gv,lights_toon_fragment:Vv,lights_toon_pars_fragment:Wv,lights_phong_fragment:Xv,lights_phong_pars_fragment:$v,lights_physical_fragment:qv,lights_physical_pars_fragment:Yv,lights_fragment_begin:jv,lights_fragment_maps:Kv,lights_fragment_end:Zv,logdepthbuf_fragment:Jv,logdepthbuf_pars_fragment:Qv,logdepthbuf_pars_vertex:e2,logdepthbuf_vertex:t2,map_fragment:n2,map_pars_fragment:i2,map_particle_fragment:r2,map_particle_pars_fragment:s2,metalnessmap_fragment:a2,metalnessmap_pars_fragment:o2,morphinstance_vertex:l2,morphcolor_vertex:c2,morphnormal_vertex:u2,morphtarget_pars_vertex:h2,morphtarget_vertex:d2,normal_fragment_begin:f2,normal_fragment_maps:p2,normal_pars_fragment:m2,normal_pars_vertex:g2,normal_vertex:_2,normalmap_pars_fragment:v2,clearcoat_normal_fragment_begin:x2,clearcoat_normal_fragment_maps:S2,clearcoat_pars_fragment:M2,iridescence_pars_fragment:y2,opaque_fragment:E2,packing:A2,premultiplied_alpha_fragment:T2,project_vertex:b2,dithering_fragment:w2,dithering_pars_fragment:R2,roughnessmap_fragment:C2,roughnessmap_pars_fragment:P2,shadowmap_pars_fragment:L2,shadowmap_pars_vertex:I2,shadowmap_vertex:D2,shadowmask_pars_fragment:U2,skinbase_vertex:N2,skinning_pars_vertex:F2,skinning_vertex:O2,skinnormal_vertex:B2,specularmap_fragment:k2,specularmap_pars_fragment:z2,tonemapping_fragment:G2,tonemapping_pars_fragment:H2,transmission_fragment:V2,transmission_pars_fragment:W2,uv_pars_fragment:X2,uv_pars_vertex:$2,uv_vertex:q2,worldpos_vertex:Y2,background_vert:j2,background_frag:K2,backgroundCube_vert:Z2,backgroundCube_frag:J2,cube_vert:Q2,cube_frag:ex,depth_vert:tx,depth_frag:nx,distanceRGBA_vert:ix,distanceRGBA_frag:rx,equirect_vert:sx,equirect_frag:ax,linedashed_vert:ox,linedashed_frag:lx,meshbasic_vert:cx,meshbasic_frag:ux,meshlambert_vert:hx,meshlambert_frag:dx,meshmatcap_vert:fx,meshmatcap_frag:px,meshnormal_vert:mx,meshnormal_frag:gx,meshphong_vert:_x,meshphong_frag:vx,meshphysical_vert:xx,meshphysical_frag:Sx,meshtoon_vert:Mx,meshtoon_frag:yx,points_vert:Ex,points_frag:Ax,shadow_vert:Tx,shadow_frag:bx,sprite_vert:wx,sprite_frag:Rx},re={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},si={basic:{uniforms:an([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:an([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:an([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:an([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:an([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:an([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:an([re.points,re.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:an([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:an([re.common,re.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:an([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:an([re.sprite,re.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:an([re.common,re.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:an([re.lights,re.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};si.physical={uniforms:an([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const ho={r:0,b:0,g:0},_r=new hi,Cx=new Et;function Px(t,e,n,i,r,s,a){const o=new Ge(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?n:e).get(M)),M}function _(E){let M=!1;const A=g(E);A===null?f(o,l):A&&A.isColor&&(f(A,1),M=!0);const k=t.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,a):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(E,M){const A=g(M);A&&(A.isCubeTexture||A.mapping===nl)?(u===void 0&&(u=new cn(new Ca(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:Ts(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(k,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),_r.copy(M.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Cx.makeRotationFromEuler(_r)),u.material.toneMapped=ut.getTransfer(A.colorSpace)!==gt,(d!==A||h!==A.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=A,h=A.version,p=t.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new cn(new Pa(2,2),new jn({name:"BackgroundMaterial",uniforms:Ts(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ut.getTransfer(A.colorSpace)!==gt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||h!==A.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=A,h=A.version,p=t.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,M){E.getRGB(ho,rm(t)),i.buffers.color.setClear(ho.r,ho.g,ho.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),l=M,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(o,l)},render:_,addToRenderList:m}}function Lx(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(S,L,H,N,q){let $=!1;const X=d(N,H,L);s!==X&&(s=X,c(s.object)),$=p(S,N,H,q),$&&g(S,N,H,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,A(S,L,H,N),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function d(S,L,H){const N=H.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let $=q[L.id];$===void 0&&($={},q[L.id]=$);let X=$[N];return X===void 0&&(X=h(l()),$[N]=X),X}function h(S){const L=[],H=[],N=[];for(let q=0;q<n;q++)L[q]=0,H[q]=0,N[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:N,object:S,attributes:{},index:null}}function p(S,L,H,N){const q=s.attributes,$=L.attributes;let X=0;const j=H.getAttributes();for(const G in j)if(j[G].location>=0){const fe=q[G];let me=$[G];if(me===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(me=S.instanceColor)),fe===void 0||fe.attribute!==me||me&&fe.data!==me.data)return!0;X++}return s.attributesNum!==X||s.index!==N}function g(S,L,H,N){const q={},$=L.attributes;let X=0;const j=H.getAttributes();for(const G in j)if(j[G].location>=0){let fe=$[G];fe===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor));const me={};me.attribute=fe,fe&&fe.data&&(me.data=fe.data),q[G]=me,X++}s.attributes=q,s.attributesNum=X,s.index=N}function _(){const S=s.newAttributes;for(let L=0,H=S.length;L<H;L++)S[L]=0}function m(S){f(S,0)}function f(S,L){const H=s.newAttributes,N=s.enabledAttributes,q=s.attributeDivisors;H[S]=1,N[S]===0&&(t.enableVertexAttribArray(S),N[S]=1),q[S]!==L&&(t.vertexAttribDivisor(S,L),q[S]=L)}function E(){const S=s.newAttributes,L=s.enabledAttributes;for(let H=0,N=L.length;H<N;H++)L[H]!==S[H]&&(t.disableVertexAttribArray(H),L[H]=0)}function M(S,L,H,N,q,$,X){X===!0?t.vertexAttribIPointer(S,L,H,q,$):t.vertexAttribPointer(S,L,H,N,q,$)}function A(S,L,H,N){_();const q=N.attributes,$=H.getAttributes(),X=L.defaultAttributeValues;for(const j in $){const G=$[j];if(G.location>=0){let ue=q[j];if(ue===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor)),ue!==void 0){const fe=ue.normalized,me=ue.itemSize,Ke=e.get(ue);if(Ke===void 0)continue;const dt=Ke.buffer,W=Ke.type,Q=Ke.bytesPerElement,ve=W===t.INT||W===t.UNSIGNED_INT||ue.gpuType===Gp;if(ue.isInterleavedBufferAttribute){const oe=ue.data,Ve=oe.stride,Be=ue.offset;if(oe.isInstancedInterleavedBuffer){for(let et=0;et<G.locationSize;et++)f(G.location+et,oe.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let et=0;et<G.locationSize;et++)m(G.location+et);t.bindBuffer(t.ARRAY_BUFFER,dt);for(let et=0;et<G.locationSize;et++)M(G.location+et,me/G.locationSize,W,fe,Ve*Q,(Be+me/G.locationSize*et)*Q,ve)}else{if(ue.isInstancedBufferAttribute){for(let oe=0;oe<G.locationSize;oe++)f(G.location+oe,ue.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let oe=0;oe<G.locationSize;oe++)m(G.location+oe);t.bindBuffer(t.ARRAY_BUFFER,dt);for(let oe=0;oe<G.locationSize;oe++)M(G.location+oe,me/G.locationSize,W,fe,me*Q,me/G.locationSize*oe*Q,ve)}}else if(X!==void 0){const fe=X[j];if(fe!==void 0)switch(fe.length){case 2:t.vertexAttrib2fv(G.location,fe);break;case 3:t.vertexAttrib3fv(G.location,fe);break;case 4:t.vertexAttrib4fv(G.location,fe);break;default:t.vertexAttrib1fv(G.location,fe)}}}}E()}function k(){O();for(const S in i){const L=i[S];for(const H in L){const N=L[H];for(const q in N)u(N[q].object),delete N[q];delete L[H]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const H in L){const N=L[H];for(const q in N)u(N[q].object),delete N[q];delete L[H]}delete i[S.id]}function b(S){for(const L in i){const H=i[L];if(H[S.id]===void 0)continue;const N=H[S.id];for(const q in N)u(N[q].object),delete N[q];delete H[S.id]}}function O(){y(),a=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:O,resetDefaultState:y,dispose:k,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Ix(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function o(c,u,d){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<d;p++)this.render(c[p],u[p]);else{h.multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];n.update(p,i,1)}}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];for(let _=0;_<h.length;_++)n.update(g,i,h[_])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Dx(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==oi&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const b=w===il&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==rr&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Zi&&!b)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=p>0,k=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:f,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:A,maxSamples:k}}function Ux(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Sr,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const E=s?0:i,M=E*4;let A=f.clippingState||null;l.value=A,A=u(g,h,M,p);for(let k=0;k!==M;++k)A[k]=n[k];f.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,A=p;M!==_;++M,A+=4)a.copy(d[M]).applyMatrix4(E,o),a.normal.toArray(m,A),m[A+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Nx(t){let e=new WeakMap;function n(a,o){return o===Lc?a.mapping=Ss:o===Ic&&(a.mapping=Ms),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Lc||o===Ic)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new $1(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class lm extends sm{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const fs=4,kd=[.125,.215,.35,.446,.526,.582],Er=20,lc=new lm,zd=new Ge;let cc=null,uc=0,hc=0,dc=!1;const Mr=(1+Math.sqrt(5))/2,os=1/Mr,Gd=[new U(-Mr,os,0),new U(Mr,os,0),new U(-os,0,Mr),new U(os,0,Mr),new U(0,Mr,-os),new U(0,Mr,os),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Hd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){cc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cc,uc,hc),this._renderer.xr.enabled=dc,e.scissorTest=!1,fo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ss||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:il,format:oi,colorSpace:ar,depthBuffer:!1},r=Vd(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vd(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fx(s)),this._blurMaterial=Ox(s,e,n)}return r}_compileMaterial(e){const n=new cn(this._lodPlanes[0],e);this._renderer.compile(n,lc)}_sceneToCubeUV(e,n,i,r){const o=new Tn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(zd),u.toneMapping=Qi,u.autoClear=!1;const p=new Ra({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new cn(new Ca,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(zd),_=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):E===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const M=this._cubeSize;fo(r,E*M,f>2?M:0,M,M),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ss||e.mapping===Ms;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wd());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new cn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;fo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,lc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Gd[(r-s-1)%Gd.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new cn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Er-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Er;m>Er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Er}`);const f=[];let E=0;for(let b=0;b<Er;++b){const O=b/_,y=Math.exp(-O*O/2);f.push(y),b===0?E+=y:b<m&&(E+=2*y)}for(let b=0;b<f.length;b++)f[b]=f[b]/E;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;const A=this._sizeLods[r],k=3*A*(r>M-fs?r-M+fs:0),w=4*(this._cubeSize-A);fo(n,k,w,3*A,2*A),l.setRenderTarget(n),l.render(d,lc)}}function Fx(t){const e=[],n=[],i=[];let r=t;const s=t-fs+1+kd.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-fs?l=kd[a-t+fs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*p),M=new Float32Array(m*g*p),A=new Float32Array(f*g*p);for(let w=0;w<p;w++){const b=w%3*2/3-1,O=w>2?0:-1,y=[b,O,0,b+2/3,O,0,b+2/3,O+1,0,b,O,0,b+2/3,O+1,0,b,O+1,0];E.set(y,_*g*w),M.set(h,m*g*w);const S=[w,w,w,w,w,w];A.set(S,f*g*w)}const k=new Kn;k.setAttribute("position",new _n(E,_)),k.setAttribute("uv",new _n(M,m)),k.setAttribute("faceIndex",new _n(A,f)),e.push(k),r>fs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Vd(t,e,n){const i=new Nr(t,e,n);return i.texture.mapping=nl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Ox(t,e,n){const i=new Float32Array(Er),r=new U(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Wd(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Xd(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function xu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bx(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Lc||l===Ic,u=l===Ss||l===Ms;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new Hd(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Hd(t)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function kx(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Kp("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function zx(t,e,n,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let M=0,A=E.length;M<A;M+=3){const k=E[M+0],w=E[M+1],b=E[M+2];h.push(k,w,w,b,b,k)}}else if(g!==void 0){const E=g.array;_=g.version;for(let M=0,A=E.length/3-1;M<A;M+=3){const k=M+0,w=M+1,b=M+2;h.push(k,w,w,b,b,k)}}else return;const m=new(jp(h)?im:nm)(h,1);m.version=_;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Gx(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*a),n.update(p,i,1)}function c(h,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,h*a,g),n.update(p,i,g))}function u(h,p,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(h[m]/a,p[m]);else{_.multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];n.update(m,i,1)}}function d(h,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E];for(let E=0;E<_.length;E++)n.update(f,i,_[E])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Hx(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Vx(t,e,n){const i=new WeakMap,r=new xt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let S=function(){O.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let A=0;g===!0&&(A=1),_===!0&&(A=2),m===!0&&(A=3);let k=o.attributes.position.count*A,w=1;k>e.maxTextureSize&&(w=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const b=new Float32Array(k*w*4*d),O=new Jp(b,k,w,d);O.type=Zi,O.needsUpdate=!0;const y=A*4;for(let L=0;L<d;L++){const H=f[L],N=E[L],q=M[L],$=k*w*4*L;for(let X=0;X<H.count;X++){const j=X*y;g===!0&&(r.fromBufferAttribute(H,X),b[$+j+0]=r.x,b[$+j+1]=r.y,b[$+j+2]=r.z,b[$+j+3]=0),_===!0&&(r.fromBufferAttribute(N,X),b[$+j+4]=r.x,b[$+j+5]=r.y,b[$+j+6]=r.z,b[$+j+7]=0),m===!0&&(r.fromBufferAttribute(q,X),b[$+j+8]=r.x,b[$+j+9]=r.y,b[$+j+10]=r.z,b[$+j+11]=q.itemSize===4?r.w:1)}}h={count:d,texture:O,size:new He(k,w)},i.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function Wx(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class cm extends gn{constructor(e,n,i,r,s,a,o,l,c,u=gs){if(u!==gs&&u!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===gs&&(i=ys),i===void 0&&u===As&&(i=Es),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:On,this.minFilter=l!==void 0?l:On,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const um=new gn,hm=new cm(1,1);hm.compareFunction=Yp;const dm=new Jp,fm=new P1,pm=new am,$d=[],qd=[],Yd=new Float32Array(16),jd=new Float32Array(9),Kd=new Float32Array(4);function Gs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=$d[r];if(s===void 0&&(s=new Float32Array(r),$d[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function al(t,e){let n=qd[e];n===void 0&&(n=new Int32Array(e),qd[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Xx(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function $x(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2fv(this.addr,e),Wt(n,e)}}function qx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Vt(n,e))return;t.uniform3fv(this.addr,e),Wt(n,e)}}function Yx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4fv(this.addr,e),Wt(n,e)}}function jx(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Wt(n,e)}else{if(Vt(n,i))return;Kd.set(i),t.uniformMatrix2fv(this.addr,!1,Kd),Wt(n,i)}}function Kx(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Wt(n,e)}else{if(Vt(n,i))return;jd.set(i),t.uniformMatrix3fv(this.addr,!1,jd),Wt(n,i)}}function Zx(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Wt(n,e)}else{if(Vt(n,i))return;Yd.set(i),t.uniformMatrix4fv(this.addr,!1,Yd),Wt(n,i)}}function Jx(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Qx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2iv(this.addr,e),Wt(n,e)}}function e3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3iv(this.addr,e),Wt(n,e)}}function t3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4iv(this.addr,e),Wt(n,e)}}function n3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function i3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2uiv(this.addr,e),Wt(n,e)}}function r3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3uiv(this.addr,e),Wt(n,e)}}function s3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4uiv(this.addr,e),Wt(n,e)}}function a3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?hm:um;n.setTexture2D(e||s,r)}function o3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||fm,r)}function l3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||pm,r)}function c3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||dm,r)}function u3(t){switch(t){case 5126:return Xx;case 35664:return $x;case 35665:return qx;case 35666:return Yx;case 35674:return jx;case 35675:return Kx;case 35676:return Zx;case 5124:case 35670:return Jx;case 35667:case 35671:return Qx;case 35668:case 35672:return e3;case 35669:case 35673:return t3;case 5125:return n3;case 36294:return i3;case 36295:return r3;case 36296:return s3;case 35678:case 36198:case 36298:case 36306:case 35682:return a3;case 35679:case 36299:case 36307:return o3;case 35680:case 36300:case 36308:case 36293:return l3;case 36289:case 36303:case 36311:case 36292:return c3}}function h3(t,e){t.uniform1fv(this.addr,e)}function d3(t,e){const n=Gs(e,this.size,2);t.uniform2fv(this.addr,n)}function f3(t,e){const n=Gs(e,this.size,3);t.uniform3fv(this.addr,n)}function p3(t,e){const n=Gs(e,this.size,4);t.uniform4fv(this.addr,n)}function m3(t,e){const n=Gs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function g3(t,e){const n=Gs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function _3(t,e){const n=Gs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function v3(t,e){t.uniform1iv(this.addr,e)}function x3(t,e){t.uniform2iv(this.addr,e)}function S3(t,e){t.uniform3iv(this.addr,e)}function M3(t,e){t.uniform4iv(this.addr,e)}function y3(t,e){t.uniform1uiv(this.addr,e)}function E3(t,e){t.uniform2uiv(this.addr,e)}function A3(t,e){t.uniform3uiv(this.addr,e)}function T3(t,e){t.uniform4uiv(this.addr,e)}function b3(t,e,n){const i=this.cache,r=e.length,s=al(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||um,s[a])}function w3(t,e,n){const i=this.cache,r=e.length,s=al(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||fm,s[a])}function R3(t,e,n){const i=this.cache,r=e.length,s=al(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||pm,s[a])}function C3(t,e,n){const i=this.cache,r=e.length,s=al(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||dm,s[a])}function P3(t){switch(t){case 5126:return h3;case 35664:return d3;case 35665:return f3;case 35666:return p3;case 35674:return m3;case 35675:return g3;case 35676:return _3;case 5124:case 35670:return v3;case 35667:case 35671:return x3;case 35668:case 35672:return S3;case 35669:case 35673:return M3;case 5125:return y3;case 36294:return E3;case 36295:return A3;case 36296:return T3;case 35678:case 36198:case 36298:case 36306:case 35682:return b3;case 35679:case 36299:case 36307:return w3;case 35680:case 36300:case 36308:case 36293:return R3;case 36289:case 36303:case 36311:case 36292:return C3}}class L3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=u3(n.type)}}class I3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=P3(n.type)}}class D3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const fc=/(\w+)(\])?(\[|\.)?/g;function Zd(t,e){t.seq.push(e),t.map[e.id]=e}function U3(t,e,n){const i=t.name,r=i.length;for(fc.lastIndex=0;;){const s=fc.exec(i),a=fc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Zd(n,c===void 0?new L3(o,t,e):new I3(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new D3(o),Zd(n,d)),n=d}}}class To{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);U3(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Jd(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const N3=37297;let F3=0;function O3(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function B3(t){const e=ut.getPrimaries(ut.workingColorSpace),n=ut.getPrimaries(t);let i;switch(e===n?i="":e===Fo&&n===No?i="LinearDisplayP3ToLinearSRGB":e===No&&n===Fo&&(i="LinearSRGBToLinearDisplayP3"),t){case ar:case rl:return[i,"LinearTransferOETF"];case ri:case gu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Qd(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+O3(t.getShaderSource(e),a)}else return r}function k3(t,e){const n=B3(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function z3(t,e){let n;switch(e){case D_:n="Linear";break;case U_:n="Reinhard";break;case N_:n="OptimizedCineon";break;case F_:n="ACESFilmic";break;case B_:n="AgX";break;case k_:n="Neutral";break;case O_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function G3(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function H3(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function V3(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function la(t){return t!==""}function ef(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const W3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(t){return t.replace(W3,$3)}const X3=new Map;function $3(t,e){let n=Fe[e];if(n===void 0){const i=X3.get(e);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nc(n)}const q3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nf(t){return t.replace(q3,Y3)}function Y3(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rf(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function j3(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Bp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===s_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function K3(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ss:case Ms:e="ENVMAP_TYPE_CUBE";break;case nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Z3(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function J3(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case kp:e="ENVMAP_BLENDING_MULTIPLY";break;case L_:e="ENVMAP_BLENDING_MIX";break;case I_:e="ENVMAP_BLENDING_ADD";break}return e}function Q3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function eS(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=j3(n),c=K3(n),u=Z3(n),d=J3(n),h=Q3(n),p=G3(n),g=H3(s),_=r.createProgram();let m,f,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(la).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(la).join(`
`),f.length>0&&(f+=`
`)):(m=[rf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),f=[rf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qi?"#define TONE_MAPPING":"",n.toneMapping!==Qi?Fe.tonemapping_pars_fragment:"",n.toneMapping!==Qi?z3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,k3("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(la).join(`
`)),a=Nc(a),a=ef(a,n),a=tf(a,n),o=Nc(o),o=ef(o,n),o=tf(o,n),a=nf(a),o=nf(o),n.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===vd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=E+m+a,A=E+f+o,k=Jd(r,r.VERTEX_SHADER,M),w=Jd(r,r.FRAGMENT_SHADER,A);r.attachShader(_,k),r.attachShader(_,w),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function b(L){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(_).trim(),N=r.getShaderInfoLog(k).trim(),q=r.getShaderInfoLog(w).trim();let $=!0,X=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,k,w);else{const j=Qd(r,k,"vertex"),G=Qd(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+j+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(N===""||q==="")&&(X=!1);X&&(L.diagnostics={runnable:$,programLog:H,vertexShader:{log:N,prefix:m},fragmentShader:{log:q,prefix:f}})}r.deleteShader(k),r.deleteShader(w),O=new To(r,_),y=V3(r,_)}let O;this.getUniforms=function(){return O===void 0&&b(this),O};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,N3)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=F3++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=k,this.fragmentShader=w,this}let tS=0;class nS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new iS(e),n.set(e,i)),i}}class iS{constructor(e){this.id=tS++,this.code=e,this.usedTimes=0}}function rS(t,e,n,i,r,s,a){const o=new em,l=new nS,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,S,L,H,N){const q=H.fog,$=N.geometry,X=y.isMeshStandardMaterial?H.environment:null,j=(y.isMeshStandardMaterial?n:e).get(y.envMap||X),G=j&&j.mapping===nl?j.image.height:null,ue=g[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const fe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,me=fe!==void 0?fe.length:0;let Ke=0;$.morphAttributes.position!==void 0&&(Ke=1),$.morphAttributes.normal!==void 0&&(Ke=2),$.morphAttributes.color!==void 0&&(Ke=3);let dt,W,Q,ve;if(ue){const ft=si[ue];dt=ft.vertexShader,W=ft.fragmentShader}else dt=y.vertexShader,W=y.fragmentShader,l.update(y),Q=l.getVertexShaderID(y),ve=l.getFragmentShaderID(y);const oe=t.getRenderTarget(),Ve=N.isInstancedMesh===!0,Be=N.isBatchedMesh===!0,et=!!y.map,C=!!y.matcap,Ze=!!j,qe=!!y.aoMap,Mt=!!y.lightMap,Re=!!y.bumpMap,it=!!y.normalMap,We=!!y.displacementMap,Ne=!!y.emissiveMap,Ot=!!y.metalnessMap,T=!!y.roughnessMap,v=y.anisotropy>0,z=y.clearcoat>0,K=y.dispersion>0,Z=y.iridescence>0,J=y.sheen>0,be=y.transmission>0,se=v&&!!y.anisotropyMap,ae=z&&!!y.clearcoatMap,ke=z&&!!y.clearcoatNormalMap,ee=z&&!!y.clearcoatRoughnessMap,ye=Z&&!!y.iridescenceMap,Xe=Z&&!!y.iridescenceThicknessMap,Le=J&&!!y.sheenColorMap,ce=J&&!!y.sheenRoughnessMap,ze=!!y.specularMap,Ye=!!y.specularColorMap,Pt=!!y.specularIntensityMap,R=be&&!!y.transmissionMap,he=be&&!!y.thicknessMap,V=!!y.gradientMap,Y=!!y.alphaMap,ie=y.alphaTest>0,Ie=!!y.alphaHash,at=!!y.extensions;let Lt=Qi;y.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Lt=t.toneMapping);const $t={shaderID:ue,shaderType:y.type,shaderName:y.name,vertexShader:dt,fragmentShader:W,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:ve,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Be,batchingColor:Be&&N._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&N.instanceColor!==null,instancingMorph:Ve&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ar,alphaToCoverage:!!y.alphaToCoverage,map:et,matcap:C,envMap:Ze,envMapMode:Ze&&j.mapping,envMapCubeUVHeight:G,aoMap:qe,lightMap:Mt,bumpMap:Re,normalMap:it,displacementMap:h&&We,emissiveMap:Ne,normalMapObjectSpace:it&&y.normalMapType===Q_,normalMapTangentSpace:it&&y.normalMapType===qp,metalnessMap:Ot,roughnessMap:T,anisotropy:v,anisotropyMap:se,clearcoat:z,clearcoatMap:ae,clearcoatNormalMap:ke,clearcoatRoughnessMap:ee,dispersion:K,iridescence:Z,iridescenceMap:ye,iridescenceThicknessMap:Xe,sheen:J,sheenColorMap:Le,sheenRoughnessMap:ce,specularMap:ze,specularColorMap:Ye,specularIntensityMap:Pt,transmission:be,transmissionMap:R,thicknessMap:he,gradientMap:V,opaque:y.transparent===!1&&y.blending===ms&&y.alphaToCoverage===!1,alphaMap:Y,alphaTest:ie,alphaHash:Ie,combine:y.combine,mapUv:et&&_(y.map.channel),aoMapUv:qe&&_(y.aoMap.channel),lightMapUv:Mt&&_(y.lightMap.channel),bumpMapUv:Re&&_(y.bumpMap.channel),normalMapUv:it&&_(y.normalMap.channel),displacementMapUv:We&&_(y.displacementMap.channel),emissiveMapUv:Ne&&_(y.emissiveMap.channel),metalnessMapUv:Ot&&_(y.metalnessMap.channel),roughnessMapUv:T&&_(y.roughnessMap.channel),anisotropyMapUv:se&&_(y.anisotropyMap.channel),clearcoatMapUv:ae&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ke&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:ce&&_(y.sheenRoughnessMap.channel),specularMapUv:ze&&_(y.specularMap.channel),specularColorMapUv:Ye&&_(y.specularColorMap.channel),specularIntensityMapUv:Pt&&_(y.specularIntensityMap.channel),transmissionMapUv:R&&_(y.transmissionMap.channel),thicknessMapUv:he&&_(y.thicknessMap.channel),alphaMapUv:Y&&_(y.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(it||v),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!$.attributes.uv&&(et||Y),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ke,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Lt,decodeVideoTexture:et&&y.map.isVideoTexture===!0&&ut.getTransfer(y.map.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===bi,flipSided:y.side===un,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:at&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:at&&y.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return $t.vertexUv1s=c.has(1),$t.vertexUv2s=c.has(2),$t.vertexUv3s=c.has(3),c.clear(),$t}function f(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)S.push(L),S.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(E(S,y),M(S,y),S.push(t.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function E(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function M(y,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.doubleSided&&o.enable(10),S.flipSided&&o.enable(11),S.useDepthPacking&&o.enable(12),S.dithering&&o.enable(13),S.transmission&&o.enable(14),S.sheen&&o.enable(15),S.opaque&&o.enable(16),S.pointsUvs&&o.enable(17),S.decodeVideoTexture&&o.enable(18),S.alphaToCoverage&&o.enable(19),y.push(o.mask)}function A(y){const S=g[y.type];let L;if(S){const H=si[S];L=H1.clone(H.uniforms)}else L=y.uniforms;return L}function k(y,S){let L;for(let H=0,N=u.length;H<N;H++){const q=u[H];if(q.cacheKey===S){L=q,++L.usedTimes;break}}return L===void 0&&(L=new eS(t,S,y,s),u.push(L)),L}function w(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function b(y){l.remove(y)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:A,acquireProgram:k,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:O}}function sS(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function aS(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function sf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function af(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,h,p,g,_,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function o(d,h,p,g,_,m){const f=a(d,h,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,g,_,m){const f=a(d,h,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||aS),i.length>1&&i.sort(h||sf),r.length>1&&r.sort(h||sf)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function oS(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new af,t.set(i,[a])):r>=s.length?(a=new af,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function lS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new Ge};break;case"SpotLight":n={position:new U,direction:new U,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function cS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let uS=0;function hS(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function dS(t){const e=new lS,n=cS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new Et,a=new Et;function o(c){let u=0,d=0,h=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,E=0,M=0,A=0,k=0,w=0,b=0;c.sort(hS);for(let y=0,S=c.length;y<S;y++){const L=c[y],H=L.color,N=L.intensity,q=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=H.r*N,d+=H.g*N,h+=H.b*N;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],N);b++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,G=n.get(L);G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=L.shadow.matrix,E++}i.directional[p]=X,p++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(H).multiplyScalar(N),X.distance=q,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[_]=X;const j=L.shadow;if(L.map&&(i.spotLightMap[k]=L.map,k++,j.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[_]=j.matrix,L.castShadow){const G=n.get(L);G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=$,A++}_++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(H).multiplyScalar(N),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=X,m++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const j=L.shadow,G=n.get(L);G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=L.shadow.matrix,M++}i.point[g]=X,g++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(N),X.groundColor.copy(L.groundColor).multiplyScalar(N),i.hemi[f]=X,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const O=i.hash;(O.directionalLength!==p||O.pointLength!==g||O.spotLength!==_||O.rectAreaLength!==m||O.hemiLength!==f||O.numDirectionalShadows!==E||O.numPointShadows!==M||O.numSpotShadows!==A||O.numSpotMaps!==k||O.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=A+k-w,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=b,O.directionalLength=p,O.pointLength=g,O.spotLength=_,O.rectAreaLength=m,O.hemiLength=f,O.numDirectionalShadows=E,O.numPointShadows=M,O.numSpotShadows=A,O.numSpotMaps=k,O.numLightProbes=b,i.version=uS++)}function l(c,u){let d=0,h=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const M=c[f];if(M.isDirectionalLight){const A=i.directional[d];A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),d++}else if(M.isSpotLight){const A=i.spot[p];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const A=i.rectArea[g];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const A=i.point[h];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const A=i.hemi[_];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function of(t){const e=new dS(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function fS(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new of(t),e.set(r,[o])):s>=a.length?(o=new of(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class pS extends zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Z_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mS extends zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_S=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vS(t,e,n){let i=new vu;const r=new He,s=new He,a=new xt,o=new pS({depthPacking:J_}),l=new mS,c={},u=n.maxTextureSize,d={[ir]:un,[un]:ir,[bi]:bi},h=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:gS,fragmentShader:_S}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Kn;g.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new cn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bp;let f=this.type;this.render=function(w,b,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=t.getRenderTarget(),S=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Ji),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const N=f!==Ti&&this.type===Ti,q=f===Ti&&this.type!==Ti;for(let $=0,X=w.length;$<X;$++){const j=w[$],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ue=G.getFrameExtents();if(r.multiply(ue),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ue.x),r.x=s.x*ue.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ue.y),r.y=s.y*ue.y,G.mapSize.y=s.y)),G.map===null||N===!0||q===!0){const me=this.type!==Ti?{minFilter:On,magFilter:On}:{};G.map!==null&&G.map.dispose(),G.map=new Nr(r.x,r.y,me),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}t.setRenderTarget(G.map),t.clear();const fe=G.getViewportCount();for(let me=0;me<fe;me++){const Ke=G.getViewport(me);a.set(s.x*Ke.x,s.y*Ke.y,s.x*Ke.z,s.y*Ke.w),H.viewport(a),G.updateMatrices(j,me),i=G.getFrustum(),A(b,O,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===Ti&&E(G,O),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(y,S,L)};function E(w,b){const O=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Nr(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(b,null,O,h,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(b,null,O,p,_,null)}function M(w,b,O,y){let S=null;const L=O.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)S=L;else if(S=O.isPointLight===!0?l:o,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const H=S.uuid,N=b.uuid;let q=c[H];q===void 0&&(q={},c[H]=q);let $=q[N];$===void 0&&($=S.clone(),q[N]=$,b.addEventListener("dispose",k)),S=$}if(S.visible=b.visible,S.wireframe=b.wireframe,y===Ti?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:d[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,O.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=t.properties.get(S);H.light=O}return S}function A(w,b,O,y,S){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Ti)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,w.matrixWorld);const N=e.update(w),q=w.material;if(Array.isArray(q)){const $=N.groups;for(let X=0,j=$.length;X<j;X++){const G=$[X],ue=q[G.materialIndex];if(ue&&ue.visible){const fe=M(w,ue,y,S);w.onBeforeShadow(t,w,b,O,N,fe,G),t.renderBufferDirect(O,null,N,fe,w,G),w.onAfterShadow(t,w,b,O,N,fe,G)}}}else if(q.visible){const $=M(w,q,y,S);w.onBeforeShadow(t,w,b,O,N,$,null),t.renderBufferDirect(O,null,N,$,w,null),w.onAfterShadow(t,w,b,O,N,$,null)}}const H=w.children;for(let N=0,q=H.length;N<q;N++)A(H[N],b,O,y,S)}function k(w){w.target.removeEventListener("dispose",k);for(const O in c){const y=c[O],S=w.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}function xS(t){function e(){let R=!1;const he=new xt;let V=null;const Y=new xt(0,0,0,0);return{setMask:function(ie){V!==ie&&!R&&(t.colorMask(ie,ie,ie,ie),V=ie)},setLocked:function(ie){R=ie},setClear:function(ie,Ie,at,Lt,$t){$t===!0&&(ie*=Lt,Ie*=Lt,at*=Lt),he.set(ie,Ie,at,Lt),Y.equals(he)===!1&&(t.clearColor(ie,Ie,at,Lt),Y.copy(he))},reset:function(){R=!1,V=null,Y.set(-1,0,0,0)}}}function n(){let R=!1,he=null,V=null,Y=null;return{setTest:function(ie){ie?ve(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(ie){he!==ie&&!R&&(t.depthMask(ie),he=ie)},setFunc:function(ie){if(V!==ie){switch(ie){case A_:t.depthFunc(t.NEVER);break;case T_:t.depthFunc(t.ALWAYS);break;case b_:t.depthFunc(t.LESS);break;case Io:t.depthFunc(t.LEQUAL);break;case w_:t.depthFunc(t.EQUAL);break;case R_:t.depthFunc(t.GEQUAL);break;case C_:t.depthFunc(t.GREATER);break;case P_:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}V=ie}},setLocked:function(ie){R=ie},setClear:function(ie){Y!==ie&&(t.clearDepth(ie),Y=ie)},reset:function(){R=!1,he=null,V=null,Y=null}}}function i(){let R=!1,he=null,V=null,Y=null,ie=null,Ie=null,at=null,Lt=null,$t=null;return{setTest:function(ft){R||(ft?ve(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(ft){he!==ft&&!R&&(t.stencilMask(ft),he=ft)},setFunc:function(ft,ei,ti){(V!==ft||Y!==ei||ie!==ti)&&(t.stencilFunc(ft,ei,ti),V=ft,Y=ei,ie=ti)},setOp:function(ft,ei,ti){(Ie!==ft||at!==ei||Lt!==ti)&&(t.stencilOp(ft,ei,ti),Ie=ft,at=ei,Lt=ti)},setLocked:function(ft){R=ft},setClear:function(ft){$t!==ft&&(t.clearStencil(ft),$t=ft)},reset:function(){R=!1,he=null,V=null,Y=null,ie=null,Ie=null,at=null,Lt=null,$t=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],p=null,g=!1,_=null,m=null,f=null,E=null,M=null,A=null,k=null,w=new Ge(0,0,0),b=0,O=!1,y=null,S=null,L=null,H=null,N=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,X=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(j)[1]),$=X>=1):j.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),$=X>=2);let G=null,ue={};const fe=t.getParameter(t.SCISSOR_BOX),me=t.getParameter(t.VIEWPORT),Ke=new xt().fromArray(fe),dt=new xt().fromArray(me);function W(R,he,V,Y){const ie=new Uint8Array(4),Ie=t.createTexture();t.bindTexture(R,Ie),t.texParameteri(R,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(R,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let at=0;at<V;at++)R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,Y,0,t.RGBA,t.UNSIGNED_BYTE,ie):t.texImage2D(he+at,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ie);return Ie}const Q={};Q[t.TEXTURE_2D]=W(t.TEXTURE_2D,t.TEXTURE_2D,1),Q[t.TEXTURE_CUBE_MAP]=W(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[t.TEXTURE_2D_ARRAY]=W(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Q[t.TEXTURE_3D]=W(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ve(t.DEPTH_TEST),s.setFunc(Io),Re(!1),it(zh),ve(t.CULL_FACE),qe(Ji);function ve(R){c[R]!==!0&&(t.enable(R),c[R]=!0)}function oe(R){c[R]!==!1&&(t.disable(R),c[R]=!1)}function Ve(R,he){return u[R]!==he?(t.bindFramebuffer(R,he),u[R]=he,R===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=he),R===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=he),!0):!1}function Be(R,he){let V=h,Y=!1;if(R){V=d.get(he),V===void 0&&(V=[],d.set(he,V));const ie=R.textures;if(V.length!==ie.length||V[0]!==t.COLOR_ATTACHMENT0){for(let Ie=0,at=ie.length;Ie<at;Ie++)V[Ie]=t.COLOR_ATTACHMENT0+Ie;V.length=ie.length,Y=!0}}else V[0]!==t.BACK&&(V[0]=t.BACK,Y=!0);Y&&t.drawBuffers(V)}function et(R){return p!==R?(t.useProgram(R),p=R,!0):!1}const C={[yr]:t.FUNC_ADD,[o_]:t.FUNC_SUBTRACT,[l_]:t.FUNC_REVERSE_SUBTRACT};C[c_]=t.MIN,C[u_]=t.MAX;const Ze={[h_]:t.ZERO,[d_]:t.ONE,[f_]:t.SRC_COLOR,[Cc]:t.SRC_ALPHA,[x_]:t.SRC_ALPHA_SATURATE,[__]:t.DST_COLOR,[m_]:t.DST_ALPHA,[p_]:t.ONE_MINUS_SRC_COLOR,[Pc]:t.ONE_MINUS_SRC_ALPHA,[v_]:t.ONE_MINUS_DST_COLOR,[g_]:t.ONE_MINUS_DST_ALPHA,[S_]:t.CONSTANT_COLOR,[M_]:t.ONE_MINUS_CONSTANT_COLOR,[y_]:t.CONSTANT_ALPHA,[E_]:t.ONE_MINUS_CONSTANT_ALPHA};function qe(R,he,V,Y,ie,Ie,at,Lt,$t,ft){if(R===Ji){g===!0&&(oe(t.BLEND),g=!1);return}if(g===!1&&(ve(t.BLEND),g=!0),R!==a_){if(R!==_||ft!==O){if((m!==yr||M!==yr)&&(t.blendEquation(t.FUNC_ADD),m=yr,M=yr),ft)switch(R){case ms:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gh:t.blendFunc(t.ONE,t.ONE);break;case Hh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ms:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Hh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}f=null,E=null,A=null,k=null,w.set(0,0,0),b=0,_=R,O=ft}return}ie=ie||he,Ie=Ie||V,at=at||Y,(he!==m||ie!==M)&&(t.blendEquationSeparate(C[he],C[ie]),m=he,M=ie),(V!==f||Y!==E||Ie!==A||at!==k)&&(t.blendFuncSeparate(Ze[V],Ze[Y],Ze[Ie],Ze[at]),f=V,E=Y,A=Ie,k=at),(Lt.equals(w)===!1||$t!==b)&&(t.blendColor(Lt.r,Lt.g,Lt.b,$t),w.copy(Lt),b=$t),_=R,O=!1}function Mt(R,he){R.side===bi?oe(t.CULL_FACE):ve(t.CULL_FACE);let V=R.side===un;he&&(V=!V),Re(V),R.blending===ms&&R.transparent===!1?qe(Ji):qe(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),s.setFunc(R.depthFunc),s.setTest(R.depthTest),s.setMask(R.depthWrite),r.setMask(R.colorWrite);const Y=R.stencilWrite;a.setTest(Y),Y&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ne(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ve(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Re(R){y!==R&&(R?t.frontFace(t.CW):t.frontFace(t.CCW),y=R)}function it(R){R!==i_?(ve(t.CULL_FACE),R!==S&&(R===zh?t.cullFace(t.BACK):R===r_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),S=R}function We(R){R!==L&&($&&t.lineWidth(R),L=R)}function Ne(R,he,V){R?(ve(t.POLYGON_OFFSET_FILL),(H!==he||N!==V)&&(t.polygonOffset(he,V),H=he,N=V)):oe(t.POLYGON_OFFSET_FILL)}function Ot(R){R?ve(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function T(R){R===void 0&&(R=t.TEXTURE0+q-1),G!==R&&(t.activeTexture(R),G=R)}function v(R,he,V){V===void 0&&(G===null?V=t.TEXTURE0+q-1:V=G);let Y=ue[V];Y===void 0&&(Y={type:void 0,texture:void 0},ue[V]=Y),(Y.type!==R||Y.texture!==he)&&(G!==V&&(t.activeTexture(V),G=V),t.bindTexture(R,he||Q[R]),Y.type=R,Y.texture=he)}function z(){const R=ue[G];R!==void 0&&R.type!==void 0&&(t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function K(){try{t.compressedTexImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Z(){try{t.compressedTexImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function be(){try{t.texSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ae(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ke(){try{t.texStorage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ee(){try{t.texStorage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ye(){try{t.texImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Xe(){try{t.texImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Le(R){Ke.equals(R)===!1&&(t.scissor(R.x,R.y,R.z,R.w),Ke.copy(R))}function ce(R){dt.equals(R)===!1&&(t.viewport(R.x,R.y,R.z,R.w),dt.copy(R))}function ze(R,he){let V=l.get(he);V===void 0&&(V=new WeakMap,l.set(he,V));let Y=V.get(R);Y===void 0&&(Y=t.getUniformBlockIndex(he,R.name),V.set(R,Y))}function Ye(R,he){const Y=l.get(he).get(R);o.get(he)!==Y&&(t.uniformBlockBinding(he,Y,R.__bindingPointIndex),o.set(he,Y))}function Pt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},G=null,ue={},u={},d=new WeakMap,h=[],p=null,g=!1,_=null,m=null,f=null,E=null,M=null,A=null,k=null,w=new Ge(0,0,0),b=0,O=!1,y=null,S=null,L=null,H=null,N=null,Ke.set(0,0,t.canvas.width,t.canvas.height),dt.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ve,disable:oe,bindFramebuffer:Ve,drawBuffers:Be,useProgram:et,setBlending:qe,setMaterial:Mt,setFlipSided:Re,setCullFace:it,setLineWidth:We,setPolygonOffset:Ne,setScissorTest:Ot,activeTexture:T,bindTexture:v,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:ye,texImage3D:Xe,updateUBOMapping:ze,uniformBlockBinding:Ye,texStorage2D:ke,texStorage3D:ee,texSubImage2D:J,texSubImage3D:be,compressedTexSubImage2D:se,compressedTexSubImage3D:ae,scissor:Le,viewport:ce,reset:Pt}}function SS(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return p?new OffscreenCanvas(T,v):Bo("canvas")}function _(T,v,z){let K=1;const Z=Ot(T);if((Z.width>z||Z.height>z)&&(K=z/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const J=Math.floor(K*Z.width),be=Math.floor(K*Z.height);d===void 0&&(d=g(J,be));const se=v?g(J,be):d;return se.width=J,se.height=be,se.getContext("2d").drawImage(T,0,0,J,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+J+"x"+be+")."),se}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps&&T.minFilter!==On&&T.minFilter!==$n}function f(T){t.generateMipmap(T)}function E(T,v,z,K,Z=!1){if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=v;if(v===t.RED&&(z===t.FLOAT&&(J=t.R32F),z===t.HALF_FLOAT&&(J=t.R16F),z===t.UNSIGNED_BYTE&&(J=t.R8)),v===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.R8UI),z===t.UNSIGNED_SHORT&&(J=t.R16UI),z===t.UNSIGNED_INT&&(J=t.R32UI),z===t.BYTE&&(J=t.R8I),z===t.SHORT&&(J=t.R16I),z===t.INT&&(J=t.R32I)),v===t.RG&&(z===t.FLOAT&&(J=t.RG32F),z===t.HALF_FLOAT&&(J=t.RG16F),z===t.UNSIGNED_BYTE&&(J=t.RG8)),v===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.RG8UI),z===t.UNSIGNED_SHORT&&(J=t.RG16UI),z===t.UNSIGNED_INT&&(J=t.RG32UI),z===t.BYTE&&(J=t.RG8I),z===t.SHORT&&(J=t.RG16I),z===t.INT&&(J=t.RG32I)),v===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),v===t.RGBA){const be=Z?Uo:ut.getTransfer(K);z===t.FLOAT&&(J=t.RGBA32F),z===t.HALF_FLOAT&&(J=t.RGBA16F),z===t.UNSIGNED_BYTE&&(J=be===gt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(T,v){let z;return T?v===null||v===ys||v===Es?z=t.DEPTH24_STENCIL8:v===Zi?z=t.DEPTH32F_STENCIL8:v===Do&&(z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ys||v===Es?z=t.DEPTH_COMPONENT24:v===Zi?z=t.DEPTH_COMPONENT32F:v===Do&&(z=t.DEPTH_COMPONENT16),z}function A(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==On&&T.minFilter!==$n?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function k(T){const v=T.target;v.removeEventListener("dispose",k),b(v),v.isVideoTexture&&u.delete(v)}function w(T){const v=T.target;v.removeEventListener("dispose",w),y(v)}function b(T){const v=i.get(T);if(v.__webglInit===void 0)return;const z=T.source,K=h.get(z);if(K){const Z=K[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&O(T),Object.keys(K).length===0&&h.delete(z)}i.remove(T)}function O(T){const v=i.get(T);t.deleteTexture(v.__webglTexture);const z=T.source,K=h.get(z);delete K[v.__cacheKey],a.memory.textures--}function y(T){const v=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let Z=0;Z<v.__webglFramebuffer[K].length;Z++)t.deleteFramebuffer(v.__webglFramebuffer[K][Z]);else t.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)t.deleteFramebuffer(v.__webglFramebuffer[K]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const z=T.textures;for(let K=0,Z=z.length;K<Z;K++){const J=i.get(z[K]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(z[K])}i.remove(T)}let S=0;function L(){S=0}function H(){const T=S;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),S+=1,T}function N(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function q(T,v){const z=i.get(T);if(T.isVideoTexture&&We(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){const K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(z,T,v);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+v)}function $(T,v){const z=i.get(T);if(T.version>0&&z.__version!==T.version){dt(z,T,v);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+v)}function X(T,v){const z=i.get(T);if(T.version>0&&z.__version!==T.version){dt(z,T,v);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+v)}function j(T,v){const z=i.get(T);if(T.version>0&&z.__version!==T.version){W(z,T,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+v)}const G={[Dc]:t.REPEAT,[Ar]:t.CLAMP_TO_EDGE,[Uc]:t.MIRRORED_REPEAT},ue={[On]:t.NEAREST,[z_]:t.NEAREST_MIPMAP_NEAREST,[Xa]:t.NEAREST_MIPMAP_LINEAR,[$n]:t.LINEAR,[Bl]:t.LINEAR_MIPMAP_NEAREST,[Tr]:t.LINEAR_MIPMAP_LINEAR},fe={[e1]:t.NEVER,[a1]:t.ALWAYS,[t1]:t.LESS,[Yp]:t.LEQUAL,[n1]:t.EQUAL,[s1]:t.GEQUAL,[i1]:t.GREATER,[r1]:t.NOTEQUAL};function me(T,v){if(v.type===Zi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===$n||v.magFilter===Bl||v.magFilter===Xa||v.magFilter===Tr||v.minFilter===$n||v.minFilter===Bl||v.minFilter===Xa||v.minFilter===Tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,G[v.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,G[v.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,G[v.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,ue[v.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,ue[v.minFilter]),v.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,fe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===On||v.minFilter!==Xa&&v.minFilter!==Tr||v.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ke(T,v){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",k));const K=v.source;let Z=h.get(K);Z===void 0&&(Z={},h.set(K,Z));const J=N(v);if(J!==T.__cacheKey){Z[J]===void 0&&(Z[J]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Z[J].usedTimes++;const be=Z[T.__cacheKey];be!==void 0&&(Z[T.__cacheKey].usedTimes--,be.usedTimes===0&&O(v)),T.__cacheKey=J,T.__webglTexture=Z[J].texture}return z}function dt(T,v,z){let K=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=t.TEXTURE_3D);const Z=Ke(T,v),J=v.source;n.bindTexture(K,T.__webglTexture,t.TEXTURE0+z);const be=i.get(J);if(J.version!==be.__version||Z===!0){n.activeTexture(t.TEXTURE0+z);const se=ut.getPrimaries(ut.workingColorSpace),ae=v.colorSpace===Ki?null:ut.getPrimaries(v.colorSpace),ke=v.colorSpace===Ki||se===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let ee=_(v.image,!1,r.maxTextureSize);ee=Ne(v,ee);const ye=s.convert(v.format,v.colorSpace),Xe=s.convert(v.type);let Le=E(v.internalFormat,ye,Xe,v.colorSpace,v.isVideoTexture);me(K,v);let ce;const ze=v.mipmaps,Ye=v.isVideoTexture!==!0,Pt=be.__version===void 0||Z===!0,R=J.dataReady,he=A(v,ee);if(v.isDepthTexture)Le=M(v.format===As,v.type),Pt&&(Ye?n.texStorage2D(t.TEXTURE_2D,1,Le,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,Le,ee.width,ee.height,0,ye,Xe,null));else if(v.isDataTexture)if(ze.length>0){Ye&&Pt&&n.texStorage2D(t.TEXTURE_2D,he,Le,ze[0].width,ze[0].height);for(let V=0,Y=ze.length;V<Y;V++)ce=ze[V],Ye?R&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,ce.width,ce.height,ye,Xe,ce.data):n.texImage2D(t.TEXTURE_2D,V,Le,ce.width,ce.height,0,ye,Xe,ce.data);v.generateMipmaps=!1}else Ye?(Pt&&n.texStorage2D(t.TEXTURE_2D,he,Le,ee.width,ee.height),R&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee.width,ee.height,ye,Xe,ee.data)):n.texImage2D(t.TEXTURE_2D,0,Le,ee.width,ee.height,0,ye,Xe,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ye&&Pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Le,ze[0].width,ze[0].height,ee.depth);for(let V=0,Y=ze.length;V<Y;V++)if(ce=ze[V],v.format!==oi)if(ye!==null)if(Ye){if(R)if(v.layerUpdates.size>0){for(const ie of v.layerUpdates){const Ie=ce.width*ce.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,ie,ce.width,ce.height,1,ye,ce.data.slice(Ie*ie,Ie*(ie+1)),0,0)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,ce.width,ce.height,ee.depth,ye,ce.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,V,Le,ce.width,ce.height,ee.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?R&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,ce.width,ce.height,ee.depth,ye,Xe,ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,V,Le,ce.width,ce.height,ee.depth,0,ye,Xe,ce.data)}else{Ye&&Pt&&n.texStorage2D(t.TEXTURE_2D,he,Le,ze[0].width,ze[0].height);for(let V=0,Y=ze.length;V<Y;V++)ce=ze[V],v.format!==oi?ye!==null?Ye?R&&n.compressedTexSubImage2D(t.TEXTURE_2D,V,0,0,ce.width,ce.height,ye,ce.data):n.compressedTexImage2D(t.TEXTURE_2D,V,Le,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?R&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,ce.width,ce.height,ye,Xe,ce.data):n.texImage2D(t.TEXTURE_2D,V,Le,ce.width,ce.height,0,ye,Xe,ce.data)}else if(v.isDataArrayTexture)if(Ye){if(Pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Le,ee.width,ee.height,ee.depth),R)if(v.layerUpdates.size>0){let V;switch(Xe){case t.UNSIGNED_BYTE:switch(ye){case t.ALPHA:V=1;break;case t.LUMINANCE:V=1;break;case t.LUMINANCE_ALPHA:V=2;break;case t.RGB:V=3;break;case t.RGBA:V=4;break;default:throw new Error(`Unknown texel size for format ${ye}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:V=1;break;default:throw new Error(`Unknown texel size for type ${Xe}.`)}const Y=ee.width*ee.height*V;for(const ie of v.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ie,ee.width,ee.height,1,ye,Xe,ee.data.slice(Y*ie,Y*(ie+1)));v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ye,Xe,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,ee.width,ee.height,ee.depth,0,ye,Xe,ee.data);else if(v.isData3DTexture)Ye?(Pt&&n.texStorage3D(t.TEXTURE_3D,he,Le,ee.width,ee.height,ee.depth),R&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ye,Xe,ee.data)):n.texImage3D(t.TEXTURE_3D,0,Le,ee.width,ee.height,ee.depth,0,ye,Xe,ee.data);else if(v.isFramebufferTexture){if(Pt)if(Ye)n.texStorage2D(t.TEXTURE_2D,he,Le,ee.width,ee.height);else{let V=ee.width,Y=ee.height;for(let ie=0;ie<he;ie++)n.texImage2D(t.TEXTURE_2D,ie,Le,V,Y,0,ye,Xe,null),V>>=1,Y>>=1}}else if(ze.length>0){if(Ye&&Pt){const V=Ot(ze[0]);n.texStorage2D(t.TEXTURE_2D,he,Le,V.width,V.height)}for(let V=0,Y=ze.length;V<Y;V++)ce=ze[V],Ye?R&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,ye,Xe,ce):n.texImage2D(t.TEXTURE_2D,V,Le,ye,Xe,ce);v.generateMipmaps=!1}else if(Ye){if(Pt){const V=Ot(ee);n.texStorage2D(t.TEXTURE_2D,he,Le,V.width,V.height)}R&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,Xe,ee)}else n.texImage2D(t.TEXTURE_2D,0,Le,ye,Xe,ee);m(v)&&f(K),be.__version=J.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function W(T,v,z){if(v.image.length!==6)return;const K=Ke(T,v),Z=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+z);const J=i.get(Z);if(Z.version!==J.__version||K===!0){n.activeTexture(t.TEXTURE0+z);const be=ut.getPrimaries(ut.workingColorSpace),se=v.colorSpace===Ki?null:ut.getPrimaries(v.colorSpace),ae=v.colorSpace===Ki||be===se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const ke=v.isCompressedTexture||v.image[0].isCompressedTexture,ee=v.image[0]&&v.image[0].isDataTexture,ye=[];for(let Y=0;Y<6;Y++)!ke&&!ee?ye[Y]=_(v.image[Y],!0,r.maxCubemapSize):ye[Y]=ee?v.image[Y].image:v.image[Y],ye[Y]=Ne(v,ye[Y]);const Xe=ye[0],Le=s.convert(v.format,v.colorSpace),ce=s.convert(v.type),ze=E(v.internalFormat,Le,ce,v.colorSpace),Ye=v.isVideoTexture!==!0,Pt=J.__version===void 0||K===!0,R=Z.dataReady;let he=A(v,Xe);me(t.TEXTURE_CUBE_MAP,v);let V;if(ke){Ye&&Pt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,ze,Xe.width,Xe.height);for(let Y=0;Y<6;Y++){V=ye[Y].mipmaps;for(let ie=0;ie<V.length;ie++){const Ie=V[ie];v.format!==oi?Le!==null?Ye?R&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie,0,0,Ie.width,Ie.height,Le,Ie.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie,ze,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?R&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie,0,0,Ie.width,Ie.height,Le,ce,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie,ze,Ie.width,Ie.height,0,Le,ce,Ie.data)}}}else{if(V=v.mipmaps,Ye&&Pt){V.length>0&&he++;const Y=Ot(ye[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,ze,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ee){Ye?R&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ye[Y].width,ye[Y].height,Le,ce,ye[Y].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ze,ye[Y].width,ye[Y].height,0,Le,ce,ye[Y].data);for(let ie=0;ie<V.length;ie++){const at=V[ie].image[Y].image;Ye?R&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie+1,0,0,at.width,at.height,Le,ce,at.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie+1,ze,at.width,at.height,0,Le,ce,at.data)}}else{Ye?R&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Le,ce,ye[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ze,Le,ce,ye[Y]);for(let ie=0;ie<V.length;ie++){const Ie=V[ie];Ye?R&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie+1,0,0,Le,ce,Ie.image[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie+1,ze,Le,ce,Ie.image[Y])}}}m(v)&&f(t.TEXTURE_CUBE_MAP),J.__version=Z.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Q(T,v,z,K,Z,J){const be=s.convert(z.format,z.colorSpace),se=s.convert(z.type),ae=E(z.internalFormat,be,se,z.colorSpace);if(!i.get(v).__hasExternalTextures){const ee=Math.max(1,v.width>>J),ye=Math.max(1,v.height>>J);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,J,ae,ee,ye,v.depth,0,be,se,null):n.texImage2D(Z,J,ae,ee,ye,0,be,se,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),it(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,Z,i.get(z).__webglTexture,0,Re(v)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,Z,i.get(z).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ve(T,v,z){if(t.bindRenderbuffer(t.RENDERBUFFER,T),v.depthBuffer){const K=v.depthTexture,Z=K&&K.isDepthTexture?K.type:null,J=M(v.stencilBuffer,Z),be=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=Re(v);it(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,J,v.width,v.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,se,J,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,J,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,be,t.RENDERBUFFER,T)}else{const K=v.textures;for(let Z=0;Z<K.length;Z++){const J=K[Z],be=s.convert(J.format,J.colorSpace),se=s.convert(J.type),ae=E(J.internalFormat,be,se,J.colorSpace),ke=Re(v);z&&it(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,ae,v.width,v.height):it(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ke,ae,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,ae,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function oe(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);const K=i.get(v.depthTexture).__webglTexture,Z=Re(v);if(v.depthTexture.format===gs)it(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0);else if(v.depthTexture.format===As)it(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ve(T){const v=i.get(T),z=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");oe(v.__webglFramebuffer,T)}else if(z){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]=t.createRenderbuffer(),ve(v.__webglDepthbuffer[K],T,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=t.createRenderbuffer(),ve(v.__webglDepthbuffer,T,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(T,v,z){const K=i.get(T);v!==void 0&&Q(K.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&Ve(T)}function et(T){const v=T.texture,z=i.get(T),K=i.get(v);T.addEventListener("dispose",w);const Z=T.textures,J=T.isWebGLCubeRenderTarget===!0,be=Z.length>1;if(be||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=v.version,a.memory.textures++),J){z.__webglFramebuffer=[];for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[se]=[];for(let ae=0;ae<v.mipmaps.length;ae++)z.__webglFramebuffer[se][ae]=t.createFramebuffer()}else z.__webglFramebuffer[se]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)z.__webglFramebuffer[se]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(be)for(let se=0,ae=Z.length;se<ae;se++){const ke=i.get(Z[se]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),a.memory.textures++)}if(T.samples>0&&it(T)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let se=0;se<Z.length;se++){const ae=Z[se];z.__webglColorRenderbuffer[se]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[se]);const ke=s.convert(ae.format,ae.colorSpace),ee=s.convert(ae.type),ye=E(ae.internalFormat,ke,ee,ae.colorSpace,T.isXRRenderTarget===!0),Xe=Re(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,ye,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+se,t.RENDERBUFFER,z.__webglColorRenderbuffer[se])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),ve(z.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),me(t.TEXTURE_CUBE_MAP,v);for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0)for(let ae=0;ae<v.mipmaps.length;ae++)Q(z.__webglFramebuffer[se][ae],T,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ae);else Q(z.__webglFramebuffer[se],T,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(v)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){for(let se=0,ae=Z.length;se<ae;se++){const ke=Z[se],ee=i.get(ke);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),me(t.TEXTURE_2D,ke),Q(z.__webglFramebuffer,T,ke,t.COLOR_ATTACHMENT0+se,t.TEXTURE_2D,0),m(ke)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let se=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(se=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(se,K.__webglTexture),me(se,v),v.mipmaps&&v.mipmaps.length>0)for(let ae=0;ae<v.mipmaps.length;ae++)Q(z.__webglFramebuffer[ae],T,v,t.COLOR_ATTACHMENT0,se,ae);else Q(z.__webglFramebuffer,T,v,t.COLOR_ATTACHMENT0,se,0);m(v)&&f(se),n.unbindTexture()}T.depthBuffer&&Ve(T)}function C(T){const v=T.textures;for(let z=0,K=v.length;z<K;z++){const Z=v[z];if(m(Z)){const J=T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,be=i.get(Z).__webglTexture;n.bindTexture(J,be),f(J),n.unbindTexture()}}}const Ze=[],qe=[];function Mt(T){if(T.samples>0){if(it(T)===!1){const v=T.textures,z=T.width,K=T.height;let Z=t.COLOR_BUFFER_BIT;const J=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(T),se=v.length>1;if(se)for(let ae=0;ae<v.length;ae++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ae=0;ae<v.length;ae++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),se){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[ae]);const ke=i.get(v[ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ke,0)}t.blitFramebuffer(0,0,z,K,0,0,z,K,Z,t.NEAREST),l===!0&&(Ze.length=0,qe.length=0,Ze.push(t.COLOR_ATTACHMENT0+ae),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ze.push(J),qe.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,qe)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ze))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),se)for(let ae=0;ae<v.length;ae++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,be.__webglColorRenderbuffer[ae]);const ke=i.get(v[ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function Re(T){return Math.min(r.maxSamples,T.samples)}function it(T){const v=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function We(T){const v=a.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function Ne(T,v){const z=T.colorSpace,K=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==ar&&z!==Ki&&(ut.getTransfer(z)===gt?(K!==oi||Z!==rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),v}function Ot(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=L,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=X,this.setTextureCube=j,this.rebindTextures=Be,this.setupRenderTarget=et,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=it}function MS(t,e){function n(i,r=Ki){let s;const a=ut.getTransfer(r);if(i===rr)return t.UNSIGNED_BYTE;if(i===Hp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Vp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===V_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===G_)return t.BYTE;if(i===H_)return t.SHORT;if(i===Do)return t.UNSIGNED_SHORT;if(i===Gp)return t.INT;if(i===ys)return t.UNSIGNED_INT;if(i===Zi)return t.FLOAT;if(i===il)return t.HALF_FLOAT;if(i===W_)return t.ALPHA;if(i===X_)return t.RGB;if(i===oi)return t.RGBA;if(i===$_)return t.LUMINANCE;if(i===q_)return t.LUMINANCE_ALPHA;if(i===gs)return t.DEPTH_COMPONENT;if(i===As)return t.DEPTH_STENCIL;if(i===Y_)return t.RED;if(i===Wp)return t.RED_INTEGER;if(i===j_)return t.RG;if(i===Xp)return t.RG_INTEGER;if(i===$p)return t.RGBA_INTEGER;if(i===kl||i===zl||i===Gl||i===Hl)if(a===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===kl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===kl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Hl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wh||i===Xh||i===$h||i===qh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Wh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$h)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yh||i===jh||i===Kh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Yh||i===jh)return a===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Kh)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Zh||i===Jh||i===Qh||i===ed||i===td||i===nd||i===id||i===rd||i===sd||i===ad||i===od||i===ld||i===cd||i===ud)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Zh)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jh)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qh)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ed)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===td)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nd)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===id)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rd)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sd)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ad)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===od)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ld)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cd)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ud)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vl||i===hd||i===dd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Vl)return a===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===K_||i===fd||i===pd||i===md)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Vl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===fd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===md)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Es?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class yS extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ca extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ES={type:"move"};class pc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ES)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ca;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const AS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new gn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new jn({vertexShader:AS,fragmentShader:TS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new cn(new Pa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class wS extends Bs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null;const _=new bS,m=n.getContextAttributes();let f=null,E=null;const M=[],A=[],k=new He;let w=null;const b=new Tn;b.layers.enable(1),b.viewport=new xt;const O=new Tn;O.layers.enable(2),O.viewport=new xt;const y=[b,O],S=new yS;S.layers.enable(1),S.layers.enable(2);let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Q=M[W];return Q===void 0&&(Q=new pc,M[W]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(W){let Q=M[W];return Q===void 0&&(Q=new pc,M[W]=Q),Q.getGripSpace()},this.getHand=function(W){let Q=M[W];return Q===void 0&&(Q=new pc,M[W]=Q),Q.getHandSpace()};function N(W){const Q=A.indexOf(W.inputSource);if(Q===-1)return;const ve=M[Q];ve!==void 0&&(ve.update(W.inputSource,W.frame,c||a),ve.dispatchEvent({type:W.type,data:W.inputSource}))}function q(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",$);for(let W=0;W<M.length;W++){const Q=A[W];Q!==null&&(A[W]=null,M[W].disconnect(Q))}L=null,H=null,_.reset(),e.setRenderTarget(f),p=null,h=null,d=null,r=null,E=null,dt.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",q),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(k),r.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Nr(p.framebufferWidth,p.framebufferHeight,{format:oi,type:rr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,ve=null,oe=null;m.depth&&(oe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=m.stencil?As:gs,ve=m.stencil?Es:ys);const Ve={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Ve),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new Nr(h.textureWidth,h.textureHeight,{format:oi,type:rr,depthTexture:new cm(h.textureWidth,h.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),dt.setContext(r),dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(W){for(let Q=0;Q<W.removed.length;Q++){const ve=W.removed[Q],oe=A.indexOf(ve);oe>=0&&(A[oe]=null,M[oe].disconnect(ve))}for(let Q=0;Q<W.added.length;Q++){const ve=W.added[Q];let oe=A.indexOf(ve);if(oe===-1){for(let Be=0;Be<M.length;Be++)if(Be>=A.length){A.push(ve),oe=Be;break}else if(A[Be]===null){A[Be]=ve,oe=Be;break}if(oe===-1)break}const Ve=M[oe];Ve&&Ve.connect(ve)}}const X=new U,j=new U;function G(W,Q,ve){X.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(ve.matrixWorld);const oe=X.distanceTo(j),Ve=Q.projectionMatrix.elements,Be=ve.projectionMatrix.elements,et=Ve[14]/(Ve[10]-1),C=Ve[14]/(Ve[10]+1),Ze=(Ve[9]+1)/Ve[5],qe=(Ve[9]-1)/Ve[5],Mt=(Ve[8]-1)/Ve[0],Re=(Be[8]+1)/Be[0],it=et*Mt,We=et*Re,Ne=oe/(-Mt+Re),Ot=Ne*-Mt;Q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ot),W.translateZ(Ne),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const T=et+Ne,v=C+Ne,z=it-Ot,K=We+(oe-Ot),Z=Ze*C/v*T,J=qe*C/v*T;W.projectionMatrix.makePerspective(z,K,Z,J,T,v),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function ue(W,Q){Q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;_.texture!==null&&(W.near=_.depthNear,W.far=_.depthFar),S.near=O.near=b.near=W.near,S.far=O.far=b.far=W.far,(L!==S.near||H!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,H=S.far,b.near=L,b.far=H,O.near=L,O.far=H,b.updateProjectionMatrix(),O.updateProjectionMatrix(),W.updateProjectionMatrix());const Q=W.parent,ve=S.cameras;ue(S,Q);for(let oe=0;oe<ve.length;oe++)ue(ve[oe],Q);ve.length===2?G(S,b,O):S.projectionMatrix.copy(b.projectionMatrix),fe(W,S,Q)};function fe(W,Q,ve){ve===null?W.matrix.copy(Q.matrixWorld):(W.matrix.copy(ve.matrixWorld),W.matrix.invert(),W.matrix.multiply(Q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=_a*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let me=null;function Ke(W,Q){if(u=Q.getViewerPose(c||a),g=Q,u!==null){const ve=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let oe=!1;ve.length!==S.cameras.length&&(S.cameras.length=0,oe=!0);for(let Be=0;Be<ve.length;Be++){const et=ve[Be];let C=null;if(p!==null)C=p.getViewport(et);else{const qe=d.getViewSubImage(h,et);C=qe.viewport,Be===0&&(e.setRenderTargetTextures(E,qe.colorTexture,h.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(E))}let Ze=y[Be];Ze===void 0&&(Ze=new Tn,Ze.layers.enable(Be),Ze.viewport=new xt,y[Be]=Ze),Ze.matrix.fromArray(et.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(et.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(C.x,C.y,C.width,C.height),Be===0&&(S.matrix.copy(Ze.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),oe===!0&&S.cameras.push(Ze)}const Ve=r.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")){const Be=d.getDepthInformation(ve[0]);Be&&Be.isValid&&Be.texture&&_.init(e,Be,r.renderState)}}for(let ve=0;ve<M.length;ve++){const oe=A[ve],Ve=M[ve];oe!==null&&Ve!==void 0&&Ve.update(oe,Q,c||a)}me&&me(W,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const dt=new om;dt.setAnimationLoop(Ke),this.setAnimationLoop=function(W){me=W},this.dispose=function(){}}}const vr=new hi,RS=new Et;function CS(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,rm(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,E,M,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,A)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,E,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===un&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===un&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=e.get(f),M=E.envMap,A=E.envMapRotation;M&&(m.envMap.value=M,vr.copy(A),vr.x*=-1,vr.y*=-1,vr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),m.envMapRotation.value.setFromMatrix4(RS.makeRotationFromEuler(vr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=M*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===un&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function PS(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){const A=M.program;i.uniformBlockBinding(E,A)}function c(E,M){let A=r[E.id];A===void 0&&(g(E),A=u(E),r[E.id]=A,E.addEventListener("dispose",m));const k=M.program;i.updateUBOMapping(E,k);const w=e.render.frame;s[E.id]!==w&&(h(E),s[E.id]=w)}function u(E){const M=d();E.__bindingPointIndex=M;const A=t.createBuffer(),k=E.__size,w=E.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,k,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,A),A}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const M=r[E.id],A=E.uniforms,k=E.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let w=0,b=A.length;w<b;w++){const O=Array.isArray(A[w])?A[w]:[A[w]];for(let y=0,S=O.length;y<S;y++){const L=O[y];if(p(L,w,y,k)===!0){const H=L.__offset,N=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let $=0;$<N.length;$++){const X=N[$],j=_(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,H+q,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,q),q+=j.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(E,M,A,k){const w=E.value,b=M+"_"+A;if(k[b]===void 0)return typeof w=="number"||typeof w=="boolean"?k[b]=w:k[b]=w.clone(),!0;{const O=k[b];if(typeof w=="number"||typeof w=="boolean"){if(O!==w)return k[b]=w,!0}else if(O.equals(w)===!1)return O.copy(w),!0}return!1}function g(E){const M=E.uniforms;let A=0;const k=16;for(let b=0,O=M.length;b<O;b++){const y=Array.isArray(M[b])?M[b]:[M[b]];for(let S=0,L=y.length;S<L;S++){const H=y[S],N=Array.isArray(H.value)?H.value:[H.value];for(let q=0,$=N.length;q<$;q++){const X=N[q],j=_(X),G=A%k;G!==0&&k-G<j.boundary&&(A+=k-G),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=A,A+=j.storage}}}const w=A%k;return w>0&&(A+=k-w),E.__size=A,E.__cache={},this}function _(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){const M=E.target;M.removeEventListener("dispose",m);const A=a.indexOf(M.__bindingPointIndex);a.splice(A,1),t.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function f(){for(const E in r)t.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class LS{constructor(e={}){const{canvas:n=E1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ri,this.toneMapping=Qi,this.toneMappingExposure=1;const M=this;let A=!1,k=0,w=0,b=null,O=-1,y=null;const S=new xt,L=new xt;let H=null;const N=new Ge(0);let q=0,$=n.width,X=n.height,j=1,G=null,ue=null;const fe=new xt(0,0,$,X),me=new xt(0,0,$,X);let Ke=!1;const dt=new vu;let W=!1,Q=!1;const ve=new Et,oe=new U,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function et(){return b===null?j:1}let C=i;function Ze(x,I){return n.getContext(x,I)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${mu}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",V,!1),n.addEventListener("webglcontextcreationerror",Y,!1),C===null){const I="webgl2";if(C=Ze(I,x),C===null)throw Ze(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let qe,Mt,Re,it,We,Ne,Ot,T,v,z,K,Z,J,be,se,ae,ke,ee,ye,Xe,Le,ce,ze,Ye;function Pt(){qe=new kx(C),qe.init(),ce=new MS(C,qe),Mt=new Dx(C,qe,e,ce),Re=new xS(C),it=new Hx(C),We=new sS,Ne=new SS(C,qe,Re,We,Mt,ce,it),Ot=new Nx(M),T=new Bx(M),v=new j1(C),ze=new Lx(C,v),z=new zx(C,v,it,ze),K=new Wx(C,z,v,it),ye=new Vx(C,Mt,Ne),ae=new Ux(We),Z=new rS(M,Ot,T,qe,Mt,ze,ae),J=new CS(M,We),be=new oS,se=new fS(qe),ee=new Px(M,Ot,T,Re,K,h,l),ke=new vS(M,K,Mt),Ye=new PS(C,it,Mt,Re),Xe=new Ix(C,qe,it),Le=new Gx(C,qe,it),it.programs=Z.programs,M.capabilities=Mt,M.extensions=qe,M.properties=We,M.renderLists=be,M.shadowMap=ke,M.state=Re,M.info=it}Pt();const R=new wS(M,C);this.xr=R,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const x=qe.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=qe.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(x){x!==void 0&&(j=x,this.setSize($,X,!1))},this.getSize=function(x){return x.set($,X)},this.setSize=function(x,I,F=!0){if(R.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=x,X=I,n.width=Math.floor(x*j),n.height=Math.floor(I*j),F===!0&&(n.style.width=x+"px",n.style.height=I+"px"),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set($*j,X*j).floor()},this.setDrawingBufferSize=function(x,I,F){$=x,X=I,j=F,n.width=Math.floor(x*F),n.height=Math.floor(I*F),this.setViewport(0,0,x,I)},this.getCurrentViewport=function(x){return x.copy(S)},this.getViewport=function(x){return x.copy(fe)},this.setViewport=function(x,I,F,B){x.isVector4?fe.set(x.x,x.y,x.z,x.w):fe.set(x,I,F,B),Re.viewport(S.copy(fe).multiplyScalar(j).round())},this.getScissor=function(x){return x.copy(me)},this.setScissor=function(x,I,F,B){x.isVector4?me.set(x.x,x.y,x.z,x.w):me.set(x,I,F,B),Re.scissor(L.copy(me).multiplyScalar(j).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(x){Re.setScissorTest(Ke=x)},this.setOpaqueSort=function(x){G=x},this.setTransparentSort=function(x){ue=x},this.getClearColor=function(x){return x.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(x=!0,I=!0,F=!0){let B=0;if(x){let D=!1;if(b!==null){const te=b.texture.format;D=te===$p||te===Xp||te===Wp}if(D){const te=b.texture.type,de=te===rr||te===ys||te===Do||te===Es||te===Hp||te===Vp,ge=ee.getClearColor(),Se=ee.getClearAlpha(),Ce=ge.r,Pe=ge.g,we=ge.b;de?(p[0]=Ce,p[1]=Pe,p[2]=we,p[3]=Se,C.clearBufferuiv(C.COLOR,0,p)):(g[0]=Ce,g[1]=Pe,g[2]=we,g[3]=Se,C.clearBufferiv(C.COLOR,0,g))}else B|=C.COLOR_BUFFER_BIT}I&&(B|=C.DEPTH_BUFFER_BIT),F&&(B|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",V,!1),n.removeEventListener("webglcontextcreationerror",Y,!1),be.dispose(),se.dispose(),We.dispose(),Ot.dispose(),T.dispose(),K.dispose(),ze.dispose(),Ye.dispose(),Z.dispose(),R.dispose(),R.removeEventListener("sessionstart",ei),R.removeEventListener("sessionend",ti),hr.stop()};function he(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const x=it.autoReset,I=ke.enabled,F=ke.autoUpdate,B=ke.needsUpdate,D=ke.type;Pt(),it.autoReset=x,ke.enabled=I,ke.autoUpdate=F,ke.needsUpdate=B,ke.type=D}function Y(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ie(x){const I=x.target;I.removeEventListener("dispose",ie),Ie(I)}function Ie(x){at(x),We.remove(x)}function at(x){const I=We.get(x).programs;I!==void 0&&(I.forEach(function(F){Z.releaseProgram(F)}),x.isShaderMaterial&&Z.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,F,B,D,te){I===null&&(I=Ve);const de=D.isMesh&&D.matrixWorld.determinant()<0,ge=Q0(x,I,F,B,D);Re.setMaterial(B,de);let Se=F.index,Ce=1;if(B.wireframe===!0){if(Se=z.getWireframeAttribute(F),Se===void 0)return;Ce=2}const Pe=F.drawRange,we=F.attributes.position;let lt=Pe.start*Ce,bt=(Pe.start+Pe.count)*Ce;te!==null&&(lt=Math.max(lt,te.start*Ce),bt=Math.min(bt,(te.start+te.count)*Ce)),Se!==null?(lt=Math.max(lt,0),bt=Math.min(bt,Se.count)):we!=null&&(lt=Math.max(lt,0),bt=Math.min(bt,we.count));const wt=bt-lt;if(wt<0||wt===1/0)return;ze.setup(D,B,ge,F,Se);let Mn,ct=Xe;if(Se!==null&&(Mn=v.get(Se),ct=Le,ct.setIndex(Mn)),D.isMesh)B.wireframe===!0?(Re.setLineWidth(B.wireframeLinewidth*et()),ct.setMode(C.LINES)):ct.setMode(C.TRIANGLES);else if(D.isLine){let Te=B.linewidth;Te===void 0&&(Te=1),Re.setLineWidth(Te*et()),D.isLineSegments?ct.setMode(C.LINES):D.isLineLoop?ct.setMode(C.LINE_LOOP):ct.setMode(C.LINE_STRIP)}else D.isPoints?ct.setMode(C.POINTS):D.isSprite&&ct.setMode(C.TRIANGLES);if(D.isBatchedMesh)D._multiDrawInstances!==null?ct.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances):ct.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else if(D.isInstancedMesh)ct.renderInstances(lt,wt,D.count);else if(F.isInstancedBufferGeometry){const Te=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,nn=Math.min(F.instanceCount,Te);ct.renderInstances(lt,wt,nn)}else ct.render(lt,wt)};function Lt(x,I,F){x.transparent===!0&&x.side===bi&&x.forceSinglePass===!1?(x.side=un,x.needsUpdate=!0,Va(x,I,F),x.side=ir,x.needsUpdate=!0,Va(x,I,F),x.side=bi):Va(x,I,F)}this.compile=function(x,I,F=null){F===null&&(F=x),m=se.get(F),m.init(I),E.push(m),F.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),x!==F&&x.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),m.setupLights();const B=new Set;return x.traverse(function(D){const te=D.material;if(te)if(Array.isArray(te))for(let de=0;de<te.length;de++){const ge=te[de];Lt(ge,F,D),B.add(ge)}else Lt(te,F,D),B.add(te)}),E.pop(),m=null,B},this.compileAsync=function(x,I,F=null){const B=this.compile(x,I,F);return new Promise(D=>{function te(){if(B.forEach(function(de){We.get(de).currentProgram.isReady()&&B.delete(de)}),B.size===0){D(x);return}setTimeout(te,10)}qe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let $t=null;function ft(x){$t&&$t(x)}function ei(){hr.stop()}function ti(){hr.start()}const hr=new om;hr.setAnimationLoop(ft),typeof self<"u"&&hr.setContext(self),this.setAnimationLoop=function(x){$t=x,R.setAnimationLoop(x),x===null?hr.stop():hr.start()},R.addEventListener("sessionstart",ei),R.addEventListener("sessionend",ti),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(R.cameraAutoUpdate===!0&&R.updateCamera(I),I=R.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,I,b),m=se.get(x,E.length),m.init(I),E.push(m),ve.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),dt.setFromProjectionMatrix(ve),Q=this.localClippingEnabled,W=ae.init(this.clippingPlanes,Q),_=be.get(x,f.length),_.init(),f.push(_),R.enabled===!0&&R.isPresenting===!0){const te=M.xr.getDepthSensingMesh();te!==null&&Ul(te,I,-1/0,M.sortObjects)}Ul(x,I,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(G,ue),Be=R.enabled===!1||R.isPresenting===!1||R.hasDepthSensing()===!1,Be&&ee.addToRenderList(_,x),this.info.render.frame++,W===!0&&ae.beginShadows();const F=m.state.shadowsArray;ke.render(F,x,I),W===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=_.opaque,D=_.transmissive;if(m.setupLights(),I.isArrayCamera){const te=I.cameras;if(D.length>0)for(let de=0,ge=te.length;de<ge;de++){const Se=te[de];Nh(B,D,x,Se)}Be&&ee.render(x);for(let de=0,ge=te.length;de<ge;de++){const Se=te[de];Uh(_,x,Se,Se.viewport)}}else D.length>0&&Nh(B,D,x,I),Be&&ee.render(x),Uh(_,x,I);b!==null&&(Ne.updateMultisampleRenderTarget(b),Ne.updateRenderTargetMipmap(b)),x.isScene===!0&&x.onAfterRender(M,x,I),ze.resetDefaultState(),O=-1,y=null,E.pop(),E.length>0?(m=E[E.length-1],W===!0&&ae.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Ul(x,I,F,B){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)m.pushLight(x),x.castShadow&&m.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||dt.intersectsSprite(x)){B&&oe.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ve);const de=K.update(x),ge=x.material;ge.visible&&_.push(x,de,ge,F,oe.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||dt.intersectsObject(x))){const de=K.update(x),ge=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),oe.copy(x.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),oe.copy(de.boundingSphere.center)),oe.applyMatrix4(x.matrixWorld).applyMatrix4(ve)),Array.isArray(ge)){const Se=de.groups;for(let Ce=0,Pe=Se.length;Ce<Pe;Ce++){const we=Se[Ce],lt=ge[we.materialIndex];lt&&lt.visible&&_.push(x,de,lt,F,oe.z,we)}}else ge.visible&&_.push(x,de,ge,F,oe.z,null)}}const te=x.children;for(let de=0,ge=te.length;de<ge;de++)Ul(te[de],I,F,B)}function Uh(x,I,F,B){const D=x.opaque,te=x.transmissive,de=x.transparent;m.setupLightsView(F),W===!0&&ae.setGlobalState(M.clippingPlanes,F),B&&Re.viewport(S.copy(B)),D.length>0&&Ha(D,I,F),te.length>0&&Ha(te,I,F),de.length>0&&Ha(de,I,F),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Nh(x,I,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new Nr(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?il:rr,minFilter:Tr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const te=m.state.transmissionRenderTarget[B.id],de=B.viewport||S;te.setSize(de.z,de.w);const ge=M.getRenderTarget();M.setRenderTarget(te),M.getClearColor(N),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),Be?ee.render(F):M.clear();const Se=M.toneMapping;M.toneMapping=Qi;const Ce=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),W===!0&&ae.setGlobalState(M.clippingPlanes,B),Ha(x,F,B),Ne.updateMultisampleRenderTarget(te),Ne.updateRenderTargetMipmap(te),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let we=0,lt=I.length;we<lt;we++){const bt=I[we],wt=bt.object,Mn=bt.geometry,ct=bt.material,Te=bt.group;if(ct.side===bi&&wt.layers.test(B.layers)){const nn=ct.side;ct.side=un,ct.needsUpdate=!0,Fh(wt,F,B,Mn,ct,Te),ct.side=nn,ct.needsUpdate=!0,Pe=!0}}Pe===!0&&(Ne.updateMultisampleRenderTarget(te),Ne.updateRenderTargetMipmap(te))}M.setRenderTarget(ge),M.setClearColor(N,q),Ce!==void 0&&(B.viewport=Ce),M.toneMapping=Se}function Ha(x,I,F){const B=I.isScene===!0?I.overrideMaterial:null;for(let D=0,te=x.length;D<te;D++){const de=x[D],ge=de.object,Se=de.geometry,Ce=B===null?de.material:B,Pe=de.group;ge.layers.test(F.layers)&&Fh(ge,I,F,Se,Ce,Pe)}}function Fh(x,I,F,B,D,te){x.onBeforeRender(M,I,F,B,D,te),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),D.onBeforeRender(M,I,F,B,x,te),D.transparent===!0&&D.side===bi&&D.forceSinglePass===!1?(D.side=un,D.needsUpdate=!0,M.renderBufferDirect(F,I,B,D,x,te),D.side=ir,D.needsUpdate=!0,M.renderBufferDirect(F,I,B,D,x,te),D.side=bi):M.renderBufferDirect(F,I,B,D,x,te),x.onAfterRender(M,I,F,B,D,te)}function Va(x,I,F){I.isScene!==!0&&(I=Ve);const B=We.get(x),D=m.state.lights,te=m.state.shadowsArray,de=D.state.version,ge=Z.getParameters(x,D.state,te,I,F),Se=Z.getProgramCacheKey(ge);let Ce=B.programs;B.environment=x.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(x.isMeshStandardMaterial?T:Ot).get(x.envMap||B.environment),B.envMapRotation=B.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Ce===void 0&&(x.addEventListener("dispose",ie),Ce=new Map,B.programs=Ce);let Pe=Ce.get(Se);if(Pe!==void 0){if(B.currentProgram===Pe&&B.lightsStateVersion===de)return Bh(x,ge),Pe}else ge.uniforms=Z.getUniforms(x),x.onBuild(F,ge,M),x.onBeforeCompile(ge,M),Pe=Z.acquireProgram(ge,Se),Ce.set(Se,Pe),B.uniforms=ge.uniforms;const we=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(we.clippingPlanes=ae.uniform),Bh(x,ge),B.needsLights=t_(x),B.lightsStateVersion=de,B.needsLights&&(we.ambientLightColor.value=D.state.ambient,we.lightProbe.value=D.state.probe,we.directionalLights.value=D.state.directional,we.directionalLightShadows.value=D.state.directionalShadow,we.spotLights.value=D.state.spot,we.spotLightShadows.value=D.state.spotShadow,we.rectAreaLights.value=D.state.rectArea,we.ltc_1.value=D.state.rectAreaLTC1,we.ltc_2.value=D.state.rectAreaLTC2,we.pointLights.value=D.state.point,we.pointLightShadows.value=D.state.pointShadow,we.hemisphereLights.value=D.state.hemi,we.directionalShadowMap.value=D.state.directionalShadowMap,we.directionalShadowMatrix.value=D.state.directionalShadowMatrix,we.spotShadowMap.value=D.state.spotShadowMap,we.spotLightMatrix.value=D.state.spotLightMatrix,we.spotLightMap.value=D.state.spotLightMap,we.pointShadowMap.value=D.state.pointShadowMap,we.pointShadowMatrix.value=D.state.pointShadowMatrix),B.currentProgram=Pe,B.uniformsList=null,Pe}function Oh(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=To.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function Bh(x,I){const F=We.get(x);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.batchingColor=I.batchingColor,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.instancingMorph=I.instancingMorph,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function Q0(x,I,F,B,D){I.isScene!==!0&&(I=Ve),Ne.resetTextureUnits();const te=I.fog,de=B.isMeshStandardMaterial?I.environment:null,ge=b===null?M.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ar,Se=(B.isMeshStandardMaterial?T:Ot).get(B.envMap||de),Ce=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Pe=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),we=!!F.morphAttributes.position,lt=!!F.morphAttributes.normal,bt=!!F.morphAttributes.color;let wt=Qi;B.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(wt=M.toneMapping);const Mn=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ct=Mn!==void 0?Mn.length:0,Te=We.get(B),nn=m.state.lights;if(W===!0&&(Q===!0||x!==y)){const In=x===y&&B.id===O;ae.setState(B,x,In)}let pt=!1;B.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==nn.state.version||Te.outputColorSpace!==ge||D.isBatchedMesh&&Te.batching===!1||!D.isBatchedMesh&&Te.batching===!0||D.isBatchedMesh&&Te.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Te.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Te.instancing===!1||!D.isInstancedMesh&&Te.instancing===!0||D.isSkinnedMesh&&Te.skinning===!1||!D.isSkinnedMesh&&Te.skinning===!0||D.isInstancedMesh&&Te.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Te.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Te.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Te.instancingMorph===!1&&D.morphTexture!==null||Te.envMap!==Se||B.fog===!0&&Te.fog!==te||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ae.numPlanes||Te.numIntersection!==ae.numIntersection)||Te.vertexAlphas!==Ce||Te.vertexTangents!==Pe||Te.morphTargets!==we||Te.morphNormals!==lt||Te.morphColors!==bt||Te.toneMapping!==wt||Te.morphTargetsCount!==ct)&&(pt=!0):(pt=!0,Te.__version=B.version);let vi=Te.currentProgram;pt===!0&&(vi=Va(B,I,D));let Wa=!1,dr=!1,Nl=!1;const qt=vi.getUniforms(),Gi=Te.uniforms;if(Re.useProgram(vi.program)&&(Wa=!0,dr=!0,Nl=!0),B.id!==O&&(O=B.id,dr=!0),Wa||y!==x){qt.setValue(C,"projectionMatrix",x.projectionMatrix),qt.setValue(C,"viewMatrix",x.matrixWorldInverse);const In=qt.map.cameraPosition;In!==void 0&&In.setValue(C,oe.setFromMatrixPosition(x.matrixWorld)),Mt.logarithmicDepthBuffer&&qt.setValue(C,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&qt.setValue(C,"isOrthographic",x.isOrthographicCamera===!0),y!==x&&(y=x,dr=!0,Nl=!0)}if(D.isSkinnedMesh){qt.setOptional(C,D,"bindMatrix"),qt.setOptional(C,D,"bindMatrixInverse");const In=D.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),qt.setValue(C,"boneTexture",In.boneTexture,Ne))}D.isBatchedMesh&&(qt.setOptional(C,D,"batchingTexture"),qt.setValue(C,"batchingTexture",D._matricesTexture,Ne),qt.setOptional(C,D,"batchingColorTexture"),D._colorsTexture!==null&&qt.setValue(C,"batchingColorTexture",D._colorsTexture,Ne));const Fl=F.morphAttributes;if((Fl.position!==void 0||Fl.normal!==void 0||Fl.color!==void 0)&&ye.update(D,F,vi),(dr||Te.receiveShadow!==D.receiveShadow)&&(Te.receiveShadow=D.receiveShadow,qt.setValue(C,"receiveShadow",D.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Gi.envMap.value=Se,Gi.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(Gi.envMapIntensity.value=I.environmentIntensity),dr&&(qt.setValue(C,"toneMappingExposure",M.toneMappingExposure),Te.needsLights&&e_(Gi,Nl),te&&B.fog===!0&&J.refreshFogUniforms(Gi,te),J.refreshMaterialUniforms(Gi,B,j,X,m.state.transmissionRenderTarget[x.id]),To.upload(C,Oh(Te),Gi,Ne)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(To.upload(C,Oh(Te),Gi,Ne),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&qt.setValue(C,"center",D.center),qt.setValue(C,"modelViewMatrix",D.modelViewMatrix),qt.setValue(C,"normalMatrix",D.normalMatrix),qt.setValue(C,"modelMatrix",D.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const In=B.uniformsGroups;for(let Ol=0,n_=In.length;Ol<n_;Ol++){const kh=In[Ol];Ye.update(kh,vi),Ye.bind(kh,vi)}}return vi}function e_(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function t_(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(x,I,F){We.get(x.texture).__webglTexture=I,We.get(x.depthTexture).__webglTexture=F;const B=We.get(x);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,I){const F=We.get(x);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(x,I=0,F=0){b=x,k=I,w=F;let B=!0,D=null,te=!1,de=!1;if(x){const Se=We.get(x);Se.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(C.FRAMEBUFFER,null),B=!1):Se.__webglFramebuffer===void 0?Ne.setupRenderTarget(x):Se.__hasExternalTextures&&Ne.rebindTextures(x,We.get(x.texture).__webglTexture,We.get(x.depthTexture).__webglTexture);const Ce=x.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(de=!0);const Pe=We.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Pe[I])?D=Pe[I][F]:D=Pe[I],te=!0):x.samples>0&&Ne.useMultisampledRTT(x)===!1?D=We.get(x).__webglMultisampledFramebuffer:Array.isArray(Pe)?D=Pe[F]:D=Pe,S.copy(x.viewport),L.copy(x.scissor),H=x.scissorTest}else S.copy(fe).multiplyScalar(j).floor(),L.copy(me).multiplyScalar(j).floor(),H=Ke;if(Re.bindFramebuffer(C.FRAMEBUFFER,D)&&B&&Re.drawBuffers(x,D),Re.viewport(S),Re.scissor(L),Re.setScissorTest(H),te){const Se=We.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+I,Se.__webglTexture,F)}else if(de){const Se=We.get(x.texture),Ce=I||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Se.__webglTexture,F||0,Ce)}O=-1},this.readRenderTargetPixels=function(x,I,F,B,D,te,de){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=We.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge){Re.bindFramebuffer(C.FRAMEBUFFER,ge);try{const Se=x.texture,Ce=Se.format,Pe=Se.type;if(!Mt.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-B&&F>=0&&F<=x.height-D&&C.readPixels(I,F,B,D,ce.convert(Ce),ce.convert(Pe),te)}finally{const Se=b!==null?We.get(b).__webglFramebuffer:null;Re.bindFramebuffer(C.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(x,I,F,B,D,te,de){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=We.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge){Re.bindFramebuffer(C.FRAMEBUFFER,ge);try{const Se=x.texture,Ce=Se.format,Pe=Se.type;if(!Mt.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=x.width-B&&F>=0&&F<=x.height-D){const we=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,we),C.bufferData(C.PIXEL_PACK_BUFFER,te.byteLength,C.STREAM_READ),C.readPixels(I,F,B,D,ce.convert(Ce),ce.convert(Pe),0),C.flush();const lt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);await A1(C,lt,4);try{C.bindBuffer(C.PIXEL_PACK_BUFFER,we),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,te)}finally{C.deleteBuffer(we),C.deleteSync(lt)}return te}}finally{const Se=b!==null?We.get(b).__webglFramebuffer:null;Re.bindFramebuffer(C.FRAMEBUFFER,Se)}}},this.copyFramebufferToTexture=function(x,I=null,F=0){x.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,x=arguments[1]);const B=Math.pow(2,-F),D=Math.floor(x.image.width*B),te=Math.floor(x.image.height*B),de=I!==null?I.x:0,ge=I!==null?I.y:0;Ne.setTexture2D(x,0),C.copyTexSubImage2D(C.TEXTURE_2D,F,0,0,de,ge,D,te),Re.unbindTexture()},this.copyTextureToTexture=function(x,I,F=null,B=null,D=0){x.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,x=arguments[1],I=arguments[2],D=arguments[3]||0,F=null);let te,de,ge,Se,Ce,Pe;F!==null?(te=F.max.x-F.min.x,de=F.max.y-F.min.y,ge=F.min.x,Se=F.min.y):(te=x.image.width,de=x.image.height,ge=0,Se=0),B!==null?(Ce=B.x,Pe=B.y):(Ce=0,Pe=0);const we=ce.convert(I.format),lt=ce.convert(I.type);Ne.setTexture2D(I,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);const bt=C.getParameter(C.UNPACK_ROW_LENGTH),wt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Mn=C.getParameter(C.UNPACK_SKIP_PIXELS),ct=C.getParameter(C.UNPACK_SKIP_ROWS),Te=C.getParameter(C.UNPACK_SKIP_IMAGES),nn=x.isCompressedTexture?x.mipmaps[D]:x.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,nn.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,nn.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ge),C.pixelStorei(C.UNPACK_SKIP_ROWS,Se),x.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,D,Ce,Pe,te,de,we,lt,nn.data):x.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,D,Ce,Pe,nn.width,nn.height,we,nn.data):C.texSubImage2D(C.TEXTURE_2D,D,Ce,Pe,we,lt,nn),C.pixelStorei(C.UNPACK_ROW_LENGTH,bt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,wt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Mn),C.pixelStorei(C.UNPACK_SKIP_ROWS,ct),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Te),D===0&&I.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(x,I,F=null,B=null,D=0){x.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,B=arguments[1]||null,x=arguments[2],I=arguments[3],D=arguments[4]||0);let te,de,ge,Se,Ce,Pe,we,lt,bt;const wt=x.isCompressedTexture?x.mipmaps[D]:x.image;F!==null?(te=F.max.x-F.min.x,de=F.max.y-F.min.y,ge=F.max.z-F.min.z,Se=F.min.x,Ce=F.min.y,Pe=F.min.z):(te=wt.width,de=wt.height,ge=wt.depth,Se=0,Ce=0,Pe=0),B!==null?(we=B.x,lt=B.y,bt=B.z):(we=0,lt=0,bt=0);const Mn=ce.convert(I.format),ct=ce.convert(I.type);let Te;if(I.isData3DTexture)Ne.setTexture3D(I,0),Te=C.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)Ne.setTexture2DArray(I,0),Te=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);const nn=C.getParameter(C.UNPACK_ROW_LENGTH),pt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),vi=C.getParameter(C.UNPACK_SKIP_PIXELS),Wa=C.getParameter(C.UNPACK_SKIP_ROWS),dr=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,wt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,wt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Se),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ce),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Pe),x.isDataTexture||x.isData3DTexture?C.texSubImage3D(Te,D,we,lt,bt,te,de,ge,Mn,ct,wt.data):I.isCompressedArrayTexture?C.compressedTexSubImage3D(Te,D,we,lt,bt,te,de,ge,Mn,wt.data):C.texSubImage3D(Te,D,we,lt,bt,te,de,ge,Mn,ct,wt),C.pixelStorei(C.UNPACK_ROW_LENGTH,nn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,pt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,vi),C.pixelStorei(C.UNPACK_SKIP_ROWS,Wa),C.pixelStorei(C.UNPACK_SKIP_IMAGES,dr),D===0&&I.generateMipmaps&&C.generateMipmap(Te),Re.unbindTexture()},this.initRenderTarget=function(x){We.get(x).__webglFramebuffer===void 0&&Ne.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Ne.setTextureCube(x,0):x.isData3DTexture?Ne.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Ne.setTexture2DArray(x,0):Ne.setTexture2D(x,0),Re.unbindTexture()},this.resetState=function(){k=0,w=0,b=null,Re.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===gu?"display-p3":"srgb",n.unpackColorSpace=ut.workingColorSpace===rl?"display-p3":"srgb"}}class Su{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=n}clone(){return new Su(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class IS extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class mm extends zs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const lf=new Et,Fc=new Qp,po=new sl,mo=new U;class DS extends jt{constructor(e=new Kn,n=new mm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(r),po.radius+=s,e.ray.intersectsSphere(po)===!1)return;lf.copy(r).invert(),Fc.copy(e.ray).applyMatrix4(lf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=h,_=p;g<_;g++){const m=c.getX(g);mo.fromBufferAttribute(d,m),cf(mo,m,l,r,e,n,this)}}else{const h=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=h,_=p;g<_;g++)mo.fromBufferAttribute(d,g),cf(mo,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function cf(t,e,n,i,r,s,a){const o=Fc.distanceSqToPoint(t);if(o<n){const l=new U;Fc.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class ol extends Kn{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let d=e;const h=(n-e)/r,p=new U,g=new He;for(let _=0;_<=r;_++){for(let m=0;m<=i;m++){const f=s+m/i*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/n+1)/2,g.y=(p.y/n+1)/2,u.push(g.x,g.y)}d+=h}for(let _=0;_<r;_++){const m=_*(i+1);for(let f=0;f<i;f++){const E=f+m,M=E,A=E+i+1,k=E+i+2,w=E+1;o.push(M,A,w),o.push(A,k,w)}}this.setIndex(o),this.setAttribute("position",new bn(l,3)),this.setAttribute("normal",new bn(c,3)),this.setAttribute("uv",new bn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ll extends Kn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new U,h=new U,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){const E=[],M=f/i;let A=0;f===0&&a===0?A=.5/n:f===i&&l===Math.PI&&(A=-.5/n);for(let k=0;k<=n;k++){const w=k/n;d.x=-e*Math.cos(r+w*s)*Math.sin(a+M*o),d.y=e*Math.cos(a+M*o),d.z=e*Math.sin(r+w*s)*Math.sin(a+M*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(w+A,1-M),E.push(c++)}u.push(E)}for(let f=0;f<i;f++)for(let E=0;E<n;E++){const M=u[f][E+1],A=u[f][E],k=u[f+1][E],w=u[f+1][E+1];(f!==0||a>0)&&p.push(M,A,w),(f!==i-1||l<Math.PI)&&p.push(A,k,w)}this.setIndex(p),this.setAttribute("position",new bn(g,3)),this.setAttribute("normal",new bn(_,3)),this.setAttribute("uv",new bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class US extends zs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qp,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mu extends jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class NS extends Mu{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const mc=new Et,uf=new U,hf=new U;class gm{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vu,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;uf.setFromMatrixPosition(e.matrixWorld),n.position.copy(uf),hf.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(hf),n.updateMatrixWorld(),mc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(mc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const df=new Et,ia=new U,gc=new U;class FS extends gm{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ia.setFromMatrixPosition(e.matrixWorld),i.position.copy(ia),gc.copy(i.position),gc.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(gc),i.updateMatrixWorld(),r.makeTranslation(-ia.x,-ia.y,-ia.z),df.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(df)}}class OS extends Mu{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new FS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class BS extends gm{constructor(){super(new lm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kS extends Mu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new BS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mu);var Fr=typeof self<"u"?self:{};function _m(t,e){e:{for(var n=["CLOSURE_FLAGS"],i=Fr,r=0;r<n.length;r++)if((i=i[n[r]])==null){n=null;break e}n=i}return(t=n&&n[t])!=null?t:e}function vt(t,e){t=t.split(".");for(var n,i=Fr;t.length&&(n=t.shift());)t.length||e===void 0?i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}:i[n]=e}function xr(){throw Error("Invalid UTF8")}function ff(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}var _c,zS,go=void 0,GS=typeof TextDecoder<"u",HS=typeof TextEncoder<"u";function vm(t){if(HS)t=(zS||(zS=new TextEncoder)).encode(t);else{let n=0,i=new Uint8Array(3*t.length);for(let r=0;r<t.length;r++){var e=t.charCodeAt(r);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&r<t.length){let s=t.charCodeAt(++r);if(s>=56320&&s<=57343){e=1024*(e-55296)+s-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}r--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}function xm(t){Fr.setTimeout(()=>{throw t},0)}var VS=_m(610401301,!1),pf=_m(748402147,!0);function mf(){var t=Fr.navigator;return t&&(t=t.userAgent)?t:""}var Oc,gf=Fr.navigator;function cl(t){return cl[" "](t),t}Oc=gf&&gf.userAgentData||null,cl[" "]=function(){};var Sm={},ua=null;function WS(t){var e=t.length,n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);var i=new Uint8Array(n),r=0;return function(s,a){function o(c){for(;l<s.length;){let u=s.charAt(l++),d=ua[u];if(d!=null)return d;if(!/^[\s\xa0]*$/.test(u))throw Error("Unknown base64 encoding at char: "+u)}return c}Mm();for(var l=0;;){let c=o(-1),u=o(0),d=o(64),h=o(64);if(h===64&&c===-1)break;a(c<<2|u>>4),d!=64&&(a(u<<4&240|d>>2),h!=64&&a(d<<6&192|h))}}(t,function(s){i[r++]=s}),r!==n?i.subarray(0,r):i}function Mm(){if(!ua){ua={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){let i=t.concat(e[n].split(""));Sm[n]=i;for(let r=0;r<i.length;r++){let s=i[r];ua[s]===void 0&&(ua[s]=r)}}}}var XS=typeof Uint8Array<"u",ym=!(!(VS&&Oc&&Oc.brands.length>0)&&(mf().indexOf("Trident")!=-1||mf().indexOf("MSIE")!=-1))&&typeof btoa=="function",_f=/[-_.]/g,$S={"-":"+",_:"/",".":"="};function qS(t){return $S[t]||""}function Em(t){if(!ym)return WS(t);t=_f.test(t)?t.replace(_f,qS):t,t=atob(t);var e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function yu(t){return XS&&t!=null&&t instanceof Uint8Array}var bs={};function Or(){return YS||(YS=new li(null,bs))}function Eu(t){Am(bs);var e=t.g;return(e=e==null||yu(e)?e:typeof e=="string"?Em(e):null)==null?e:t.g=e}var YS,li=class{h(){return new Uint8Array(Eu(this)||0)}constructor(t,e){if(Am(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};function Am(t){if(t!==bs)throw Error("illegal external caller")}function Tm(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}var jS=void 0;function va(t){return Tm(t=Error(t),"warning"),t}function ws(t,e){if(t!=null){var n=jS??(jS={}),i=n[t]||0;i>=e||(n[t]=i+1,Tm(t=Error(),"incident"),xm(t))}}function kr(){return typeof BigInt=="function"}var Hs=typeof Symbol=="function"&&typeof Symbol()=="symbol";function pi(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var or,KS=pi("jas",void 0,!0),vf=pi(void 0,"0di"),ra=pi(void 0,"1oa"),wn=pi(void 0,Symbol()),ZS=pi(void 0,"0ub"),JS=pi(void 0,"0ubs"),Bc=pi(void 0,"0ubsb"),QS=pi(void 0,"0actk"),Rs=pi("m_m","kb",!0),xf=pi(),bm={Va:{value:0,configurable:!0,writable:!0,enumerable:!1}},wm=Object.defineProperties,_e=Hs?KS:"Va",Sf=[];function La(t,e){Hs||_e in t||wm(t,bm),t[_e]|=e}function Gt(t,e){Hs||_e in t||wm(t,bm),t[_e]=e}function Ia(t){return La(t,34),t}function xa(t){return La(t,8192),t}Gt(Sf,7),or=Object.freeze(Sf);var Cs={};function xn(t,e){return e===void 0?t.h!==Br&&!!(2&t.A[_e]):!!(2&e)&&t.h!==Br}var Br={};function ul(t,e){if(t!=null){if(typeof t=="string")t=t?new li(t,bs):Or();else if(t.constructor!==li)if(yu(t))t=t.length?new li(new Uint8Array(t),bs):Or();else{if(!e)throw Error();t=void 0}}return t}class Mf{constructor(e,n,i){this.g=e,this.h=n,this.j=i}next(){var e=this.g.next();return e.done||(e.value=this.h.call(this.j,e.value)),e}[Symbol.iterator](){return this}}var eM=Object.freeze({});function Rm(t,e,n){var i,r=128&e?0:-1,s=t.length;(i=!!s)&&(i=(i=t[s-1])!=null&&typeof i=="object"&&i.constructor===Object);var a=s+(i?-1:0);for(e=128&e?1:0;e<a;e++)n(e-r,t[e]);if(i){t=t[s-1];for(let o in t)!isNaN(o)&&n(+o,t[o])}}var Cm={};function Vs(t){return 128&t?Cm:void 0}function hl(t){return t.ib=!0,t}var tM=hl(t=>typeof t=="number"),yf=hl(t=>typeof t=="string"),nM=hl(t=>typeof t=="boolean"),dl=typeof Fr.BigInt=="function"&&typeof Fr.BigInt(0)=="bigint";function zt(t){var e=t;if(yf(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(tM(e)&&!Number.isSafeInteger(e))throw Error(String(e));return dl?BigInt(t):t=nM(t)?t?"1":"0":yf(t)?t.trim()||"0":String(t)}var kc=hl(t=>dl?t>=rM&&t<=aM:t[0]==="-"?Ef(t,iM):Ef(t,sM)),iM=Number.MIN_SAFE_INTEGER.toString(),rM=dl?BigInt(Number.MIN_SAFE_INTEGER):void 0,sM=Number.MAX_SAFE_INTEGER.toString(),aM=dl?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Ef(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){let i=t[n],r=e[n];if(i>r)return!1;if(i<r)return!0}}var Pm,oM=typeof Uint8Array.prototype.slice=="function",tt=0,ht=0;function zc(t){var e=t>>>0;tt=e,ht=(t-e)/4294967296>>>0}function zr(t){if(t<0){zc(-t);let[e,n]=bu(tt,ht);tt=e>>>0,ht=n>>>0}else zc(t)}function Au(t){var e=Pm||(Pm=new DataView(new ArrayBuffer(8)));e.setFloat32(0,+t,!0),ht=0,tt=e.getUint32(0,!0)}function Lm(t,e){var n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:Ps(t,e)}function lM(t,e){return zt(kr()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(t>>>0)):Ps(t,e))}function Im(t,e){return kr()?zt(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(t)))):zt(Tu(t,e))}function Ps(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else kr()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+Af(n)+Af(t));return n}function Af(t){return t=String(t),"0000000".slice(t.length)+t}function Tu(t,e){if(2147483648&e)if(kr())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{let[n,i]=bu(t,e);t="-"+Ps(n,i)}else t=Ps(t,e);return t}function Da(t){if(t.length<16)zr(Number(t));else if(kr())t=BigInt(t),tt=Number(t&BigInt(4294967295))>>>0,ht=Number(t>>BigInt(32)&BigInt(4294967295));else{let e=+(t[0]==="-");ht=tt=0;let n=t.length;for(let i=e,r=(n-e)%6+e;r<=n;i=r,r+=6){let s=Number(t.slice(i,r));ht*=1e6,(tt=1e6*tt+s)>=4294967296&&(ht+=Math.trunc(tt/4294967296),ht>>>=0,tt>>>=0)}if(e){let[i,r]=bu(tt,ht);tt=i,ht=r}}}function bu(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function zn(t){return Array.prototype.slice.call(t)}var Pr=typeof BigInt=="function"?BigInt.asIntN:void 0,Gc=typeof BigInt=="function"?BigInt.asUintN:void 0,ci=Number.isSafeInteger,Ua=Number.isFinite,sr=Math.trunc,cM=zt(0);function Dm(t){if(typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);return t}function qn(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function ko(t){if(typeof t!="boolean"){var e=typeof t;throw Error(`Expected boolean but got ${e!="object"?e:t?Array.isArray(t)?"array":e:"null"}: ${t}`)}return t}var uM=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Ws(t){switch(typeof t){case"bigint":return!0;case"number":return Ua(t);case"string":return uM.test(t);default:return!1}}function Ii(t){if(t!=null){if(!Ua(t))throw va("enum");t|=0}return t}function Gr(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Ua(t)?0|t:void 0}function Um(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Ua(t)?t>>>0:void 0}function Nm(t,e){if(e??(e=1024),!Ws(t))throw va("int64");var n=typeof t;switch(e){case 512:switch(n){case"string":return zo(t);case"bigint":return String(Pr(64,t));default:return km(t)}case 1024:switch(n){case"string":return zm(t);case"bigint":return zt(Pr(64,t));default:return Gm(t)}case 0:switch(n){case"string":return zo(t);case"bigint":return zt(Pr(64,t));default:return fl(t)}default:return function(i,r=`unexpected value ${i}!`){throw Error(r)}(e,"Unknown format requested type for int64")}}function Fm(t){var e=t.length;return(t[0]==="-"?e<20||e===20&&t<="-9223372036854775808":e<19||e===19&&t<="9223372036854775807")?t:(Da(t),Tu(tt,ht))}function Om(t){if(t[0]==="-")var e=!1;else e=(e=t.length)<20||e===20&&t<="18446744073709551615";return e?t:(Da(t),Ps(tt,ht))}function fl(t){if(t=sr(t),!ci(t)){zr(t);var e=tt,n=ht;(t=2147483648&n)&&(n=~n>>>0,(e=1+~e>>>0)==0&&(n=n+1>>>0)),t=typeof(e=Lm(e,n))=="number"?t?-e:e:t?"-"+e:e}return t}function Bm(t){return(t=sr(t))>=0&&ci(t)||(zr(t),t=Lm(tt,ht)),t}function km(t){return t=sr(t),ci(t)?t=String(t):(zr(t),t=Tu(tt,ht)),t}function zo(t){var e=sr(Number(t));return ci(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Fm(t))}function zm(t){var e=sr(Number(t));return ci(e)?zt(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),kr()?zt(Pr(64,BigInt(t))):zt(Fm(t)))}function Gm(t){return ci(t)?zt(fl(t)):zt(km(t))}function Go(t){var e=typeof t;return t==null?t:e==="bigint"?zt(Pr(64,t)):Ws(t)?e==="string"?zm(t):Gm(t):void 0}function wu(t){if(t==null)return t;var e=typeof t;if(e==="bigint")return String(Pr(64,t));if(Ws(t)){if(e==="string")return zo(t);if(e==="number")return fl(t)}}function Hm(t){if(t==null||typeof t=="string"||t instanceof li)return t}function Vm(t){if(typeof t!="string")throw Error();return t}function Pi(t){if(t!=null&&typeof t!="string")throw Error();return t}function Zt(t){return t==null||typeof t=="string"?t:void 0}function Ru(t,e,n,i){return t!=null&&t[Rs]===Cs?t:Array.isArray(t)?((i=(n=0|t[_e])|32&i|2&i)!==n&&Gt(t,i),new e(t)):(n?2&i?((t=e[vf])||(Ia((t=new e).A),t=e[vf]=t),e=t):e=new e:e=void 0,e)}function hM(t,e,n){return(t=e?Nm(t,1024):Go(t))==null?n?cM:void 0:t}function dM(t){return t}var fM={},pM=function(){try{return cl(new class extends Map{constructor(){super()}}),!1}catch{return!0}}();class vc{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}var mM=pM?(Object.setPrototypeOf(vc.prototype,Map.prototype),Object.defineProperties(vc.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),vc):class extends Map{constructor(){super()}};function Tf(t){return t}function xc(t){if(2&t.M)throw Error("Cannot mutate an immutable Map")}var gM,Ni=class extends mM{constructor(t,e,n=Tf,i=Tf){super(),this.M=0|t[_e],this.N=e,this.ba=n,this.na=this.N?_M:i;for(let r=0;r<t.length;r++){let s=t[r],a=n(s[0],!1,!0),o=s[1];e?o===void 0&&(o=null):o=i(s[1],!1,!0,void 0,void 0,this.M),super.set(a,o)}}ea(t){return xa(Array.from(super.entries(),t))}clear(){xc(this),super.clear()}delete(t){return xc(this),super.delete(this.ba(t,!0,!1))}entries(){if(this.N){var t=super.keys();t=new Mf(t,vM,this)}else t=super.entries();return t}values(){if(this.N){var t=super.keys();t=new Mf(t,Ni.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.N?super.forEach((n,i,r)=>{t.call(e,r.get(i),i,r)}):super.forEach(t,e)}set(t,e){return xc(this),(t=this.ba(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.na(e,!0,!0,this.N,!1,this.M))}gb(t){var e=this.ba(t[0],!1,!0);t=t[1],t=this.N?t===void 0?null:t:this.na(t,!1,!0,void 0,!1,this.M),super.set(e,t)}has(t){return super.has(this.ba(t,!1,!1))}get(t){t=this.ba(t,!1,!1);var e=super.get(t);if(e!==void 0){var n=this.N;return n?((n=this.na(e,!1,!0,n,this.Fa,this.M))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function _M(t,e,n,i,r,s){return t=Ru(t,i,n,s),r&&(t=Pu(t)),t}function vM(t){return[t,this.get(t)]}function bf(){return gM||(gM=new Ni(Ia([]),void 0,void 0,void 0,fM))}function pl(t){return wn?t[wn]:void 0}function Ho(t,e){for(let n in t)!isNaN(n)&&e(t,+n,t[n])}Ni.prototype.toJSON=void 0;var xM,SM,Hc=class{},MM={cb:!0};function yM(t,e){e<100||ws(JS,1)}function ml(t,e,n,i){var r=i!==void 0;i=!!i;var s,a=wn;!r&&Hs&&a&&(s=t[a])&&Ho(s,yM),a=[];var o=t.length;s=4294967295;var l=!1,c=!!(64&e),u=c?128&e?0:-1:void 0;if(!(1&e)){var d=o&&t[o-1];d!=null&&typeof d=="object"&&d.constructor===Object?s=--o:d=void 0,!c||128&e||r||(l=!0,s=dM(s-u,u,t,d,void 0)+u)}e=void 0;for(var h=0;h<o;h++){let p=t[h];if(p!=null&&(p=n(p,i))!=null)if(c&&h>=s){let g=h-u;(e??(e={}))[g]=p}else a[h]=p}if(d)for(let p in d){if((o=d[p])==null||(o=n(o,i))==null)continue;let g;h=+p,c&&!Number.isNaN(h)&&(g=h+u)<s?a[g]=o:(e??(e={}))[p]=o}return e&&(l?a.push(e):a[s]=e),r&&wn&&(t=pl(t))&&t instanceof Hc&&(a[wn]=function(p){var g=new Hc;return Ho(p,(_,m,f)=>{g[m]=zn(f)}),g.ka=p.ka,g}(t)),a}function EM(t){return t[0]=Sa(t[0]),t[1]=Sa(t[1]),t}function Sa(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return kc(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Array.isArray(t)){var e=0|t[_e];return t.length===0&&1&e?void 0:ml(t,e,Sa)}if(t!=null&&t[Rs]===Cs)return Wm(t);if(t instanceof li){if((e=t.g)==null)t="";else if(typeof e=="string")t=e;else{if(ym){for(var n="",i=0,r=e.length-10240;i<r;)n+=String.fromCharCode.apply(null,e.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?e.subarray(i):e),e=btoa(n)}else{n===void 0&&(n=0),Mm(),n=Sm[n],i=Array(Math.floor(e.length/3)),r=n[64]||"";let c=0,u=0;for(;c<e.length-2;c+=3){var s=e[c],a=e[c+1],o=e[c+2],l=n[s>>2];s=n[(3&s)<<4|a>>4],a=n[(15&a)<<2|o>>6],o=n[63&o],i[u++]=l+s+a+o}switch(l=0,o=r,e.length-c){case 2:o=n[(15&(l=e[c+1]))<<2]||r;case 1:e=e[c],i[u]=n[e>>2]+n[(3&e)<<4|l>>4]+o+r}e=i.join("")}t=t.g=e}return t}return t instanceof Ni?t=t.size!==0?t.ea(EM):void 0:void 0}return t}function Wm(t){return ml(t=t.A,0|t[_e],Sa)}function Lr(t,e){return Xm(t,e[0],e[1])}function Xm(t,e,n,i=0){if(t==null){var r=32;n?(t=[n],r|=128):t=[],e&&(r=-16760833&r|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(r=0|t[_e],pf&&1&r)throw Error("rfarr");if(2048&r&&!(2&r)&&function(){if(pf)throw Error("carr");ws(QS,5)}(),256&r)throw Error("farr");if(64&r)return(r|i)!==r&&Gt(t,r|i),t;if(n&&(r|=128,n!==t[0]))throw Error("mid");e:{r|=64;var s=(n=t).length;if(s){var a=s-1;let l=n[a];if(l!=null&&typeof l=="object"&&l.constructor===Object){if((a-=e=128&r?0:-1)>=1024)throw Error("pvtlmt");for(var o in l)(s=+o)<a&&(n[s+e]=l[o],delete l[o]);r=-16760833&r|(1023&a)<<14;break e}}if(e){if((o=Math.max(e,s-(128&r?0:-1)))>1024)throw Error("spvt");r=-16760833&r|(1023&o)<<14}}}return Gt(t,64|r|i),t}function AM(t,e){if(typeof t!="object")return t;if(Array.isArray(t)){var n=0|t[_e];return t.length===0&&1&n?void 0:wf(t,n,e)}if(t!=null&&t[Rs]===Cs)return Rf(t);if(t instanceof Ni){if(2&(e=t.M))return t;if(!t.size)return;if(n=Ia(t.ea()),t.N)for(t=0;t<n.length;t++){let i=n[t],r=i[1];r=r==null||typeof r!="object"?void 0:r!=null&&r[Rs]===Cs?Rf(r):Array.isArray(r)?wf(r,0|r[_e],!!(32&e)):void 0,i[1]=r}return n}return t instanceof li?t:void 0}function wf(t,e,n){return 2&e||(!n||4096&e||16&e?t=Xs(t,e,!1,n&&!(16&e)):(La(t,34),4&e&&Object.freeze(t))),t}function Cu(t,e,n){return t=new t.constructor(e),n&&(t.h=Br),t.m=Br,t}function Rf(t){var e=t.A,n=0|e[_e];return xn(t,n)?t:Lu(t,e,n)?Cu(t,e):Xs(e,n)}function Xs(t,e,n,i){return i??(i=!!(34&e)),t=ml(t,e,AM,i),i=32,n&&(i|=2),Gt(t,e=16769217&e|i),t}function Pu(t){var e=t.A,n=0|e[_e];return xn(t,n)?Lu(t,e,n)?Cu(t,e,!0):new t.constructor(Xs(e,n,!1)):t}function $s(t){if(t.h!==Br)return!1;var e=t.A;return La(e=Xs(e,0|e[_e]),2048),t.A=e,t.h=void 0,t.m=void 0,!0}function Hr(t){if(!$s(t)&&xn(t,0|t.A[_e]))throw Error()}function lr(t,e){e===void 0&&(e=0|t[_e]),32&e&&!(4096&e)&&Gt(t,4096|e)}function Lu(t,e,n){return!!(2&n)||!(!(32&n)||4096&n)&&(Gt(e,2|n),t.h=Br,!0)}var $m=zt(0),Yi={};function Rt(t,e,n,i){if((e=Fi(t.A,e,void 0,i))!==null||n&&t.m!==Br)return e}function Fi(t,e,n,i){if(e===-1)return null;var r=e+(n?0:-1),s=t.length-1;if(!(s<1+(n?0:-1))){if(r>=s){var a=t[s];if(a!=null&&typeof a=="object"&&a.constructor===Object){n=a[e];var o=!0}else{if(r!==s)return;n=a}}else n=t[r];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return o?a[e]=i:t[r]=i,i}return n}}function De(t,e,n,i){Hr(t);var r=t.A;return Ut(r,0|r[_e],e,n,i),t}function Ut(t,e,n,i,r){var s=n+(r?0:-1),a=t.length-1;if(a>=1+(r?0:-1)&&s>=a){let o=t[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[n]=i,e}return s<=a?(t[s]=i,e):(i!==void 0&&(n>=(a=(e??(e=0|t[_e]))>>14&1023||536870912)?i!=null&&(t[a+(r?0:-1)]={[n]:i}):t[s]=i),e)}function qm(t,e,n,i){var r=t.A;return Qm(r,0|r[_e],e,t=Zm(t,i)===n?n:-1)!==void 0}function br(){return eM===void 0?2:4}function wr(t,e,n,i,r){var s=t.A,a=0|s[_e];i=xn(t,a)?1:i,r=!!r||i===3,i===2&&$s(t)&&(a=0|(s=t.A)[_e]);var o=(t=Iu(s,e))===or?7:0|t[_e],l=Du(o,a),c=!(4&l);if(c){4&l&&(t=zn(t),o=0,l=tr(l,a),a=Ut(s,a,e,t));let u=0,d=0;for(;u<t.length;u++){let h=n(t[u]);h!=null&&(t[d++]=h)}d<u&&(t.length=d),n=-513&l|4,l=n&=-1025,l&=-4097}return l!==o&&(Gt(t,l),2&l&&Object.freeze(t)),Ym(t,l,s,a,e,i,c,r)}function Ym(t,e,n,i,r,s,a,o){var l=e;return s===1||s===4&&(2&e||!(16&e)&&32&i)?er(e)||((e|=!t.length||a&&!(4096&e)||32&i&&!(4096&e||16&e)?2:256)!==l&&Gt(t,e),Object.freeze(t)):(s===2&&er(e)&&(t=zn(t),l=0,e=tr(e,i),i=Ut(n,i,r,t)),er(e)||(o||(e|=16),e!==l&&Gt(t,e))),2&e||!(4096&e||16&e)||lr(n,i),t}function Iu(t,e,n){return t=Fi(t,e,n),Array.isArray(t)?t:or}function Du(t,e){return 2&e&&(t|=2),1|t}function er(t){return!!(2&t)&&!!(4&t)||!!(256&t)}function jm(t){return ul(t,!0)}function Km(t){t=zn(t);for(let e=0;e<t.length;e++){let n=t[e]=zn(t[e]);Array.isArray(n[1])&&(n[1]=Ia(n[1]))}return xa(t)}function Na(t,e,n,i){Hr(t),Ut(t=t.A,0|t[_e],e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function cr(t,e,n){if(2&e)throw Error();var i=Vs(e),r=Iu(t,n,i),s=r===or?7:0|r[_e],a=Du(s,e);return(2&a||er(a)||16&a)&&(a===s||er(a)||Gt(r,a),r=zn(r),s=0,a=tr(a,e),Ut(t,e,n,r,i)),(a&=-13)!==s&&Gt(r,a),r}function Zm(t,e){return Nu(Uu(t=t.A),t,void 0,e)}function Uu(t){if(Hs)return t[ra]??(t[ra]=new Map);if(ra in t)return t[ra];var e=new Map;return Object.defineProperty(t,ra,{value:e}),e}function Jm(t,e,n,i,r){var s=Uu(t),a=Nu(s,t,e,n,r);return a!==i&&(a&&(e=Ut(t,e,a,void 0,r)),s.set(n,i)),e}function Nu(t,e,n,i,r){var s=t.get(i);if(s!=null)return s;s=0;for(let a=0;a<i.length;a++){let o=i[a];Fi(e,o,r)!=null&&(s!==0&&(n=Ut(e,n,s,void 0,r)),s=o)}return t.set(i,s),s}function Fu(t,e,n){var i=0|t[_e],r=Vs(i),s=Fi(t,n,r);if(s!=null&&s[Rs]===Cs){if(!xn(s))return $s(s),s.A;var a=s.A}else Array.isArray(s)&&(a=s);if(a){let o=0|a[_e];2&o&&(a=Xs(a,o))}return(a=Lr(a,e))!==s&&Ut(t,i,n,a,r),a}function Qm(t,e,n,i,r){var s=!1;if((i=Fi(t,i,r,a=>{var o=Ru(a,n,!1,e);return s=o!==a&&o!=null,o}))!=null)return s&&!xn(i)&&lr(t,e),i}function st(t,e,n,i){var r=t.A,s=0|r[_e];if((e=Qm(r,s,e,n,i))==null)return e;if(!xn(t,s=0|r[_e])){let a=Pu(e);a!==e&&($s(t)&&(s=0|(r=t.A)[_e]),lr(r,s=Ut(r,s,n,e=a,i)))}return e}function eg(t,e,n,i,r,s,a,o){var l=xn(t,n);s=l?1:s,a=!!a||s===3,l=o&&!l,(s===2||l)&&$s(t)&&(n=0|(e=t.A)[_e]);var c=(t=Iu(e,r))===or?7:0|t[_e],u=Du(c,n);if(o=!(4&u)){var d=t,h=n;let p=!!(2&u);p&&(h|=2);let g=!p,_=!0,m=0,f=0;for(;m<d.length;m++){let E=Ru(d[m],i,!1,h);if(E instanceof i){if(!p){let M=xn(E);g&&(g=!M),_&&(_=M)}d[f++]=E}}f<m&&(d.length=f),u|=4,u=_?-4097&u:4096|u,u=g?8|u:-9&u}if(u!==c&&(Gt(t,u),2&u&&Object.freeze(t)),l&&!(8&u||!t.length&&(s===1||s===4&&(2&u||!(16&u)&&32&n)))){for(er(u)&&(t=zn(t),u=tr(u,n),n=Ut(e,n,r,t)),i=t,l=u,c=0;c<i.length;c++)(d=i[c])!==(u=Pu(d))&&(i[c]=u);l|=8,Gt(t,u=l=i.length?4096|l:-4097&l)}return Ym(t,u,e,n,r,s,o,a)}function Oi(t,e,n){var i=t.A;return eg(t,i,0|i[_e],e,n,br(),!1,!0)}function tg(t){return t==null&&(t=void 0),t}function Ae(t,e,n,i,r){return De(t,n,i=tg(i),r),i&&!xn(i)&&lr(t.A),t}function ui(t,e,n,i){e:{var r=i=tg(i);Hr(t);let s=t.A,a=0|s[_e];if(r==null){let o=Uu(s);if(Nu(o,s,a,n)!==e)break e;o.set(n,0)}else a=Jm(s,a,n,e);Ut(s,a,e,r)}return i&&!xn(i)&&lr(t.A),t}function Vc(t,e,n){Hr(t);var i=t.A,r=0|i[_e];if(n==null)return Ut(i,r,e),t;var s=n===or?7:0|n[_e],a=s,o=er(s),l=o||Object.isFrozen(n),c=!0,u=!0;for(let h=0;h<n.length;h++){var d=n[h];o||(d=xn(d),c&&(c=!d),u&&(u=d))}return o||(s=c?13:5,s=u?-4097&s:4096|s),l&&s===a||(n=zn(n),a=0,s=tr(s,r)),s!==a&&Gt(n,s),r=Ut(i,r,e,n),2&s||!(4096&s||16&s)||lr(i,r),t}function tr(t,e){return-273&(2&e?2|t:-3&t)}function Ma(t,e,n,i){var r=i;Hr(t),t=eg(t,i=t.A,0|i[_e],n,e,2,!0),r=r??new n,t.push(r),e=n=t===or?7:0|t[_e],(r=xn(r))?(n&=-9,t.length===1&&(n&=-4097)):n|=4096,n!==e&&Gt(t,n),r||lr(i)}function Bn(t,e,n){return Gr(Rt(t,e,n))}function Dt(t,e){return Rt(t,e,void 0,qn)??0}function Cf(t,e,n){return st(t,e,n=Zm(t,th)===n?n:-1,void 0)}function Wc(t,e){Na(t,3,e==null?e:ko(e),!1)}function di(t,e,n){if(n!=null){if(typeof n!="number"||!Ua(n))throw va("int32");n|=0}De(t,e,n)}function Sc(t,e,n){return De(t,e,n==null?n:Nm(n))}function bo(t,e,n){return De(t,e,n==null?n:function(i){if(!Ws(i))throw va("uint64");switch(typeof i){case"string":var r=sr(Number(i));return ci(r)&&r>=0?i=zt(r):((r=i.indexOf("."))!==-1&&(i=i.substring(0,r)),i=kr()?zt(Gc(64,BigInt(i))):zt(Om(i))),i;case"bigint":return zt(Gc(64,i));default:return ci(i)?i=zt(Bm(i)):((i=sr(i))>=0&&ci(i)?i=String(i):(zr(i),i=Ps(tt,ht)),i=zt(i)),i}}(n))}function Ee(t,e,n){De(t,e,n==null?n:Dm(n))}function ps(t,e,n){Na(t,e,n==null?n:Dm(n),0)}function Rn(t,e,n){Na(t,e,Pi(n),"")}function Vo(t,e,n){{Hr(t);let a=t.A,o=0|a[_e];if(n==null)Ut(a,o,e);else{var i=t=n===or?7:0|n[_e],r=er(t),s=r||Object.isFrozen(n);for(r||(t=0),s||(n=zn(n),i=0,t=tr(t,o),s=!1),t|=5,t|=(4&t?512&t?512:1024&t?1024:0:void 0)??1024,r=0;r<n.length;r++){let l=n[r],c=Vm(l);Object.is(l,c)||(s&&(n=zn(n),i=0,t=tr(t,o),s=!1),n[r]=c)}t!==i&&(s&&(n=zn(n),t=tr(t,o)),Gt(n,t)),Ut(a,o,e,n)}}}function gl(t,e,n){Hr(t),wr(t,e,Zt,2,!0).push(Vm(n))}var ls=class{constructor(t,e,n){if(this.buffer=t,n&&!e)throw Error();this.g=e}};function _l(t,e){if(typeof t=="string")return new ls(Em(t),e);if(Array.isArray(t))return new ls(new Uint8Array(t),e);if(t.constructor===Uint8Array)return new ls(t,!1);if(t.constructor===ArrayBuffer)return t=new Uint8Array(t),new ls(t,!1);if(t.constructor===li)return e=Eu(t)||new Uint8Array(0),new ls(e,!0,t);if(t instanceof Uint8Array)return t=t.constructor===Uint8Array?t:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new ls(t,!1);throw Error()}function Ou(t,e){var n=0,i=0,r=0,s=t.h,a=t.g;do{var o=s[a++];n|=(127&o)<<r,r+=7}while(r<32&&128&o);if(r>32)for(i|=(127&o)>>4,r=3;r<32&&128&o;r+=7)i|=(127&(o=s[a++]))<<r;if(Ir(t,a),!(128&o))return e(n>>>0,i>>>0);throw Error()}function Bu(t){for(var e=0,n=t.g,i=n+10,r=t.h;n<i;){let s=r[n++];if(e|=s,!(128&s))return Ir(t,n),!!(127&e)}throw Error()}function Bi(t){var e=t.h,n=t.g,i=e[n++],r=127&i;if(128&i&&(r|=(127&(i=e[n++]))<<7,128&i&&(r|=(127&(i=e[n++]))<<14,128&i&&(r|=(127&(i=e[n++]))<<21,128&i&&(r|=(i=e[n++])<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Error();return Ir(t,n),r}function fi(t){return Bi(t)>>>0}function Wo(t){return Ou(t,Im)}function Xc(t){var e=t.h,n=t.g,i=e[n],r=e[n+1],s=e[n+2];return e=e[n+3],Ir(t,t.g+4),(i|r<<8|s<<16|e<<24)>>>0}function Xo(t){var e=Xc(t);t=2*(e>>31)+1;var n=e>>>23&255;return e&=8388607,n==255?e?NaN:t*(1/0):n==0?1401298464324817e-60*t*e:t*Math.pow(2,n-150)*(e+8388608)}function TM(t){return Bi(t)}function Ir(t,e){if(t.g=e,e>t.j)throw Error()}function ng(t,e){if(e<0)throw Error();var n=t.g;if((e=n+e)>t.j)throw Error();return t.g=e,n}function ig(t,e){if(e==0)return Or();var n=ng(t,e);return t.fa&&t.o?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):oM?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?Or():new li(n,bs)}var bM=class{constructor(t,e,n,i){this.h=null,this.o=!1,this.g=this.j=this.m=0,this.init(t,e,n,i)}init(t,e,n,{fa:i=!1,ma:r=!1}={}){this.fa=i,this.ma=r,t&&(t=_l(t,this.ma),this.h=t.buffer,this.o=t.g,this.m=e||0,this.j=n!==void 0?this.m+n:this.h.length,this.g=this.m)}clear(){this.h=null,this.o=!1,this.g=this.j=this.m=0,this.fa=!1}},Pf=[],Ls=0;function rg(t,e,n,i){if($o.length){let r=$o.pop();return r.v(i),r.g.init(t,e,n,i),r}return new wM(t,e,n,i)}function sg(t){t.g.clear(),t.j=-1,t.h=-1,$o.length<100&&$o.push(t)}function ag(t){var e=t.g;if(e.g==e.j)return!1;t.m=t.g.g;var n=fi(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5)||e<1)throw Error();return t.j=e,t.h=n,!0}function wo(t){try{switch(t.h){case 0:t.h!=0?wo(t):Bu(t.g);break;case 1:var e=t.g;Ir(e,e.g+8);break;case 2:if(t.h!=2)wo(t);else{var n=fi(t.g),i=t.g;Ir(i,i.g+n)}break;case 5:var r=t.g;Ir(r,r.g+4);break;case 3:og();let s=t.j;try{for(;;){if(!ag(t))throw Error();if(t.h==4){if(t.j!=s)throw Error();break}wo(t)}}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{Ls>0&&Ls--}break;default:throw Error()}}catch(s){throw s instanceof RangeError?new SyntaxError:s}}function og(){if(Ls>=100)throw new SyntaxError;Ls++}function Fa(t,e,n){var i=t.g.j,r=fi(t.g),s=(r=t.g.g+r)-i;if(s<=0&&(t.g.j=r,n(e,t,void 0,void 0,void 0),s=r-t.g.g),s)throw Error();return t.g.g=r,t.g.j=i,e}function ku(t){var e=fi(t.g),n=ng(t=t.g,e);if(t=t.h,GS){var i,r=t;(i=_c)||(i=_c=new TextDecoder("utf-8",{fatal:!0})),e=n+e,r=n===0&&e===r.length?r:r.subarray(n,e);try{var s=i.decode(r)}catch(o){if(go===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),go=!0}catch{go=!1}}throw!go&&(_c=void 0),o}}else{e=(s=n)+e,n=[];let o,l=null;for(;s<e;){var a=t[s++];a<128?n.push(a):a<224?s>=e?xr():(o=t[s++],a<194||(192&o)!=128?(s--,xr()):n.push((31&a)<<6|63&o)):a<240?s>=e-1?xr():(o=t[s++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=t[s++]))!=128?(s--,xr()):n.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?s>=e-2?xr():(o=t[s++],(192&o)!=128||o-144+(a<<28)>>30||(192&(i=t[s++]))!=128||(192&(r=t[s++]))!=128?(s--,xr()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&r,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):xr(),n.length>=8192&&(l=ff(l,n),n.length=0)}s=ff(l,n)}return s}function zu(t){var e=fi(t.g);return ig(t.g,e)}function Oa(t,e,n){var i=fi(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var wM=class{constructor(t,e,n,i){if(Pf.length){let r=Pf.pop();r.init(t,e,n,i),t=r}else t=new bM(t,e,n,i);this.g=t,this.m=this.g.g,this.h=this.j=-1,this.v(i)}v({ra:t=!1}={}){this.ra=t}},$o=[];function RM(t){return new qo(4294967295&t,Math.floor(t/4294967296))}function Lf(t){return t?/^\d+$/.test(t)?(Da(t),new qo(tt,ht)):null:CM||(CM=new qo(0,0))}var CM,qo=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};function PM(t){return new Yo(4294967295&t,Math.floor(t/4294967296))}function lg(t){return t?/^-?\d+$/.test(t)?(Da(t),new Yo(tt,ht)):null:LM||(LM=new Yo(0,0))}var LM,If,Df,Uf,Mc,Nf,sa,_o,Yo=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};function cg(t,e,n){return typeof BigInt64Array<"u"?(sa||(sa=new BigInt64Array(1),_o=new Uint32Array(sa.buffer),sa[0]=BigInt(1),Nf=_o[0]===1),sa[0]=t,new e(_o[t=Nf?0:1],_o[1-t])):(Mc||(If=BigInt(Number.MIN_SAFE_INTEGER),Df=BigInt(Number.MAX_SAFE_INTEGER),Uf=BigInt(4294967295),Mc=BigInt(32)),t>=If&&t<=Df?n(Number(t)):(t=BigInt.asUintN(64,t),new e(Number(t&Uf),Number(t>>Mc))))}function Di(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function qs(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function Ba(t,e){if(e>=0)qs(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function IM(t,e){Da(e),function(n){var i=ht>>31;n(tt<<1^i,(ht<<1|tt>>>31)^i)}((n,i)=>{Di(t,n>>>0,i>>>0)})}function ya(t,e){t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}var DM=class{constructor(){this.g=[]}length(){return this.g.length}end(){var t=this.g;return this.g=[],t}};function Is(t,e){e.length!==0&&(t.j.push(e),t.h+=e.length)}function hn(t,e,n){qs(t.g,8*e+n)}function Gu(t,e){return hn(t,e,2),e=t.g.end(),Is(t,e),e.push(t.h),e}function Hu(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function ug(t,e,n){if(n!=null)switch(hn(t,e,0),typeof n){case"number":t=t.g,zr(n),Di(t,tt,ht);break;case"bigint":n=cg(n,Yo,PM),Di(t.g,n.h,n.g);break;default:n=lg(n),Di(t.g,n.h,n.g)}}function ka(t,e,n){hn(t,e,2),qs(t.g,n.length),Is(t,t.g.end()),Is(t,n)}function jo(t,e,n,i){n!=null&&(e=Gu(t,e),i(n,t),Hu(t,e))}var UM=class{constructor(){this.j=[],this.h=0,this.g=new DM}};function hg(t){typeof t=="string"&&lg(t)}function Gn(){var t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var Vu=Gn(),dg=Gn(),Wu=Gn(),vl=Gn(),Xu=Gn(),xl=Gn(),NM=Gn(),FM=Gn(),Sl=Gn(),OM=Gn(),Ml=Gn(),$u=Gn();function mi(t,e,n){var i=t.A;wn&&wn in i&&(i=i[wn])&&delete i[e.g],e.h?e.o(t,e.h,e.g,n,e.j):e.o(t,e.g,n,e.j)}var le=class{constructor(t,e){this.A=Xm(t,e,void 0,2048)}toJSON(){return Wm(this)}o(){var r;var t=Ey,e=this.A,n=t.g,i=wn;if(Hs&&i&&((r=e[i])==null?void 0:r[n])!=null&&ws(ZS,3),e=t.g,xf&&wn&&xf===void 0&&(i=(n=this.A)[wn])&&(i=i.ka))try{i(n,e,MM)}catch(s){xm(s)}return t.h?t.m(this,t.h,t.g,t.j):t.m(this,t.g,t.defaultValue,t.j)}clone(){var t=this.A,e=0|t[_e];return Lu(this,t,e)?Cu(this,t,!0):new this.constructor(Xs(t,e,!1))}};le.prototype[Rs]=Cs,le.prototype.toString=function(){return this.A.toString()};var Ys=class{constructor(t,e,n){this.g=t,this.h=e,t=Vu,this.j=!!t&&n===t||!1}};function yl(t,e){return new Ys(t,e,Vu)}function fg(t,e,n,i,r){jo(t,n,_g(e,i),r)}var pg,mg,BM=yl(function(t,e,n,i,r){return t.h===2&&(Fa(t,Fu(e,i,n),r),!0)},fg),kM=yl(function(t,e,n,i,r){return t.h===2&&(Fa(t,Fu(e,i,n),r),!0)},fg),El=Symbol(),Al=Symbol(),$c=Symbol(),Ff=Symbol(),Of=Symbol();function Vr(t,e,n,i){var r=i[t];if(r)return r;(r={}).Ea=i,r.ca=function(d){switch(typeof d){case"boolean":return xM||(xM=[0,void 0,!0]);case"number":return d>0?void 0:d===0?SM||(SM=[0,void 0]):[-d,void 0];case"string":return[0,d];case"object":return d}}(i[0]);var s=i[1],a=1;s&&s.constructor===Object&&(r.ia=s,typeof(s=i[++a])=="function"&&(r.wa=!0,pg??(pg=s),mg??(mg=i[a+1]),s=i[a+=2]));for(var o={};s&&Array.isArray(s)&&s.length&&typeof s[0]=="number"&&s[0]>0;){for(var l=0;l<s.length;l++)o[s[l]]=s;s=i[++a]}for(l=1;s!==void 0;){let d;typeof s=="number"&&(l+=s,s=i[++a]);var c=void 0;if(s instanceof Ys?d=s:(d=BM,a--),d==null?void 0:d.j){s=i[++a],c=i;var u=a;typeof s=="function"&&(s=s(),c[u]=s),c=s}for(u=l+1,typeof(s=i[++a])=="number"&&s<0&&(u-=s,s=i[++a]);l<u;l++){let h=o[l];c?n(r,l,d,c,h):e(r,l,d,h)}}return i[t]=r}function gg(t){return Array.isArray(t)?t[0]instanceof Ys?t:[kM,t]:[t,void 0]}function _g(t,e){return t instanceof le?t.A:Array.isArray(t)?Lr(t,e):void 0}function qu(t,e,n,i){var r=n.g;t[e]=i?(s,a,o)=>r(s,a,o,i):r}function Yu(t,e,n,i,r){var s,a,o=n.g;t[e]=(l,c,u)=>o(l,c,u,a||(a=Vr(Al,qu,Yu,i).ca),s||(s=ju(i)),r)}function ju(t){var e=t[$c];if(e!=null)return e;var n=Vr(Al,qu,Yu,t);return e=n.wa?(i,r)=>pg(i,r,n):(i,r)=>{e:{og();try{for(;ag(r)&&r.h!=4;){let h=r.j,p=n[h];if(p==null){let g=n.ia;if(g){let _=g[h];if(_){let m=GM(_);m!=null&&(p=n[h]=m)}}}if(p==null||!p(r,i,h)){var s=r;let g=s.m;if(wo(s),s.ra)var a=void 0;else{let _=s.g.g-g;s.g.g=g,a=ig(s.g,_)}s=void 0;var o=i,l=h,c=a;c&&((s=o[wn]??(o[wn]=new Hc))[l]??(s[l]=[])).push(c)}}let d=pl(i);d&&(d.ka=n.Ea[Of]);var u=!0;break e}catch(d){throw d instanceof RangeError?new SyntaxError:d}finally{Ls>0&&Ls--}u=void 0}return u},t[$c]=e,t[Of]=zM.bind(t),e}function zM(t,e,n,i){var r=this[Al],s=this[$c],a=Lr(void 0,r.ca),o=pl(t);if(o){var l=!1,c=r.ia;if(c){if(r=(u,d,h)=>{if(h.length!==0)if(c[d])for(let p of h){u=rg(p);try{l=!0,s(a,u)}finally{sg(u)}}else i==null||i(t,d,h)},e==null)Ho(o,r);else if(o!=null){let u=o[e];u&&r(o,e,u)}if(l){let u=0|t[_e];if(2&u&&2048&u&&!(n!=null&&n.cb))throw Error();let d=Vs(u),h=(p,g)=>{if(Fi(t,p,d)!=null){if((n==null?void 0:n.lb)===1)return;throw Error()}g!=null&&(u=Ut(t,u,p,g,d)),delete o[p]};e==null?Rm(a,0|a[_e],(p,g)=>{h(p,g)}):h(e,Fi(a,e,d))}}}}function GM(t){var e=(t=gg(t))[0].g;if(t=t[1]){let n=ju(t),i=Vr(Al,qu,Yu,t).ca;return(r,s,a)=>e(r,s,a,i,n)}return e}function Tl(t,e,n){t[e]=n.h}function bl(t,e,n,i){var r,s,a=n.h;t[e]=(o,l,c)=>a(o,l,c,s||(s=Vr(El,Tl,bl,i).ca),r||(r=vg(i)))}function vg(t){var e=t[Ff];if(!e){let n=Vr(El,Tl,bl,t);e=(i,r)=>xg(i,r,n),t[Ff]=e}return e}function xg(t,e,n){Rm(t,0|t[_e],(i,r)=>{if(r!=null){var s=function(a,o){var l=a[o];if(l)return l;if((l=a.ia)&&(l=l[o])){var c=(l=gg(l))[0].h;if(l=l[1]){let u=vg(l),d=Vr(El,Tl,bl,l).ca;l=a.wa?mg(d,u):(h,p,g)=>c(h,p,g,d,u)}else l=c;return a[o]=l}}(n,i);s?s(e,r,i):i<500||ws(Bc,3)}}),(t=pl(t))&&Ho(t,(i,r,s)=>{for(Is(e,e.g.end()),i=0;i<s.length;i++)Is(e,Eu(s[i])||new Uint8Array(0))})}var HM=zt(0);function ki(t,e,n){if(Array.isArray(e)){var i=0|e[_e];if(4&i)return e;for(var r=0,s=0;r<e.length;r++){let a=t(e[r]);a!=null&&(e[s++]=a)}return s<r&&(e.length=s),t=1|i,n&&(t=-1537&t|4),t!==i&&Gt(e,t),n&&2&t&&Object.freeze(e),e}}var Sg=(t,e)=>{var n=new UM;xg(t.A,n,Vr(El,Tl,bl,e)),Is(n,n.g.end()),t=new Uint8Array(n.h);var i=(e=n.j).length,r=0;for(let s=0;s<i;s++){let a=e[s];t.set(a,r),r+=a.length}return n.j=[t],t};function Ft(t,e,n){return new Ys(t,e,n)}function zi(t,e,n){return new Ys(t,e,n)}function Xt(t,e,n){Ut(t,0|t[_e],e,n,Vs(0|t[_e]))}var VM=yl(function(t,e,n,i,r){if(t.h!==2)return!1;if(t=zn(t=Fa(t,Lr([void 0,void 0],i),r)),r=Vs(i=0|e[_e]),2&i)throw Error();var s=Fi(e,n,r);if(s instanceof Ni)2&s.M?((s=s.ea()).push(t),Ut(e,i,n,s,r)):s.gb(t);else if(Array.isArray(s)){var a=0|s[_e];8192&a||Gt(s,a|=8192),2&a&&Ut(e,i,n,s=Km(s),r),s.push(t)}else Ut(e,i,n,xa([t]),r);return!0},function(t,e,n,i,r){if(e instanceof Ni)e.forEach((s,a)=>{jo(t,n,Lr([a,s],i),r)});else if(Array.isArray(e)){for(let s=0;s<e.length;s++){let a=e[s];Array.isArray(a)&&jo(t,n,Lr(a,i),r)}xa(e)}});function Mg(t,e,n){(e=qn(e))!=null&&(hn(t,n,5),t=t.g,Au(e),ya(t,tt))}function Ku(t,e,n){(e=wu(e))!=null&&(hg(e),ug(t,n,e))}function yg(t,e,n){(e=Gr(e))!=null&&e!=null&&(hn(t,n,0),Ba(t.g,e))}function Eg(t,e,n){(e=e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0)!=null&&(hn(t,n,0),t.g.g.push(e?1:0))}function Ag(t,e,n){(e=Zt(e))!=null&&ka(t,n,vm(e))}function Tg(t,e,n,i,r){jo(t,n,_g(e,i),r)}function Zu(t,e,n){(e=Hm(e))!=null&&ka(t,n,_l(e,!0).buffer)}function bg(t,e,n){(e=Um(e))!=null&&e!=null&&(hn(t,n,0),qs(t.g,e))}function wg(t,e,n){(e=Gr(e))!=null&&(e=parseInt(e,10),hn(t,n,0),Ba(t.g,e))}function Rg(t,e,n){return(t.h===5||t.h===2)&&(e=cr(e,0|e[_e],n),t.h==2?Oa(t,Xo,e):e.push(Xo(t.g)),!0)}function Cg(t,e,n){return t.h===0&&(Xt(e,n,Wo(t.g)),!0)}function Pg(t,e,n){return(t.h===0||t.h===2)&&(e=cr(e,0|e[_e],n),t.h==2?Oa(t,Bi,e):e.push(Bi(t.g)),!0)}function Lg(t,e,n){return t.h===2&&(Xt(e,n,(t=zu(t))===Or()?void 0:t),!0)}var Bf=Ft(function(t,e,n){if(t.h!==1)return!1;var i=t.g;t=Xc(i);var r=Xc(i);i=2*(r>>31)+1;var s=r>>>20&2047;return t=4294967296*(1048575&r)+t,Xt(e,n,s==2047?t?NaN:i*(1/0):s==0?5e-324*i*t:i*Math.pow(2,s-1075)*(t+4503599627370496)),!0},function(t,e,n){(e=qn(e))!=null&&(hn(t,n,1),t=t.g,(n=Pm||(Pm=new DataView(new ArrayBuffer(8)))).setFloat64(0,+e,!0),tt=n.getUint32(0,!0),ht=n.getUint32(4,!0),ya(t,tt),ya(t,ht))},OM),Ct=Ft(function(t,e,n){return t.h===5&&(Xt(e,n,Xo(t.g)),!0)},Mg,Sl),WM=zi(Rg,function(t,e,n){if((e=ki(qn,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(hn(i,r,5),i=i.g,Au(s),ya(i,tt))}},Sl),Ju=zi(Rg,function(t,e,n){if((e=ki(qn,e,!0))!=null&&e.length){hn(t,n,2),qs(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,Au(e[i]),ya(n,tt)}},Sl),Ig=Ft(function(t,e,n){return t.h===5&&(Xt(e,n,(t=Xo(t.g))===0?void 0:t),!0)},Mg,Sl),aa=Ft(function(t,e,n){return Cg(t,e,n)},Ku,xl),_t=Ft(function(t,e,n){return Cg(t,e,n)},Ku,xl),XM=zi(function(t,e,n){return t.h!==0&&t.h!==2?t=!1:(e=cr(e,0|e[_e],n),t.h==2?Oa(t,Wo,e):e.push(Wo(t.g)),t=!0),t},function(t,e,n){if((e=ki(wu,e,!1))!=null)for(let i=0;i<e.length;i++)ug(t,n,e[i])},xl),Ro=Ft(function(t,e,n){return t.h!==0?e=!1:(Xt(e,n,(t=Wo(t.g))===HM?void 0:t),e=!0),e},Ku,xl),Ko=Ft(function(t,e,n){return t.h!==0?t=!1:(Xt(e,n,Ou(t.g,lM)),t=!0),t},function(t,e,n){if(e=function(i){if(i==null)return i;var r=typeof i;if(r==="bigint")return String(Gc(64,i));if(Ws(i)){if(r==="string")return r=sr(Number(i)),ci(r)&&r>=0?i=String(r):((r=i.indexOf("."))!==-1&&(i=i.substring(0,r)),i=Om(i)),i;if(r==="number")return Bm(i)}}(e),e!=null&&(typeof e=="string"&&Lf(e),e!=null))switch(hn(t,n,0),typeof e){case"number":t=t.g,zr(e),Di(t,tt,ht);break;case"bigint":n=cg(e,qo,RM),Di(t.g,n.h,n.g);break;default:n=Lf(e),Di(t.g,n.h,n.g)}},NM),Je=Ft(function(t,e,n){return t.h===0&&(Xt(e,n,Bi(t.g)),!0)},yg,vl),kf=zi(Pg,function(t,e,n){if((e=ki(Gr,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(hn(i,r,0),Ba(i.g,s))}},vl),js=zi(Pg,function(t,e,n){if((e=ki(Gr,e,!0))!=null&&e.length){n=Gu(t,n);for(let i=0;i<e.length;i++)Ba(t.g,e[i]);Hu(t,n)}},vl),Rr=Ft(function(t,e,n){return t.h===0&&(Xt(e,n,(t=Bi(t.g))===0?void 0:t),!0)},yg,vl),Ue=Ft(function(t,e,n){return t.h===0&&(Xt(e,n,Bu(t.g)),!0)},Eg,dg),nr=Ft(function(t,e,n){return t.h===0&&(Xt(e,n,(t=Bu(t.g))===!1?void 0:t),!0)},Eg,dg),Kt=zi(function(t,e,n){return t.h===2&&(t=ku(t),cr(e,0|e[_e],n).push(t),!0)},function(t,e,n){if((e=ki(Zt,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&ka(i,r,vm(s))}},Wu),wi=Ft(function(t,e,n){return t.h===2&&(Xt(e,n,(t=ku(t))===""?void 0:t),!0)},Ag,Wu),ne=Ft(function(t,e,n){return t.h===2&&(Xt(e,n,ku(t)),!0)},Ag,Wu),mt=function(t,e,n=Vu){return new Ys(t,e,n)}(function(t,e,n,i,r){return t.h===2&&(i=Lr(void 0,i),cr(e,0|e[_e],n).push(i),Fa(t,i,r),!0)},function(t,e,n,i,r){if(Array.isArray(e)){for(let s=0;s<e.length;s++)Tg(t,e[s],n,i,r);1&(t=0|e[_e])||Gt(e,1|t)}}),je=yl(function(t,e,n,i,r,s){if(t.h!==2)return!1;var a=0|e[_e];return Jm(e,a,s,n,Vs(a)),Fa(t,e=Fu(e,i,n),r),!0},Tg),vs=Ft(function(t,e,n){return t.h===2&&(Xt(e,n,zu(t)),!0)},Zu,Ml),Dg=zi(function(t,e,n){return t.h===2&&(t=zu(t),cr(e,0|e[_e],n).push(t),!0)},function(t,e,n){if((e=ki(Hm,e,!1))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&ka(i,r,_l(s,!0).buffer)}},Ml),Ug=Ft(function(t,e,n){return t.h===0&&(Xt(e,n,fi(t.g)),!0)},bg,Xu),$M=zi(function(t,e,n){return(t.h===0||t.h===2)&&(e=cr(e,0|e[_e],n),t.h==2?Oa(t,fi,e):e.push(fi(t.g)),!0)},function(t,e,n){if((e=ki(Um,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(hn(i,r,0),qs(i.g,s))}},Xu),qM=Ft(function(t,e,n){return t.h===0&&(Xt(e,n,(t=fi(t.g))===0?void 0:t),!0)},bg,Xu),xe=Ft(function(t,e,n){return t.h===0&&(Xt(e,n,Bi(t.g)),!0)},wg,$u),Co=Ft(function(t,e,n){return t.h===0&&(Xt(e,n,(t=Bi(t.g))===0?void 0:t),!0)},wg,$u),YM=Ft(function(t,e,n){return t.h!==0?t=!1:(Xt(e,n,function(i){return Ou(i,(r,s)=>{var a=-(1&r);return Im(r=(r>>>1|s<<31)^a,s>>>1^a)})}(t.g)),t=!0),t},function(t,e,n){if((e=wu(e))!=null&&(hg(e),e!=null))switch(hn(t,n,0),typeof e){case"number":t=t.g,e=(n=e)<0,zc(n=2*Math.abs(n)),n=tt;let i=ht;e&&(n==0?i==0?i=n=4294967295:(i--,n=4294967295):n--),Di(t,tt=n,ht=i);break;case"bigint":t=t.g,e=e<<BigInt(1)^e>>BigInt(63),tt=Number(BigInt.asUintN(32,e)),ht=Number(BigInt.asUintN(32,e>>BigInt(32))),Di(t,tt,ht);break;default:IM(t.g,e)}},FM);class jM{constructor(e,n){var i=Pn;this.g=e,this.h=n,this.m=st,this.o=Ae,this.defaultValue=void 0,this.j=i.jb!=null?Cm:void 0}register(){cl(this)}}function gi(t,e){return new jM(t,e)}function ur(t,e){return(n,i)=>{e:{let s={ma:!0};i&&Object.assign(s,i),n=rg(n,void 0,void 0,s);try{let a=new t,o=a.A;ju(e)(o,n);var r=a;break e}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{sg(n)}r=void 0}return r}}function Qu(t){return e=>Sg(e,t)}function za(t){return function(){return Sg(this,t)}}var KM=[0,vs,Dg,Ue,ne],ZM=[0,wi,[0,Co,[0,Ro,Rr],Co,-1,[0,xe],Co,-1],Ft(Lg,Zu,Ml)],yc,zf=class extends le{constructor(t){super(t)}},Gf=[0,wi,Ft(Lg,function(t,e,n){if(e!=null){if(e instanceof le){let i=e.mb;return void(i?(e=i(e),e!=null&&ka(t,n,_l(e,!0).buffer)):ws(Bc,3))}if(Array.isArray(e))return void ws(Bc,3)}Zu(t,e,n)},Ml)],JM=[0,1,[0,12,Je,10,Ue],[0,7,[0,Je,-1]]],Hf=globalThis.trustedTypes,QM=class{constructor(t){this.g=t}toString(){return this.g+""}};function Vf(t){var e;return yc===void 0&&(yc=function(){var n=null;if(!Hf)return n;try{let i=r=>r;n=Hf.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n}()),t=(e=yc)?e.createScriptURL(t):t,new QM(t)}function vo(t,...e){if(e.length===0)return Vf(t[0]);var n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return Vf(n)}var Ng=[0,Je,xe,Ue,-1,js,xe,-1,Ue,-1],Fg=[0,xe,-1,Ue],eh=class extends le{constructor(t){super(t)}},Og=[0,Ue,ne,Ue,xe,-1,zi(function(t,e,n){return(t.h===0||t.h===2)&&(e=cr(e,0|e[_e],n),t.h==2?Oa(t,TM,e):e.push(Bi(t.g)),!0)},function(t,e,n){if((e=ki(Gr,e,!0))!=null&&e.length){n=Gu(t,n);for(let i=0;i<e.length;i++)Ba(t.g,e[i]);Hu(t,n)}},$u),ne,-1,[0,Ue,-1],xe,Ue,-1,Fg],Bg=[0,3,Ue,-1,2,[0,[2],Je,je,[0,Ug]],[0,xe,Ue,xe,Ue,xe,4,[0,Ue,ne,-1,Ue]],[0,[3,4],ne,-1,je,[0,Je],je,[0,xe,-1]],[0]],kg=[0,ne,-2],Wf=class extends le{constructor(t){super(t)}},zg=[0],ey=class extends le{constructor(t){super(t)}},Gg=[0,Je,Ue,1,Ue,-4],Pn=class extends le{constructor(t){super(t,2)}},Ht={};Ht[336783863]=[0,ne,Ue,-1,Je,[0,[1,2,3,4,5,6,7,8,9],je,zg,je,Og,je,kg,je,Gg,je,Ng,je,[0,ne,-2],je,[0,ne,xe],je,Bg,je,Fg],[0,ne],Ue,[0,[1,3],[2,4],je,[0,js],-1,je,[0,Kt],-1,mt,[0,ne,-1]],ne];var Xf=[0,Ro,-1,nr,-3,Ro,js,wi,Rr,Ro,-1,nr,Rr,nr,-2,wi];function St(t,e){gl(t,3,e)}function Qe(t,e){gl(t,4,e)}var Sn=class extends le{constructor(t){super(t,500)}v(t){return Ae(this,0,7,t)}},fa=[-1,{}],$f=[0,ne,1,fa],qf=[0,ne,Kt,fa];function Hn(t,e){Ma(t,1,Sn,e)}function At(t,e){gl(t,10,e)}function ot(t,e){gl(t,15,e)}var Ln=class extends le{constructor(t){super(t,500)}v(t){return Ae(this,0,1001,t)}},Hg=[-500,mt,[-500,wi,-1,Kt,-3,[-2,Ht,Ue],mt,Gf,Rr,-1,$f,qf,mt,[0,wi,nr],wi,Xf,Rr,Kt,987,Kt],4,mt,[-500,ne,-1,[-1,{}],998,ne],mt,[-500,ne,Kt,-1,[-2,{},Ue],997,Kt,-1],Rr,mt,[-500,ne,Kt,fa,998,Kt],Kt,Rr,$f,qf,mt,[0,wi,-1,fa],Kt,-2,Xf,wi,-1,nr,[0,nr,qM],978,fa,mt,Gf];Ln.prototype.g=za(Hg);var ty=ur(Ln,Hg),ny=class extends le{constructor(t){super(t)}},Vg=class extends le{constructor(t){super(t)}g(){return Oi(this,ny,1)}},Wg=[0,mt,[0,Je,Ct,ne,-1]],wl=ur(Vg,Wg),iy=class extends le{constructor(t){super(t)}},ry=class extends le{constructor(t){super(t)}},Ec=class extends le{constructor(t){super(t)}j(){return st(this,iy,2)}g(){return Oi(this,ry,5)}},Xg=ur(class extends le{constructor(t){super(t)}},[0,Kt,js,Ju,[0,xe,[0,Je,-3],[0,Ct,-3],[0,Je,-1,[0,mt,[0,Je,-2]]],mt,[0,Ct,-1,ne,Ct]],ne,-1,_t,mt,[0,Je,Ct],Kt,_t]),$g=class extends le{constructor(t){super(t)}},xs=ur(class extends le{constructor(t){super(t)}},[0,mt,[0,Ct,-4]]),qg=class extends le{constructor(t){super(t)}},Ga=ur(class extends le{constructor(t){super(t)}},[0,mt,[0,Ct,-4]]),sy=class extends le{constructor(t){super(t)}},ay=[0,Je,-1,Ju,xe],Yg=class extends le{constructor(t){super(t)}};Yg.prototype.g=za([0,Ct,-4,_t]);var oy=class extends le{constructor(t){super(t)}},ly=ur(class extends le{constructor(t){super(t)}},[0,mt,[0,1,Je,ne,Wg],_t]),Yf=class extends le{constructor(t){super(t)}},cy=class extends le{constructor(t){super(t)}g(){var t=Rt(this,1,void 0,jm);return t??Or()}},uy=class extends le{constructor(t){super(t)}},th=[1,2],hy=ur(class extends le{constructor(t){super(t)}},[0,mt,[0,th,je,[0,Ju],je,[0,vs],Je,ne],_t]),nh=class extends le{constructor(t){super(t)}},jg=[0,ne,Je,Ct,Kt,-1],jf=class extends le{constructor(t){super(t)}},dy=[0,Ue,-1],Zo=class extends le{constructor(t){super(t)}g(){return qm(this,eh,2,Dr)}},Dr=[1,2,3,4,5,6],Jo=class extends le{constructor(t){super(t)}g(){return Rt(this,1,void 0,jm)!=null}j(){return Zt(Rt(this,2))!=null}},Tt=class extends le{constructor(t){super(t)}},Kg=[0,vs,ne,[0,Je,_t,-1],[0,Ko,_t]],Nt=[0,Kg,Ue,[0,Dr,je,Gg,je,Og,je,Ng,je,zg,je,kg,je,Bg],xe],fy=Qu(Nt),Rl=class extends le{constructor(t){super(t)}},ih=[0,Nt,Ct,-1,Je],py=gi(502141897,Rl);Ht[502141897]=ih;var my=ur(class extends le{constructor(t){super(t)}},[0,[0,xe,-1,WM,$M],ay]),Zg=class extends le{constructor(t){super(t)}},Jg=class extends le{constructor(t){super(t)}},qc=[0,Nt,Ct,[0,Nt],Ue],gy=gi(508968150,Jg);Ht[508968150]=[0,Nt,ih,qc,Ct,[0,[0,Kg]]],Ht[508968149]=qc;var cs=class extends le{constructor(t){super(t)}j(){return st(this,nh,2)}g(){De(this,2)}},Qg=[0,Nt,jg];Ht[478825465]=Qg;var _y=class extends le{constructor(t){super(t)}},e0=class extends le{constructor(t){super(t)}},rh=class extends le{constructor(t){super(t)}},sh=class extends le{constructor(t){super(t)}},t0=class extends le{constructor(t){super(t)}},Kf=[0,Nt,[0,Nt],Qg,-1],n0=[0,Nt,Ct,Je],ah=[0,Nt,Ct],i0=[0,Nt,n0,ah,Ct],vy=gi(479097054,t0);Ht[479097054]=[0,Nt,i0,Kf],Ht[463370452]=Kf,Ht[464864288]=n0;var xy=gi(462713202,sh);Ht[462713202]=i0,Ht[474472470]=ah;var Sy=class extends le{constructor(t){super(t)}},r0=class extends le{constructor(t){super(t)}},s0=class extends le{constructor(t){super(t)}},a0=class extends le{constructor(t){super(t)}},oh=[0,Nt,Ct,-1,Je],Yc=[0,Nt,Ct,Ue];a0.prototype.g=za([0,Nt,ah,[0,Nt],ih,qc,oh,Yc]);var o0=class extends le{constructor(t){super(t)}},My=gi(456383383,o0);Ht[456383383]=[0,Nt,jg];var l0=class extends le{constructor(t){super(t)}},yy=gi(476348187,l0);Ht[476348187]=[0,Nt,dy];var c0=class extends le{constructor(t){super(t)}},Zf=class extends le{constructor(t){super(t)}},u0=[0,xe,-1],Ey=gi(458105876,class extends le{constructor(t){super(t)}g(){var t=this.A,e=0|t[_e],n=xn(this,e);return t=function(i,r,s,a){var o=Zf;!a&&$s(i)&&(s=0|(r=i.A)[_e]);var l=Fi(r,2);if(i=!1,l==null){if(a)return bf();l=[]}else if(l.constructor===Ni){if(!(2&l.M)||a)return l;l=l.ea()}else Array.isArray(l)?i=!!(2&l[_e]):l=[];if(a){if(!l.length)return bf();i||(i=!0,Ia(l))}else i&&(i=!1,xa(l),l=Km(l));return!i&&32&s&&La(l,32),s=Ut(r,s,2,a=new Ni(l,o,hM,void 0)),i||lr(r,s),a}(this,t,e,n),!n&&Zf&&(t.Fa=!0),t}});Ht[458105876]=[0,u0,VM,[!0,_t,[0,ne,-1,Kt]],[0,js,Ue,xe],Ue];var lh=class extends le{constructor(t){super(t)}},h0=gi(458105758,lh);Ht[458105758]=[0,Nt,ne,u0];var Ay=class extends le{constructor(t){super(t)}},Ty=class extends le{constructor(t){super(t)}},by=class extends le{constructor(t){super(t)}},wy=Qu([0,mt,[0,Co,mt,[0,Ig,-1],nr]]),Ac=class extends le{constructor(t){super(t)}},Jf=[0,Ig,-1,nr],Ry=class extends le{constructor(t){super(t)}},d0=class extends le{constructor(t){super(t)}},jc=[1,2];d0.prototype.g=za([0,jc,je,Jf,je,[0,mt,Jf]]);var f0=class extends le{constructor(t){super(t)}},Cy=gi(443442058,f0);Ht[443442058]=[0,Nt,ne,Je,Ct,Kt,-1,Ue,Ct],Ht[514774813]=oh;var p0=class extends le{constructor(t){super(t)}},Py=gi(516587230,p0);function Kc(t,e){return e=e?e.clone():new nh,t.displayNamesLocale!==void 0?De(e,1,Pi(t.displayNamesLocale)):t.displayNamesLocale===void 0&&De(e,1),t.maxResults!==void 0?di(e,2,t.maxResults):"maxResults"in t&&De(e,2),t.scoreThreshold!==void 0?Ee(e,3,t.scoreThreshold):"scoreThreshold"in t&&De(e,3),t.categoryAllowlist!==void 0?Vo(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&De(e,4),t.categoryDenylist!==void 0?Vo(e,5,t.categoryDenylist):"categoryDenylist"in t&&De(e,5),e}function m0(t){var e=Number(t);return Number.isSafeInteger(e)?e:String(t)}function ch(t,e=-1,n=""){return{categories:t.map(i=>({index:Bn(i,1)??0??-1,score:Dt(i,2)??0,categoryName:Zt(Rt(i,3))??""??"",displayName:Zt(Rt(i,4))??""??""})),headIndex:e,headName:n}}function Ly(t){var e={classifications:Oi(t,oy,1).map(n=>{var i;return ch(((i=st(n,Vg,4))==null?void 0:i.g())??[],Bn(n,2)??0,Zt(Rt(n,3))??"")})};return function(n){return n==null?n:typeof n=="bigint"?(kc(n)?n=Number(n):(n=Pr(64,n),n=kc(n)?Number(n):String(n)),n):Ws(n)?typeof n=="number"?fl(n):zo(n):void 0}(Rt(t,2,void 0,Go))!=null&&(e.timestampMs=m0(Rt(t,2,void 0,Go)??$m)),e}function g0(t){var a,o;var e=wr(t,3,qn,br()),n=wr(t,2,Gr,br()),i=wr(t,1,Zt,br()),r=wr(t,9,Zt,br()),s={categories:[],keypoints:[]};for(let l=0;l<e.length;l++)s.categories.push({score:e[l],index:n[l]??-1,categoryName:i[l]??"",displayName:r[l]??""});if((e=(a=st(t,Ec,4))==null?void 0:a.j())&&(s.boundingBox={originX:Bn(e,1,Yi)??0,originY:Bn(e,2,Yi)??0,width:Bn(e,3,Yi)??0,height:Bn(e,4,Yi)??0,angle:0}),(o=st(t,Ec,4))==null?void 0:o.g().length)for(let l of st(t,Ec,4).g())s.keypoints.push({x:Rt(l,1,Yi,qn)??0,y:Rt(l,2,Yi,qn)??0,score:Rt(l,4,Yi,qn)??0,label:Zt(Rt(l,3,Yi))??""});return s}function Cl(t){var e=[];for(let n of Oi(t,qg,1))e.push({x:Dt(n,1)??0,y:Dt(n,2)??0,z:Dt(n,3)??0,visibility:Dt(n,4)??0});return e}function pa(t){var e=[];for(let n of Oi(t,$g,1))e.push({x:Dt(n,1)??0,y:Dt(n,2)??0,z:Dt(n,3)??0,visibility:Dt(n,4)??0});return e}function Qf(t){return Array.from(t,e=>e>127?e-256:e)}function ep(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);var n=0,i=0,r=0;for(let s=0;s<t.length;s++)n+=t[s]*e[s],i+=t[s]*t[s],r+=e[s]*e[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}Ht[516587230]=[0,Nt,oh,Yc,Ct],Ht[518928384]=Yc;var xo,Iy=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function _0(t){if(t)return!0;if(xo===void 0)try{await WebAssembly.instantiate(Iy),xo=!0}catch{xo=!1}return xo}async function So(t,e,n){return{wasmLoaderPath:`${e}/${t}_${n=`wasm${n?"_module":""}${await _0(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var ds=class{};function tp(t){return De(new Zc,1,Ii(t))}ds.forVisionTasks=function(t,e=!1){return So("vision",t??vo``,e)},ds.forTextTasks=function(t,e=!1){return So("text",t??vo``,e)},ds.forGenAiTasks=function(t,e=!1){return So("genai",t??vo``,e)},ds.forAudioTasks=function(t,e=!1){return So("audio",t??vo``,e)},ds.isSimdSupported=function(t=!1){return _0(t)};var Zc=class extends le{constructor(t){super(t)}},Dy=class extends le{constructor(t){super(t)}},np=[0,xe,2,Ko,-2,_t,mt,[0,xe,_t]],Uy=class extends le{constructor(t){super(t)}},Ny=class extends le{constructor(t){super(t)}};function Jc(t,e){return De(t,1,Ii(e))}function Qc(t,e){return De(t,2,Ii(e))}var eu=class extends le{constructor(t){super(t)}},Qo=[3,4,5,6,7],Fy=class extends le{constructor(t){super(t)}},v0=class extends le{constructor(t){super(t)}};v0.prototype.g=za([0,[0,xe,ne,-3,xe],[0,Qo,xe,-1,je,[0,xe,ne,Ko],je,np,je,[0,1,np],je,[0,xe],je,[0,xe,ne,Ko]]]);var Oy=class{constructor(){this.g=typeof AbortController<"u"}async send(t,e,n){var i=this.g?new AbortController:void 0,r=i&&t.la>0?setTimeout(()=>{i.abort()},t.la):void 0;try{let s=await fetch(t.url,{method:t.bb,headers:{...t.ab},...t.body&&{body:t.body},...t.withCredentials&&{credentials:"include"},signal:t.la&&i?i.signal:null});s.status===200?e==null||e(await s.text()):n==null||n(s.status)}catch(s){(s==null?void 0:s.name)==="AbortError"?n==null||n(408):n==null||n(400)}finally{clearTimeout(r)}}},By=class extends le{constructor(t){super(t,37)}},ip=[-4,{},JM,xe,ZM],rp=[0,ne,xe,1,ne,-1,xe,1,xe,1,_t],sp=[0,xe,ne,-2],ap=[0,ne,xe],op=[0,ne,xe],lp=[0,Ue,-3],cp=[0,xe,ne,-1,_t,Je,-1,ne,-5,mt,[0,ne,-4],-1,Ue,[0,Ue,-3],xe],ky=class extends le{constructor(t){super(t,19)}},zy=Qu([-19,{},[0,xe,1,[0,ne,-6,_t,Je,ne,-1,_t],1,[0,ne,1,ne,-5],ne,-1,[0,xe,ne,-8],[0,ne,-3],[0,ne,xe,ne,-2],[0,ne,-1,xe,ne,-1,xe,ne,-1,[0,mt,[0,ne,-1],Ue,ne,-5],[0,xe,Ue,Je,-2]],_t,[0,ne,-3,_t,Je,ne,-1],[0,xe,ne,-1],[0,ne,-9],[0,ne,-6,xe,ne,1,ne,Ue,xe,-1,Ue,ne,-2,xe,ne,xe,ne,Je,-1],1,[0,xe],1,[0,ne,-4],1,rp,[0,[1,2,3,4,5,6],je,rp,je,ap,je,op,je,[0,xe],je,cp,je,sp],ap,op,cp,[0,[0,xe,ne,-1,_t,Je,-1,ne,-4,mt,[0,ne,-4],-1,1,lp],[0,xe,ne,-1,_t,Je,-1,ne,-4,lp]],sp,[0,ne,[0,Je,-3,xe],xe,-2,[0,Je,-1],Ue],4,[0,ne,xe,ne,-1,_t,xe,ne,-1,xe,Je,-1]],xe,mt,[-37,{},aa,ne,mt,[0,ne,-1],vs,1,vs,[0,Kt,-1,kf,XM,-1],ne,[0,Je,ne,-1],Ue,Je,_t,ne,-1,YM,KM,aa,vs,xe,kf,_t,-1,[0,xe,-1],ne,Ue,ne,js,ne,-1,Bf,1,Bf,ip,Ue,[0,xe,[0,Ct,Je,-2],[0,Ct]],[0,xe,_t]],aa,Dg,ne,-1,aa,xe,-1,[0,Ue,-1,xe,Ue],[0,_t,-1,ne],[0,aa,Ue,_t],_t,1,Ug,1,ip]),Gy=class{constructor(t){this.h=[],this.m=new Oy,this.j=t??"",this.g=setInterval(()=>{this.flush()},6e4)}close(){this.g!==void 0&&(clearInterval(this.g),this.g=void 0),this.flush()}flush(t,e){if(this.error)e==null||e("net-send-failed");else if(this.h.length===0)t==null||t();else{var n=this.h;this.h=[],n=function(i){var r=new ky;return Vc(r=De(r,2,Ii(1786)),3,i)}(n),n=zy(n),this.m.send({url:"https://odml.pa.googleapis.com/v1/log",bb:"POST",la:1e4,body:n,hb:2,ab:{"Content-Type":"application/x-protobuf","x-goog-api-key":this.j},withCredentials:!1},()=>{t==null||t()},i=>{this.error=Error(`Logging failed with HTTP error: ${i}`),this.h=[],this.g!==void 0&&(clearInterval(this.g),this.g=void 0),e==null||e("net-send-failed",i)})}}};class up{constructor(){this.aa=this.U=this.X=this.R=this.V=this.T=this.P=0}}function tu(t,e){var n=new v0;n=Ae(n,0,1,t.B),n=Ae(n,0,2,e),e=De(e=new By,6,ul(n=n.g(),!1)),(t=t.l).error||t.h.push(e)}function hp(t,e){var n={P:e.P-t.j.P,T:e.T-t.j.T,V:e.V-t.j.V,R:e.R-t.j.R,X:e.X-t.j.X,U:e.U,aa:e.aa},i=Qc(Jc(new eu,t.C),1);n=x0(t,n),tu(t,i=ui(i,4,Qo,n)),t.j=e}function x0(t,e){var n=new Dy;return t=bo(t=Sc(t=De(n,1,Ii(t.D)),7,e.R),5,e.U),t=bo(t,6,e.aa),e.V>0&&bo(t,4,e.X/e.V),e.P!==0&&(n=Sc(n=tp(3),2,e.P),Ma(t,8,Zc,n)),e.T!==0&&(e=Sc(n=tp(4),2,e.T),Ma(t,8,Zc,e)),t}var Hy=class{constructor(t,e,n){this.u=performance.now(),this.m=performance.now(),this.h=new Map,this.o=0,this.g=new up,this.j=new up,this.l=new Gy(n),this.C=function(i){switch(i){case"AudioClassifier":return 4;case"AudioEmbedder":return 5;case"TextClassifier":return 6;case"TextEmbedder":return 7;case"GestureRecognizer":return 8;case"HandDetector":return 9;case"HandLandmarker":return 10;case"ImageClassifier":return 11;case"ImageEmbedder":return 12;case"ImageSegmenter":return 13;case"ObjectDetector":return 14;case"FaceDetector":return 15;case"FaceLandmarker":return 16;case"InteractiveSegmenter":case"InteractiveSegmenterLegacy":return 18;case"HolisticLandmarker":return 20;case"LlmInference":return 21;case"LanguageDetector":return 22;case"PoseLandmarker":return 23;default:return 0}}(t),this.D=function(i){switch(i){case"IMAGE":return 11;case"VIDEO":return 12;case"LIVE_STREAM":return 13;case"AUDIO_CLIPS":return 14;case"AUDIO_STREAM":return 15;default:return 10}}(e),t=new Fy,typeof window>"u"?e=0:(e=navigator.userAgent,e=/Android/i.test(e)?1:/iPhone|iPad|iPod/i.test(e)?2:/Windows/i.test(e)?5:/Macintosh/i.test(e)?4:/Linux/i.test(e)?3:0),t=De(t,1,Ii(e)),t=De(t,2,Pi("")),t=De(t,3,Pi("")),t=De(t,4,Pi("1.0.1")),t=De(t,5,Pi("")),this.B=De(t,6,Ii(4))}ya(){var t=new Ny;t=bo(t=De(t,1,Ii(this.D)),3,performance.now()-this.u),tu(this,t=ui(Qc(Jc(new eu,this.C),0),3,Qo,t)),this.m=performance.now()}za(t){var e=this.h.get(t);if(e!==void 0&&(this.h.delete(t),t=performance.now()-e,++this.g.V,this.g.X+=t,this.g.U=Math.max(this.g.U,t),this.o=Math.max(this.o,t),performance.now()>this.m+3e4)){for(let[n,i]of this.h.entries())t=n,i<e&&(this.g.R++,this.h.delete(t));e={...this.g,aa:performance.now()-this.m},this.g.U=0,this.m=performance.now(),hp(this,e)}}xa(){var t={...this.g,R:this.g.R+this.h.size,U:this.o,aa:performance.now()-this.u};hp(this,t);var e=new Uy;e=Ae(e,0,2,t=x0(this,t)),tu(this,e=ui(t=Qc(Jc(new eu,this.C),2),5,Qo,e))}close(){var t=this.l;typeof t.close=="function"?t.close():t.flush()}};function uh(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")}(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function dp(t){if(typeof importScripts!="function"){let e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise((n,i)=>{e.addEventListener("load",()=>{n()},!1),e.addEventListener("error",r=>{i(r)},!1),document.body.appendChild(e)})}try{importScripts(t.toString())}catch(e){if(!(e instanceof TypeError))throw e;{let n=self.import;n?await n(t.toString()):await import(t.toString())}}}function hh(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function Me(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function S0(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);var[i,r]=hh(e);return!t.j||i===t.i.canvas.width&&r===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=r),[i,r]}function fp(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");var i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=t.i.stringToNewUTF8(e[r]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(let r of i)t.i._free(r);t.i._free(e)}function ii(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function ji(t,e,n){var i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(r,s,a)=>{s?(n(i,a),i=[]):i.push(r)}}var M0=class{constructor(t,e){this.j=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:uh()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){var e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){var n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Me(this,i||"input_audio",s=>{Me(this,r=r||"audio_header",a=>{this.i._configureAudio(s,a,t,e??0,n)})})}setAutoResizeCanvas(t){this.j=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ja(t){ii(this,"__graph_config__",e=>{t(e)}),Me(this,"__graph_config__",e=>{this.i._getGraphConfig(e,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,r){var s=4*t.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(t,this.g/4),Me(this,i,a=>{this.i._addAudioToInputStream(this.g,e,n,a,r)})}addGpuBufferToStream(t,e,n){Me(this,e,i=>{var[r,s]=S0(this,t,i);this.i._addBoundTextureToStream(i,r,s,n)})}addBoolToStream(t,e,n){Me(this,e,i=>{this.i._addBoolToInputStream(t,i,n)})}addDoubleToStream(t,e,n){Me(this,e,i=>{this.i._addDoubleToInputStream(t,i,n)})}addFloatToStream(t,e,n){Me(this,e,i=>{this.i._addFloatToInputStream(t,i,n)})}addIntToStream(t,e,n){Me(this,e,i=>{this.i._addIntToInputStream(t,i,n)})}addUintToStream(t,e,n){Me(this,e,i=>{this.i._addUintToInputStream(t,i,n)})}addStringToStream(t,e,n){Me(this,e,i=>{Me(this,t,r=>{this.i._addStringToInputStream(r,i,n)})})}addStringRecordToStream(t,e,n){Me(this,e,i=>{fp(this,Object.keys(t),r=>{fp(this,Object.values(t),s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(t).length,i,n)})})})}addProtoToStream(t,e,n,i){Me(this,n,r=>{Me(this,e,s=>{var a=this.i._malloc(t.length);this.i.HEAPU8.set(t,a),this.i._addProtoToInputStream(a,t.length,s,r,i),this.i._free(a)})})}addEmptyPacketToStream(t,e){Me(this,t,n=>{this.i._addEmptyPacketToInputStream(n,e)})}addBoolVectorToStream(t,e,n){Me(this,e,i=>{var r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(let s of t)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)})}addDoubleVectorToStream(t,e,n){Me(this,e,i=>{var r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(let s of t)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)})}addFloatVectorToStream(t,e,n){Me(this,e,i=>{var r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(let s of t)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)})}addIntVectorToStream(t,e,n){Me(this,e,i=>{var r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(let s of t)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)})}addUintVectorToStream(t,e,n){Me(this,e,i=>{var r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(let s of t)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)})}addStringVectorToStream(t,e,n){Me(this,e,i=>{var r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(let s of t)Me(this,s,a=>{this.i._addStringVectorEntry(r,a)});this.i._addStringVectorToInputStream(r,i,n)})}addBoolToInputSidePacket(t,e){Me(this,e,n=>{this.i._addBoolToInputSidePacket(t,n)})}addDoubleToInputSidePacket(t,e){Me(this,e,n=>{this.i._addDoubleToInputSidePacket(t,n)})}addFloatToInputSidePacket(t,e){Me(this,e,n=>{this.i._addFloatToInputSidePacket(t,n)})}addIntToInputSidePacket(t,e){Me(this,e,n=>{this.i._addIntToInputSidePacket(t,n)})}addUintToInputSidePacket(t,e){Me(this,e,n=>{this.i._addUintToInputSidePacket(t,n)})}addStringToInputSidePacket(t,e){Me(this,e,n=>{Me(this,t,i=>{this.i._addStringToInputSidePacket(i,n)})})}addProtoToInputSidePacket(t,e,n){Me(this,n,i=>{Me(this,e,r=>{var s=this.i._malloc(t.length);this.i.HEAPU8.set(t,s),this.i._addProtoToInputSidePacket(s,t.length,r,i),this.i._free(s)})})}addBoolVectorToInputSidePacket(t,e){Me(this,e,n=>{var i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(let r of t)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)})}addDoubleVectorToInputSidePacket(t,e){Me(this,e,n=>{var i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(let r of t)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)})}addFloatVectorToInputSidePacket(t,e){Me(this,e,n=>{var i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(let r of t)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)})}addIntVectorToInputSidePacket(t,e){Me(this,e,n=>{var i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(let r of t)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)})}addUintVectorToInputSidePacket(t,e){Me(this,e,n=>{var i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(let r of t)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)})}addStringVectorToInputSidePacket(t,e){Me(this,e,n=>{var i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(let r of t)Me(this,r,s=>{this.i._addStringVectorEntry(i,s)});this.i._addStringVectorToInputSidePacket(i,n)})}attachBoolListener(t,e){ii(this,t,e),Me(this,t,n=>{this.i._attachBoolListener(n)})}attachBoolVectorListener(t,e){ji(this,t,e),Me(this,t,n=>{this.i._attachBoolVectorListener(n)})}attachIntListener(t,e){ii(this,t,e),Me(this,t,n=>{this.i._attachIntListener(n)})}attachIntVectorListener(t,e){ji(this,t,e),Me(this,t,n=>{this.i._attachIntVectorListener(n)})}attachUintListener(t,e){ii(this,t,e),Me(this,t,n=>{this.i._attachUintListener(n)})}attachUintVectorListener(t,e){ji(this,t,e),Me(this,t,n=>{this.i._attachUintVectorListener(n)})}attachDoubleListener(t,e){ii(this,t,e),Me(this,t,n=>{this.i._attachDoubleListener(n)})}attachDoubleVectorListener(t,e){ji(this,t,e),Me(this,t,n=>{this.i._attachDoubleVectorListener(n)})}attachFloatListener(t,e){ii(this,t,e),Me(this,t,n=>{this.i._attachFloatListener(n)})}attachFloatVectorListener(t,e){ji(this,t,e),Me(this,t,n=>{this.i._attachFloatVectorListener(n)})}attachStringListener(t,e){ii(this,t,e),Me(this,t,n=>{this.i._attachStringListener(n)})}attachStringVectorListener(t,e){ji(this,t,e),Me(this,t,n=>{this.i._attachStringVectorListener(n)})}attachProtoListener(t,e,n){ii(this,t,e),Me(this,t,i=>{this.i._attachProtoListener(i,n||!1)})}attachProtoVectorListener(t,e,n){ji(this,t,e),Me(this,t,i=>{this.i._attachProtoVectorListener(i,n||!1)})}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),ii(this,t,(i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)}),Me(this,t,i=>{this.i._attachAudioListener(i,n||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}};function y0(t){return class extends t{get pa(){return this.i}Sa(){if(typeof this.pa._mediapipeLoggerGetEncodedApiKey=="function"){let e=this.pa._mediapipeLoggerGetEncodedApiKey();return this.pa._decodeBase64(e)}}}}function E0(t){return class extends t{Za(){this.i._registerModelResourcesGraphService()}}}var Vy=y0(E0(M0)),Wy=class extends Vy{};async function Xy(t,e,n,i){return t=await(async(r,s,a,o,l)=>{if(s&&await dp(s),!self.ModuleFactory||a&&(await dp(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((s=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new r(l,o)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),function(r,s){s=s.runningMode??"";var a=r.g.Sa();r.m=new Hy(r.C(),s,a)}(t,i),await t.v(i),t}async function Po(t,e,n,i){return Xy(t,e,n,i)}function Tc(t,e){var n=st(t.baseOptions,Jo,1)||new Jo;typeof e=="string"?(De(n,2,Pi(e)),De(n,1)):e instanceof Uint8Array&&(De(n,1,ul(e,!1)),De(n,2)),Ae(t.baseOptions,0,1,n)}function pp(t){try{let e=t.K.length;if(e===1)throw Error(t.K[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.K.map(n=>n.message).join(", "))}finally{t.K=[]}}function pe(t,e){t.I=Math.max(t.I,e)}function Pl(t,e){t.D=new Sn,Rn(t.D,2,"PassThroughCalculator"),St(t.D,"free_memory"),Qe(t.D,"free_memory_unused_out"),At(e,"free_memory"),Hn(e,t.D)}function Ds(t,e){St(t.D,e),Qe(t.D,e+"_unused_out")}function Ll(t){t.g.addBoolToStream(!0,"free_memory",t.I)}var el=class{constructor(t){this.g=t,this.K=[],this.I=0,this.g.setAutoRenderToScreen(!1)}j(t,e=!0){var n,i,r,s,a,o;if(e){let l=t.baseOptions||{};if((n=t.baseOptions)!=null&&n.modelAssetBuffer&&((i=t.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((r=st(this.baseOptions,Jo,1))!=null&&r.g()||(s=st(this.baseOptions,Jo,1))!=null&&s.j()||(a=t.baseOptions)!=null&&a.modelAssetBuffer||(o=t.baseOptions)!=null&&o.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(c,u){var d=st(c.baseOptions,Zo,3);if(!d){var h=d=new Zo,p=new Wf;ui(h,4,Dr,p)}"delegate"in u&&(u.delegate==="GPU"?(u=d,h=new eh,ui(u,2,Dr,h)):(u=d,h=new Wf,ui(u,4,Dr,h))),Ae(c.baseOptions,0,3,d)}(this,l),l.modelAssetPath)return fetch(l.modelAssetPath.toString()).then(c=>{if(c.ok)return c.arrayBuffer();throw Error(`Failed to fetch model: ${l.modelAssetPath} (${c.status})`)}).then(c=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(c),!0,!1,!1),Tc(this,"/model.dat"),this.o(),this.L()});if(l.modelAssetBuffer instanceof Uint8Array)Tc(this,l.modelAssetBuffer);else if(l.modelAssetBuffer)return async function(c){for(var u=[],d=0;;){let{done:h,value:p}=await c.read();if(h)break;u.push(p),d+=p.length}if(u.length===0)return new Uint8Array(0);if(u.length===1)return u[0];c=new Uint8Array(d),d=0;for(let h of u)c.set(h,d),d+=h.length;return c}(l.modelAssetBuffer).then(c=>{Tc(this,c),this.o(),this.L()})}return this.o(),this.L(),Promise.resolve()}L(){}ja(){var t;if(this.g.ja(e=>{t=ty(e)}),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){var n;this.g.attachErrorListener((i,r)=>{this.K.push(Error(r))}),this.g.Za(),this.g.setGraph(t,e),(n=this.m)==null||n.ya(),this.D=void 0,pp(this)}finishProcessing(t){this.g.finishProcessing(),pp(this),this.m&&t!==void 0&&this.m.za(t)}close(){var t,e;this.D=void 0,(t=this.m)==null||t.xa(),(e=this.m)==null||e.close(),this.g.closeGraph()}};function vn(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}el.prototype.close=el.prototype.close;class $y{constructor(e,n,i,r){this.g=e,this.h=n,this.m=i,this.j=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.j)}}function mp(t,e,n){var i=t.g;if(n=vn(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function gp(t,e){var n=t.g,i=vn(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);var r=vn(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.F),n.vertexAttribPointer(t.F,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);var s=vn(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.K),n.vertexAttribPointer(t.K,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new $y(n,i,r,s)}function dh(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function fh(t,e,n,i){return dh(t,e),t.h||(t.m(),t.I()),n?(t.l||(t.l=gp(t,!0)),n=t.l):(t.D||(t.D=gp(t,!1)),n=t.D),e.useProgram(t.h),n.bind(),t.j(),t=i(),n.g.bindVertexArray(null),t}function Us(t,e,n){return dh(t,e),t=vn(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function A0(t,e,n){dh(t,e),t.C||(t.C=vn(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.C),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function qy(t){var e;(e=t.g)==null||e.bindFramebuffer(t.g.FRAMEBUFFER,null)}var Ks=class{B(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){var t=this.g;if(this.h=vn(t.createProgram(),"Failed to create WebGL program"),this.da=mp(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.Z=mp(this,this.B(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.F=t.getAttribLocation(this.h,"aVertex"),this.K=t.getAttribLocation(this.h,"aTex")}I(){}j(){}close(){if(this.h){let t=this.g;t.deleteProgram(this.h),t.deleteShader(this.da),t.deleteShader(this.Z)}this.C&&this.g.deleteFramebuffer(this.C),this.D&&this.D.close(),this.l&&this.l.close()}},Yy=class extends Ks{B(){return`
  precision mediump float;
  uniform sampler2D backgroundTexture;
  uniform sampler2D maskTexture;
  uniform sampler2D colorMappingTexture;
  varying vec2 vTex;
  void main() {
    vec4 backgroundColor = texture2D(backgroundTexture, vTex);
    float category = texture2D(maskTexture, vTex).r;
    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));
    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);
  }
 `}I(){var t=this.g;t.activeTexture(t.TEXTURE1),this.u=Us(this,t,t.LINEAR),t.activeTexture(t.TEXTURE2),this.o=Us(this,t,t.NEAREST)}m(){super.m();var t=this.g;this.O=vn(t.getUniformLocation(this.h,"backgroundTexture"),"Uniform location"),this.Y=vn(t.getUniformLocation(this.h,"colorMappingTexture"),"Uniform location"),this.L=vn(t.getUniformLocation(this.h,"maskTexture"),"Uniform location")}j(){super.j();var t=this.g;t.uniform1i(this.L,0),t.uniform1i(this.O,1),t.uniform1i(this.Y,2)}close(){this.u&&this.g.deleteTexture(this.u),this.o&&this.g.deleteTexture(this.o),super.close()}},jy=class extends Ks{B(){return`
  precision mediump float;
  uniform sampler2D maskTexture;
  uniform sampler2D defaultTexture;
  uniform sampler2D overlayTexture;
  varying vec2 vTex;
  void main() {
    float confidence = texture2D(maskTexture, vTex).r;
    vec4 defaultColor = texture2D(defaultTexture, vTex);
    vec4 overlayColor = texture2D(overlayTexture, vTex);
    // Apply the alpha from the overlay and merge in the default color
    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);
    gl_FragColor = mix(defaultColor, overlayColor, confidence);
  }
 `}I(){var t=this.g;t.activeTexture(t.TEXTURE1),this.o=Us(this,t),t.activeTexture(t.TEXTURE2),this.u=Us(this,t)}m(){super.m();var t=this.g;this.L=vn(t.getUniformLocation(this.h,"defaultTexture"),"Uniform location"),this.O=vn(t.getUniformLocation(this.h,"overlayTexture"),"Uniform location"),this.J=vn(t.getUniformLocation(this.h,"maskTexture"),"Uniform location")}j(){super.j();var t=this.g;t.uniform1i(this.J,0),t.uniform1i(this.L,1),t.uniform1i(this.O,2)}close(){this.o&&this.g.deleteTexture(this.o),this.u&&this.g.deleteTexture(this.u),super.close()}};function Ri(t,e){switch(e){case 0:return t.g.find(n=>n instanceof Uint8Array);case 1:return t.g.find(n=>n instanceof Float32Array);case 2:return t.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function nu(t){var e=Ri(t,1);if(!e){if(e=Ri(t,0))e=new Float32Array(e).map(i=>i/255);else{e=new Float32Array(t.width*t.height);let i=Ns(t);var n=ph(t);if(A0(n,i,T0(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=n[s]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function T0(t){var e=Ri(t,2);if(!e){let n=Ns(t);e=w0(t);let i=nu(t),r=b0(t);n.texImage2D(n.TEXTURE_2D,0,r,t.width,t.height,0,n.RED,n.FLOAT,i),iu(t)}return e}function Ns(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=vn(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function b0(t){if(t=Ns(t),!Mo)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))Mo=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Mo=t.R16F}return Mo}function ph(t){return t.j||(t.j=new Ks),t.j}function w0(t){var e=Ns(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);var n=Ri(t,2);return n||(n=Us(ph(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.o=!0),e.bindTexture(e.TEXTURE_2D,n),n}function iu(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var Mo,kt=class{constructor(t,e,n,i,r,s,a){this.g=t,this.m=e,this.o=n,this.canvas=i,this.j=r,this.width=s,this.height=a,this.o&&--_p===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ua(){return!!Ri(this,0)}ua(){return!!Ri(this,1)}W(){return!!Ri(this,2)}ta(){return(e=Ri(t=this,0))||(e=nu(t),e=new Uint8Array(e.map(n=>Math.round(255*n))),t.g.push(e)),e;var t,e}sa(){return nu(this)}S(){return T0(this)}clone(){var t=[];for(let e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{let i=Ns(this),r=ph(this);i.activeTexture(i.TEXTURE1),n=Us(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);let s=b0(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),A0(r,i,n),fh(r,i,!1,()=>{w0(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),iu(this)}),qy(r),iu(this)}}t.push(n)}return new kt(t,this.m,this.W(),this.canvas,this.j,this.width,this.height)}close(){this.o&&Ns(this).deleteTexture(Ri(this,2)),_p=-1}};kt.prototype.close=kt.prototype.close,kt.prototype.clone=kt.prototype.clone,kt.prototype.getAsWebGLTexture=kt.prototype.S,kt.prototype.getAsFloat32Array=kt.prototype.sa,kt.prototype.getAsUint8Array=kt.prototype.ta,kt.prototype.hasWebGLTexture=kt.prototype.W,kt.prototype.hasFloat32Array=kt.prototype.ua,kt.prototype.hasUint8Array=kt.prototype.Ua;var _p=250,Ky={color:"white",lineWidth:4,radius:6};function bc(t){return{...Ky,fillColor:(t=t||{}).color,...t}}function Ai(t,e){return t instanceof Function?t(e):t}function vp(t,e,n){return Math.max(Math.min(e,n),Math.min(Math.max(e,n),t))}function oa(t){if(!t.j)throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");return t.j}function Ea(t){if(!t.o)throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");return t.o}function xp(t,e,n){if(e.W())n(e.S());else{let i=e.ua()?e.sa():e.ta();t.m=t.m??new Ks;let r=Ea(t);n((t=new kt([i],e.m,!1,r.canvas,t.m,e.width,e.height)).S()),t.close()}}function Sp(t,e,n,i){var r=function(o){return o.g||(o.g=new Yy),o.g}(t),s=Ea(t),a=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n;fh(r,s,!0,()=>{(function(l,c,u,d){var h=l.g;if(h.activeTexture(h.TEXTURE0),h.bindTexture(h.TEXTURE_2D,c),h.activeTexture(h.TEXTURE1),h.bindTexture(h.TEXTURE_2D,l.u),h.texImage2D(h.TEXTURE_2D,0,h.RGBA,h.RGBA,h.UNSIGNED_BYTE,u),l.J&&function(p,g){if(p!==g)return!1;p=p.entries(),g=g.entries();for(let[_,m]of p){p=_;let f=m,E=g.next();if(E.done)return!1;let[M,A]=E.value;if(p!==M||f[0]!==A[0]||f[1]!==A[1]||f[2]!==A[2]||f[3]!==A[3])return!1}return!!g.next().done}(l.J,d))h.activeTexture(h.TEXTURE2),h.bindTexture(h.TEXTURE_2D,l.o);else{l.J=d;let p=Array(1024).fill(0);d.forEach((g,_)=>{if(g.length!==4)throw Error(`Color at index ${_} is not a four-channel value.`);p[4*_]=g[0],p[4*_+1]=g[1],p[4*_+2]=g[2],p[4*_+3]=g[3]}),h.activeTexture(h.TEXTURE2),h.bindTexture(h.TEXTURE_2D,l.o),h.texImage2D(h.TEXTURE_2D,0,h.RGBA,256,1,0,h.RGBA,h.UNSIGNED_BYTE,new Uint8Array(p))}})(r,e,a,i),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_FAN,0,4);var o=r.g;o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE1),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,null)})}function Mp(t,e,n,i){var r=Ea(t),s=function(l){return l.h||(l.h=new jy),l.h}(t),a=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n,o=Array.isArray(i)?new ImageData(new Uint8ClampedArray(i),1,1):i;fh(s,r,!0,()=>{var l=s.g;l.activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,e),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,s.o),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,a),l.activeTexture(l.TEXTURE2),l.bindTexture(l.TEXTURE_2D,s.u),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,o),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4),r.bindTexture(r.TEXTURE_2D,null),(l=s.g).activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,null),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,null),l.activeTexture(l.TEXTURE2),l.bindTexture(l.TEXTURE_2D,null)})}var sn=class{constructor(t,e){typeof CanvasRenderingContext2D<"u"&&t instanceof CanvasRenderingContext2D||t instanceof OffscreenCanvasRenderingContext2D?(this.j=t,this.o=e):this.o=t}Ma(t,e){if(t){var n=oa(this);e=bc(e),n.save();var i=n.canvas,r=0;for(let s of t)n.fillStyle=Ai(e.fillColor,{index:r,from:s}),n.strokeStyle=Ai(e.color,{index:r,from:s}),n.lineWidth=Ai(e.lineWidth,{index:r,from:s}),(t=new Path2D).arc(s.x*i.width,s.y*i.height,Ai(e.radius,{index:r,from:s}),0,2*Math.PI),n.fill(t),n.stroke(t),++r;n.restore()}}La(t,e,n){if(t&&e){var i=oa(this);n=bc(n),i.save();var r=i.canvas,s=0;for(let a of e){i.beginPath(),e=t[a.start];let o=t[a.end];e&&o&&(i.strokeStyle=Ai(n.color,{index:s,from:e,to:o}),i.lineWidth=Ai(n.lineWidth,{index:s,from:e,to:o}),i.moveTo(e.x*r.width,e.y*r.height),i.lineTo(o.x*r.width,o.y*r.height)),++s,i.stroke()}i.restore()}}Ia(t,e){var n=oa(this);e=bc(e),n.save(),n.beginPath(),n.lineWidth=Ai(e.lineWidth,{}),n.strokeStyle=Ai(e.color,{}),n.fillStyle=Ai(e.fillColor,{}),n.moveTo(t.originX,t.originY),n.lineTo(t.originX+t.width,t.originY),n.lineTo(t.originX+t.width,t.originY+t.height),n.lineTo(t.originX,t.originY+t.height),n.lineTo(t.originX,t.originY),n.stroke(),n.fill(),n.restore()}Ja(t,e,n=[0,0,0,255]){this.j?function(i,r,s,a){var o=Ea(i);xp(i,r,l=>{Sp(i,l,s,a),(l=oa(i)).drawImage(o.canvas,0,0,l.canvas.width,l.canvas.height)})}(this,t,n,e):Sp(this,t.S(),n,e)}Ka(t,e,n){this.j?function(i,r,s,a){var o=Ea(i);xp(i,r,l=>{Mp(i,l,s,a),(l=oa(i)).drawImage(o.canvas,0,0,l.canvas.width,l.canvas.height)})}(this,t,e,n):Mp(this,t.S(),e,n)}close(){var t,e,n;(t=this.g)==null||t.close(),this.g=void 0,(e=this.h)==null||e.close(),this.h=void 0,(n=this.m)==null||n.close(),this.m=void 0}};sn.prototype.close=sn.prototype.close,sn.prototype.drawConfidenceMask=sn.prototype.Ka,sn.prototype.drawCategoryMask=sn.prototype.Ja,sn.prototype.drawBoundingBox=sn.prototype.Ia,sn.prototype.drawConnectors=sn.prototype.La,sn.prototype.drawLandmarks=sn.prototype.Ma,sn.lerp=function(t,e,n,i,r){return vp(i*(1-(t-e)/(n-e))+r*(1-(n-t)/(n-e)),i,r)},sn.clamp=vp;function Zn(...t){return t.map(([e,n])=>({start:e,end:n}))}var yp,Zy=E0((yp=y0(M0),class extends yp{get oa(){return this.i}Da(t,e,n){Me(this,e,i=>{var[r,s]=S0(this,t,i);this.oa._addBoundTextureAsImageToStream(i,r,s,n)})}ga(t,e){ii(this,t,e),Me(this,t,n=>{this.oa._attachImageListener(n)})}ha(t,e){ji(this,t,e),Me(this,t,n=>{this.oa._attachImageVectorListener(n)})}})),Jn=class extends Zy{};async function nt(t,e,n){return Po(t,n.canvas??(uh()?void 0:document.createElement("canvas")),e,n)}function R0(t,e,n,i){var a;if(t.m&&i!==void 0)if((a=st(t.baseOptions,Zo,3))!=null&&a.g()){var r=t.m;++r.g.T,r.h.set(i,performance.now())}else++(r=t.m).g.P,r.h.set(i,performance.now());if(t.qa){if(r=new Yg,n==null?void 0:n.regionOfInterest){if(!t.Ca)throw Error("This task doesn't support region-of-interest.");var s=n.regionOfInterest;if(s.left>=s.right||s.top>=s.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(s.left<0||s.top<0||s.right>1||s.bottom>1)throw Error("Expected RectF values to be in [0,1].");Ee(r,1,(s.left+s.right)/2),Ee(r,2,(s.top+s.bottom)/2),Ee(r,4,s.right-s.left),Ee(r,3,s.bottom-s.top)}else Ee(r,1,.5),Ee(r,2,.5),Ee(r,4,1),Ee(r,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Ee(r,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){let[o,l]=hh(e);n=Dt(r,3)*l/o,s=Dt(r,4)*o/l,Ee(r,4,n),Ee(r,3,s)}}t.g.addProtoToStream(r.g(),"mediapipe.NormalizedRect",t.qa,i)}t.g.Da(e,t.Ba,i??performance.now()),t.finishProcessing(i)}function Qn(t,e,n){if(t.J)throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");R0(t,e,n,t.I+1)}function _i(t,e,n,i){if(!t.J)throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");R0(t,e,n,i)}function Fs(t,e,n,i){var r=e.data,s=e.width,a=s*(e=e.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==a)throw Error("Unsupported channel count: "+r.length/a);return t=new kt([r],n,!1,t.g.i.canvas,t.da,s,e),i?t.clone():t}var Cn=class extends el{constructor(t,e,n,i){super(t),this.g=t,this.Ba=e,this.qa=n,this.Ca=i,this.da=new Ks,this.J=!1}j(t,e=!0){if("runningMode"in t){var n=this.J=!!t.runningMode&&t.runningMode!=="IMAGE";De(this.baseOptions,2,n==null?n:ko(n))}if(t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.j(t,e)}close(){this.da.close(),super.close()}};Cn.prototype.close=Cn.prototype.close;var Un=class extends Cn{constructor(t,e){super(new Jn(t,e),"image_in","norm_rect_in",!1),this.l={detections:[]},Ae(t=this.h=new Rl,0,1,e=new Tt),Ee(this.h,2,.5),Ee(this.h,3,.3)}C(){return"FaceDetector"}get baseOptions(){return st(this.h,Tt,1)}set baseOptions(t){Ae(this.h,0,1,t)}v(t){return"minDetectionConfidence"in t&&Ee(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Ee(this.h,3,t.minSuppressionThreshold??.3),this.j(t)}G(t,e){return this.l={detections:[]},Qn(this,t,e),this.l}H(t,e,n){return this.l={detections:[]},_i(this,t,n,e),this.l}o(){var t=new Ln;At(t,"image_in"),At(t,"norm_rect_in"),ot(t,"detections");var e=new Pn;mi(e,py,this.h);var n=new Sn;Rn(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),St(n,"IMAGE:image_in"),St(n,"NORM_RECT:norm_rect_in"),Qe(n,"DETECTIONS:detections"),n.v(e),Hn(t,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(let s of i)i=Xg(s),this.l.detections.push(g0(i));pe(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{pe(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Un.prototype.detectForVideo=Un.prototype.H,Un.prototype.detect=Un.prototype.G,Un.prototype.setOptions=Un.prototype.v,Un.createFromModelPath=async function(t,e){return nt(Un,t,{baseOptions:{modelAssetPath:e}})},Un.createFromModelBuffer=function(t,e){return nt(Un,t,{baseOptions:{modelAssetBuffer:e}})},Un.createFromOptions=function(t,e){return nt(Un,t,e)};var mh=Zn([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),gh=Zn([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),_h=Zn([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),C0=Zn([474,475],[475,476],[476,477],[477,474]),vh=Zn([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),xh=Zn([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),P0=Zn([469,470],[470,471],[471,472],[472,469]),Sh=Zn([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),L0=[...mh,...gh,..._h,...vh,...xh,...Sh],I0=Zn([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Ep(t){t.l={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var rt=class extends Cn{constructor(t,e){super(new Jn(t,e),"image_in","norm_rect",!1),this.l={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Ae(t=this.h=new Jg,0,1,e=new Tt),this.B=new Zg,Ae(this.h,0,3,this.B),this.u=new Rl,Ae(this.h,0,2,this.u),di(this.u,4,1),Ee(this.u,2,.5),Ee(this.B,2,.5),Ee(this.h,4,.5)}C(){return"FaceLandmarker"}get baseOptions(){return st(this.h,Tt,1)}set baseOptions(t){Ae(this.h,0,1,t)}v(t){return"numFaces"in t&&di(this.u,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Ee(this.u,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Ee(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Ee(this.B,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.j(t)}G(t,e){return Ep(this),Qn(this,t,e),this.l}H(t,e,n){return Ep(this),_i(this,t,n,e),this.l}o(){var t=new Ln;At(t,"image_in"),At(t,"norm_rect"),ot(t,"face_landmarks");var e=new Pn;mi(e,gy,this.h);var n=new Sn;Rn(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),St(n,"IMAGE:image_in"),St(n,"NORM_RECT:norm_rect"),Qe(n,"NORM_LANDMARKS:face_landmarks"),n.v(e),Hn(t,n),this.g.attachProtoVectorListener("face_landmarks",(i,r)=>{for(let s of i)i=Ga(s),this.l.faceLandmarks.push(Cl(i));pe(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{pe(this,i)}),this.outputFaceBlendshapes&&(ot(t,"blendshapes"),Qe(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,r)=>{if(this.outputFaceBlendshapes)for(let s of i)i=wl(s),this.l.faceBlendshapes.push(ch(i.g()??[]));pe(this,r)}),this.g.attachEmptyPacketListener("blendshapes",i=>{pe(this,i)})),this.outputFacialTransformationMatrixes&&(ot(t,"face_geometry"),Qe(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,r)=>{if(this.outputFacialTransformationMatrixes)for(let s of i)(i=st(i=my(s),sy,2))&&this.l.facialTransformationMatrixes.push({rows:Bn(i,1)??0??0,columns:Bn(i,2)??0??0,data:wr(i,3,qn,br()).slice()??[]});pe(this,r)}),this.g.attachEmptyPacketListener("face_geometry",i=>{pe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};rt.prototype.detectForVideo=rt.prototype.H,rt.prototype.detect=rt.prototype.G,rt.prototype.setOptions=rt.prototype.v,rt.createFromModelPath=function(t,e){return nt(rt,t,{baseOptions:{modelAssetPath:e}})},rt.createFromModelBuffer=function(t,e){return nt(rt,t,{baseOptions:{modelAssetBuffer:e}})},rt.createFromOptions=function(t,e){return nt(rt,t,e)},rt.FACE_LANDMARKS_LIPS=mh,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LIPS",rt.FACE_LANDMARKS_LIPS),rt.FACE_LANDMARKS_LEFT_EYE=gh,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYE",rt.FACE_LANDMARKS_LEFT_EYE),rt.FACE_LANDMARKS_LEFT_EYEBROW=_h,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",rt.FACE_LANDMARKS_LEFT_EYEBROW),rt.FACE_LANDMARKS_LEFT_IRIS=C0,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS",rt.FACE_LANDMARKS_LEFT_IRIS),rt.FACE_LANDMARKS_RIGHT_EYE=vh,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE",rt.FACE_LANDMARKS_RIGHT_EYE),rt.FACE_LANDMARKS_RIGHT_EYEBROW=xh,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",rt.FACE_LANDMARKS_RIGHT_EYEBROW),rt.FACE_LANDMARKS_RIGHT_IRIS=P0,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS",rt.FACE_LANDMARKS_RIGHT_IRIS),rt.FACE_LANDMARKS_FACE_OVAL=Sh,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_FACE_OVAL",rt.FACE_LANDMARKS_FACE_OVAL),rt.FACE_LANDMARKS_CONTOURS=L0,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_CONTOURS",rt.FACE_LANDMARKS_CONTOURS),rt.FACE_LANDMARKS_TESSELATION=I0,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_TESSELATION",rt.FACE_LANDMARKS_TESSELATION);var Mh=Zn([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Ap(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function Tp(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function bp(t,e=!0){var n=[];for(let r of t){var i=wl(r);t=[];for(let s of i.g())i=e&&Bn(s,1)!=null?Bn(s,1)??0:-1,t.push({score:Dt(s,2)??0,index:i,categoryName:Zt(Rt(s,3))??""??"",displayName:Zt(Rt(s,4))??""??""});n.push(t)}return n}var dn=class extends Cn{constructor(t,e){super(new Jn(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ae(t=this.l=new t0,0,1,e=new Tt),this.u=new sh,Ae(this.l,0,2,this.u),this.F=new rh,Ae(this.u,0,3,this.F),this.B=new e0,Ae(this.u,0,2,this.B),this.h=new _y,Ae(this.l,0,3,this.h),Ee(this.B,2,.5),Ee(this.u,4,.5),Ee(this.F,2,.5)}C(){return"GestureRecognizer"}get baseOptions(){return st(this.l,Tt,1)}set baseOptions(t){Ae(this.l,0,1,t)}v(t){var r,s,a,o;if(di(this.B,3,t.numHands??1),"minHandDetectionConfidence"in t&&Ee(this.B,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Ee(this.u,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Ee(this.F,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new cs,n=e,i=Kc(t.cannedGesturesClassifierOptions,(r=st(this.h,cs,3))==null?void 0:r.j());Ae(n,0,2,i),Ae(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&((s=st(this.h,cs,3))==null||s.g());return t.customGesturesClassifierOptions?(Ae(n=e=new cs,0,2,i=Kc(t.customGesturesClassifierOptions,(a=st(this.h,cs,4))==null?void 0:a.j())),Ae(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&((o=st(this.h,cs,4))==null||o.g()),this.j(t)}Xa(t,e){return Ap(this),Qn(this,t,e),Tp(this)}Ya(t,e,n){return Ap(this),_i(this,t,n,e),Tp(this)}o(){var t=new Ln;At(t,"image_in"),At(t,"norm_rect"),ot(t,"hand_gestures"),ot(t,"hand_landmarks"),ot(t,"world_hand_landmarks"),ot(t,"handedness");var e=new Pn;mi(e,vy,this.l);var n=new Sn;Rn(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),St(n,"IMAGE:image_in"),St(n,"NORM_RECT:norm_rect"),Qe(n,"HAND_GESTURES:hand_gestures"),Qe(n,"LANDMARKS:hand_landmarks"),Qe(n,"WORLD_LANDMARKS:world_hand_landmarks"),Qe(n,"HANDEDNESS:handedness"),n.v(e),Hn(t,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(let s of i){i=Ga(s);let a=[];for(let o of Oi(i,qg,1))a.push({x:Dt(o,1)??0,y:Dt(o,2)??0,z:Dt(o,3)??0,visibility:Dt(o,4)??0});this.landmarks.push(a)}pe(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{pe(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(let s of i){i=xs(s);let a=[];for(let o of Oi(i,$g,1))a.push({x:Dt(o,1)??0,y:Dt(o,2)??0,z:Dt(o,3)??0,visibility:Dt(o,4)??0});this.worldLandmarks.push(a)}pe(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{pe(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,r)=>{this.gestures.push(...bp(i,!1)),pe(this,r)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{pe(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{this.handedness.push(...bp(i)),pe(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{pe(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function wp(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}dn.prototype.recognizeForVideo=dn.prototype.Ya,dn.prototype.recognize=dn.prototype.Xa,dn.prototype.setOptions=dn.prototype.v,dn.createFromModelPath=function(t,e){return nt(dn,t,{baseOptions:{modelAssetPath:e}})},dn.createFromModelBuffer=function(t,e){return nt(dn,t,{baseOptions:{modelAssetBuffer:e}})},dn.createFromOptions=function(t,e){return nt(dn,t,e)},dn.HAND_CONNECTIONS=Mh,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$gesture_recognizer$gesture_recognizer.GestureRecognizer.HAND_CONNECTIONS",dn.HAND_CONNECTIONS);var tn=class extends Cn{constructor(t,e){super(new Jn(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ae(t=this.h=new sh,0,1,e=new Tt),this.u=new rh,Ae(this.h,0,3,this.u),this.l=new e0,Ae(this.h,0,2,this.l),di(this.l,3,1),Ee(this.l,2,.5),Ee(this.u,2,.5),Ee(this.h,4,.5)}C(){return"HandLandmarker"}get baseOptions(){return st(this.h,Tt,1)}set baseOptions(t){Ae(this.h,0,1,t)}v(t){return"numHands"in t&&di(this.l,3,t.numHands??1),"minHandDetectionConfidence"in t&&Ee(this.l,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Ee(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Ee(this.u,2,t.minHandPresenceConfidence??.5),this.j(t)}G(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Qn(this,t,e),wp(this)}H(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],_i(this,t,n,e),wp(this)}o(){var t=new Ln;At(t,"image_in"),At(t,"norm_rect"),ot(t,"hand_landmarks"),ot(t,"world_hand_landmarks"),ot(t,"handedness");var e=new Pn;mi(e,xy,this.h);var n=new Sn;Rn(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),St(n,"IMAGE:image_in"),St(n,"NORM_RECT:norm_rect"),Qe(n,"LANDMARKS:hand_landmarks"),Qe(n,"WORLD_LANDMARKS:world_hand_landmarks"),Qe(n,"HANDEDNESS:handedness"),n.v(e),Hn(t,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(let s of i)i=Ga(s),this.landmarks.push(Cl(i));pe(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{pe(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(let s of i)i=xs(s),this.worldLandmarks.push(pa(i));pe(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{pe(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{var s=this.handedness,a=s.push,o=[];for(let l of i){i=wl(l);let c=[];for(let u of i.g())c.push({score:Dt(u,2)??0,index:Bn(u,1)??0??-1,categoryName:Zt(Rt(u,3))??""??"",displayName:Zt(Rt(u,4))??""??""});o.push(c)}a.call(s,...o),pe(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{pe(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};tn.prototype.detectForVideo=tn.prototype.H,tn.prototype.detect=tn.prototype.G,tn.prototype.setOptions=tn.prototype.v,tn.createFromModelPath=function(t,e){return nt(tn,t,{baseOptions:{modelAssetPath:e}})},tn.createFromModelBuffer=function(t,e){return nt(tn,t,{baseOptions:{modelAssetBuffer:e}})},tn.createFromOptions=function(t,e){return nt(tn,t,e)},tn.HAND_CONNECTIONS=Mh,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$hand_landmarker$hand_landmarker.HandLandmarker.HAND_CONNECTIONS",tn.HAND_CONNECTIONS);var D0=Zn([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Rp(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Cp(t){try{if(!t.F)return t.h;t.F(t.h)}finally{Ll(t)}}function yo(t,e){t=Ga(t),e.push(Cl(t))}var $e=class extends Cn{constructor(t,e){super(new Jn(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Ae(t=this.l=new a0,0,1,e=new Tt),this.Y=new rh,Ae(this.l,0,2,this.Y),this.Aa=new Sy,Ae(this.l,0,3,this.Aa),this.u=new Rl,Ae(this.l,0,4,this.u),this.O=new Zg,Ae(this.l,0,5,this.O),this.B=new r0,Ae(this.l,0,6,this.B),this.Z=new s0,Ae(this.l,0,7,this.Z),Ee(this.u,2,.5),Ee(this.u,3,.3),Ee(this.O,2,.5),Ee(this.B,2,.5),Ee(this.B,3,.3),Ee(this.Z,2,.5),Ee(this.Y,2,.5)}C(){return"HolisticLandmarker"}get baseOptions(){return st(this.l,Tt,1)}set baseOptions(t){Ae(this.l,0,1,t)}v(t){return"minFaceDetectionConfidence"in t&&Ee(this.u,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&Ee(this.u,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&Ee(this.O,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&Ee(this.B,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&Ee(this.B,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&Ee(this.Z,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&Ee(this.Y,2,t.minHandLandmarksConfidence??.5),this.j(t)}G(t,e,n){var i=typeof e!="function"?e:{};return this.F=typeof e=="function"?e:n,Rp(this),Qn(this,t,i),Cp(this)}H(t,e,n,i){var r=typeof n!="function"?n:{};return this.F=typeof n=="function"?n:i,Rp(this),_i(this,t,r,e),Cp(this)}o(){var t=new Ln;At(t,"input_frames_image"),ot(t,"pose_landmarks"),ot(t,"pose_world_landmarks"),ot(t,"face_landmarks"),ot(t,"left_hand_landmarks"),ot(t,"left_hand_world_landmarks"),ot(t,"right_hand_landmarks"),ot(t,"right_hand_world_landmarks");var e=new Pn,n=new zf;Rn(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),function(r,s){if(s!=null)if(Array.isArray(s))De(r,2,ml(s,0,Sa));else{if(!(typeof s=="string"||s instanceof li||yu(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Na(r,2,ul(s,!1),Or())}}(n,this.l.g());var i=new Sn;Rn(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Ma(i,8,zf,n),St(i,"IMAGE:input_frames_image"),Qe(i,"POSE_LANDMARKS:pose_landmarks"),Qe(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Qe(i,"FACE_LANDMARKS:face_landmarks"),Qe(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Qe(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Qe(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Qe(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.v(e),Hn(t,i),Pl(this,t),this.g.attachProtoListener("pose_landmarks",(r,s)=>{yo(r,this.h.poseLandmarks),pe(this,s)}),this.g.attachEmptyPacketListener("pose_landmarks",r=>{pe(this,r)}),this.g.attachProtoListener("pose_world_landmarks",(r,s)=>{var a=this.h.poseWorldLandmarks;r=xs(r),a.push(pa(r)),pe(this,s)}),this.g.attachEmptyPacketListener("pose_world_landmarks",r=>{pe(this,r)}),this.outputPoseSegmentationMasks&&(Qe(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Ds(this,"pose_segmentation_mask"),this.g.ga("pose_segmentation_mask",(r,s)=>{this.h.poseSegmentationMasks=[Fs(this,r,!0,!this.F)],pe(this,s)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",r=>{this.h.poseSegmentationMasks=[],pe(this,r)})),this.g.attachProtoListener("face_landmarks",(r,s)=>{yo(r,this.h.faceLandmarks),pe(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",r=>{pe(this,r)}),this.outputFaceBlendshapes&&(ot(t,"extra_blendshapes"),Qe(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(r,s)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=wl(r),a.push(ch(r.g()??[]))),pe(this,s)}),this.g.attachEmptyPacketListener("extra_blendshapes",r=>{pe(this,r)})),this.g.attachProtoListener("left_hand_landmarks",(r,s)=>{yo(r,this.h.leftHandLandmarks),pe(this,s)}),this.g.attachEmptyPacketListener("left_hand_landmarks",r=>{pe(this,r)}),this.g.attachProtoListener("left_hand_world_landmarks",(r,s)=>{var a=this.h.leftHandWorldLandmarks;r=xs(r),a.push(pa(r)),pe(this,s)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",r=>{pe(this,r)}),this.g.attachProtoListener("right_hand_landmarks",(r,s)=>{yo(r,this.h.rightHandLandmarks),pe(this,s)}),this.g.attachEmptyPacketListener("right_hand_landmarks",r=>{pe(this,r)}),this.g.attachProtoListener("right_hand_world_landmarks",(r,s)=>{var a=this.h.rightHandWorldLandmarks;r=xs(r),a.push(pa(r)),pe(this,s)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",r=>{pe(this,r)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};$e.prototype.detectForVideo=$e.prototype.H,$e.prototype.detect=$e.prototype.G,$e.prototype.setOptions=$e.prototype.v,$e.createFromModelPath=function(t,e){return nt($e,t,{baseOptions:{modelAssetPath:e}})},$e.createFromModelBuffer=function(t,e){return nt($e,t,{baseOptions:{modelAssetBuffer:e}})},$e.createFromOptions=function(t,e){return nt($e,t,e)},$e.HAND_CONNECTIONS=Mh,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.HAND_CONNECTIONS",$e.HAND_CONNECTIONS),$e.POSE_CONNECTIONS=D0,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.POSE_CONNECTIONS",$e.POSE_CONNECTIONS),$e.FACE_LANDMARKS_LIPS=mh,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LIPS",$e.FACE_LANDMARKS_LIPS),$e.FACE_LANDMARKS_LEFT_EYE=gh,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYE",$e.FACE_LANDMARKS_LEFT_EYE),$e.FACE_LANDMARKS_LEFT_EYEBROW=_h,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",$e.FACE_LANDMARKS_LEFT_EYEBROW),$e.FACE_LANDMARKS_LEFT_IRIS=C0,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_IRIS",$e.FACE_LANDMARKS_LEFT_IRIS),$e.FACE_LANDMARKS_RIGHT_EYE=vh,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYE",$e.FACE_LANDMARKS_RIGHT_EYE),$e.FACE_LANDMARKS_RIGHT_EYEBROW=xh,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",$e.FACE_LANDMARKS_RIGHT_EYEBROW),$e.FACE_LANDMARKS_RIGHT_IRIS=P0,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_IRIS",$e.FACE_LANDMARKS_RIGHT_IRIS),$e.FACE_LANDMARKS_FACE_OVAL=Sh,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_FACE_OVAL",$e.FACE_LANDMARKS_FACE_OVAL),$e.FACE_LANDMARKS_CONTOURS=L0,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_CONTOURS",$e.FACE_LANDMARKS_CONTOURS),$e.FACE_LANDMARKS_TESSELATION=I0,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_TESSELATION",$e.FACE_LANDMARKS_TESSELATION);var Nn=class extends Cn{constructor(t,e){super(new Jn(t,e),"input_image","norm_rect",!0),this.l={classifications:[]},Ae(t=this.h=new o0,0,1,e=new Tt)}C(){return"ImageClassifier"}get baseOptions(){return st(this.h,Tt,1)}set baseOptions(t){Ae(this.h,0,1,t)}v(t){return Ae(this.h,0,2,Kc(t,st(this.h,nh,2))),this.j(t)}Ga(t,e){return this.l={classifications:[]},Qn(this,t,e),this.l}Ha(t,e,n){return this.l={classifications:[]},_i(this,t,n,e),this.l}o(){var t=new Ln;At(t,"input_image"),At(t,"norm_rect"),ot(t,"classifications");var e=new Pn;mi(e,My,this.h);var n=new Sn;Rn(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),St(n,"IMAGE:input_image"),St(n,"NORM_RECT:norm_rect"),Qe(n,"CLASSIFICATIONS:classifications"),n.v(e),Hn(t,n),this.g.attachProtoListener("classifications",(i,r)=>{this.l=Ly(ly(i)),pe(this,r)}),this.g.attachEmptyPacketListener("classifications",i=>{pe(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Nn.prototype.classifyForVideo=Nn.prototype.Ha,Nn.prototype.classify=Nn.prototype.Ga,Nn.prototype.setOptions=Nn.prototype.v,Nn.createFromModelPath=function(t,e){return nt(Nn,t,{baseOptions:{modelAssetPath:e}})},Nn.createFromModelBuffer=function(t,e){return nt(Nn,t,{baseOptions:{modelAssetBuffer:e}})},Nn.createFromOptions=function(t,e){return nt(Nn,t,e)};var An=class extends Cn{constructor(t,e){super(new Jn(t,e),"image_in","norm_rect",!0),this.h=new l0,this.embeddings={embeddings:[]},Ae(t=this.h,0,1,e=new Tt)}C(){return"ImageEmbedder"}get baseOptions(){return st(this.h,Tt,1)}set baseOptions(t){Ae(this.h,0,1,t)}v(t){var e=this.h,n=st(this.h,jf,2);if(n=n?n.clone():new jf,t.l2Normalize!==void 0){var i=t.l2Normalize;De(n,1,i==null?i:ko(i))}else"l2Normalize"in t&&De(n,1);return t.quantize!==void 0?De(n,2,(i=t.quantize)==null?i:ko(i)):"quantize"in t&&De(n,2),Ae(e,0,2,n),this.j(t)}Na(t,e){return Qn(this,t,e),this.embeddings}Oa(t,e,n){return _i(this,t,n,e),this.embeddings}o(){var t=new Ln;At(t,"image_in"),At(t,"norm_rect"),ot(t,"embeddings_out");var e=new Pn;mi(e,yy,this.h);var n=new Sn;Rn(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),St(n,"IMAGE:image_in"),St(n,"NORM_RECT:norm_rect"),Qe(n,"EMBEDDINGS:embeddings_out"),n.v(e),Hn(t,n),this.g.attachProtoListener("embeddings_out",(i,r)=>{i=hy(i),this.embeddings=function(s){return{embeddings:Oi(s,uy,1).map(a=>{var l,c;var o={headIndex:Bn(a,3)??0??-1,headName:Zt(Rt(a,4))??""??""};if(qm(a,Yf,1,th))a=wr(a=Cf(a,Yf,1),1,qn,br()),o.floatEmbedding=a.slice();else{let u=new Uint8Array(0);o.quantizedEmbedding=((c=(l=Cf(a,cy,2))==null?void 0:l.g())==null?void 0:c.h())??u}return o}),timestampMs:m0(Rt(s,2,void 0,Go)??$m)}}(i),pe(this,r)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{pe(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};An.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=ep(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=ep(Qf(t.quantizedEmbedding),Qf(e.quantizedEmbedding))}return t},An.prototype.embedForVideo=An.prototype.Oa,An.prototype.embed=An.prototype.Na,An.prototype.setOptions=An.prototype.v,An.createFromModelPath=function(t,e){return nt(An,t,{baseOptions:{modelAssetPath:e}})},An.createFromModelBuffer=function(t,e){return nt(An,t,{baseOptions:{modelAssetBuffer:e}})},An.createFromOptions=function(t,e){return nt(An,t,e)};var ru=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach(n=>{n.close()}),(e=this.categoryMask)==null||e.close()}};function Jy(t){var n,i;var e=function(r){return Oi(r,Sn,1)}(t.ja()).filter(r=>(Zt(Rt(r,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(t.u=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(((i=(n=st(e[0],Pn,7))==null?void 0:n.o())==null?void 0:i.g())??new Map).forEach((r,s)=>{t.u[Number(s)]=Zt(Rt(r,1))??""})}function Pp(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function Lp(t){try{let e=new ru(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.l)return e;t.l(e)}finally{Ll(t)}}ru.prototype.close=ru.prototype.close;var fn=class extends Cn{constructor(t,e){super(new Jn(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new lh,this.B=new c0,Ae(this.h,0,3,this.B),Ae(t=this.h,0,1,e=new Tt)}C(){return"ImageSegmenter"}get baseOptions(){return st(this.h,Tt,1)}set baseOptions(t){Ae(this.h,0,1,t)}v(t){return t.displayNamesLocale!==void 0?De(this.h,2,Pi(t.displayNamesLocale)):"displayNamesLocale"in t&&De(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.j(t)}L(){Jy(this)}segment(t,e,n){var i=typeof e!="function"?e:{};return this.l=typeof e=="function"?e:n,Pp(this),Qn(this,t,i),Lp(this)}eb(t,e,n,i){var r=typeof n!="function"?n:{};return this.l=typeof n=="function"?n:i,Pp(this),_i(this,t,r,e),Lp(this)}Ra(){return this.u}o(){var t=new Ln;At(t,"image_in"),At(t,"norm_rect");var e=new Pn;mi(e,h0,this.h);var n=new Sn;Rn(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),St(n,"IMAGE:image_in"),St(n,"NORM_RECT:norm_rect"),n.v(e),Hn(t,n),Pl(this,t),this.outputConfidenceMasks&&(ot(t,"confidence_masks"),Qe(n,"CONFIDENCE_MASKS:confidence_masks"),Ds(this,"confidence_masks"),this.g.ha("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>Fs(this,s,!0,!this.l)),pe(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],pe(this,i)})),this.outputCategoryMask&&(ot(t,"category_mask"),Qe(n,"CATEGORY_MASK:category_mask"),Ds(this,"category_mask"),this.g.ga("category_mask",(i,r)=>{this.categoryMask=Fs(this,i,!1,!this.l),pe(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,pe(this,i)})),ot(t,"quality_scores"),Qe(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,pe(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,pe(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};fn.prototype.getLabels=fn.prototype.Ra,fn.prototype.segmentForVideo=fn.prototype.eb,fn.prototype.segment=fn.prototype.segment,fn.prototype.setOptions=fn.prototype.v,fn.createFromModelPath=function(t,e){return nt(fn,t,{baseOptions:{modelAssetPath:e}})},fn.createFromModelBuffer=function(t,e){return nt(fn,t,{baseOptions:{modelAssetBuffer:e}})},fn.createFromOptions=function(t,e){return nt(fn,t,e)};var Qy={0:0,1:1,2:2,3:3};function wc(){return uh()?void 0:document.createElement("canvas")}var pn=class extends el{constructor(t,e){super(new Wy(t,e)),this.u=new Ks,this.delegate="CPU",this.h=0,this.baseOptions=new Tt,this.B=this.l=0}C(){return"InteractiveSegmenter"}get i(){return this.g.i}v(t){var e;return this.delegate=((e=t.baseOptions)==null?void 0:e.delegate)??"CPU",super.j(t)}fb(t){if(this.h===0)throw Error("Segmenter is not initialized.");var e;if(this.l!==0&&(this.i._free(this.l),this.l=0),!(e=typeof ImageData<"u"&&t instanceof ImageData))if(typeof t!="object"||t===null)e=!1;else{e=t.data;var n=t.width,i=t.height;e=Number.isInteger(n)&&n>0&&Number.isInteger(i)&&i>0&&(e instanceof Uint8ClampedArray||e instanceof Uint8Array)}if(e)e=t.width,n=t.height,t=t.data;else{if([e,n]=hh(t),typeof OffscreenCanvas<"u")i=new OffscreenCanvas(e,n);else{if(typeof document>"u")throw Error("Canvas is not supported in this environment.");i=document.createElement("canvas")}if(i.width=e,i.height=n,!(i=i.getContext("2d")))throw Error("Canvas 2D context is not supported in this environment.");i.drawImage(t,0,0),t=i.getImageData(0,0,e,n).data}if(!t)throw Error("Unsupported image source or failed to extract image pixels.");i=function({Wa:s,width:a,height:o}){if(a<=0||o<=0)throw Error(`Invalid image dimensions: ${a}x${o}. Dimensions must be positive.`);if(s%(a*o)!==0)throw Error(`Invalid image dimensions or pixel data length. Pixel data length ${s} is not a multiple of the number of pixels (${a*o}).`);if((s/=a*o)!==4&&s!==3&&s!==1)throw Error(`Invalid image dimensions or pixel data length. Calculated channels: ${s}. Expected 1, 3, or 4.`);return s}({Wa:t.length,width:e,height:n});var r=this.i._malloc(t.length);if(this.i.HEAPU8.set(t,r),this.l=r,!this.i._interactive_segmenter_set_image(this.h,r,e,n,i))throw Error("Failed to set image on native engine.")}segment(t){var u;if(this.h===0)throw Error("Segmenter is not initialized.");var e=function(d){d=d.map(({isCompleted:p,brushMode:g,point:_})=>{g=Qy[g]??0,_=_.map(({x:f,y:E})=>{var M=new Ay;return ps(M,1,f),ps(M,2,E),M});var m=new Ty;return Wc(m,p),Na(m,1,Ii(g),0),Vc(m,2,_),m});var h=new by;return Vc(h,1,d),wy(h)}(t);t=this.i._malloc(e.length),this.i.HEAPU8.set(e,t);var n=this.i._malloc(12),i=n+4,r=n+8,s=0,a=this.B++;try{if(this.m)if(this.delegate==="GPU"){var o=this.m;++o.g.T,o.h.set(a,performance.now())}else{var l=this.m;++l.g.P,l.h.set(a,performance.now())}if((s=this.i._interactive_segmenter_segment(this.h,t,e.length,n,i,r))===0)throw Error("Segmentation failed.");(u=this.m)==null||u.za(a);let d=this.i.HEAPU32[n/4],h=this.i.HEAPU32[i/4],p=new Float32Array(this.i.HEAPU8.buffer,s,this.i.HEAPU32[r/4]/4);var c=new Float32Array(p);if(o=d*h,(c instanceof Uint8Array||c instanceof Float32Array)&&c.length!==o)throw Error("Unsupported channel count: "+c.length/o);return new kt([c],!0,!1,this.g.i.canvas??void 0,this.u,d,h)}finally{t!==0&&this.i._free(t),n!==0&&this.i._free(n),s!==0&&this.i._free(s)}}o(){var n,i;this.h!==0&&((n=this.m)==null||n.xa(),this.i._interactive_segmenter_close(this.h),this.h=0),this.l!==0&&(this.i._free(this.l),this.l=0);var t=new Zo;if(this.delegate==="GPU"){var e=new eh;ui(t,2,Dr,e)}else di(e=new ey,1,4),ui(t,1,Dr,e);if(Ae(this.baseOptions,0,3,t),t=fy(this.baseOptions),e=this.i._malloc(t.length),this.i.HEAPU8.set(t,e),this.h=this.i._interactive_segmenter_create(e,t.length),this.i._free(e),this.h===0)throw Error("Failed to create native InteractiveSegmenter engine.");(i=this.m)==null||i.ya()}close(){this.h!==0&&(this.i._interactive_segmenter_close(this.h),this.h=0),this.l!==0&&(this.i._free(this.l),this.l=0),this.u.close(),super.close()}};pn.prototype.close=pn.prototype.close,pn.prototype.segment=pn.prototype.segment,pn.prototype.setImage=pn.prototype.fb,pn.prototype.setOptions=pn.prototype.v,pn.createFromModelPath=function(t,e){return Po(pn,wc(),t,{baseOptions:{modelAssetPath:e}})},pn.createFromModelBuffer=function(t,e){return Po(pn,wc(),t,{baseOptions:{modelAssetBuffer:e}})},pn.createFromOptions=function(t,e){var n=e.canvas??wc();return Po(pn,n,t,e)};var su=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach(n=>{n.close()}),(e=this.categoryMask)==null||e.close()}};su.prototype.close=su.prototype.close;var ni=class extends Cn{constructor(t,e){super(new Jn(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new lh,this.u=new c0,Ae(this.h,0,3,this.u),Ae(t=this.h,0,1,e=new Tt)}C(){return"InteractiveSegmenterLegacy"}get baseOptions(){return st(this.h,Tt,1)}set baseOptions(t){Ae(this.h,0,1,t)}v(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.j(t)}segment(t,e,n,i){var r=typeof n!="function"?n:{};if(this.l=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.I+1,i=new d0,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var s=new Ac;Wc(s,!0),ps(s,1,e.keypoint.x),ps(s,2,e.keypoint.y),ui(i,1,jc,s)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{let o=new Ry;for(s of e.scribble)Wc(e=new Ac,!0),ps(e,1,s.x),ps(e,2,s.y),Ma(o,1,Ac,e);ui(i,2,jc,o)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter_legacy.proto.RegionOfInterest","roi_in",n),Qn(this,t,r);e:{try{let o=new su(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.l){var a=o;break e}this.l(o)}finally{Ll(this)}a=void 0}return a}o(){var t=new Ln;At(t,"image_in"),At(t,"roi_in"),At(t,"norm_rect_in");var e=new Pn;mi(e,h0,this.h);var n=new Sn;Rn(n,2,"mediapipe.tasks.vision.interactive_segmenter_legacy.InteractiveSegmenterGraphV2"),St(n,"IMAGE:image_in"),St(n,"ROI:roi_in"),St(n,"NORM_RECT:norm_rect_in"),n.v(e),Hn(t,n),Pl(this,t),this.outputConfidenceMasks&&(ot(t,"confidence_masks"),Qe(n,"CONFIDENCE_MASKS:confidence_masks"),Ds(this,"confidence_masks"),this.g.ha("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>Fs(this,s,!0,!this.l)),pe(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],pe(this,i)})),this.outputCategoryMask&&(ot(t,"category_mask"),Qe(n,"CATEGORY_MASK:category_mask"),Ds(this,"category_mask"),this.g.ga("category_mask",(i,r)=>{this.categoryMask=Fs(this,i,!1,!this.l),pe(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,pe(this,i)})),ot(t,"quality_scores"),Qe(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,pe(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,pe(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ni.prototype.segment=ni.prototype.segment,ni.prototype.setOptions=ni.prototype.v,ni.createFromModelPath=function(t,e){return nt(ni,t,{baseOptions:{modelAssetPath:e}})},ni.createFromModelBuffer=function(t,e){return nt(ni,t,{baseOptions:{modelAssetBuffer:e}})},ni.createFromOptions=function(t,e){return nt(ni,t,e)};var Fn=class extends Cn{constructor(t,e){super(new Jn(t,e),"input_frame_gpu","norm_rect",!1),this.l={detections:[]},Ae(t=this.h=new f0,0,1,e=new Tt)}C(){return"ObjectDetector"}get baseOptions(){return st(this.h,Tt,1)}set baseOptions(t){Ae(this.h,0,1,t)}v(t){return t.displayNamesLocale!==void 0?De(this.h,2,Pi(t.displayNamesLocale)):"displayNamesLocale"in t&&De(this.h,2),t.maxResults!==void 0?di(this.h,3,t.maxResults):"maxResults"in t&&De(this.h,3),t.scoreThreshold!==void 0?Ee(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&De(this.h,4),t.categoryAllowlist!==void 0?Vo(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&De(this.h,5),t.categoryDenylist!==void 0?Vo(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&De(this.h,6),this.j(t)}G(t,e){return this.l={detections:[]},Qn(this,t,e),this.l}H(t,e,n){return this.l={detections:[]},_i(this,t,n,e),this.l}o(){var t=new Ln;At(t,"input_frame_gpu"),At(t,"norm_rect"),ot(t,"detections");var e=new Pn;mi(e,Cy,this.h);var n=new Sn;Rn(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),St(n,"IMAGE:input_frame_gpu"),St(n,"NORM_RECT:norm_rect"),Qe(n,"DETECTIONS:detections"),n.v(e),Hn(t,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(let s of i)i=Xg(s),this.l.detections.push(g0(i));pe(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{pe(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Fn.prototype.detectForVideo=Fn.prototype.H,Fn.prototype.detect=Fn.prototype.G,Fn.prototype.setOptions=Fn.prototype.v,Fn.createFromModelPath=async function(t,e){return nt(Fn,t,{baseOptions:{modelAssetPath:e}})},Fn.createFromModelBuffer=function(t,e){return nt(Fn,t,{baseOptions:{modelAssetBuffer:e}})},Fn.createFromOptions=function(t,e){return nt(Fn,t,e)};var au=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){var t;(t=this.segmentationMasks)==null||t.forEach(e=>{e.close()})}};function Ip(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function Dp(t){try{let e=new au(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.u)return e;t.u(e)}finally{Ll(t)}}au.prototype.close=au.prototype.close;var mn=class extends Cn{constructor(t,e){super(new Jn(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Ae(t=this.h=new p0,0,1,e=new Tt),this.B=new s0,Ae(this.h,0,3,this.B),this.l=new r0,Ae(this.h,0,2,this.l),di(this.l,4,1),Ee(this.l,2,.5),Ee(this.B,2,.5),Ee(this.h,4,.5)}C(){return"PoseLandmarker"}get baseOptions(){return st(this.h,Tt,1)}set baseOptions(t){Ae(this.h,0,1,t)}v(t){return"numPoses"in t&&di(this.l,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Ee(this.l,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Ee(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Ee(this.B,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.j(t)}G(t,e,n){var i=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:n,Ip(this),Qn(this,t,i),Dp(this)}H(t,e,n,i){var r=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,Ip(this),_i(this,t,r,e),Dp(this)}o(){var t=new Ln;At(t,"image_in"),At(t,"norm_rect"),ot(t,"normalized_landmarks"),ot(t,"world_landmarks"),ot(t,"segmentation_masks");var e=new Pn;mi(e,Py,this.h);var n=new Sn;Rn(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),St(n,"IMAGE:image_in"),St(n,"NORM_RECT:norm_rect"),Qe(n,"NORM_LANDMARKS:normalized_landmarks"),Qe(n,"WORLD_LANDMARKS:world_landmarks"),n.v(e),Hn(t,n),Pl(this,t),this.g.attachProtoVectorListener("normalized_landmarks",(i,r)=>{this.landmarks=[];for(let s of i)i=Ga(s),this.landmarks.push(Cl(i));pe(this,r)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],pe(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,r)=>{this.worldLandmarks=[];for(let s of i)i=xs(s),this.worldLandmarks.push(pa(i));pe(this,r)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],pe(this,i)}),this.outputSegmentationMasks&&(Qe(n,"SEGMENTATION_MASK:segmentation_masks"),Ds(this,"segmentation_masks"),this.g.ha("segmentation_masks",(i,r)=>{this.segmentationMasks=i.map(s=>Fs(this,s,!0,!this.u)),pe(this,r)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],pe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};mn.prototype.detectForVideo=mn.prototype.H,mn.prototype.detect=mn.prototype.G,mn.prototype.setOptions=mn.prototype.v,mn.createFromModelPath=function(t,e){return nt(mn,t,{baseOptions:{modelAssetPath:e}})},mn.createFromModelBuffer=function(t,e){return nt(mn,t,{baseOptions:{modelAssetBuffer:e}})},mn.createFromOptions=function(t,e){return nt(mn,t,e)},mn.POSE_CONNECTIONS=D0,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$pose_landmarker$pose_landmarker.PoseLandmarker.POSE_CONNECTIONS",mn.POSE_CONNECTIONS);const eE=document.querySelector("#terrain"),Yn=document.querySelector("#webcam"),Li=document.querySelector("#landmarks"),ou=Li.getContext("2d"),U0=document.querySelector(".camera-frame"),yh=document.querySelector("#camera-button"),tE=document.querySelector("#reset-terrain-button"),lu=document.querySelector("#concept-mode-button"),cu=document.querySelector("#reality-mode-button"),uu=document.querySelector("#presentation-button"),nE=document.querySelector("#status-dot"),iE=document.querySelector("#tracking-status"),rE=document.querySelector("#input-readout"),sE=document.querySelector("#x-readout"),aE=document.querySelector("#y-readout"),oE=document.querySelector("#confidence-readout"),lE=document.querySelector("#gesture-readout"),cE=document.querySelector("#imprint-readout"),Rc=document.querySelector("#notice"),hu=document.querySelector("#participant-input"),N0=document.querySelector("#expected-gesture"),F0=document.querySelector("#distance-select"),O0=document.querySelector("#lighting-select"),du=document.querySelector("#record-button"),uE=document.querySelector("#export-json-button"),hE=document.querySelector("#export-csv-button"),dE=document.querySelector("#clear-study-button"),Eo=document.querySelector("#study-status"),fE=document.querySelector("#recording-dot"),pE=document.querySelector("#sample-count"),mE=document.querySelector("#trial-count"),gE=document.querySelector("#accuracy-readout"),_E=document.querySelector("#latency-readout"),Ao=document.querySelector("#study-report"),vE=160,xE=240,Up=320,P={handLandmarker:null,cameraActive:!1,presentationSequenceActive:!1,presentationStartedAt:0,presentationPhase:-1,presentationPhaseStartImprints:0,presentationActive:!1,lastVideoTime:-1,target:new He(0,0),current:new He(0,0),confidence:0,handVisible:!1,velocity:0,previousPalm:null,lastPalmTime:0,previousScreenPalm:null,previousScreenTime:0,gesture:"IDLE",gestureProfile:null,gestureCandidate:null,gestureCandidateSince:0,lastHandSeenAt:0,sceneEnergy:.16,renderMode:"concept",landforms:[],imprintCount:0,lastLandformTime:0,motionAngle:0,lastNormalUpdate:0,liveRadius:1.45,liveStrength:0,liveColor:new Ge(12122981),targetColor:new Ge(12122981),study:{samples:[],trials:[],activeTrial:null,lastSampleAt:0}},SE={"OPEN PALM":{kind:"deposition",radius:2.05,strength:.46,color:12122981,interval:840,settleMs:1850},FIST:{kind:"erosion",radius:1.45,strength:-.46,color:6597119,interval:840,settleMs:1350},PINCH:{kind:"fault",radius:.3,strength:.42,length:2.15,color:16764272,interval:1020,settleMs:1500},"V SIGN":{kind:"flow",radius:.42,strength:.22,length:3.25,color:8575444,interval:580,settleMs:1150}},Zs=new LS({canvas:eE,antialias:!0});Zs.setPixelRatio(Math.min(window.devicePixelRatio,2));Zs.setSize(window.innerWidth,window.innerHeight);Zs.setClearColor(329741,1);const Jt=new IS;Jt.fog=new Su(329741,.052);const Ur=new Tn(38,window.innerWidth/window.innerHeight,.1,100);Ur.position.set(0,6.5,11.2);Ur.lookAt(0,0,0);const Aa=15,Np=130,yt=new Pa(Aa,Aa,Np,Np);yt.rotateX(-Math.PI/2);const ma=new Float32Array(yt.attributes.position.array),ME=new Float32Array(yt.attributes.position.count*3),yE=new Float32Array(yt.attributes.position.count*3),EE=new Float32Array(yt.attributes.position.count),ga=new Float32Array(yt.attributes.position.count),Eh=new Float32Array(yt.attributes.position.count),Ah=new Float32Array(yt.attributes.position.count),Th=new Float32Array(yt.attributes.position.count),bh=new Float32Array(yt.attributes.position.count);yt.setAttribute("color",new _n(ME,3));yt.setAttribute("geologyColor",new _n(yE,3));yt.setAttribute("geologyMask",new _n(EE,1));const fu=new US({color:16777215,roughness:.72,metalness:.12,wireframe:!1,flatShading:!0,vertexColors:!0}),Fp=new jn({uniforms:{sunDirection:{value:new U(-.4,.84,.25).normalize()},fogColor:{value:Jt.fog.color},fogDensity:{value:Jt.fog.density}},vertexShader:`
    attribute vec3 geologyColor;
    attribute float geologyMask;
    varying float vHeight;
    varying float vSlope;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    varying vec3 vGeologyColor;
    varying float vGeologyMask;
    void main() {
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vHeight = position.y;
      vNormal = normalize(normalMatrix * normal);
      vSlope = 1.0 - clamp(vNormal.y, 0.0, 1.0);
      vWorldPosition = worldPosition.xyz;
      vGeologyColor = geologyColor;
      vGeologyMask = geologyMask;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform vec3 sunDirection;
    uniform vec3 fogColor;
    uniform float fogDensity;
    varying float vHeight;
    varying float vSlope;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    varying vec3 vGeologyColor;
    varying float vGeologyMask;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    void main() {
      float terrainHeight = vHeight + 1.7;
      float grain = hash(floor(vWorldPosition.xz * 10.0)) * 0.06 - 0.03;
      vec3 sand = vec3(0.42, 0.33, 0.19);
      vec3 grass = vec3(0.18, 0.33, 0.18);
      vec3 soil = vec3(0.24, 0.20, 0.13);
      vec3 rock = vec3(0.29, 0.31, 0.29);
      vec3 snow = vec3(0.78, 0.82, 0.76);
      float grassBand = smoothstep(0.4, 2.6, terrainHeight);
      vec3 color = mix(sand, grass, grassBand);
      color = mix(color, soil, smoothstep(5.8, 9.0, terrainHeight));
      float rockMask = max(smoothstep(0.30, 0.67, vSlope), smoothstep(9.0, 15.5, terrainHeight) * 0.55);
      color = mix(color, rock, rockMask);
      color = mix(color, snow, smoothstep(15.2, 20.2, terrainHeight) * (1.0 - vSlope * 0.36));
      color = mix(color, vGeologyColor, vGeologyMask);
      float diffuse = max(dot(normalize(vNormal), sunDirection), 0.0) * 0.72 + 0.28;
      color *= diffuse + grain;
      float distanceToCamera = length(cameraPosition - vWorldPosition);
      float fogFactor = 1.0 - exp(-fogDensity * fogDensity * distanceToCamera * distanceToCamera);
      gl_FragColor = vec4(mix(color, fogColor, fogFactor), 1.0);
    }
  `}),B0=new cn(yt,fu);Jt.add(B0);const wh=new cn(yt,new Ra({color:6214845,wireframe:!0,transparent:!0,opacity:.14}));wh.scale.y=1.002;Jt.add(wh);const k0=new ol(6.05,20,160,28);k0.rotateX(-Math.PI/2);const z0=new jn({transparent:!0,depthWrite:!1,uniforms:{time:{value:0}},vertexShader:`
    uniform float time;
    varying vec3 vWorldPosition;
    void main() {
      vec3 p = position;
      p.y = sin(p.x * 0.14 + time * 0.78) * 0.055 + cos(p.z * 0.1 - time * 0.42) * 0.04;
      vec4 worldPosition = modelMatrix * vec4(p, 1.0);
      vWorldPosition = worldPosition.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPosition;
    }
  `,fragmentShader:`
    uniform float time;
    varying vec3 vWorldPosition;
    void main() {
      float ripple = sin(vWorldPosition.x * 0.12 + vWorldPosition.z * 0.08 + time * 0.55) * 0.5 + 0.5;
      float flowX = vWorldPosition.x + time * 0.9;
      float verticalWave = sin(flowX * 3.8 + sin(vWorldPosition.z * 0.24) * 0.9) * 0.5 + 0.5;
      float waveCrest = pow(verticalWave, 24.0);
      vec3 deep = vec3(0.025, 0.15, 0.19);
      vec3 shallow = vec3(0.08, 0.27, 0.29);
      vec3 color = mix(deep, shallow, ripple * 0.12 + 0.3);
      color += waveCrest * vec3(0.16, 0.40, 0.39);
      float glint = pow(max(0.0, sin(vWorldPosition.x * 0.23 - vWorldPosition.z * 0.17 + time * 0.7)), 40.0);
      gl_FragColor = vec4(color + glint * vec3(0.03, 0.05, 0.04), 0.94);
    }
  `}),Il=new cn(k0,z0);Il.position.y=-.72;Il.visible=!1;Jt.add(Il);const Rh=new cn(new ll(90,40,24),new jn({side:un,depthWrite:!1,uniforms:{topColor:{value:new Ge(1790057)},horizonColor:{value:new Ge(12113611)},lowerColor:{value:new Ge(14008991)}},vertexShader:"varying vec3 vPosition; void main() { vPosition = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform vec3 topColor;
      uniform vec3 horizonColor;
      uniform vec3 lowerColor;
      varying vec3 vPosition;
      void main() {
        float h = normalize(vPosition).y * 0.5 + 0.5;
        vec3 color = mix(lowerColor, horizonColor, smoothstep(0.15, 0.53, h));
        color = mix(color, topColor, smoothstep(0.48, 1.0, h));
        gl_FragColor = vec4(color, 1.0);
      }
    `}));Rh.visible=!1;Jt.add(Rh);const G0=new ol(.24,.3,48);G0.rotateX(-Math.PI/2);const Cr=new cn(G0,new Ra({color:12122981,transparent:!0,opacity:.85}));Cr.position.y=.12;Jt.add(Cr);const pu=new NS(13238261,463126,1.45);Jt.add(pu);const Ta=new kS(12122981,2.3);Ta.position.set(2,8,4);Jt.add(Ta);const Ch=new OS(6597119,20,15,2);Ch.position.set(-5,4,-3);Jt.add(Ch);const H0=900,Lo=new Float32Array(H0*3);for(let t=0;t<H0;t+=1){const e=Math.sqrt(Math.random())*7.5,n=Math.random()*Math.PI*2;Lo[t*3]=Math.cos(n)*e,Lo[t*3+1]=Math.random()*1.3+.08,Lo[t*3+2]=Math.sin(n)*e}const V0=new Kn;V0.setAttribute("position",new _n(Lo,3));const tl=new DS(V0,new mm({color:12122981,size:.035,transparent:!0,opacity:.65}));Jt.add(tl);const Os=new ca,AE=new Ra({color:14477534,transparent:!0,opacity:.24,depthWrite:!1}),TE=new ll(1,24,12);[{position:[-4.8,4.6,4.8],scale:[1.8,.3,.64]},{position:[-.5,4.9,4.2],scale:[1.4,.24,.52]},{position:[4.7,4.5,4.5],scale:[1.7,.28,.6]},{position:[8.1,4.9,3.7],scale:[1.2,.21,.46]}].forEach(({position:t,scale:e})=>{const n=new cn(TE,AE);n.position.set(...t),n.scale.set(...e),Os.add(n)});Os.visible=!1;Jt.add(Os);function bE(t,e){return Math.sin(t*.72)*.08+Math.cos(e*.68)*.07+Math.sin((t+e)*.42)*.06}function wE(t,e){const n=Math.hypot(t,e)/(Aa*.5);return-1.42*Ui.smoothstep(n,.63,1.02)}function It(t,e,n){return Ui.lerp(t,e,Ui.clamp(n,0,1))}function RE(t,e,n,i,r,s,a){const o=Ui.clamp((n+1.2)*.12,0,1);let l=.045+o*.045,c=.19+o*.13,u=.2+o*.09;const d=Math.min(i*.7,.8);l=It(l,.35,d),c=It(c,.74,d),u=It(u,.28,d);const h=Math.min(r*.75,.76);l=It(l,.08,h),c=It(c,.3,h),u=It(u,.52,h);const p=Math.min(s*.92,.92);l=It(l,.98,p),c=It(c,.63,p),u=It(u,.2,p);const g=Math.min(a*.48,.72);l=It(l,.18,g),c=It(c,.68,g),u=It(u,.72,g),t[e]=l,t[e+1]=c,t[e+2]=u}function CE(t,e,n,i,r,s,a){const o=Math.min(i*.48,.62),l=Math.min(r*.6,.68),c=Math.min(s*.86,.88),u=Math.min(a*.5,.7),d=Math.max(o,l,c,u);let h=.34,p=.43,g=.2;h=It(h,.17,l),p=It(p,.22,l),g=It(g,.2,l),h=It(h,.68,c),p=It(p,.46,c),g=It(g,.15,c),h=It(h,.12,u),p=It(p,.32,u),g=It(g,.35,u),t[n]=h,t[n+1]=p,t[n+2]=g,e[n/3]=d}function Ph(t){const e=t==="reality";P.renderMode=t,lu.classList.toggle("active",!e),cu.classList.toggle("active",e),lu.setAttribute("aria-pressed",String(!e)),cu.setAttribute("aria-pressed",String(e)),Zs.setClearColor(e?9547184:329741,1),Jt.fog.color.setHex(e?9547184:329741),Jt.fog.density=e?.038:.052,B0.material=e?Fp:fu,Fp.uniforms.fogDensity.value=Jt.fog.density,fu.needsUpdate=!0,wh.visible=!e,Il.visible=e,Rh.visible=e,Os.visible=e,tl.material.opacity=e?0:.65,Cr.visible=!e,pu.color.setHex(e?14215132:13238261),pu.groundColor.setHex(e?3359287:463126),Ta.color.setHex(e?16769708:12122981),Ta.intensity=e?2.7:2.3,Ch.visible=!e}function kn(t,e="idle"){iE.textContent=t,nE.className=`status-dot${e==="active"?" active":e==="error"?" error":""}`}function Js(t){Rc.textContent=t,Rc.classList.toggle("visible",!!t),t&&window.setTimeout(()=>Rc.classList.remove("visible"),3600)}function on(t,e=4){const n=10**e;return Math.round(t*n)/n}function W0(){const t=P.study.samples,e=P.study.trials,i=Object.fromEntries(["OPEN PALM","FIST","PINCH","V SIGN"].map(l=>[l,{total:0,correct:0,accuracy:null}])),r={};let s=0;for(const l of t){const c=i[l.expectedGesture];if(c)if(c.total+=1,l.predictedGesture===l.expectedGesture)c.correct+=1,s+=1;else{const u=`${l.expectedGesture} -> ${l.predictedGesture}`;r[u]=(r[u]??0)+1}}for(const l of Object.values(i))l.accuracy=l.total?on(l.correct/l.total,3):null;const a=e.map(l=>l.firstMatchMs).filter(l=>Number.isFinite(l)),o=Object.entries(r).sort((l,c)=>c[1]-l[1])[0]??null;return{totalSamples:t.length,totalTrials:e.length,accuracy:t.length?on(s/t.length,3):null,averageLatencyMs:a.length?Math.round(a.reduce((l,c)=>l+c,0)/a.length):null,perGesture:i,topConfusion:o?{pair:o[0],count:o[1]}:null}}function Wr(){const t=P.study,e=W0(),n=!!t.activeTrial;du.disabled=!P.cameraActive,du.textContent=n?"STOP & SAVE":"RECORD TRIAL",fE.classList.toggle("active",n),pE.textContent=String(e.totalSamples).padStart(4,"0"),mE.textContent=String(e.totalTrials).padStart(2,"0"),gE.textContent=e.accuracy===null?"--":`${Math.round(e.accuracy*100)}%`,_E.textContent=e.averageLatencyMs===null?"--":`${e.averageLatencyMs}MS`,n?(Eo.textContent=`RECORDING / ${t.activeTrial.expectedGesture}`,Ao.textContent="Capturing anonymous features at 10 Hz. Keep the target gesture stable for 5 seconds."):P.cameraActive?e.topConfusion?(Eo.textContent="EVALUATION READY",Ao.textContent=`Most common confusion: ${e.topConfusion.pair} (${e.topConfusion.count} frames).`):(Eo.textContent="READY / SELECT A TARGET",Ao.textContent="Use an anonymous participant code. Only derived hand features are retained."):(Eo.textContent="READY / CAMERA REQUIRED",Ao.textContent="Record four 5-second trials per condition. Video stays on this device.")}function PE(){if(!P.cameraActive){Js("Start the camera before recording a study trial.");return}if(P.study.activeTrial){Lh();return}const t=hu.value.trim().toUpperCase().replace(/[^A-Z0-9_-]/g,"").slice(0,8)||"PXX";hu.value=t;const e={id:`trial-${String(P.study.trials.length+1).padStart(3,"0")}`,participant:t,expectedGesture:N0.value,distance:F0.value,lighting:O0.value,startedAt:new Date().toISOString(),startTime:performance.now(),sampleCount:0,firstMatchMs:null};P.study.activeTrial=e,P.study.lastSampleAt=0,Wr()}function Lh(){const t=P.study.activeTrial;t&&(t.durationMs=Math.round(performance.now()-t.startTime),t.endedAt=new Date().toISOString(),t.accuracy=t.sampleCount?on(P.study.samples.filter(e=>e.trialId===t.id&&e.predictedGesture===t.expectedGesture).length/t.sampleCount,3):0,delete t.startTime,P.study.trials.push(t),P.study.activeTrial=null,Wr())}function Op(t,e,n,i=null){const r=P.study.activeTrial;if(!r||t-P.study.lastSampleAt<100)return;const s=Math.round(t-r.startTime);if(P.study.samples.push({trialId:r.id,tMs:s,expectedGesture:r.expectedGesture,predictedGesture:e,confidence:on(n,3),...i}),r.sampleCount+=1,e===r.expectedGesture&&r.firstMatchMs===null&&(r.firstMatchMs=s),P.study.lastSampleAt=t,s>=5e3){Lh(),Js("Trial saved automatically after 5 seconds.");return}Wr()}function X0(t,e,n){const i=URL.createObjectURL(new Blob([n],{type:e})),r=document.createElement("a");r.href=i,r.download=t,r.click(),URL.revokeObjectURL(i)}function LE(t){return String(t??"unknown").trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"unknown"}function $0(t){const e=P.study.trials,n={participant:hu.value.trim().toUpperCase()||"PXX",expectedGesture:N0.value,distance:F0.value,lighting:O0.value},i=e.length?e:[n],r=o=>{const l=[...new Set(i.map(c=>c[o]))];return l.length===1?LE(l[0]):"mixed"},s=new Date().toISOString().replace(/[-:]/g,"").replace("T","-").slice(0,15),a=String(e.length).padStart(2,"0");return["gesture-terrain",r("participant"),r("expectedGesture"),r("distance"),r("lighting"),`${a}trials`,s].join("_")+`.${t}`}function IE(){const t={schemaVersion:"gesture-terrain-study/v1",exportedAt:new Date().toISOString(),privacy:"No video, images, names, or raw hand landmarks are stored. Participant codes are anonymous.",featureDefinitions:{handScale:"Distance from wrist to middle-finger MCP in normalized image coordinates.",pinchRatio:"Thumb-tip to index-tip distance divided by handScale.",compactness:"Mean fingertip-to-wrist distance divided by handScale.",extendedFingers:"Count of extended index, middle, ring, and little fingers.",indexReach:"Index-tip distance from wrist divided by handScale.",indexExtension:"Normalized index fingertip reach beyond its PIP joint.",middleExtension:"Normalized middle fingertip reach beyond its PIP joint.",ringExtension:"Normalized ring fingertip reach beyond its PIP joint.",littleExtension:"Normalized little fingertip reach beyond its PIP joint.",vSignAngle:"Direction of the index-middle finger centerline in terrain coordinates.",velocity:"Normalized palm movement speed in screen coordinates."},evaluation:W0(),trials:P.study.trials,samples:P.study.samples};X0($0("json"),"application/json",JSON.stringify(t,null,2))}function DE(){const t=["trialId","participant","expectedGesture","distance","lighting","tMs","predictedGesture","confidence","handScale","pinchRatio","compactness","extendedFingers","indexReach","indexExtension","middleExtension","ringExtension","littleExtension","vSignAngle","velocity"],e=new Map(P.study.trials.map(i=>[i.id,i])),n=P.study.samples.map(i=>{const r=e.get(i.trialId)??{},s={...i,participant:r.participant,distance:r.distance,lighting:r.lighting};return t.map(a=>s[a]??"").join(",")});X0($0("csv"),"text/csv;charset=utf-8",[t.join(","),...n].join(`
`))}function UE(){!P.study.samples.length&&!P.study.trials.length||window.confirm("Clear the locally held study data? Export it first if you want to keep it.")&&(P.study.samples=[],P.study.trials=[],P.study.activeTrial=null,Wr())}function NE(){const t=P.handVisible||P.presentationSequenceActive;rE.textContent=P.handVisible?"CAMERA":P.presentationSequenceActive?"PRESENT":"NONE",sE.textContent=t?P.current.x.toFixed(2):"--",aE.textContent=t?P.current.y.toFixed(2):"--",oE.textContent=P.handVisible?`${Math.round(P.confidence*100)}%`:P.presentationSequenceActive?"SIM":"--",lE.textContent=t?P.gesture:"IDLE",cE.textContent=String(P.imprintCount).padStart(2,"0")}function FE(t){const e={x:P.target.x,z:P.target.y,radius:t.radius,strength:t.strength*(1+P.velocity*.1),length:t.length??t.radius,kind:t.kind,angle:P.motionAngle,color:t.color,createdAt:performance.now(),settleMs:t.settleMs};P.landforms.push(e),P.imprintCount+=1}function OE(t){for(let e=0;e<ma.length;e+=3){const n=e/3,i=ma[e],r=ma[e+2],s=i-t.x,a=r-t.z,o=s*Math.cos(t.angle)+a*Math.sin(t.angle),l=-s*Math.sin(t.angle)+a*Math.cos(t.angle);if(t.kind==="deposition"||t.kind==="erosion"){const u=Math.exp(-(s*s+a*a)/(2*t.radius*t.radius))*t.strength;ga[n]+=u,Eh[n]+=Math.max(u,0),Ah[n]+=Math.max(-u,0)}else if(t.kind==="fault"){const c=Math.exp(-(l*l)/(2*t.radius*t.radius))*Math.exp(-(o*o)/(2*t.length*t.length)),u=Math.exp(-((Math.abs(l)-t.radius*2.1)**2)/(2*t.radius*t.radius));ga[n]+=c*t.strength-u*t.strength*.18,Th[n]+=c}else if(t.kind==="flow"){const c=Math.exp(-(l*l)/(2*t.radius*t.radius))*Math.exp(-(o*o)/(2*t.length*t.length));ga[n]-=c*t.strength,bh[n]+=c}}}function q0(){P.landforms=[],P.imprintCount=0,ga.fill(0),Eh.fill(0),Ah.fill(0),Th.fill(0),bh.fill(0),P.liveStrength=0,Js("Geological memory cleared. The field is ready for a new study.")}function Ih(t){P.gesture=t,P.gestureProfile=SE[t]??null}function Dl(t="IDLE"){P.gestureCandidate=null,P.gestureCandidateSince=0,Ih(t)}function BE(t,e){if(t===P.gesture)return P.gestureCandidate=null,P.gestureCandidateSince=0,P.gesture;if(t!==P.gestureCandidate)return P.gestureCandidate=t,P.gestureCandidateSince=e,P.gesture;const n=t==="IDLE"?xE:vE;return e-P.gestureCandidateSince>=n&&Dl(t),P.gesture}function Y0(t,e,n,i="camera",r="IDLE",s=null,a=!0){const o=performance.now(),l=new He((t-.5)*Aa,(e-.5)*Aa);if(P.previousPalm){const u=Math.max(o-P.lastPalmTime,16),d=l.clone().sub(P.previousPalm);P.velocity=Ui.clamp(d.length()/u*22,0,1),d.lengthSq()>8e-4&&(P.motionAngle=Math.atan2(d.y,d.x))}P.previousPalm=l.clone(),P.lastPalmTime=o,P.target.copy(l),s!==null&&(P.motionAngle=s),P.confidence=n,P.handVisible=i==="camera",Ih(r);const c=P.gestureProfile;a&&c&&o-P.lastLandformTime>c.interval&&(FE(c),P.lastLandformTime=o)}function us(t,e){return Math.hypot(t.x-e.x,t.y-e.y,t.z-e.z)}function kE(t,e){const n=t[0],i=t[9],r=Math.max(us(n,i),.035),s=Object.fromEntries([8,12,16,20].map(_=>{const m=_-2,f=(us(t[_],n)-us(t[m],n))/r;return[_,{isExtended:f>.07,reach:f}]})),a=Object.values(s).filter(_=>_.isExtended).length,o=us(t[4],t[8])/r,l=us(t[8],n)/r,c=(t[5].x+t[9].x)*.5,u=(t[5].y+t[9].y)*.5,d=(t[8].x+t[12].x)*.5,h=(t[8].y+t[12].y)*.5,p=Math.atan2(h-u,c-d),g=[8,12,16,20].reduce((_,m)=>_+us(t[m],n),0)/(4*r);return{handScale:r,extendedFingers:a,fingerExtended:s,pinchRatio:o,indexReach:l,compactness:g,velocity:e,vSignAngle:p}}function zE(t){const{pinchRatio:e,indexReach:n,extendedFingers:i,compactness:r}=t,s=t.fingerExtended[8],a=t.fingerExtended[12];return e<.58&&n>1.35&&s.reach>.02&&i<=2?"PINCH":s.isExtended&&a.isExtended&&!t.fingerExtended[16].isExtended&&!t.fingerExtended[20].isExtended?"V SIGN":i>=3?"OPEN PALM":i===0&&r<1.9?"FIST":"IDLE"}function GE(t){P.current.lerp(P.target,.13);const e=yt.attributes.position,n=e.array,i=yt.attributes.color.array,r=yt.attributes.geologyColor.array,s=yt.attributes.geologyMask.array,a=P.handVisible||P.presentationSequenceActive,o=performance.now(),l=P.gestureProfile,c=l?l.radius+P.velocity*.45:P.liveRadius,u=a&&l?l.strength*(1+P.velocity*.14):0;P.liveRadius=Ui.lerp(P.liveRadius,c,.048),P.liveStrength=Ui.lerp(P.liveStrength,u,.048),l&&(P.targetColor.setHex(l.color),P.liveColor.lerp(P.targetColor,.048)),P.landforms.filter(_=>o-_.createdAt>=_.settleMs).forEach(OE),P.landforms=P.landforms.filter(_=>o-_.createdAt<_.settleMs);const h=P.landforms,p=P.liveRadius,g=P.liveStrength;for(let _=0;_<n.length;_+=3){const m=ma[_],f=ma[_+2],E=m-P.current.x,M=f-P.current.y,A=Math.sqrt(E*E+M*M),k=a?Math.exp(-(A*A)/(2*p*p))*g:0;let w=ga[_/3],b=Eh[_/3],O=Ah[_/3],y=Th[_/3],S=bh[_/3];for(let H=0;H<h.length;H+=1){const N=h[H],q=m-N.x,$=f-N.z,X=o-N.createdAt,j=Math.min(X/N.settleMs,1),G=q*Math.cos(N.angle)+$*Math.sin(N.angle),ue=-q*Math.sin(N.angle)+$*Math.cos(N.angle);if(N.kind==="deposition"||N.kind==="erosion"){const me=Math.exp(-(q*q+$*$)/(2*N.radius*N.radius))*N.strength*j;w+=me,b+=Math.max(me,0),O+=Math.max(-me,0)}else if(N.kind==="fault"){const fe=Math.exp(-(ue*ue)/(2*N.radius*N.radius))*Math.exp(-(G*G)/(2*N.length*N.length)),me=Math.exp(-((Math.abs(ue)-N.radius*2.1)**2)/(2*N.radius*N.radius));w+=(fe*N.strength-me*N.strength*.18)*j,y+=fe*j}else if(N.kind==="flow"){const fe=Math.exp(-(ue*ue)/(2*N.radius*N.radius))*Math.exp(-(G*G)/(2*N.length*N.length));w-=fe*N.strength*j,S+=fe*j}}const L=bE(m,f)+w+(P.renderMode==="reality"?wE(m,f):0)+k;n[_+1]=L,P.renderMode==="reality"?CE(r,s,_,b,O,y,S):RE(i,_,L,b,O,y,S)}e.needsUpdate=!0,yt.attributes.color.needsUpdate=!0,yt.attributes.geologyColor.needsUpdate=!0,yt.attributes.geologyMask.needsUpdate=!0,o-P.lastNormalUpdate>33&&(yt.computeVertexNormals(),P.lastNormalUpdate=o),Cr.position.set(P.current.x,g*.77+.12,P.current.y),Cr.scale.setScalar(1+Math.sin(t*3.5)*.18+P.velocity*.9),Cr.material.opacity=P.renderMode==="concept"&&a?.9:0,Cr.material.color.copy(P.liveColor),Ta.color.copy(P.liveColor),tl.rotation.y=t*(.004+P.sceneEnergy*(.01+P.velocity*.025)),tl.position.y=Math.sin(t*.8)*(.018+P.sceneEnergy*.042)}async function HE(){if(P.handLandmarker)return P.handLandmarker;kn("LOADING HAND MODEL","idle");const t=await ds.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@1.0.1/wasm");return P.handLandmarker=await tn.createFromOptions(t,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task",delegate:"GPU"},runningMode:"VIDEO",numHands:1}),P.handLandmarker}function VE(t){var n;if(Li.width=Yn.videoWidth,Li.height=Yn.videoHeight,ou.clearRect(0,0,Li.width,Li.height),!((n=t.landmarks)!=null&&n.length))return;const e=new sn(ou);e.drawConnectors(t.landmarks[0],tn.HAND_CONNECTIONS,{color:"#b8fb65",lineWidth:3}),e.drawLandmarks(t.landmarks[0],{color:"#f5fff0",lineWidth:1,radius:3})}function j0(){var e,n,i,r,s;if(!P.cameraActive||Yn.readyState<2)return;const t=performance.now();if(Yn.currentTime!==P.lastVideoTime){P.lastVideoTime=Yn.currentTime;const a=P.handLandmarker.detectForVideo(Yn,t);VE(a);const o=(n=(e=a.landmarks)==null?void 0:e[0])==null?void 0:n[9],l=((s=(r=(i=a.handednesses)==null?void 0:i[0])==null?void 0:r[0])==null?void 0:s.score)??0;if(o){const c=performance.now();(P.lastHandSeenAt?c-P.lastHandSeenAt:1/0)>Up&&(P.previousPalm=null,P.previousScreenPalm=null,P.previousScreenTime=0),P.lastHandSeenAt=c;const d=new He(o.x,o.y);if(P.previousScreenPalm){const _=Math.max(c-P.previousScreenTime,16);P.velocity=Ui.clamp(d.distanceTo(P.previousScreenPalm)/_*190,0,1)}P.previousScreenPalm=d,P.previousScreenTime=c;const h=kE(a.landmarks[0],P.velocity),p=zE(h),g=BE(p,c);Y0(1-o.x,o.y,l,"camera",g,g==="V SIGN"?h.vSignAngle:null,p===g),Op(c,p,l,{handScale:on(h.handScale),pinchRatio:on(h.pinchRatio),compactness:on(h.compactness),extendedFingers:h.extendedFingers,indexReach:on(h.indexReach),indexExtension:on(h.fingerExtended[8].reach),middleExtension:on(h.fingerExtended[12].reach),ringExtension:on(h.fingerExtended[16].reach),littleExtension:on(h.fingerExtended[20].reach),vSignAngle:on(h.vSignAngle),velocity:on(h.velocity)}),p===g?kn(`TRACKING / ${g}`,"active"):kn(`STABILIZING / ${p}`,"idle")}else P.handVisible=!1,P.velocity*=.9,Op(t,"NO HAND",0,{handScale:null,pinchRatio:null,compactness:null,extendedFingers:null,velocity:on(P.velocity)}),(P.lastHandSeenAt?t-P.lastHandSeenAt:1/0)<=Up?kn("TRACKING HOLD","idle"):(P.gesture!=="IDLE"&&Dl("IDLE"),P.previousPalm=null,P.previousScreenPalm=null,P.previousScreenTime=0,kn("SEARCHING FOR HAND","idle"))}requestAnimationFrame(j0)}async function WE(){if(!P.cameraActive)try{await HE();const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:1280,height:720},audio:!1});Yn.srcObject=t,await Yn.play(),P.cameraActive=!0,P.presentationSequenceActive=!1,U0.classList.add("visible"),yh.textContent="STOP CAMERA",Wr(),kn("SEARCHING FOR HAND","idle"),j0()}catch(t){console.error(t),kn("CAMERA UNAVAILABLE","error"),Js("Camera permission was not granted. Use PRESENT to view the authored sequence.")}}function K0(){if(!P.cameraActive)return;P.study.activeTrial&&Lh();const t=Yn.srcObject;t instanceof MediaStream&&t.getTracks().forEach(e=>e.stop()),Yn.pause(),Yn.srcObject=null,ou.clearRect(0,0,Li.width,Li.height),Li.width=0,Li.height=0,P.cameraActive=!1,P.handVisible=!1,P.confidence=0,P.velocity=0,P.lastVideoTime=-1,P.previousPalm=null,P.previousScreenPalm=null,P.previousScreenTime=0,P.lastHandSeenAt=0,Dl("IDLE"),U0.classList.remove("visible"),yh.textContent="START CAMERA",Wr(),kn("WAITING FOR INPUT","idle"),Js("Camera stopped. Use PRESENT to play the authored sequence.")}function XE(){q0(),P.presentationSequenceActive=!0,P.presentationStartedAt=performance.now(),P.presentationPhase=-1,P.presentationPhaseStartImprints=0,Ih("OPEN PALM"),kn("PRESENTATION SEQUENCE","active"),Js("Four gestures become four geological forces.")}function Z0(t="WAITING FOR INPUT"){P.presentationSequenceActive=!1,P.velocity=0,P.target.set(0,0),Dl("IDLE"),kn(t,"idle")}function $E(){if(!P.presentationSequenceActive)return;const t=[{gesture:"OPEN PALM",center:[.31,.32],angle:.4},{gesture:"FIST",center:[.69,.32],angle:2.5},{gesture:"PINCH",center:[.34,.68],angle:-.7},{gesture:"V SIGN",center:[.67,.66],angle:-.35}],e=8.5,n=(performance.now()-P.presentationStartedAt)/1e3,i=Math.floor(n/e);if(i>=t.length){Z0("PRESENTATION COMPLETE");return}const r=t[i];i!==P.presentationPhase&&(P.presentationPhase=i,P.presentationPhaseStartImprints=P.imprintCount);const a=n%e*.72+r.angle,o=r.center[0]+Math.cos(a)*.055,l=r.center[1]+Math.sin(a*1.25)*.045,c=r.gesture,u=P.imprintCount-P.presentationPhaseStartImprints<4;Y0(o,l,1,"presentation",c,c==="V SIGN"?r.angle:null,u),kn(`PRESENT / ${c}`,"active")}function Dh(){P.presentationActive=!P.presentationActive,document.body.classList.toggle("presentation-mode",P.presentationActive),uu.textContent=P.presentationActive?"EXIT PRESENT":"PRESENT",uu.setAttribute("aria-pressed",String(P.presentationActive)),P.presentationActive?(P.cameraActive&&K0(),XE()):P.presentationSequenceActive&&Z0()}function qE(){P.presentationActive&&Dh()}yh.addEventListener("click",()=>{P.cameraActive?K0():WE()});uu.addEventListener("click",Dh);tE.addEventListener("click",q0);lu.addEventListener("click",()=>Ph("concept"));cu.addEventListener("click",()=>Ph("reality"));du.addEventListener("click",PE);uE.addEventListener("click",IE);hE.addEventListener("click",DE);dE.addEventListener("click",UE);window.addEventListener("keydown",t=>{t.key==="Escape"&&qE()});function YE(){Ur.aspect=window.innerWidth/window.innerHeight,Ur.updateProjectionMatrix(),Zs.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",YE);Wr();Ph("concept");new URLSearchParams(window.location.search).get("present")==="1"&&Dh();function J0(t){const e=t*.001;$E();const n=P.handVisible||P.presentationSequenceActive;P.sceneEnergy=Ui.lerp(P.sceneEnergy,n?1:.16,.018),GE(e),z0.uniforms.time.value=e,Os.position.x=Math.sin(e*.018)*.35,Os.position.z=Math.cos(e*.014)*.16,Ur.position.x=Math.sin(e*.075)*(.16+P.sceneEnergy*.34),Ur.lookAt(0,0,0),NE(),Zs.render(Jt,Ur),requestAnimationFrame(J0)}kn("WAITING FOR INPUT","idle");J0(0);
