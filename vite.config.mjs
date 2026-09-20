import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const mediaQA={name:'local-media-qa',apply:'serve',configureServer(server){server.middlewares.use((req,res,next)=>{const url=new URL(req.url,'http://localhost');if(!/\.(png|jpe?g|webp)$/.test(url.pathname))return next();const mode=url.searchParams.get('media-test');if(mode==='fail'){res.statusCode=503;res.setHeader('Cache-Control','no-store');return res.end('Deliberate media QA failure');}if(mode==='slow'){res.setHeader('Cache-Control','no-store');return setTimeout(next,8000);}next();});}};
export default defineConfig({ plugins: [mediaQA,react()], server: { host:'127.0.0.1', port:5173, strictPort:true, fs:{allow:['..']} }, build: { outDir:'dist', chunkSizeWarningLimit:600 } });
