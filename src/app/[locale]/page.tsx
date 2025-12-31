import clsx from 'clsx';
import styles from './page.module.css';

import Image from 'next/image';

import { Metadata } from 'next';
import { useMessages } from 'next-intl';
import { Messages } from '@/types/messages';

export const metadata: Metadata = {
  title: 'Sky Venisia — Luxury Rooftop Restaurant & Bar in Marrakesh',
  description:
    'Discover Sky Venisia, Marrakesh’s premier luxury rooftop restaurant and bar. A refined dining experience with panoramic city views, signature cocktails, and exquisite Moroccan–Mediterranean cuisine.',
  openGraph: {
    type: 'website',
    url: 'https://skyvenisia.com/',
    title: 'Sky Venisia — Luxury Rooftop Restaurant & Bar in Marrakesh',
    description: 'Experience elevated dining at Sky Venisia. Stunning rooftop views, crafted cocktails, and a fusion of Moroccan and Mediterranean flavors in the heart of Marrakesh.',
    images: {
      url: 'https://your-cdn-link.com/sky-venisia-main-image.jpg',
      width: 2000,
      height: 1333,
      alt: 'Sky Venisia Rooftop Restaurant & Bar in Marrakesh',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sky Venisia — Luxury Rooftop Restaurant & Bar in Marrakesh',
    description: 'Sky Venisia blends fine dining, skyline views, and vibrant nightlife. Indulge in the ultimate Marrakesh rooftop experience.',
    creator: 'Sky Venisia',
    images: [
      {
        url: 'https://your-cdn-link.com/sky-venisia-main-image.jpg',
        width: 2000,
        height: 1333,
        alt: 'Sky Venisia Rooftop Restaurant & Bar in Marrakesh',
      },
    ],
  },
  keywords: 'Marrakesh rooftop bar, Marrakesh restaurant, luxury dining Marrakesh, rooftop cocktails Marrakesh, Sky Venisia, fine dining Morocco, Marrakesh nightlife, rooftop lounge Marrakesh',
};

export default function Page() {
  const messages = useMessages() as Messages;

  return (
    <main>
      <section className={styles.hero}>
        <div className={clsx(styles.container, 'container')}>
          <h1 className={styles.heading}>{messages.HomeHero.greeting} Sky Venisia</h1>
        </div>
        <Image className={styles.backgroundImage} src="/images/home.jpg" alt="Hero background" fill priority sizes="100vw" />
        <div className={styles.overlay} />
      </section>
    </main>
  );
}
