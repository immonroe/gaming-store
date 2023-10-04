// import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// layouts
import MainNav from './components/layout/Navbar';

// pages
import Cart from './pages/Cart';
import Store from './pages/Store';
import StoreItem from './components/store/StoreItem';
import Wishlist from './pages/Wishlist';

function App() {
    return (
        <>
            <MainNav />
            <Container className='mb-4'>
                <Routes>
                    <Route path="/" element={<Store />} />
                    <Route path="/:id" element={<StoreItem />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="wishlist" element={<Wishlist />} />
                </Routes>
            </Container>
        </>
    )
}

export default App;
