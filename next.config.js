/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  images: {
    domains: [
      "assets.example.com",
      "cdn.pixabay.com",
      "images.unsplash.com",
      "plus.unsplash.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "firebasestorage.googleapis.com"
    ]
  }
};

module.exports = nextConfig;
