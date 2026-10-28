# Otimização e entrega de 28 de outubro de 2026

## Alterações

- Publicação unificada em Next.js para Vercel; removidos o build alternativo, seus arquivos de configuração e as dependências sem uso.
- Removidos endpoints de formulários, variáveis de webhook obsoletas, componentes de formulário substituídos e o gerador de resumos que deixou de ser usado.
- CSS formatado e seletores antigos sem uso retirados; reset local explícito no lugar de um framework usado apenas para estilos globais.
- Vídeos antigos removidos do diretório público. Vídeos ativos recomprimidos em H.264 com fast start, versões mobile e sem áudio.
- Reprodução pausada fora da tela ou em aba oculta. Preferências de movimento reduzido e economia de dados evitam iniciar o download do vídeo.
- Fotografias convertidas para WebP quando aplicável e redimensionadas para até 1600 px, mantendo proporção. Foram mantidas as referências dinâmicas de logos, galerias e etapas.
- Retratos oficiais aplicados também na home.
- Portfólio com botão de exploração, contagem de fotos, foco por teclado e fechamento do pop-up acessível durante a rolagem.
- Heros mobile com frases compostas e quebras editoriais explícitas.
- Lockfile atualizado, formatação padronizada, checagem de mídia e workflow de validação no GitHub.

## Volume de mídia publicada

O diretório `public` passou de 102.108.904 bytes para 29.112.890 bytes: redução de 71,5%. Esse valor descreve os arquivos publicados, não o histórico Git nem o volume transferido em uma visita individual. O carregamento real varia conforme a página, a tela, o cache e as fotos abertas.

O vídeo desktop de Engenharia passou de 14.230.699 para 3.381.489 bytes; o da home, de 7.099.124 para 5.215.285 bytes. As versões mobile têm aproximadamente 1,3 MB e 2,1 MB.

## Verificação

- Instalação com `pnpm install --frozen-lockfile`.
- Lint, TypeScript, formatação e build de produção.
- Verificação das referências de mídia, inclusive caminhos gerados no HTML estático.
- Conferência em navegador real de heros, reprodução mobile, pop-up e navegação de fotos.
- Verificação das quebras mobile na largura de 320 px, além de conferência visual em 390 px e desktop.

Não foi atribuído um score de Lighthouse nem estimada uma melhoria de Core Web Vitals: esses indicadores precisam de uma medição específica no ambiente publicado. A redução de bytes acima foi medida diretamente nos arquivos.

## Publicação

O README contém os passos para importar o GitHub em outra conta da Vercel. Não são necessários SMTP, banco de dados ou segredos de ambiente.
