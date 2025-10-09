/** @type {import('next').NextConfig} */
const nextConfig = {
  // Url'leri güvenli hale getirmek ve next.js'İn optimizasyonları yapmasını sağlamak için url ile ekrana bastığımız resimlerin hostlarını bu dosyada belirleriz
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
    ],
  },
};

export default nextConfig;
