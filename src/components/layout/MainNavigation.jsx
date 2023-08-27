// MainNavigation.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './MainNavigation.module.css';

const MainNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Your Game Store Logo</div>
      <div className={`${styles.navItems} ${isMobileMenuOpen ? styles.open : ''}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
        </ul>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search for games" />
        </div>
        <div className={styles.cart}>
          <FaShoppingCart className={styles.cartIcon} />
          <span className={styles.cartCount}>0</span>
        </div>
      </div>
      <div className={styles.mobileToggle} onClick={toggleMobileMenu}>
        <div className={`${styles.bar} ${isMobileMenuOpen ? styles.open : ''}`} />
        <div className={`${styles.bar} ${isMobileMenuOpen ? styles.open : ''}`} />
        <div className={`${styles.bar} ${isMobileMenuOpen ? styles.open : ''}`} />
      </div>
    </nav>
  );
};

export default MainNavigation;
