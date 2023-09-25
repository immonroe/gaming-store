// import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { IoGameControllerOutline } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';
import styles from '../layout/Navbar.module.css'
import SearchBar from '../SearchBar';
import { Container, Nav, Navbar as NavbarBs} from "react-bootstrap"

const MainNavigation = () => {
    return (
        <NavbarBs className='bg-white shadow-sm mb-3'>
            <Container>
                <div>
                <Nav.Link to="/" as={NavLink}>
                    <div className={styles.logo}>
                        <IoGameControllerOutline />
                        <span>Game Store</span>
                    </div>
                </Nav.Link>
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
            </Container>
        </NavbarBs>
    );
};

export default MainNavigation;