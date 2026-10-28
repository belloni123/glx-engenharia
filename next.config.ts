import type { NextConfig } from "next";

// A mesma base atende a Vercel e a hospedagem estática da HostGator.
const staticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = staticExport
  ? {
      output: "export",
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {};

export default nextConfig;
