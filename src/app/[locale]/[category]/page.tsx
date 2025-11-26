'use client';

import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import clsx from 'clsx';

import Card from '@/components/Card';
import MENU from '@/data/menu';
import { Locales } from '@/types/locales';
import { categoryNames } from '@/data/categories';

import styles from './page.module.css';

export default function Page() {
  const locale = useLocale() as Locales;
  const params = useParams();
  const categoryName = categoryNames[params.category as string]?.[locale];
  const categoryDishes = MENU.filter((dish) => dish.category === params.category);

  return (
    <main>
      <section className={styles.hero}>
        <div className={clsx(styles.container, 'container')}>
          <h2 className={styles.categoryName}>{categoryName}</h2>
          <div className={styles.grid}>
            {categoryDishes.map((dish, index) => (
              <Card dish={dish} key={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
