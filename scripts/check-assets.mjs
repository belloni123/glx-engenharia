import { readFile, readdir, access } from "node:fs/promises";
import path from "node:path";

async function files(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((entry) =>
        entry.isDirectory()
          ? files(path.join(directory, entry.name))
          : path.join(directory, entry.name),
      ),
    )
  ).flat();
}

// A saída estática inclui os caminhos calculados por galerias, logos e etapas.
const sources = [
  ...(await files("app")).filter((file) => /\.(tsx?|css)$/.test(file)),
  ...(await files(".next/server/app")).filter((file) => file.endsWith(".html")),
];
const assets = new Set();
for (const file of sources) {
  const content = (await readFile(file, "utf8")).replaceAll("\\\\", "");
  for (const [url] of content.matchAll(
    /\/(?:media|brand)\/[a-zA-Z0-9_./-]+\.(?:webp|png|jpe?g|svg|mp4)/g,
  )) {
    assets.add(url);
  }
}
let missing = 0;
for (const asset of assets) {
  try {
    await access(path.join("public", asset));
  } catch {
    console.error(`Mídia ausente: ${asset}`);
    missing++;
  }
}
if (missing) process.exitCode = 1;
else
  console.log(
    `${assets.size} referências de mídia verificadas, incluindo as geradas no build.`,
  );

if (process.argv.includes("--static")) {
  for (const route of [
    "",
    "a-glx",
    "construtora",
    "gestao-de-obras",
    "engenharia",
    "portfolio",
    "orcamento",
    "trabalhe-conosco",
    "seja-parceiro",
    "privacidade",
    "termos",
  ]) {
    const file = path.join("out", route, "index.html");
    await access(file);
    const html = await readFile(file, "utf8");
    if (html.includes("/_next/image?"))
      throw new Error(`Imagem depende de servidor Next.js: ${file}`);
  }
  for (const asset of assets) await access(path.join("out", asset));
  for (const file of [
    "out/404.html",
    "out/.htaccess",
    "out/robots.txt",
    "out/sitemap.xml",
  ])
    await access(file);
  console.log(
    "Exportação HostGator validada: páginas com index.html e mídias locais.",
  );
}
