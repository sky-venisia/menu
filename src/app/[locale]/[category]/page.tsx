import Card from '@/components/Card';
import { MenuData } from '@/types/menu';
import clsx from 'clsx';
import styles from './page.module.css';
import { getMessages } from 'next-intl/server';

export default async function Page({ params }: { params: Promise<{ category: string }> }) {
  const messages = (await getMessages()) as MenuData;
  const { category } = await params;
  const menu = messages.menu.filter((dish) => dish.category === category);
  return (
    <main>
      <section className={styles.hero}>
        <div className={clsx(styles.container, 'container')}>
          <h2 className={styles.categoryName}>{menu[0]?.displayName}</h2>
          <div className={styles.grid}>
            {menu.map((dish) => (
              <Card key={dish.id} dish={dish} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
