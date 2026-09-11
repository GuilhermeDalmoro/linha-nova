# Linha Nova

**Ideias, opinião e reflexão independente.**

Linha Nova é uma publicação pessoal de Guilherme Dalmoro dedicada a artigos, ensaios e reflexões sobre política, história, religião, filosofia, cultura e tecnologia.

Um espaço próprio na internet para desenvolver ideias com calma, compartilhar leituras e abrir conversas que precisam de mais espaço do que uma legenda.

## O projeto

A proposta é simples: escrever, publicar e manter os textos acessíveis, organizados e fáceis de compartilhar.

O site prioriza leitura confortável, navegação direta e uma identidade visual própria. O conteúdo é armazenado em arquivos Markdown, permitindo manter cópias, acompanhar revisões e migrar de hospedagem quando necessário.

## Recursos

- Artigos organizados por categorias e tags.
- Busca por título, conteúdo, categoria e tags.
- Destaque editorial na página inicial.
- Estimativa automática de tempo de leitura.
- Imagens de capa e imagens no corpo dos textos.
- Compartilhamento e cópia de links.
- Feed RSS.
- Temas claro e escuro.
- Layout adaptado para computadores e celulares.
- Integração com Giscus para comentários, mediante configuração.
- Sitemap e metadados para mecanismos de busca e redes sociais.

A leitura é aberta e não exige cadastro.

## Tecnologia

O site utiliza **Astro**, com geração de páginas estáticas e conteúdo em **Markdown**. A publicação é automatizada pelo **GitHub Actions**, com hospedagem no **GitHub Pages**.

A arquitetura dispensa banco de dados e servidor próprio. Quando configurados, os comentários são armazenados no GitHub Discussions por meio do Giscus.

## Organização

| Caminho | Conteúdo |
| --- | --- |
| `content/posts/` | Artigos em Markdown. |
| `public/images/` | Imagens utilizadas nos textos. |
| `src/pages/` | Páginas do site. |
| `src/components/` | Componentes reutilizáveis da interface. |
| `src/layouts/` | Estrutura compartilhada das páginas. |
| `src/styles/global.css` | Estilos e identidade visual. |
| `site.config.mjs` | Configurações do autor, links e comentários. |
| `templates/novo-texto.md` | Modelo para novos artigos. |

## Desenvolvimento local

Com o Node.js 24 instalado, execute na pasta do projeto:

```bash
npm ci
npm run dev
```

Abra o endereço indicado no terminal.

Para gerar e verificar a versão de publicação:

```bash
npm run build
npm run verificar
```

## Publicação de textos

Os artigos ficam em `content/posts/`, em arquivos `.md`. Cada arquivo reúne título, data, categoria, resumo e conteúdo.

O modelo disponível em `templates/novo-texto.md` pode ser usado como ponto de partida. O campo `draft: true` mantém o artigo fora do site; `draft: false` permite sua publicação.

Com o GitHub Pages configurado, alterações enviadas à branch `main` iniciam automaticamente a geração e a publicação do site.

## Licença

Consulte o arquivo [LICENSE](./LICENSE) para os termos de uso do código.

---

**Linha Nova — Independente na internet desde 2026.**
