const original=(name,width,height,crop,alt)=>({src:`/images/${name}`,source:`OldPortfolio/public/images/${name}`,width,height,crop,alt});
export const media={
 'GT-COVER':original('gesture-terrain/06-concept-complete.png',1920,1080,[0,0,1920,1080],'Complete Gesture Terrain application capture showing the full landscape and interface.'),
 'SS-COVER':original('shape-of-sound/sound-spectrum.png',1920,1080,[0,0,1920,1080],'Complete English Spectral Bloom application capture using “Speed of Light”.'),
 'FB-COVER':original('fuzzy-boundaries/fuzzy-soft.png',1920,1080,[0,0,1920,1080],'Complete English Soft Blend application capture of the morning-mist preset.'),
};
['GT','SS','FB'].forEach(code=>{media[`${code}-HERO`]=media[`${code}-COVER`];});
const gestures=['open-palm','fist','pinch','v-sign'];
const inputSizes=[[1444,1089],[1446,1088],[1447,1087],[1472,1069]];
gestures.forEach((name,i)=>{
 media[`GT-GESTURE-${i+1}`]=original(`gesture-terrain/0${i+2}-concept-${name}.png`,1920,1080,[340,180,1200,660],`Captured terrain response to ${name.replaceAll('-',' ')}. A separate recorded state, not a continuous simulation.`);
 media[`GT-INPUT-${i+1}`]=original(`gesture-terrain/input-${name}.png`,...inputSizes[i],[0,0,...inputSizes[i]],`Actual ${name.replaceAll('-',' ')} hand input.`);
});
media['GT-MEMORY-1']=media['GT-COVER'];
media['GT-MEMORY-2']=original('gesture-terrain/10-realism-complete.png',1920,1080,[340,180,1200,660],'Recorded terrain shown in Realism mode.');
media['GT-EVIDENCE']=original('gesture-terrain/live-camera-terrain.jpg',1920,1080,[0,0,1920,1080],'Existing evidence capture of hand landmarks, recognition and terrain response.');
const sound=['ripple','spectrum','nebula','splatter','corridor-blackhole'];
sound.forEach((name,i)=>{media[`SS-MODE-${i+1}`]=original(`shape-of-sound/sound-${name}.png`,1920,1080,[0,0,1920,1080],`Complete English ${name} mode sample using “Speed of Light”; captured at an independent audio moment.`);});
const currentSoundCapture=(name,width,height,alt)=>({src:`/images/shape-of-sound/sound-${name}.png`,source:`NewPortfolio/portfolio-site/public/images/shape-of-sound/sound-${name}.png`,width,height,crop:[0,0,width,height],alt});
media['SS-MODE-1']=currentSoundCapture('ripple',1824,1025,'Current Particle Ripple mode with layered tilted rings and outward moving particles, using “Speed of Light”.');
media['SS-MODE-3']=currentSoundCapture('nebula',1823,1026,'Current Nebula Flow mode with a luminous center and spiraling particle trails, using “Speed of Light”.');
media['SS-MODE-4']=currentSoundCapture('splatter',1821,1024,'Current Paint Splash mode with colorful pigment bursts surrounding the central pulse, using “Speed of Light”.');
media['SS-CORRIDOR-ALT']=original('shape-of-sound/sound-corridor-sun.png',1920,1080,[0,0,1920,1080],'Complete English alternate Corridor capture using “Speed of Light” at a later audio moment.');
media['SS-SIGNAL']={src:'/images/shape-of-sound/signal-architecture.svg',source:'NewPortfolio/portfolio-site/public/images/shape-of-sound/signal-architecture.svg',width:1600,height:900,crop:[0,0,1600,900],alt:'Shared browser audio pipeline from a local file through Web Audio analysis to five visual interpretations.'};
export const fuzzyComparison={verified:true,preset:'morning mist',clusters:5,m:2,sigma:.25,iteration:40,objective:138.45,cropSize:[560,420],note:'English captures share preset, parameter values, objective and iteration; crop rectangles isolate the complete 560×420 result canvas.'};
['soft','hard','entropy'].forEach((name,i)=>{media[`FB-MODE-${i+1}`]={...original(`fuzzy-boundaries/fuzzy-${name}.png`,1920,1080,[517,130,560,420],`${name} rendering of the same morning-mist preset; c=5, m=2, sigma=0.25.`),comparisonGroup:'morning-mist-c5-m2-s025'};});
[['m11','m = 1.1'],['m25','m = 2.5'],['m35','m = 3.5']].forEach(([name,label],i)=>{media[`FB-PARAM-${i+1}`]=original(`fuzzy-boundaries/fuzzy-${name}.png`,1920,1080,[0,0,1920,1080],`Complete English Fuzzy Boundaries capture at ${label}; source, c and sigma remain fixed.`);});
media['FB-PARAM-1']=original('fuzzy-boundaries/fuzzy-m11.png',1858,1128,[0,0,1858,1128],'Complete English Fuzzy Boundaries capture at m = 1.1; source, c and sigma remain fixed.');
media['FB-ALGORITHM']=original('fuzzy-boundaries/fuzzy-membership-inspection.png',1920,1080,[0,0,1920,1080],'English KFCM inspection view showing a real pixel membership distribution, fuzzy entropy, parameters and convergence state.');

