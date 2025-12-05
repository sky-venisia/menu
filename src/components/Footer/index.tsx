import { Link } from '@/i18n/navigation';
import styles from './index.module.css';


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          {/* Location */}
          <div className={styles.navSection}>
            <p className={styles.navTitle}>Marrakesh</p>
            <ul className={styles.list}>
              <li>
                <p className={styles.address}>Jemaa el-Fna Square</p>
              </li>
              <li>
                <p className={styles.address}>Marrakesh, Morocco</p>
              </li>
              <li>
                <Link className={styles.link} href="tel:+212664661400">
                  +212 6 64 66 14 00
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className={styles.navSection}>
            <p className={styles.navTitle}>Social</p>
            <ul className={styles.list}>
              <li>
                <Link
                  className={styles.link}
                  href="https://www.instagram.com/skyvenisiabrasserie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.navSection}>
            <p className={styles.navTitle}>Contact</p>
            <ul className={styles.list}>
              <li>
                <Link className={styles.link} href="mailto:skyvenisia@gmail.com">
                  skyvenisia@gmail.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Sitemap */}
          <div className={styles.navSection}>
            <p className={styles.navTitle}>Sitemap</p>
            <ul className={styles.list}>
              <li>
                <Link className={styles.link} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Copyright */}
          <div className={styles.navSection}>
            <p className={styles.navTitle}>Copyright</p>
            <ul className={styles.list}>
              <li>
                <p className={styles.address}>© 2025 Sky Venisia</p>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}
