import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        'source': '/bapi/:path*',
        'destination': 'http://127.0.0.1:8000/api/:path*'
      }
    ]
  },
};

export default nextConfig;