const systemAsset=(id,folder,name,width,height,alt)=>{media[id]=original(`${folder}/${name}`,width,height,[0,0,width,height],alt);};
systemAsset('SYS-KFCM-UI','kfcm-clustering','kfcm-ui-main.png',1215,642,'Archived KFCM interface before execution, showing the original data and parameter controls.');
systemAsset('SYS-KFCM-LIVE','kfcm-clustering','kfcm-live-execution.jpg',1364,721,'Archived KFCM execution capture showing processing steps and live logs.');
systemAsset('SYS-KFCM-MEMBERSHIP','kfcm-clustering','kfcm-membership-export.jpg',1215,694,'Exported customer table with RFM fields, assigned cluster and multiple fuzzy membership values.');
systemAsset('SYS-KFCM-EVALUATION','kfcm-clustering','kfcm-evaluation-dashboard.jpg',1215,589,'KFCM evaluation dashboard comparing clustering metrics, convergence and segment distribution.');
systemAsset('SYS-KFCM-SCATTER','kfcm-clustering','kfcm-scatter.png',1215,642,'PCA scatter view of the resulting customer clusters.');
systemAsset('SYS-KFCM-RESULTS','kfcm-clustering','kfcm-results.png',1902,908,'Complete KFCM results workspace with segment summaries and algorithm metrics.');
systemAsset('SYS-KFCM-RADAR','kfcm-clustering','kfcm-radar.png',1320,698,'Radar comparison of normalized customer-cluster characteristics.');
systemAsset('SYS-KFCM-WORKSPACE','kfcm-clustering','kfcm-visualization-workspace.jpg',1215,642,'Visualization workspace combining customer distributions, segment profiles and cluster comparisons.');

systemAsset('SYS-SD-CONFIG','skilldistill-studio','source-and-run-configuration.png',1811,1026,'SkillDistill source upload and run-configuration screen.');
systemAsset('SYS-SD-OVERVIEW','skilldistill-studio','overview-review.png',1795,1034,'Overview review with generated text and inspectable structured evidence.');
systemAsset('SYS-SD-CANDIDATES','skilldistill-studio','candidate-verification.png',1797,1029,'Candidate review gate showing retained and rejected knowledge candidates with verification status.');
systemAsset('SYS-SD-SKILLS','skilldistill-studio','skill-pack-review.png',1799,1030,'Skill Pack review screen showing coverage, tests and individual Skill decisions.');
systemAsset('SYS-SD-EVALUATION','skilldistill-studio','evaluation-with-failures.png',1799,1031,'Evaluation report that keeps failed Skills and low-confidence same-model evidence visible.');
systemAsset('SYS-SD-EXPORT','skilldistill-studio','failure-aware-export.png',1814,1030,'Failure-aware export screen separating excluded failures from reproducible release artifacts.');
systemAsset('SYS-SD-COVER','skilldistill-studio','cover.png',1825,1029,'Complete SkillDistill Studio workflow overview from source to evidence, Skill and evaluation.');
systemAsset('SYS-SD-EVALUATION-DETAILS','skilldistill-studio','evaluation-test-details.png',1797,1029,'Individual evaluation test cases showing passed and failed outcomes with judge explanations.');
Object.entries(media).filter(([id])=>id.startsWith('SYS-SD-')).forEach(([,asset])=>{asset.source=`portfolio-site/public${asset.src}`;});

media['HOME-SYSTEM-1']=media['SYS-KFCM-RESULTS'];
media['HOME-SYSTEM-2']=media['SYS-SD-COVER'];

export const mediaGroups={
 'SYS-1-OVERVIEW':['SYS-KFCM-RESULTS','SYS-KFCM-WORKSPACE'],
 'SYS-1-2':['SYS-KFCM-UI','SYS-KFCM-LIVE'],
 'SYS-1-3':['SYS-KFCM-MEMBERSHIP','SYS-KFCM-SCATTER','SYS-KFCM-RADAR'],
 'SYS-1-4':['SYS-KFCM-EVALUATION'],
 'SYS-2-OVERVIEW':['SYS-SD-COVER'],
 'SYS-2-2':['SYS-SD-CONFIG'],
 'SYS-2-3':['SYS-SD-OVERVIEW','SYS-SD-CANDIDATES','SYS-SD-SKILLS'],
 'SYS-2-4':['SYS-SD-EVALUATION','SYS-SD-EVALUATION-DETAILS'],
 'SYS-2-5':['SYS-SD-EXPORT'],
 'FB-ORIGIN':['SYS-KFCM-MEMBERSHIP','FB-MODE-1'],
 'ABOUT-INDEX':['GT-COVER','SS-COVER','FB-COVER'],
};
export const videos={
 'GT-FILM':{src:'/videos/gesture-terrain-demo.mp4',source:'OldPortfolio/public/videos/gesture-terrain-demo.mp4',poster:media['GT-COVER'].src,title:'Gesture Terrain · archived prototype demonstration',note:'Archived prototype recording; the current live work and English interface may differ.'},
 'SS-FILM':{src:'/videos/shape-of-sound-demo.mp4',source:'OldPortfolio/public/videos/shape-of-sound-demo.mp4',poster:media['SS-COVER'].src,title:'Shape of Sound · archived visual comparison',note:'Archived prototype recording using “Speed of Light” by Monster Siren Records.'},
 'FB-FILM':{src:'/videos/fuzzy-boundaries-demo.mp4',source:'E:/Video/2026-09-20 01-28-26.mp4',poster:media['FB-COVER'].src,title:'Fuzzy Boundaries · demonstration',note:'Updated recording supplied on 2026-09-20.'},
};
export const coverKey=code=>`${code}-COVER`;
