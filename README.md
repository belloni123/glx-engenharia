# GLX Engenharia

Site institucional da GLX Engenharia em Next.js, React e TypeScript. Inclui portfólio com nove projetos, galerias ampliáveis e contato direto por WhatsApp, e-mail e telefone.

## Executar localmente

Use Node.js 22 e pnpm na versão indicada em `package.json`.

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

## Validar

```bash
pnpm lint
pnpm typecheck
pnpm format:check
pnpm build
pnpm check:assets
```

A checagem de mídia deve rodar após o build, pois também examina as URLs geradas nas páginas estáticas. `pnpm start` serve o build de produção.

## Publicar na Vercel a partir do GitHub

1. Importe o repositório `belloni123/glx-engenharia` na conta ou equipe de destino da Vercel.
2. Use a branch `main`, o diretório raiz `.` e o preset **Next.js**.
3. Use Node.js 22 e mantenha o diretório de saída padrão do framework. O arquivo `vercel.json` já fixa a versão do pnpm nos comandos de instalação e build, independentemente da versão pré-instalada na conta de destino. Não é preciso configurar Corepack ou variáveis para isso.
4. Publique e configure o domínio desejado nessa conta.

O site não exige SMTP, banco de dados, webhooks ou variáveis de ambiente. Não copie `.vercel`, `.env`, `node_modules` ou `.next` entre contas. A vinculação da conta de destino é feita pela própria importação do GitHub.

## Organização

- `app/`: páginas, conteúdo e estilos do site.
- `app/components/`: componentes compartilhados, contatos e galerias.
- `app/portfolio/`: dados dos projetos e interação dos pop-ups.
- `public/media/portfolio/`: fotos agrupadas por projeto.
- `public/media/equipe/`: retratos oficiais.
- `public/media/refresh/`: imagens institucionais e logos usados no site.
- `scripts/check-assets.mjs`: validação de referências de mídia.
- `docs/`: histórico e registro da otimização.

## Atualizar conteúdo

Os dados institucionais ficam em `app/site-data.ts`; textos e destaques do portfólio ficam em `app/portfolio/portfolio-data.ts`. Cada projeto tem uma capa, fotos e blocos de texto com suporte a negrito. Os títulos das heros têm composições específicas para celular, em `mobileTitle`, com `|` separando as linhas.

As heros usam vídeos H.264 sem áudio, com versões específicas para celular e pôster estático. A reprodução respeita movimento reduzido, economia de dados e visibilidade. Fotografias usam WebP e carregamento responsivo com `next/image`.
