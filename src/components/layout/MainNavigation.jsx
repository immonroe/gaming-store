// import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { IoGameControllerOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import styles from '../layout/MainNavigation.module.css'
import SearchBar from '../SearchBar';


const MainNavigation = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navLeft}>
            <Link to="/" className={styles.logoLink}>
                <div className={styles.logo}>
                    <IoGameControllerOutline />
                    <span>Game Store</span>
                </div>
            </Link>
                <SearchBar ClassName={styles.SearchBar}/>
            </div>
            <div className={styles.navRight}>
                <a href="https://github.com/immonroe" className={styles.githubLink}>
                    <AiFillGithub size={'1.5rem'} />
                </a>
                <Link to="Cart">
                    <FaShoppingCart size={'1.5rem'} className={styles.cartIcon} />
                </Link>
            </div>
        </nav>
    );
};

export default MainNavigation;