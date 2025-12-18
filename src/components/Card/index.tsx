import Image from 'next/image';
import styles from './index.module.css';
import { MenuItem } from '@/types/menu';
import { useLocale } from 'next-intl';
import { Locales } from '@/types/locales';
import { urlFor } from '@/lib/sanityImage';

interface Props {
  dish: MenuItem;
}

export default function Card({ dish }: Props) {
  const locale = useLocale() as Locales;

  return (
    <article className={styles.card}>
      <figure className={styles.media}>
        <Image
          className={styles.mediaImage}
          loader={({ src, width, quality }) => `${urlFor(dish.image).url()}?w=${width}&q=${quality || 75}`}
          src={urlFor(dish.image).url()}
          alt={dish.name[locale]}
          fill
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
                <p className={styles.size}>{size.size[locale]}: </p>
                <p className={styles.price}>{size.price} Dhs</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </article>
  );
}
