import { defineConfig } from 'astro/config';
import { readFileSync } from 'node:fs';
import config from './site.config.mjs';

// O deploy no GitHub detecta o endereço e o subdiretório sem editar código.
const github = process.env.GITHUB_ACTIONS === 'true' ? process.env.GITHUB_REPOSITORY : '';
const [owner, repository] = (github || '').split('/');
let previewOrigin = '';
try { previewOrigin = JSON.parse(readFileSync('./preview.config.json', 'utf8')).url || ''; } catch {}
const site = process.env.SITE_URL || config.url || (owner ? `https://${owner.toLowerCase()}.github.io` : previewOrigin || 'http://localhost:4321');
const customDomain = !!(process.env.SITE_URL || config.url);
const base = process.env.BASE_PATH ?? (owner && !customDomain && repository.toLowerCase() !== `${owner.toLowerCase()}.github.io` ? `/${repository}` : '/');

// Ajusta links e imagens /images/... do Markdown para o subdiretório do Pages.
function localPaths() {
  return (tree) => {
    const visit = (node) => {
      if (['image', 'link', 'definition'].includes(node.type) && node.url?.startsWith('/') && !node.url.startsWith('//')) {
        node.url = `${base.replace(/\/$/, '')}${node.url}`;
      }
      node.children?.forEach(visit);
    };
    visit(tree);
  };
}
export default defineConfig({
  site, base, output: 'static', trailingSlash: 'always',
  markdown: { remarkPlugins: [localPaths], shikiConfig: { theme: 'github-dark' } },
  vite: { define: { __AUTHOR_REPOSITORY__: JSON.stringify(config.repository || github || '') } },
});
