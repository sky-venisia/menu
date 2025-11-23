import clsx from 'clsx';
import styles from './index.module.css';
import LocaleSwitch from '../LocaleSwitch';

async function Header() {
  return (
    <header className={styles.header}>
      <div className={clsx(styles.container, 'container')}>
        <h4>Sky Venisia</h4>
        <LocaleSwitch />
      </div>
    </header>
  );
}

export default Header;
