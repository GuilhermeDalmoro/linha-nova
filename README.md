# Linha Nova — comece por aqui

Guimen, este é o projeto completo do teu site. Tu pode publicar e atualizar **pelo navegador**, sem instalar um servidor no PC e sem pagar hospedagem.

O site usa Astro, textos Markdown e GitHub Pages. Os comentários usam Giscus. A conta do GitHub funciona como acesso de autor. Não existe uma senha dentro do site, nem um painel administrativo próprio.

## O que está pronto e o que falta conectar

- Prontos: início, lista e páginas dos textos, seis categorias, tags, busca, Sobre, Links, compartilhamento, RSS, sitemap, SEO, modo escuro e acesso do autor.
- Sete textos fictícios demonstram os formatos. Cada artigo é identificado como exemplo. Pode apagar todos depois.
- Pronto para conectar: comentários Giscus. Eles só aceitam comentários reais depois da configuração da seção 6.
- Falta preencher: tuas redes sociais, biografia e o repositório do GitHub. Os dados de redes que tu não preencher ficam escondidos, sem links falsos.
- A versão aberta pelo ChatGPT é uma demonstração privada. O endereço público independente será o GitHub Pages da tua conta, após o passo 2.

## 1. Entenda quatro palavras, sem mistério

| Palavra | O que significa aqui |
| --- | --- |
| Repositório | A pasta do teu projeto guardada no GitHub. |
| Markdown | Um arquivo de texto com marcações simples. Termina em `.md`. |
| Commit changes | O botão para salvar uma alteração no GitHub. |
| Deploy / publicação | O processo automático que transforma teus arquivos no site que os leitores veem. |

Os textos ficam em `content/posts/`. As imagens ficam em `public/images/`. O GitHub guarda esses arquivos, e o Pages entrega as páginas aos visitantes. Teu PC pode ficar desligado.

## 2. Coloque o site no ar de graça, pelo navegador

Faça esta primeira configuração pelo navegador do computador; é mais fácil enviar as pastas por ele.

