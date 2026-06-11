import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/en/about", permanent: true },
      { source: "/contact", destination: "/en/contact", permanent: true },
      { source: "/companies", destination: "/en/companies", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
