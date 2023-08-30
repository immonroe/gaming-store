import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { IoGameControllerOutline } from 'react-icons/io5';
import { ImSearch } from "react-icons/im";
import { Link } from 'react-router-dom';
import styles from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navLeft}>
                <div className={styles.logo}>
                    <IoGameControllerOutline />
                    <span>Game Store</span>
                </div>
                <form className={styles.searchBar}>
                    <input type="text" placeholder="Search for games..." />
                    <button className={styles.searchIcon}>
                        <ImSearch size={'1.125rem'} />
                    </button>
                </form>
            </div>
            <div className={styles.navRight}>
                <a href="https://github.com/yourusername" className={styles.githubLink}>
                    <AiFillGithub size={'1.5rem'} />
                </a>
                <FaShoppingCart size={'1.5rem'} className={styles.cartIcon} />
            </div>
        </nav>
    );
};

export default MainNavigation;

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