1. Baixe `linha-nova.zip`. No Windows, clique com o botão direito e escolha **Extrair Tudo**.
2. Abra a pasta extraída `linha-nova`. Lá dentro devem estar `package.json`, `README.md`, `src`, `content`, `.github` e outros arquivos.
3. Abra [github.com](https://github.com). Entre na tua conta ou clique em **Sign up** para criar uma gratuita.
4. Abra [github.com/new](https://github.com/new).
5. Em **Repository name**, escreva `linha-nova`.
6. Marque **Public**. O caminho gratuito descrito aqui usa um repositório público.
7. Deixe as opções de README, licença e `.gitignore` sem marcar: o projeto já tem esses arquivos.
8. Clique em **Create repository**.
9. Na página que abriu, clique em **uploading an existing file**. Se já houver arquivos, use **Add file → Upload files**.
10. Arraste **o conteúdo da pasta `linha-nova`**, incluindo a pasta `.github`, para a área de upload. Não envie o ZIP e não arraste uma pasta externa que coloque tudo dentro de `linha-nova/linha-nova/`.
11. Clique em **Commit changes** para salvar. Aguarde o envio terminar.
12. Na página principal do repositório, confira que `package.json` aparece diretamente na lista, junto de `src` e `content`.
13. Abra **Settings → Pages**. Na área **Build and deployment**, escolha **GitHub Actions** em **Source**.
14. Vá à aba **Actions**. Abra **Publicar Linha Nova**. Se o primeiro processo falhou porque o Pages ainda não estava ativo, clique em **Re-run all jobs**. Também pode usar **Run workflow → Run workflow** para começar de novo.
15. Aguarde a execução ficar verde. Abra **Settings → Pages** novamente e clique em **Visit site**.

Seu endereço será parecido com `https://SEUUSUARIO.github.io/linha-nova/`. O projeto detecta automaticamente seu usuário e o nome do repositório durante a publicação; não precisa substituir esses valores no código.

**Não achou a aba Actions ou o processo “Publicar Linha Nova”?** Confira se `.github/workflows/deploy.yml` foi enviado. Se faltou, use **Add file → Create new file**, escreva exatamente `.github/workflows/deploy.yml` no nome, cole o conteúdo do arquivo de mesmo nome do projeto e salve.

**Não envie `node_modules`, `dist` ou `.git`.** Eles não fazem parte do pacote para upload. Se tiver instalado o projeto localmente, essas pastas podem aparecer depois.

## 3. Personalize nome, apresentação e links

1. No repositório, abra `site.config.mjs`.
2. Clique no ícone de lápis, **Edit this file**.
3. Altere apenas os textos entre aspas que quiser personalizar. Preserve as vírgulas e os nomes dos campos.
4. Em `repository`, escreva teu usuário e o repositório:

```js
repository: 'SEUUSUARIO/linha-nova',
```

O Pages detecta isso automaticamente, mas preencher também faz o acesso do autor funcionar em outras hospedagens.

5. Troque `author` e `bio` pelos teus dados.
6. Em cada rede, preencha `url` com o endereço completo do **teu perfil**. Exemplo de formato: `https://www.instagram.com/SEUUSUARIO/`.
7. No e-mail, use `mailto:seuemail@exemplo.com`.
8. Deixe `url: ''` nos links que não quiser mostrar.
9. Deixe o campo principal `url` vazio enquanto usar o endereço gratuito do GitHub Pages.
10. Clique em **Commit changes**. Aguarde a aba Actions ficar verde e recarregue o site.

**Não coloque senhas ou tokens nesse arquivo.** Ele é público. Os identificadores do Giscus descritos mais abaixo são públicos e podem ficar nele.

## 4. Publique seu primeiro texto

Depois que o repositório estiver configurado:

1. Abra teu site e role até o rodapé.
2. Clique em **Acesso do autor**.
3. Clique em **Escrever novo texto**. O GitHub abre com um modelo pronto. Entre na conta dona do repositório, se ele pedir.
4. No nome do arquivo, mantenha o começo `content/posts/` e termine com `.md`. Exemplo:

```text
content/posts/2026-09-10-meu-primeiro-texto.md
```

Use letras minúsculas, sem acentos ou espaços, e hífens entre palavras. Cada texto precisa de um nome diferente. A data inicial não entra no endereço; este exemplo vira `/textos/meu-primeiro-texto/`.

5. Substitua o modelo por algo assim:

```markdown
---
title: "Meu primeiro texto"
date: "2026-09-10"
category: "Cultura"
tags: ["Livros", "Leitura"]
description: "Uma frase curta contando do que trata o texto."
featured: false
draft: false
---

Aqui começa meu primeiro parágrafo.

## Um subtítulo

Aqui continua o texto. Posso usar **negrito** e *itálico*.
```

6. Use **Preview** para conferir o Markdown. Essa prévia do GitHub mostra a formatação, mas não o visual completo do site.
7. Clique em **Commit changes**. Escolha salvar diretamente na branch `main` quando essa opção aparecer.
8. Aguarde a publicação ficar verde na aba **Actions**. O texto aparece automaticamente na home, na categoria, nas tags, na busca e no RSS.

As categorias aceitas são exatamente: `Política`, `História`, `Religião`, `Filosofia`, `Cultura` e `Tecnologia`. As tags são livres; use a mesma grafia sempre.

### Salvar rascunho

Use `draft: true` enquanto escreve. O texto não será incluído no site, na busca, no RSS ou no sitemap. Para publicar, mude para `draft: false`.

**Rascunho não significa privado:** como o repositório é público, o arquivo pode ser lido no GitHub. Guarde textos realmente privados fora dele.

Não há agendamento nesta versão: a data organiza a publicação, mas um texto com data futura e `draft: false` entra no ar na próxima publicação.

### Escolher o destaque

Use `featured: true` no artigo que quer destacar e deixe `false` nos demais. Se houver mais de um destaque, o mais recente será escolhido. Se nenhum estiver marcado, entra o artigo mais recente.

### Editar ou apagar

No rodapé do site, abra **Acesso do autor → Editar meus textos**. Escolha um arquivo, clique no lápis, altere e salve com **Commit changes**.

Para apagar um exemplo, abra seu arquivo no GitHub, use o menu de ações **… → Delete file** e confirme o commit. Pode apagar os sete exemplos; categorias vazias e a home têm mensagens próprias.

Não renomeie o arquivo de um artigo que já compartilhou sem necessidade: o nome define seu endereço. Alterar o `title` dentro do arquivo preserva o endereço.

Para registrar uma revisão, acrescente `updated: "2026-09-11"` entre os três traços.

## 5. Formatação e imagens

```markdown
# Título de nível 1
## Título de nível 2
### Título de nível 3
#### Título de nível 4

**Negrito** e *itálico*.

[Um link](https://example.com)

- Primeiro item
- Segundo item

1. Primeiro passo
2. Segundo passo

> Uma citação. Indique a fonte no texto.

---

| Coluna A | Coluna B |
| --- | --- |
| Informação | Outra informação |

Uma frase com nota.[^nota]

[^nota]: Conteúdo da nota de rodapé.
```

O título principal da página vem de `title`. Dentro do artigo, normalmente comece os subtítulos com `##`.

Para código, coloque três crases em uma linha, o nome da linguagem logo depois, o código nas linhas seguintes e outras três crases para fechar. O texto de exemplo **Um caderno em texto simples** demonstra o resultado.

### Adicionar imagem dentro do texto

1. No GitHub, abra `public/images/` e use **Add file → Upload files**.
2. Envie, por exemplo, `minha-foto.webp` e salve. Prefira imagens compactas e nomes sem espaços.
3. No artigo, escreva:

```markdown
![Descrição do que aparece na imagem](/images/minha-foto.webp)
```

O texto entre colchetes descreve a imagem para leitores de tela. O caminho começa em `/images/`, sem a palavra `public`.

Para links internos no Markdown, use caminhos como `[Outro texto](/textos/nome-do-texto/)`. O projeto acrescenta o subdiretório do GitHub Pages automaticamente. Evite escrever HTML cru para imagens e links; essa correção automática funciona nas marcações Markdown.

### Adicionar capa opcional

Depois de enviar a imagem, acrescente no cabeçalho:

```yaml
cover: "/images/minha-foto.webp"
coverAlt: "Descrição da imagem de capa"
```

A capa também será usada nos metadados de compartilhamento do artigo. Sem capa, o site continua completo e usa cartão social de texto. As redes decidem como exibir e atualizar a prévia.

As imagens enviadas não são comprimidas automaticamente. Para fotos, uma largura de cerca de 1200 pixels costuma bastar; tente manter o arquivo abaixo de 300 KB quando a qualidade permitir. Use material seu ou com autorização de uso.

## 6. Ative comentários reais com Giscus

Esta etapa é feita uma vez. **A integração está pronta, mas não pode aceitar comentários enquanto estiver sem os dados do teu repositório.**

1. Abra o repositório no GitHub.
2. Vá a **Settings → General** e procure **Features**.
3. Marque **Discussions**.
4. Abra a aba **Discussions**. Crie uma categoria chamada `Comentários`, preferencialmente do tipo **Announcements**, como recomendado pelo Giscus. O tipo controla quem pode iniciar a discussão; os leitores continuam podendo responder.
5. Abra [github.com/apps/giscus](https://github.com/apps/giscus) e clique em **Install**.
6. Escolha tua conta e conceda acesso apenas ao repositório `linha-nova`.
7. Abra [giscus.app/pt](https://giscus.app/pt).
8. Digite `SEUUSUARIO/linha-nova` em **Repositório**. Aguarde o configurador validar.
9. Escolha a categoria `Comentários`. No mapeamento, escolha um termo específico. O projeto define automaticamente um termo estável para cada artigo; você não precisa escrever os slugs no configurador.
10. Na parte com o código gerado, encontre os valores destes quatro atributos:

| Atributo no código do Giscus | Campo em `site.config.mjs` |
| --- | --- |
| `data-repo` | `comments.repo` |
| `data-repo-id` | `comments.repoId` |
| `data-category` | `comments.category` |
| `data-category-id` | `comments.categoryId` |

11. Abra `site.config.mjs` no teu repositório, clique no lápis e preencha os valores entre aspas. Exemplo apenas do **formato**:

```js
comments: {
  repo: 'SEUUSUARIO/linha-nova',
  repoId: 'COLE_O_DATA_REPO_ID',
  category: 'Comentários',
  categoryId: 'COLE_O_DATA_CATEGORY_ID',
},
```

12. Não copie os valores de exemplo acima: use os identificadores reais fornecidos pelo Giscus.
13. Salve com **Commit changes** e aguarde a publicação.
14. Abra um artigo no site, role até os comentários e clique em **Abrir comentários**.
15. Entre com GitHub e publique um comentário de teste. Abra a aba Discussions do repositório e confira se apareceu. Depois pode apagá-lo.

Os leitores **não precisam de conta para ler** os textos. Para comentar, precisam de conta GitHub e autorização ao Giscus. O site não cadastra contas próprias. Os comentários ficam públicos no GitHub Discussions e podem ser moderados lá.

Não há curtidas do artigo. As reações do Giscus estão desativadas na integração. O serviço só é carregado quando o leitor pede para abrir os comentários.

O mapeamento usa `linha-nova/slug-do-texto`. Assim, mudar de domínio mantendo o slug e o mesmo repositório de comentários preserva a associação das conversas.

## 7. Quem tem a chave de autor?

Tu entra com tua conta do GitHub. A senha ou passkey dessa conta é verificada pelo GitHub, não pelo JavaScript do site.

O repositório ser público permite que outras pessoas leiam e copiem seus arquivos. Isso **não dá permissão de escrita** no teu repositório. Não adicione colaboradores com permissão de escrita se quiser continuar como único autor.

Ative a verificação em duas etapas no GitHub e guarde os códigos de recuperação. Não precisa gerar um token pessoal nem compartilhar uma senha com o ChatGPT para usar o fluxo pelo navegador.

## 8. Usar no seu computador — opcional

Se quiser ver o visual antes de publicar:

1. Instale o **Node.js 24 LTS** pelo [site oficial](https://nodejs.org/). Use a instalação padrão.
2. Extraia `linha-nova.zip` para uma pasta, por exemplo `Documentos/linha-nova`.
3. Abra a pasta que contém `package.json` no Explorador de Arquivos.
4. Clique na barra de endereço, digite `cmd` e aperte Enter. Isso abre o terminal nessa pasta.
5. Digite o comando abaixo e aperte Enter. Aguarde terminar; precisa de internet na primeira instalação.

```bash
npm ci
```

6. Depois, digite:

```bash
npm run dev
```

7. Abra no navegador o endereço mostrado no terminal, normalmente `http://localhost:4321`.
8. Edite um arquivo `.md` em um editor de texto e salve. O navegador atualiza a página. O site funciona sem salvar o arquivo como HTML.
9. Para parar a prévia, volte ao terminal e aperte **Ctrl+C**. Para abrir outra vez, repita apenas `npm run dev` na mesma pasta.

Essa prévia é só do teu computador. Para enviar suas alterações ao GitHub, use o navegador como explicado antes, ou o GitHub Desktop se já estiver familiarizado.

Para criar um arquivo novo com título e data preenchidos:

```bash
npm run novo -- "Título do meu texto"
```

O comando mostra onde salvou. Ele cria um rascunho (`draft: true`). Mude para `false` quando quiser publicar.

Para conferir a versão final:

```bash
npm run build
npm run verificar
npm run preview
```

O primeiro gera as páginas na pasta `dist`; o segundo verifica links, metadados, índice, feed e sitemap; o último permite abrir essa versão pelo endereço mostrado no terminal. Os exemplos de busca são testados enquanto o artigo de demonstração correspondente existir.

## 9. Backup, custo e limites

- **Hospedagem:** GitHub Pages gratuito para este repositório público, dentro dos limites do serviço.
- **Textos e imagens:** arquivos no GitHub. Sem banco de dados e sem servidor pago.
- **Comentários:** Giscus sobre GitHub Discussions, gratuito.
- **Fontes:** arquivos abertos servidos junto com o site. O leitor não depende de carregar Google Fonts.
- **Endereço:** o subdomínio `github.io` é suficiente. Domínio próprio é opcional e normalmente pago; não compre nada para começar.
- **Backup dos textos:** no repositório, use **Code → Download ZIP**. Guarde uma cópia no PC ou em outro lugar. O ZIP do código não inclui os comentários; eles ficam separadamente no Discussions.
- **PC desligado:** o site publicado continua funcionando. Só a prévia local para quando fecha o terminal.

Gratuito não significa ilimitado. O GitHub impõe cotas de armazenamento, tráfego e uso; as regras podem mudar. O projeto não exige contratar plano pago, mas um crescimento excepcional pode exigir reavaliar a hospedagem. Não ative serviços pagos para executar este manual.

Leia as fontes oficiais: [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages), [limites do Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits), [Astro no GitHub Pages](https://docs.astro.build/en/guides/deploy/github/) e [Giscus](https://giscus.app/pt).

## 10. Problemas comuns

| O que aconteceu | O que fazer |
| --- | --- |
| Actions ficou vermelho | Abra a execução, depois o passo vermelho. Confira categoria escrita exatamente como no modelo, aspas fechadas e os dois separadores `---`. |
| Actions não existe | Confira se `.github/workflows/deploy.yml` foi enviado e se a branch se chama `main`. |
| Erro no passo “Preparar GitHub Pages” | Ative Settings → Pages → Source → GitHub Actions e execute de novo. |
| O artigo não apareceu | Confira `draft: false`, a pasta `content/posts/`, extensão `.md` e se a publicação terminou. |
| O visual ficou antigo | Aguarde Actions ficar verde e recarregue com Ctrl+F5. |
| Imagem não aparece | Confira o nome do arquivo, inclusive maiúsculas, e o caminho `/images/nome.webp`. |
| Comentários não aparecem | Confira repo, repoId, category e categoryId; Discussions ativado; app Giscus instalado no repositório público. Teste também sem bloqueador de scripts. |
| Acesso do autor mostra configuração inicial | Preencha `repository: 'SEUUSUARIO/linha-nova'` em `site.config.mjs`. |
| `npm` não é reconhecido | Instale Node.js e abra um terminal novo. |
| PowerShell bloqueou `npm.ps1` | Use o Prompt de Comando (`cmd`) como no passo 8, ou digite `npm.cmd` no lugar de `npm`. |
| Site parece sem estilo no Pages | Não copie só os HTML. Use o workflow completo e confira se o campo principal `url` ficou vazio. |
| Quero uma categoria nova | Edite a lista em `src/lib/posts.ts` e a validação em `src/content.config.ts`; use os seis assuntos existentes se preferir não mexer em código. |

## 11. Organização do projeto

| Local | Função |
| --- | --- |
| `site.config.mjs` | Autor, descrição, redes, repositório e comentários. |
| `content/posts/` | Teus artigos Markdown. |
| `templates/novo-texto.md` | Modelo para copiar. Não é publicado. |
| `public/images/` | Imagens dos artigos. |
| `public/favicon.svg` | Monograma LN para a aba do navegador. |
| `src/components/` | Cabeçalho, rodapé, cards, tags, comentários e compartilhamento. |
| `src/layouts/` | Estrutura e metadados comuns das páginas. |
| `src/pages/` | As páginas, busca, RSS, sitemap e 404. |
| `src/styles/global.css` | Cores, tipografia, espaçamentos e adaptação ao celular. |
| `.github/workflows/deploy.yml` | Publicação automática gratuita no GitHub Pages. |
| `scripts/novo-texto.mjs` | Atalho opcional para criar rascunhos no computador. |
| `scripts/verificar.mjs` | Conferência automática dos arquivos gerados. |
| `preview.config.json` | Endereço da demonstração privada. O Pages usa o endereço do teu repositório automaticamente. |

Não há banco de dados, backend, rastreamento, newsletter, curtidas, paywall ou CMS próprio. O código pode receber um CMS baseado em Git no futuro sem mover os textos para um banco de dados.

O código é disponibilizado sob licença MIT. As fontes têm licença OFL. Os textos do autor não são automaticamente licenciados com o código.
