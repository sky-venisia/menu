import Image from 'next/image';
import styles from './index.module.css';
import { MenuItem } from '@/types/menu';

interface Props {
  dish: MenuItem;
}

export default function Card({ dish }: Props) {
  return (
    <article className={styles.card}>
      <figure className={styles.media}>
        <Image className={styles.mediaImage} src={dish.image} alt={dish.name} fill />
      </figure>

      <section className={styles.details}>
        <h3 className={styles.title}>{dish.name}</h3>
        <p className={styles.description}>{dish.description}</p>

        {dish.price ? (
          <p className={styles.price}>
            <span className={styles.priceAmount}>{dish.price}</span>
            <span className={styles.priceCurrency}>Dhs</span>
          </p>
        ) : (
          dish.sizes.map((size) => (
            <p className={styles.price} key={size.size}>
              <span className={styles.priceAmount}>{size.price}</span>
              <span className={styles.priceCurrency}>Dhs</span> ({size.size})
            </p>
          ))
        )}
      </section>
    </article>
  );
}
