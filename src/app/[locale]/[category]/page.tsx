'use client';

import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

import Card from '@/components/Card';
import { client } from '@/lib/sanityClient';
import styles from './page.module.css';
import { MenuItem } from '@/types/menu';

export default function Page() {
  const locale = useLocale();
  const params = useParams();

  const [categoryName, setCategoryName] = useState<Record<string, string> | null>(null);
  const [dishes, setDishes] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const slug = Array.isArray(params.category) ? params.category[0] : params.category;
      if (!slug) {
        setCategoryName(null);
        setDishes([]);
        setLoading(false);
        return;
      }

      // 1️⃣ Fetch category name
      const categoryData = await client.fetch(`*[_type == "category" && slug.current == $slug][0]{ name }`, { slug });
      setCategoryName(categoryData?.name || null);

      // 2️⃣ Fetch menu items for that category
      const menuData: MenuItem[] = await client.fetch(
        `*[_type == "menuItem" && category._ref in *[_type=="category" && slug.current==$slug]._id]{
          _id,
          name,
          description,
          price,
          image,
          sizes,
          category
        }`,
        { slug }
      );
      setDishes(menuData || []);

      setLoading(false);
    }

    fetchData();
  }, [params.category]);

  if (loading) return <p>Loading...</p>;
  if (!categoryName) return <p>Category not found</p>;

  return (
    <main>
      <section className={styles.hero}>
        <div className={clsx(styles.container, 'container')}>
          {/* Display localized category name */}
          <h2 className={styles.categoryName}>{categoryName[locale]}</h2>

          <div className={styles.grid}>
            {dishes.map((dish, index) => (
              <Card key={index} dish={dish} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
