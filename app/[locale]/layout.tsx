import type { Metadata } from 'next';
import { Golos_Text, JetBrains_Mono, Pixelify_Sans, Unbounded } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';

import { routing } from '@/i18n/routing';

/** Sector (non-pixel) display — not preloaded; default view is pixel. */
const sectorDisplay = Unbounded({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sector-display',
  weight: ['600', '700'],
  display: 'swap',
  preload: false,
});

const sectorBody = Golos_Text({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sector-body',
  weight: ['400', '600'],
  display: 'swap',
  preload: false,
});

const mono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
  display: 'swap',
});

const pixel = Pixelify_Sans({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-pixel',
  weight: ['400', '500', '700'],
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('header');

  return {
    title: t('title'),
    description: t('subtitle'),
    icons: {
      icon: '/favicon.ico',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'ru')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={[sectorDisplay.variable, sectorBody.variable, mono.variable, pixel.variable].join(' ')}
    >
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
