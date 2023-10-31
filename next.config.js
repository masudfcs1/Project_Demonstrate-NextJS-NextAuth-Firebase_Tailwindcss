/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      "assets.example.com",
      "cdn.pixabay.com",
      "images.unsplash.com",
      "plus.unsplash.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com"
    ]
  }
};

module.exports = nextConfig;
