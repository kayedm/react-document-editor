/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/react-document-editor",
    assetPrefix: "/react-document-editor/",
    images: {
        unoptimized: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;