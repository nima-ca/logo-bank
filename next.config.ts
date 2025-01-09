import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
};

if (process.env.NODE_ENV === "development") {
    setupDevPlatform();
}

export default nextConfig;
