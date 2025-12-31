'use client';

import Image from 'next/image';
import styles from './index.module.css';
import { MenuItem } from '@/types/menu';
import { useLocale } from 'next-intl';
import { Locales } from '@/types/locales';
import { useState } from 'react';

interface Props {
  dish: MenuItem;
}

export default function Card({ dish }: Props) {
  const locale = useLocale() as Locales;

  const [imgSrc, setImgSrc] = useState(dish.image || '/images/placeholder.png');

  return (
    <article className={styles.card}>
      <figure className={styles.media}>
        <Image
          className={styles.mediaImage}
          src={imgSrc}
          alt={dish.name[locale]}
          loading="lazy"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setImgSrc('/images/image.png')}
        />
      </figure>

      <section className={styles.details}>
        <h3 className={styles.title}>{dish.name[locale]}</h3>
        <p className={styles.description}>{dish.description[locale]}</p>

        {dish.price ? (
          <p className={styles.price}>{dish.price} Dhs</p>
        ) : (
          <div className={styles.prices}>
            {dish.sizes?.map((size) => (
              <div className={styles.sizeGroup} key={size.size[locale]}>
                <p className={styles.size}>{size.size[locale]}:</p>
                <p className={styles.price}>{size.price} Dhs</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </article>
  );
}
