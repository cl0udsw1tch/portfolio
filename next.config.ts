import type { NextConfig } from "next";
import createMDX from '@next/mdx';

import remarkMath from "remark-math"; 'remark-math';
import rehypeKatex from 'rehype-katex';


const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    },
});

const nextConfig: NextConfig = {
    /* config options here */
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    output: "export",
    images: { unoptimized: true }
};

export default nextConfig;
