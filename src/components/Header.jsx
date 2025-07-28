import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import styles from "./Header.module.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/blog", label: "Blog" },
  { to: "/portfolio", label: "Portfolio" },
];

export default function Header() {
  const location = useLocation();
  const { user } = useAuth();

  return (
    <header className={styles.headerRoot}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>
            <span className={styles.logoHighlight}>W</span>eegek
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
          <nav className={styles.nav}>
            {navLinks.map(link => {
              const isActive = location.pathname === link.to || (link.to !== '/' && location.pathname.startsWith(link.to));
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={
                    isActive
                      ? `${styles.navLink} ${styles.navLinkActive}`
                      : styles.navLink
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          {user ? (
            <Link to="/profile" className={styles.profileIcon} title="My Account">
              <span role="img" aria-label="profile">👤</span>
            </Link>
          ) : (
            <Link to="/login" className={styles.loginBtn}>Login</Link>
          )}
        </div>
      </div>
    </header>
  );
}