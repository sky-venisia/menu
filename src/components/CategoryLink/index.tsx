'use client';

import { Link } from '@/i18n/navigation';
import styles from './index.module.css';
import clsx from 'clsx';
import { AnchorHTMLAttributes, ReactNode } from 'react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  category: string;
  children: ReactNode;
}

export default function CategoryLink({ className, category, children, ...props }: Props) {
  return (
    <Link className={clsx(styles.link, className)} {...props} href={`/${category}`}>
      {children}
    </Link>
  );
}
