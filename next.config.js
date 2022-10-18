/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.jennexplores.com", "upload.wikimedia.org", "i.pravatar.cc", "superviral.com.au", "socodigital.com", "lh3.googleusercontent.com", "firebasestorage.googleapis.com"]
  }
}

module.exports = nextConfig
