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

A checagem de mídia deve rodar após o build, pois também examina as URLs geradas nas páginas estáticas. `pnpm start` serve o build padrão de produção da Vercel. Para a versão estática da HostGator, use um servidor de arquivos conforme descrito abaixo.

## Publicar na HostGator

Baixe o arquivo **glx-hostgator.zip** na área de [Releases do GitHub](https://github.com/belloni123/glx-engenharia/releases). Ele contém o site já compilado, incluindo `index.html`, páginas, estilos, JavaScript, fontes, fotos e vídeos. O ZIP de código-fonte do botão “Code” do GitHub não é o pacote para hospedagem.

1. No Gerenciador de Arquivos do cPanel, abra `public_html` para o domínio principal, ou a raiz configurada para o domínio adicional.
2. Faça uma cópia de segurança do site anterior antes de substituir arquivos.
3. Envie o ZIP e extraia **seu conteúdo diretamente na raiz do domínio**. O resultado precisa ser `public_html/index.html`, junto das pastas `_next`, `media`, `brand` e das pastas de cada página. Não coloque tudo dentro de uma subpasta `out` ou `glx-hostgator`.
4. Inclua o arquivo oculto `.htaccess` fornecido no pacote. Ele define o índice HTML, a página de erro 404 e regras opcionais de MIME, compressão e cache.
5. Abra a home, `/portfolio/` e `/engenharia/` para conferir navegação, fotos e vídeos. Não é necessário Node.js, Next.js ou PHP no servidor para esta versão.

Essas instruções consideram publicação na raiz do domínio, por exemplo `https://glxengenharia.com.br/`. Para publicar dentro de um caminho como `/site/`, ajuste o `basePath` antes de compilar.

A HostGator documenta a raiz pública e o arquivo de entrada em [public_html](https://www.hostgator.com/help/article/public-html-folder).

### Gerar um pacote novo

Para quem vai alterar o código: instale as dependências como descrito acima e tenha Python 3 disponível para gerar o ZIP.

```bash
pnpm build:hostgator
```

O comando gera `out/index.html` e todas as páginas estáticas, valida as mídias e cria `dist/glx-hostgator.zip`. Para conferir localmente, use `python3 -m http.server 4173 --directory out`. Preserve todos os arquivos gerados, inclusive arquivos `.txt` usados pela navegação e a pasta `_next`.

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
