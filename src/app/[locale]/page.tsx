import clsx from 'clsx';
import styles from './page.module.css';
import { getMessages } from 'next-intl/server';
import { MenuData } from '@/types/menu';
import Image from 'next/image';
import HeroImg from '@/assets/images/hero.jpg';
import CategoryLink from '@/components/CategoryLink';

export default async function Page() {
  const messages = (await getMessages()) as MenuData;
  const categoryMap = new Map();
  messages.menu.forEach((item) => {
    if (!categoryMap.has(item.category)) {
      categoryMap.set(item.category, {
        category: item.category,
        displayName: item.displayName,
      });
    }
  });
  const categories = Array.from(categoryMap.values());

  return (
    <main>
      <section className={styles.hero}>
        <div className={clsx(styles.container, 'container')}>
          <h1 className={styles.heading}>{messages.heading}</h1>
          <div className={styles.categories}>
            {categories.map((category) => (
              <CategoryLink category={category.category} key={category.category}>
                {category.displayName}
              </CategoryLink>
            ))}
          </div>
        </div>
        <Image className={styles.backgroundImage} src={HeroImg} alt="Hero background" fill priority sizes="100vw" />
        <div className={styles.overlay} />
      </section>
    </main>
  );
}
