import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '@/styles/index.css';
import Header from '@/components/Header';
import { Metadata } from 'next';
import { MenuProvider } from '@/context/MenuContext';
import Lenis from '@/providers/Lenis';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Sky Venisia — Luxury Rooftop Restaurant & Bar in Marrakesh',
  description: 'Sky Venisia is Marrakesh’s premier luxury rooftop restaurant and bar, offering panoramic views, signature cocktails, and refined Moroccan–Mediterranean dining.',
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider>
          <Lenis>
            <MenuProvider>
              <Header />
              <Menu />
              {children}
              <Footer />
            </MenuProvider>
          </Lenis>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
