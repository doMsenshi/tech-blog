/** @type {import('next').NextConfig} */
const nextConfig = {
  // S3 + CloudFront にそのまま置けるよう静的エクスポート
  // DB化 (Phase 2) で動的化する時はこの1行を消すだけ
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
