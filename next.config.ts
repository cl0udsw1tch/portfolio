import type { NextConfig } from "next";


const nextConfig: NextConfig = {
    /* config options here */
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    output: "export",
    images: { unoptimized: true }
};

export default nextConfig;
