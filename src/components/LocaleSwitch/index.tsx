'use client';

import styles from './index.module.css';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import { ChangeEvent, startTransition } from 'react';

const languages = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'it', label: 'Italiano' },
];

export default function LocaleSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    const selectedLocale = event.target.value;
    startTransition(() => {
      router.replace(
        {
          pathname,
          // @ts-ignore
          params,
        },
        { locale: selectedLocale }
      );
    });
  }
  return (
    <select className={styles.select} value={locale} onChange={handleChange}>
      {languages.map((language) => (
        <option key={language.code} value={language.code}>
          {language.label}
        </option>
      ))}
    </select>
  );
}
