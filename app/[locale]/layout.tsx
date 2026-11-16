import type { Metadata } from 'next';
import { Golos_Text, JetBrains_Mono, Onest, Pixelify_Sans, Source_Sans_3, Unbounded } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';

import { routing } from '@/i18n/routing';

const display = Onest({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
  display: 'swap',
});

const body = Source_Sans_3({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  display: 'swap',
});

const sectorDisplay = Unbounded({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sector-display',
  weight: ['500', '600', '700'],
  display: 'swap',
});

const sectorBody = Golos_Text({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sector-body',
  weight: ['400', '500', '600'],
  display: 'swap',
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
  weight: ['400', '500', '600', '700'],
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
      className={[
        display.variable,
        body.variable,
        sectorDisplay.variable,
        sectorBody.variable,
        mono.variable,
        pixel.variable,
      ].join(' ')}
    >
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
