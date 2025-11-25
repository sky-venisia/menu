'use client';

import { useMenu } from '@/context/MenuContext';
import clsx from 'clsx';
import Link from 'next/link';
import React, { MouseEvent, useRef } from 'react';
import styles from './index.module.css';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

interface Props {
  category: {
    name: string;
    href: string;
  };
}

export default function MenuLink({ category }: Props) {
  const hrefRef = useRef<HTMLAnchorElement | null>(null)!;
  const nameRef = useRef<HTMLDivElement | null>(null)!;
  const pathname = usePathname();
  const { toggleMenu } = useMenu();

  function handleMouseEnter(e: MouseEvent<HTMLAnchorElement>) {
    if (!nameRef.current) return;
    const rect = nameRef.current.getBoundingClientRect();
    if (e.clientY < rect.top + rect.height / 2) {
      gsap.to(nameRef.current, {
        rotateX: '-=90deg',
        duration: 0.75,
        ease: '0.75, 0, 0, 1',
      });
    } else {
      gsap.to(nameRef.current, {
        rotateX: '+=90deg',
        duration: 0.75,
        ease: '0.75, 0, 0, 1',
      });
    }
  }

  function handleMouseLeave(e: MouseEvent<HTMLAnchorElement>) {
    if (!nameRef.current) return;
    const rect = nameRef.current.getBoundingClientRect();
    if (e.clientY < rect.top + rect.height / 2) {
      gsap.to(nameRef.current, {
        rotateX: '+=90deg',
        duration: 0.75,
        ease: '0.75, 0, 0, 1',
      });
    } else {
      gsap.to(nameRef.current, {
        rotateX: '-=90deg',
        duration: 0.75,
        ease: '0.75, 0, 0, 1',
      });
    }
  }

  return (
    <Link className={styles.link} href={category.href} ref={hrefRef} onClick={toggleMenu}>
      {pathname === category.href && <span className={styles.pathname}>( You are here )</span>}
      <div className={styles.labels} ref={nameRef}>
        <span className={clsx(styles.label, styles.front)}>{category.name}</span>
      </div>
      {pathname === category.href && <span className={styles.pathname}>( You are here )</span>}
    </Link>
  );
  return (
    <Link className={styles.link} href={category.href} ref={hrefRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleMenu}>
      {pathname === category.href && <span className={styles.pathname}>( You are here )</span>}
      <div className={styles.labels} ref={nameRef}>
        <span className={clsx(styles.label, styles.top)}>
          <div className={styles.inner}>{category.name}</div>
        </span>
        <span className={clsx(styles.label, styles.bottom)}>
          <div className={styles.inner}>{category.name}</div>
        </span>
        <span className={clsx(styles.label, styles.front)}>{category.name}</span>
        <span className={clsx(styles.label, styles.back)}>{category.name}</span>
      </div>
      {pathname === category.href && <span className={styles.pathname}>( You are here )</span>}
    </Link>
  );
}
