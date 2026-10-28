import { spawnSync } from "node:child_process";
import { copyFile, chmod } from "node:fs/promises";

const build = spawnSync(
  process.execPath,
  ["node_modules/next/dist/bin/next", "build"],
  {
    env: { ...process.env, STATIC_EXPORT: "true" },
    stdio: "inherit",
  },
);
if (build.status !== 0) process.exit(build.status ?? 1);

await copyFile("deployment/hostgator/.htaccess", "out/.htaccess");
await chmod("out/.htaccess", 0o644);

const checks = spawnSync(
  process.execPath,
  ["scripts/check-assets.mjs", "--static"],
  { stdio: "inherit" },
);
if (checks.status !== 0) process.exit(checks.status ?? 1);

const archive = spawnSync("python3", ["scripts/package-hostgator.py"], {
  stdio: "inherit",
});
if (archive.error)
  console.error("Python 3 é necessário apenas para gerar o ZIP.");
process.exit(archive.status ?? 1);
