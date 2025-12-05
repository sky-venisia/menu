import { useMenu } from '@/context/MenuContext';
import styles from './index.module.css';
import { Link, usePathname } from '@/i18n/navigation';

interface Props {
  category: {
    name: string;
    href: string;
  };
}

export default function MenuLink({ category }: Props) {
  const pathname = usePathname();
  const { toggleMenu } = useMenu();

  console.log(pathname, category.href);

  return (
    <Link className={styles.link} href={category.href} onClick={toggleMenu}>
      {pathname === category.href && <span className={styles.pathname}>X</span>}
      <span className={styles.category}>{category.name}</span>
      {pathname === category.href && <span className={styles.pathname}>X</span>}
    </Link>
  );
}
