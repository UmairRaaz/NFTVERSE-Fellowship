/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.reservoir.tools',
            port: '',
          },
          {
            protocol: 'https',
            hostname: '*.seadn.io',
            port: '',
          },
        ],
    }
};

export default nextConfig;
