const fs=require('fs');
const src=fs.readFileSync('ai-desk-2026.html','utf8');
const m=[...src.matchAll(/<script>([\s\S]*?)<\/script>/g)];
for(const x of m){try{new Function(x[1])}catch(e){console.log('SYNTAX ERROR',e.message);process.exit(1)}}
const head='<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0;font:14px system-ui}img{max-width:100%}[hidden]{display:none!important}</style></head><body>';
fs.writeFileSync('index.html',head+src+'</body></html>');
console.log('built index.html',src.length);
