/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: config => {
        config.externals.push('pino-pretty', 'lokijs', 'encoding')
        return config
    },
    reactStrictMode: true,
    images: { unoptimized: true },
    output: 'export',
    swcMinify: false,
    staticPageGenerationTimeout: 10000,
    transpilePackages: [
      'antd',
      '@ant-design',
      '@ant-design/pro-editor',
      'rc-util',
      'rc-pagination',
      'rc-picker',
      'kitchen-flow-editor',
      'zustand',
      'leva', 
    ],
    env: {
      BASE_URL: process.env.BASE_URL,
      API_URL: process.env.API_URL,
    }
  };
  
  export default nextConfig;
  