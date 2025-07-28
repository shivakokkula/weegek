import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerRoot}>
      <div className={styles.footerContainer}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>
            <span className={styles.logoHighlight}>W</span>eegek
          </Link>
        </div>
        <nav className={styles.nav}>
          <Link to="/services" className={styles.navLink}>Services</Link>
          <Link to="/products" className={styles.navLink}>Products</Link>
          <Link to="/about" className={styles.navLink}>About</Link>
          <Link to="/contact" className={styles.navLink}>Contact</Link>
          <Link to="/terms" className={styles.navLink}>Terms</Link>
          <Link to="/privacy" className={styles.navLink}>Privacy</Link>
          <Link to="/refund" className={styles.navLink}>Refund</Link>
        </nav>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Weegek. All rights reserved.
      </div>
    </footer>
  );
}