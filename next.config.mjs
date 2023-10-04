// @ts-check
import { env } from './env.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [{ source: '/resume', destination: env.RESUME_URL }],
};

export default nextConfig;
