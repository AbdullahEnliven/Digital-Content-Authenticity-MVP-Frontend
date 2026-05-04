const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  env: {
    VITE_API_BASE_URL: process.env.VITE_API_BASE_URL || 'http://localhost:8000',
    VITE_MAIN_BACKEND_URL: process.env.VITE_MAIN_BACKEND_URL || process.env.VITE_API_BASE_URL || 'http://localhost:8000',
    VITE_ML_SERVICE_URL: process.env.VITE_ML_SERVICE_URL || 'http://localhost:9000',
  },
}

export default nextConfig
