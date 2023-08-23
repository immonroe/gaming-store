// MainNavigation.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MainNavigation.module.css';

const MainNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Your Logo</div>
      <div
        className={`${styles.mobileMenuIcon} ${
          isMobileMenuOpen ? styles.open : ''
        }`}
        onClick={toggleMobileMenu}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <ul className={`${styles.navItems} ${isMobileMenuOpen ? styles.open : ''}`}>
        <li>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
        </li>
        <li>
          <Link to="/store" className={styles.navLink}>
            Store
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
