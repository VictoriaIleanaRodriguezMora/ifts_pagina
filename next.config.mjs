/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Evita problemas con imágenes en GitHub Pages
  },
  sassOptions: {
    includePaths: ['./src/app/styles'],
  },
};

export default nextConfig;
