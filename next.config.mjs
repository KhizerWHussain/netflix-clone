/** @type {import('next').NextConfig} */
const nextConfig = {
  cleanDistDir: true,
  distDir: ".next",
  compress: true,
  cacheMaxMemorySize: 0,
  excludeDefaultMomentLocales: true,
  reactStrictMode: true,
  crossOrigin: "anonymous",
  optimizeFonts: true,
  poweredByHeader: true,
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: "bottom-left",
  },
  trailingSlash: false,
};

export default nextConfig;
