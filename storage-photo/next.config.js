/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uqthczvmjtzszcpmpwpf.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
