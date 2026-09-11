import { mkdir, writeFile, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createInterface } from 'node:readline/promises';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const cli = createInterface({ input: process.stdin, output: process.stdout });
try {
  const title = (process.argv.slice(2).join(' ') || await cli.question('Qual é o título do texto? ')).trim();
  if (!title) throw new Error('Escreva um título para continuar.');
  const slug = title.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  if (!slug) throw new Error('Inclua pelo menos uma letra ou número no título.');
  const date = new Intl.DateTimeFormat('sv-SE', {timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
  const folder = resolve(root,'content/posts');
  await mkdir(folder,{recursive:true});
  const file = resolve(folder,`${date}-${slug}.md`);
  await writeFile(file,`---\ntitle: ${JSON.stringify(title)}\ndate: "${date}"\ncategory: "Cultura"\ntags: []\ndescription: "Escreva aqui um resumo do texto."\nfeatured: false\ndraft: true\n---\n\nComece a escrever aqui.\n`,{flag:'wx'});
  console.log(`\nTexto criado: ${file}\nEle está como rascunho (draft: true). Para publicar, mude para draft: false.\n`);
} catch (error) {
  console.error(error.code === 'EEXIST' ? 'Já existe um texto com esse nome hoje. Abra o arquivo existente ou escolha outro título.' : error.message);
  process.exitCode=1;
} finally { cli.close(); }
