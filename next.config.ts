import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const watchIgnored = ['**/.cursor/**', '**/.impeccable/**', '**/node_modules/**'];

const nextConfig: NextConfig = {
  output: 'standalone',
  webpack: (config: { watchOptions?: { ignored?: string[] } }, { dev }: { dev: boolean }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: watchIgnored,
      };
    }
    return config;
  },
};

export default withNextIntl(nextConfig);
