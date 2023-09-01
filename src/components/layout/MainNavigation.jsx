import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { IoGameControllerOutline } from 'react-icons/io5';
import { ImSearch } from "react-icons/im";
import { Link } from 'react-router-dom';
import styles from '../layout/MainNavigation.module.css'
import SearchBar from '../SearchBar';


const MainNavigation = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navLeft}>
                <div className={styles.logo}>
                    <IoGameControllerOutline />
                    <span>Game Store</span>
                </div>
                <SearchBar ClassName={styles.SearchBar}/>
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