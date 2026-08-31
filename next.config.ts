import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [100, 75],
  },
  // Stop Next.js from auto-writing AGENTS.md / CLAUDE.md at the project root
  // on every `dev`/`build` run.
  agentRules: false,
};

export default nextConfig;
