import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineSearch, AiFillGithub } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import styles from './MainNavigation.module.css';

const MainNavigation = () => {
  return (

    

    <nav className={styles.nav}>

    {/* <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/store">Store</Link>
        </li>
    </ul> */}

      <div className={styles.navLeft}>
        <div className={styles.logo}>Game Store</div>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search for games..." />
          <button className={styles.searchIcon}>
          <AiOutlineSearch />
          </button>
        </div>
      </div>
      <div className={styles.navRight}>
        <AiFillGithub />
        <a href="https://github.com/yourusername" className={styles.githubLink}>
          <FaShoppingCart className={styles.cartIcon} />
        </a>
      </div>
    </nav>
  );
};

export default MainNavigation;
