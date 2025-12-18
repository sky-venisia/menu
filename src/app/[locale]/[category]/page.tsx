'use client';

import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

import Card from '@/components/Card';
import { client } from '@/lib/sanityClient';
import styles from './page.module.css';

type Category = {
  _id: string;
  name: Record<string, string>;
  slug: string;
};

type MenuItem = {
  _id: string;
  name: Record<string, string>;
  description: Record<string, string>;
  price: number;
  image?: {
    asset: { _ref: string };
  };
  category: { _ref: string; _type: string };
};

export default function Page() {
  const locale = useLocale();
  const params = useParams();

  const [category, setCategory] = useState<Category | null>(null);
  const [dishes, setDishes] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const query = `
        *[_type == "category" && slug.current == $slug][0]{
          _id,
          name,
          "products": *[_type == "menuItem" && category._ref == ^._id]{
            _id,
            name,
            description,
            price,
            image,
            sizes
          }
        }
      `;

      const data = await client.fetch(query, { slug: params.category });

      if (!data) {
        setCategory(null);
        setDishes([]);
        setLoading(false);
        return;
      }

      setCategory({ _id: data._id, name: data.name, slug: params.category });
      setDishes(data.products || []);
      setLoading(false);
    }

    fetchData();
  }, [params.category]);

  if (loading) return <p>Loading...</p>;
  if (!category) return <p>Category not found</p>;

  return (
    <main>
      <section className={styles.hero}>
        <div className={clsx(styles.container, 'container')}>
          <h2 className={styles.categoryName}>{category.name[locale]}</h2>
          <div className={styles.grid}>
            {dishes.map((dish) => (
              <Card key={dish._id} dish={dish} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
