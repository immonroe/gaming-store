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
     
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/store">
            Store
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
