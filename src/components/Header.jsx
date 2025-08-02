import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import styles from "./Header.module.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check if user is logged in by checking for the JWT token
    const token = Cookies.get('jwtToken');
    setIsLoggedIn(!!token);
  }, [location]);

  const handleLogout = () => {
    Cookies.remove('jwtToken');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.headerRoot}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>
            <span className={styles.logoHighlight}>W</span>eegek
          </Link>
        </div>
        
        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`${styles.menuIcon} ${isMenuOpen ? styles.menuOpen : ''}`}></span>
        </button>

        <div className={`${styles.navContainer} ${isMenuOpen ? styles.menuActive : ''}`}>
          <nav className={styles.nav}>
            {navLinks.map(link => {
              const isActive = location.pathname === link.to || 
                (link.to !== '/' && location.pathname.startsWith(link.to));
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={
                    isActive
                      ? `${styles.navLink} ${styles.navLinkActive}`
                      : styles.navLink
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          
          <div className={styles.authContainer}>
            {isLoggedIn ? (
              <>
                <Link 
                  to="/profile" 
                  className={styles.profileLink}
                  title="My Profile"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className={styles.profileIcon} role="img" aria-label="profile">👤</span>
                  <span className={styles.profileText}>Profile</span>
                </Link>
                <button
                  className={styles.logoutBtn}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                >
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link 
                to="/login" 
                className={styles.loginBtn}
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}