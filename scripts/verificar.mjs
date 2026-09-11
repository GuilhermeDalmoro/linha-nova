// Verifica a saída real, especialmente os links do GitHub Pages em subdiretórios.
import { readdir, readFile, stat } from 'node:fs/promises';
import { resolve, dirname, relative, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import { searchPosts } from '../src/lib/search.mjs';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'../dist');
const files=[];
async function walk(dir){for(const entry of await readdir(dir,{withFileTypes:true})){const file=join(dir,entry.name);if(entry.isDirectory())await walk(file);else files.push(file);}}
await walk(root);
const htmlFiles=files.filter(f=>f.endsWith('.html'));
assert(htmlFiles.length>5,'Faltam páginas no site. Rode npm run build primeiro.');
const home=await readFile(join(root,'index.html'),'utf8');
const homeCanonical=home.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
assert(homeCanonical,'A home precisa de um endereço canonical.');
const origin=new URL(homeCanonical).origin;
const base=new URL(homeCanonical).pathname.replace(/\/$/,'');
const existing=new Set(files.map(f=>resolve(f)));
let checked=0;
function localFile(url){let pathname=decodeURIComponent(url.pathname);if(base){assert(pathname===base||pathname.startsWith(base+'/'),`Link perdeu o subdiretório: ${url.href}`);pathname=pathname.slice(base.length);}const path=resolve(root,'.'+pathname);if(existing.has(path))return path;if(existing.has(join(path,'index.html')))return join(path,'index.html');return null;}
for(const file of htmlFiles){const html=await readFile(file,'utf8');const label=relative(root,file);assert(html.includes('lang="pt-BR"'),`Idioma ausente: ${label}`);assert(/<title>[^<]+<\/title>/.test(html),`Título ausente: ${label}`);assert(/name="description"/.test(html),`Descrição ausente: ${label}`);assert(/<h1\b/.test(html),`H1 ausente: ${label}`);
 const pageUrl=new URL(`${base}/${label.replace(/index\.html$/,'')}`,origin);
 for(const m of html.matchAll(/\b(?:href|src|data-index-url)="([^"]+)"/g)){const raw=m[1].replace(/&amp;/g,'&');if(!raw||/^(mailto:|tel:|data:|javascript:)/i.test(raw))continue;const url=new URL(raw,pageUrl);if(url.origin!==origin)continue;assert(localFile(url),`Link ou arquivo ausente em ${label}: ${raw}`);checked++;}
 for(const m of html.matchAll(/<img\b[^>]*>/g))assert(/alt="[^"]+"/.test(m[0]),`Imagem sem texto alternativo: ${label}`);
 for(const m of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g))JSON.parse(m[1]);
}
const index=JSON.parse(await readFile(join(root,'search-index.json'),'utf8'));
const rss=await readFile(join(root,'feed.xml'),'utf8');
const sitemap=await readFile(join(root,'sitemap.xml'),'utf8');
assert.equal((rss.match(/<item>/g)||[]).length,index.length,'RSS e busca precisam listar as mesmas publicações.');
for(const post of index){assert(localFile(new URL(post.url,origin)),`Texto ausente: ${post.title}`);assert(sitemap.includes(new URL(post.url,origin).href),'Texto ausente no sitemap.');assert(post.minutes>=1,'Tempo de leitura inválido.');}
// Cenários de leitor: acentos, conteúdo fora do título, tags e vários termos.
if(index.some(p=>p.title==='Um caderno em texto simples')){
 assert(searchPosts(index,'CERQUILHA').some(p=>p.title==='Um caderno em texto simples'),'A busca precisa encontrar palavras no corpo.');
 assert(searchPosts(index,'independencia').length>=1,'A busca precisa aceitar palavras sem acento.');
 assert(searchPosts(index,'markdown').some(p=>p.title==='Um caderno em texto simples'),'A busca precisa encontrar tags.');
 assert.equal(searchPosts(index,'uma-palavra-que-nao-existe-9172').length,0);
 assert(searchPosts(index,'caderno texto').some(p=>p.title==='Um caderno em texto simples'));
}
console.log(`OK: ${htmlFiles.length} páginas, ${checked} referências locais, ${index.length} artigos, RSS, sitemap, metadados e busca. Base: ${base||'/'}`);
