import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

// // next.config.ts
//     module.exports = {
//       async rewrites() {
//         return [
//           {
//             source: '/auth/signup', // Requests to /api/* will be proxied
//             destination: 'https://localhost:8000/auth/signup', // The actual API endpoint
//           },
//         ];
//       },
//     };
