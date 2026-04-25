const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  env: {
    VITE_API_BASE_URL: process.env.VITE_API_BASE_URL || 'http://localhost:8000',
  },
}

export default nextConfig
